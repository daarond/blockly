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
};

/**
 * List of workspaces in the list
 * @type {array} list of objects
 */
Blockly.WorkspaceList.prototype.workspaces = [];

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
        blocks = blocks.concat(this.workspaces[i].workspace.getAllBlocks());
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
    tab_area.style.display = 'inline-block';
    tab_area.id = 'tab_area';

    var tab_list = document.createElement('ul');
    tab_list.id = 'tab_list';
    tab_area.appendChild(tab_list);
    target_element.appendChild(tab_area);

    var editor_area = document.createElement('div');
    editor_area.id = 'editor_area';
    target_element.appendChild(editor_area);

    var xml = Blockly.Xml.textToDom(text);

    // filter out the procedures
    var procedures = xml.getElementsByTagName("block");
    for(var i = 0; i < procedures.length; i++) {
        var item = procedures[i];
        if (item==undefined) return false;
        var blocktype = item.getAttribute('type');
        if (item.parentNode.tagName == 'xml') {
            // top-level procedure block, push an object into workspace_xml

            var isProcedure = (blocktype == 'procedures_defreturn'
            || blocktype == 'procedures_noreturn'
            || blocktype == 'procedures_ifreturn');

            var id = "ctrl"+(++idcounter);

            var namefield = 'Main Workspace';
            if (isProcedure) {
                namefield = item.getElementsByTagName("field")[0].innerText;
            }

            var item_xml = '<xml xmlns="http://www.w3.org/1999/xhtml">'+item.outerHTML+'</xml>';
            var dom = Blockly.Xml.textToDom(item_xml);

            // add a div to the target
            var workspace_div = document.createElement('div');
            workspace_div.id = id;
            editor_area.appendChild(workspace_div);

            var tab_item = document.createElement('li');
            tab_item.innerHTML = namefield;
            tab_item.onclick = this.tabSelected;
            if (isProcedure) {
                tab_list.appendChild(tab_item);
            } else {
                tab_list.insertBefore(tab_item, tab_list.firstChild);
            }

            // inject the visible workspace
            var ws = Blockly.inject(workspace_div, this.options);

            // push it to the local list
            var listitem = {
                id:id,
                name:namefield,
                isactive:false,
                tabitem: tab_item,
                workspacediv: workspace_div,
                workspace:ws,
                xml: item_xml};

            tab_item.listitem = listitem;
            tab_item.workspaces = this.workspaces;

            if (namefield == 'Main Workspace'){
                listitem.isactive = true;
                listitem.tabitem.classList.add('active');
            }

            this.workspaces.push(listitem);

            Blockly.Xml.domToWorkspace(ws, dom);
        }

        /*
        // this will not show the workspace at all
        if (isProcedure){
            workspace_div.style.display = 'none';
        }
        */
    }

    // append the "add" tab
    tab_item = document.createElement('li');
    tab_item.innerHTML = 'Add';
    tab_item.onclick = this.addWorkspace;
    tab_list.appendChild(tab_item);

    // todo: have to hide them on a delay... find out why
    setTimeout(function(){
        var element = document.getElementById('tab_list');
        var workspaces = element.firstChild.workspaces;
        for(var i=0; i < workspaces.length-1; i++){
            workspaces[i].workspacediv.style.display = 'none';
        }
    }, 1);
};

Blockly.WorkspaceList.prototype.addWorkspace = function() {

};

Blockly.WorkspaceList.prototype.tabSelected = function() {
    for(var i=0; i < this.workspaces.length; i++){
        var ws = this.workspaces[i];
        if (ws.tabitem == this){
            if (!ws.isactive) {
                ws.tabitem.classList.add('active');
                ws.isactive = true;
                ws.workspacediv.style.display = 'block';
            }
        } else {
            ws.tabitem.classList.remove('active');
            ws.isactive = false;
            ws.workspacediv.style.display = 'none';
        }
    }
};