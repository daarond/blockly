/**
 * Created by daarond on 11/4/2016
 */
'use strict';

goog.provide('Blockly.Blocks.Database');

goog.require('Blockly.Blocks');

Blockly.Blocks['database_select_row'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("read row in table ")
            .appendField(new Blockly.FieldTextInput("table"), "TABLE");
        this.appendDummyInput()
            .appendField("into")
            .appendField(new Blockly.FieldVariable("item"), "VARIABLE");
        this.appendValueInput("WHERE")
            .setCheck(["ConditionList", "KeyValue"])
            .appendField("where");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(190);
        this.setTooltip('retrieves information from a database');
        this.setHelpUrl('http://www.example.com/');
    }
};


Blockly.Blocks['database_update_row'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("update single row in table")
            .appendField(new Blockly.FieldTextInput("table"), "TABLE");
        this.appendValueInput("SET")
            .setCheck('String')
            .appendField("set");
        this.appendValueInput("WHERE")
            .setCheck(null)
            .appendField("where id is");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(190);
        this.setTooltip('updates information in a database');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['database_delete_row'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("delete from table")
            .appendField(new Blockly.FieldTextInput("table"), "TABLE");
        this.appendValueInput("WHERE")
            .setCheck('String')
            .appendField("where id is");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(190);
        this.setTooltip('deletes information in a database');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['database_insert_row'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("insert into table")
            .appendField(new Blockly.FieldTextInput("table"), "TABLE");
        this.appendValueInput("NAME")
            .setCheck("object")
            .appendField("object");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(190);
        this.setTooltip('adds information to a database');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['database_key_value'] = {
    /**
     * Block for comparison operator.
     * @this Blockly.Block
     */
    init: function() {
        var rtlOperators = [
            ['=', 'EQ'],
            ['\u2260', 'NEQ'],
            ['\u200F<\u200F', 'LT'],
            ['\u200F\u2264\u200F', 'LTE'],
            ['\u200F>\u200F', 'GT'],
            ['\u200F\u2265\u200F', 'GTE'],
            ['in','IN'],
            ['not in','NOT IN'],
            ['like','LIKE']
        ];
        var ltrOperators = [
            ['=', 'EQ'],
            ['\u2260', 'NEQ'],
            ['<', 'LT'],
            ['\u2264', 'LTE'],
            ['>', 'GT'],
            ['\u2265', 'GTE'],
            ['in','IN'],
            ['not in','NOT IN'],
            ['like','LIKE']
        ];
        var OPERATORS = this.RTL ? rtlOperators : ltrOperators;
        this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
        this.setColour(190);
        this.setOutput(true, 'KeyValue');
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("field"), "FIELD")
            .appendField(" ");
        this.appendValueInput('VALUE')
            .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP')
            .appendField(" ");
        this.setInputsInline(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue('OP');
            var TOOLTIPS = {
                'EQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
                'NEQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
                'LT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
                'LTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
                'GT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
                'GTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE,
                'LIKE': 'Returns true if the field matches the expression',
                'IN': 'Returns true if the field value is in the list',
                'NOT IN': 'Returns true if the field value is not in the list'
            };
            return TOOLTIPS[op];
        });
        this.prevBlocks_ = [null, null];
    },
    /**
     * Called whenever anything on the workspace changes.
     * Prevent mismatched types from being compared.
     * @param {!Blockly.Events.Abstract} e Change event.
     * @this Blockly.Block
     */
    onchange: function(e) {
        var blockA = this.getInputTargetBlock('A');
        var blockB = this.getInputTargetBlock('B');
        // Disconnect blocks that existed prior to this change if they don't match.
        if (blockA && blockB &&
            !blockA.outputConnection.checkType_(blockB.outputConnection)) {
            // Mismatch between two inputs.  Disconnect previous and bump it away.
            // Ensure that any disconnections are grouped with the causing event.
            Blockly.Events.setGroup(e.group);
            for (var i = 0; i < this.prevBlocks_.length; i++) {
                var block = this.prevBlocks_[i];
                if (block === blockA || block === blockB) {
                    block.unplug();
                    block.bumpNeighbours_();
                }
            }
            Blockly.Events.setGroup(false);
        }
        this.prevBlocks_[0] = blockA;
        this.prevBlocks_[1] = blockB;
    }
};

Blockly.Blocks['database_condition_list'] = {
    /**
     * Block for creating a string made up of any number of elements of any type.
     * @this Blockly.Block
     */
    init: function() {
        this.setHelpUrl(Blockly.Msg.TEXT_JOIN_HELPURL);
        this.setColour(190);
        this.itemCount_ = 2;
        this.updateShape_();
        this.setOutput(true, 'ConditionList');
        this.setMutator(new Blockly.Mutator(['text_create_join_item']));
        this.setTooltip('Joins a list of conditions together');
    },
    /**
     * Create XML to represent number of text inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    /**
     * Parse XML to restore the text inputs.
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
        var containerBlock = workspace.newBlock('text_create_join_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('text_create_join_item');
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
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
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
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY').appendField('no conditions matched')
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i)
                    .setCheck(["ConditionList", "KeyValue"]);
                if (i == 0) {
                    input.appendField(new Blockly.FieldDropdown([["all conditions", "AND"], ["at least one condition", "OR"]]), "CONJUNCTION")
                        .appendField('match');
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    },
};


Blockly.Blocks['database_select_value'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("read ")
            .appendField(new Blockly.FieldTextInput("field"), "FIELD");
        this.appendDummyInput()
            .appendField("in table")
            .appendField(new Blockly.FieldTextInput("default"), "TABLE");
        this.appendValueInput("WHERE")
            .setCheck(["ConditionList", "KeyValue"])
            .appendField("where");
        this.setOutput(true, null);
        this.setColour(190);
        this.setTooltip('selects a single value from the database');
        this.setHelpUrl('');
    }
};


Blockly.Blocks['database_update_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("update")
            .appendField(new Blockly.FieldTextInput("field"), "FIELD");
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("=");
        this.appendDummyInput()
            .appendField("in table")
            .appendField(new Blockly.FieldTextInput("default"), "TABLE");
        this.appendValueInput("WHERE")
            .setCheck(null)
            .appendField("where id is");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(190);
        this.setTooltip('');
    }
};