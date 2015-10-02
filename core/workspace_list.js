/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Object representing a list of workspaces
 * @author daarond@gmail.com (Daaron Dwyer)
 */
'use strict';

goog.require('goog.math');

var idcounter = 1;

/**
 * Class for a workspace.  This is a data structure that contains blocks.
 * There is no UI, and can be created headlessly.
 * @param {Object} opt_options Dictionary of options.
 * @constructor
 */
Blockly.WorkspaceList = function(opt_options) {
    /**
     * @type {!Array.<!Blockly.Block>}
     * @private
     */
    this.topBlocks_ = [];
    this.options = opt_options || {};
    this.RTL = !!this.options.RTL;
    this.workspaces = [];
};

/**
 * Dispose of this workspace.
 * Unlink from all DOM elements to prevent memory leaks.
 */
Blockly.WorkspaceList.prototype.dispose = function() {
    this.clear();
};

/**
 * Dispose of all blocks in workspace.
 */
Blockly.WorkspaceList.prototype.clear = function() {
    while (this.workspaces.length) {
        this.workspaces[0].workspace.dispose();
    }
};

/**
 * Find all blocks in workspace.  No particular order.
 * @return {!Array.<!Blockly.Block>} Array of blocks.
 */
Blockly.WorkspaceList.prototype.getAllBlocks = function() {
    var blocks = [];
    for(var i = 0; i < this.workspaces.length; i++) {
        var wsblocks = this.workspaces[i].workspace.getTopBlocks();
        blocks = blocks.concat(wsblocks);
        for (var j = 0; j < wsblocks.length; j++) {
            blocks.concat(wsblocks[j].getChildren());
        }
    }
    return blocks;
};


/**
 * Modify the block tree on the existing toolbox.
 * @param {Node|string} tree DOM tree of blocks, or text representation of same.
 */
Blockly.WorkspaceList.prototype.updateToolbox = function(tree) {
    for(var i = 0; i < this.workspaces.length; i++) {
        this.workspaces[i].workspace.updateToolbox(tree);
    }
};



Blockly.WorkspaceList.prototype.injectWithText = function(target, text) {
    var target_element = document.getElementById(target);

    var tab_area = document.createElement('div');
    tab_area.id = 'tab_area';

    var tab_list = document.createElement('ul');
    tab_list.id = 'tab_list';
    tab_list.className = 'tabrow';
    tab_area.appendChild(tab_list);
    target_element.appendChild(tab_area);

    var editor_area = document.createElement('div');
    editor_area.id = 'editor_area';
    editor_area.style.height = '95%';
    target_element.appendChild(editor_area);

    // append the "add" tab
    var tab_item = document.createElement('li');
    tab_item.innerHTML = 'Add';
    tab_item.id = 'add_a_workspace';
    tab_item.onclick = this.addWorkspaceClick;
    tab_item.ws_list = this;
    tab_list.appendChild(tab_item);

    var xml = Blockly.Xml.textToDom(text);

    // filter out the procedures
    var procedures = xml.getElementsByTagName("block");
    for(var i = 0; i < procedures.length; i++) {
        var item = procedures[i];
        if (item==undefined) return false;
        var blocktype = item.getAttribute('type');
        if (item.parentNode.tagName == 'xml') {
            // top-level procedure block, push an object into workspace_xml
            var namefield = 'Main Workspace';

            var isProcedure = false;
            if (blocktype == 'procedures_defreturn'
                || blocktype == 'procedures_noreturn'
                || blocktype == 'procedures_ifreturn') {
                namefield = item.getElementsByTagName("field")[0].innerText;
                isProcedure = true;
            }

            item.removeAttribute('x');
            item.removeAttribute('y');

            // set the xml
            var item_xml = '<xml xmlns="http://www.w3.org/1999/xhtml">'+item.outerHTML+'</xml>';

            this.addWorkspace(namefield, isProcedure, item_xml);
        }
    }
};

Blockly.WorkspaceList.prototype.addWorkspace = function(tab_name, isProcedure, item_xml)
{
    var dom = Blockly.Xml.textToDom(item_xml);

    var editor_area = document.getElementById('editor_area');

    var id = "ctrl"+(++idcounter);

    // add a div to the target
    var workspace_div = document.createElement('div');
    workspace_div.id = id;
    workspace_div.className = 'blockly-workspace';
    workspace_div.style.height = '100%';
    editor_area.appendChild(workspace_div);
    if (isProcedure){
        workspace_div.style.display = 'none';
    }

    // create the tab
    var tab_item = document.createElement('li');
    tab_item.innerHTML = tab_name;
    tab_item.workspacediv = workspace_div;
    tab_item.onclick = this.tabSelected;
    tab_item.className = 'workspace-tab';
    if (isProcedure) {
        tab_list.insertBefore(tab_item, tab_list.lastChild);
    } else {
        tab_list.insertBefore(tab_item, tab_list.firstChild);
    }

    // inject the visible workspace
    var ws = Blockly.inject(workspace_div, this.options);
    ws.workspace_list = this;

    // push it to the local list
    var listitem = {
        id:id,
        name:tab_name,
        isactive:false,
        tabitem: tab_item,
        workspacediv: workspace_div,
        workspace:ws
    };

    tab_item.listitem = listitem;
    tab_item.workspaces = this.workspaces;
    workspace_div.tabitem = tab_item;
    workspace_div.workspaces = this.workspaces;


    if (tab_name == 'Main Workspace'){
        listitem.isactive = true;
        listitem.tabitem.classList.add('active');
    }

    this.workspaces.push(listitem);

    Blockly.Xml.domToWorkspace(ws, dom);

    return ws;
};

Blockly.WorkspaceList.prototype.addWorkspaceClick = function() {
    this.classList.add('active');

    var workspaces = document.getElementsByClassName('blockly-workspace');
    for(var i=0; i < workspaces.length; i++){
        workspaces[i].style.display = '';
    }

    var item_xml = '<xml xmlns="http://www.w3.org/1999/xhtml">'+
        '<block type="procedures_defreturn" inline="false">'+
        '</block>'+
        '</xml>';
    var ws = this.ws_list.addWorkspace('New Workspace', true, item_xml);

    Blockly.WorkspaceList.selectTab(workspaces[workspaces.length-1].tabitem);

    this.classList.remove('active');
};

Blockly.WorkspaceList.selectTab = function(selected){
    for(var i=0; i < selected.workspaces.length; i++){
        var ws = selected.workspaces[i];
        if (ws.tabitem == selected){
            if (!ws.isactive) {
                ws.tabitem.classList.add('active');
                ws.isactive = true;
                ws.workspacediv.style.display = 'block';
                ws.workspace.render();
            }
        } else {
            ws.tabitem.classList.remove('active');
            ws.isactive = false;
            ws.workspacediv.style.display = 'none';
        }
    }
};

Blockly.WorkspaceList.prototype.tabSelected = function() {
    Blockly.WorkspaceList.selectTab(this);
};