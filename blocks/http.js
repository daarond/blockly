/**
 * Created by daarond on 8/20/2015.
 */
'use strict';

goog.provide('Blockly.Blocks.Http');

goog.require('Blockly.Blocks');


/**
 * Performs a HTTP retrieval
 * @type {{init: Function}}
 */
Blockly.Blocks['internet_http'] = {
    init: function () {
        var METHODS =
            [["GET", "GET"], ["POST", "POST"], ["PUT", "PUT"], ["DELETE", "DELETE"]];
        this.setColour(210);
        var dropdown = new Blockly.FieldDropdown(METHODS, function(option) {
            var dataInput = (option == 'POST' || option == 'PUT');
            this.sourceBlock_.updateDataShape_(dataInput);
        });
        this.appendDummyInput()
            .appendField("HTTP")
            .appendField(dropdown, 'METHOD');
        this.appendValueInput("URL")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("from URL");
        var headerCheck = new Blockly.FieldCheckbox("FALSE", function(value){
            this.sourceBlock_.updateHeaderShape_(value);
        });
        this.appendDummyInput()
            .appendField(headerCheck, "INCLUDE_HEADERS")
            .appendField("Extra Headers");
        this.setOutput(true, 'String');
        this.setInputsInline(false);
    },
    /**
     * Create XML to represent whether the 'dataInput' should be present.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
        var container = document.createElement('mutation');
        var dataInput = (this.getFieldValue('METHOD') == 'POST' || this.getFieldValue('METHOD') == 'PUT');
        container.setAttribute('data_input', dataInput);
        container.setAttribute('header_input', this.getFieldValue('INCLUDE_HEADERS'));
        return container;
    },
    /**
     * Parse XML to restore the 'divisorInput'.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        var dataInput = (xmlElement.getAttribute('data_input') == 'true');
        this.updateDataShape_(dataInput);
        var headerInput = (xmlElement.getAttribute('header_input') == 'true');
        this.updateHeaderShape_(headerInput);
    },
    /**
     * Modify this block to have (or not have) an input for 'with data'
     * @param {boolean} dataInput True if this block has a data input.
     * @private
     * @this Blockly.Block
     */
    updateDataShape_: function(dataInput) {
        // Add or remove a Value Input.
        var dataInputExists = this.getInput('DATA');
        if (dataInput && !dataInputExists) {
            this.appendValueInput('DATA')
                .setCheck('data_list')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("with data");
        } else if (!dataInput && dataInputExists) {
            this.removeInput('DATA');
        }
    },
    /**
     * Modify this block to have (or not have) an input for headers
     * @param {boolean} headerInput True if this block has a header input.
     * @private
     * @this Blockly.Block
     */
    updateHeaderShape_: function(headerInput) {
        var headerInputExists = this.getInput('HEADERS');
        if (headerInput && !headerInputExists) {
            this.appendValueInput('HEADERS')
                .setCheck('data_list')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("with headers");
            var dataInput = this.getInput('DATA');
            if (dataInput) {
                this.moveInputBefore('HEADERS', 'DATA');
            }
        } else if (!headerInput && headerInputExists) {
            this.removeInput('HEADERS');
        }
    }
};



Blockly.Blocks['list_data_item'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("set");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("=");
        this.setInputsInline(true);
        this.setOutput(true, "list_data_item");
        this.setColour(Blockly.Blocks.texts.HUE);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


Blockly.Blocks['list_name_value'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this Blockly.Block
     */
    init: function() {
        this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
        this.setColour(Blockly.Blocks.lists.HUE);
        this.itemCount_ = 3;
        this.updateShape_();
        this.setOutput(true, 'Array');
        this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function(workspace) {
        var containerBlock =
            Blockly.Block.obtain(workspace, 'lists_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = Blockly.Block.obtain(workspace, 'lists_create_with_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            if (connections[i]) {
                this.getInput('ADD' + i).connection.connect(connections[i]);
            }
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function() {
        // Delete everything.
        if (this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else {
            var i = 0;
            while (this.getInput('ADD' + i)) {
                this.removeInput('ADD' + i);
                i++;
            }
        }
        // Rebuild block.
        if (this.itemCount_ == 0) {
            this.appendDummyInput('EMPTY')
                .appendField('create empty data list');
        } else {
            for (var i = 0; i < this.itemCount_; i++) {
                var input = this.appendValueInput('ADD' + i)
                    .setCheck('list_data_item');
                if (i == 0) {
                    input.appendField('create data list with');
                }
            }
        }
    }
};