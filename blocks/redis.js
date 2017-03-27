/**
 * Created by daaron on 3/20/2017.
 */

'use strict';

goog.provide('Blockly.Blocks.Redis');

goog.require('Blockly.Blocks');

Blockly.Blocks['redis_append'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("to redis key");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("append");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_increment'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("increment redis key");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("by value");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_decrement'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("decrement redis key");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("by value");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_get'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("get value from redis key");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_set'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("set redis key");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("to value");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_get_values'] = {
    init: function() {
        this.appendValueInput("KEYS")
            .setCheck("Array")
            .appendField("get values for redis key list");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
/*
Blockly.Blocks['redis_set_values'] = {
    init: function() {
        this.appendValueInput("KEYS")
            .setCheck("Array")
            .appendField("set redis key array");
        this.appendValueInput("VALUES")
            .setCheck("Array")
            .appendField("to value array");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
*/
Blockly.Blocks['redis_set_expire_sec'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("set redis key");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("to value");
        this.appendValueInput("EXPIRATION")
            .setCheck("Number")
            .appendField(", expire in");
        this.appendDummyInput()
            .appendField("seconds");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_set_expire_date'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("set redis key");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("to value");
        this.appendValueInput("EXPIRATION")
            .setCheck("datetime")
            .appendField(", expire on");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_delete'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("delete redis key");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_exists'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("check redis key exists");
        this.setOutput(true, "Boolean");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_get_list'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("get redis key as list");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_set_list'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("set redis list key");
        this.appendValueInput("VALUE")
            .setCheck("Array")
            .appendField("to value list");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};


Blockly.Blocks['redis_get_list_index'] = {
    /**
     * Block for getting element at index.
     * @this Blockly.Block
     */
    init: function() {
        var MODE =
            [[Blockly.Msg.LISTS_GET_INDEX_GET, 'GET'],
                [Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE, 'GET_REMOVE'],
                [Blockly.Msg.LISTS_GET_INDEX_REMOVE, 'REMOVE']];
        this.WHERE_OPTIONS =
            [[Blockly.Msg.LISTS_GET_INDEX_FROM_START, 'FROM_START'],
                [Blockly.Msg.LISTS_GET_INDEX_FROM_END, 'FROM_END'],
                [Blockly.Msg.LISTS_GET_INDEX_FIRST, 'FIRST'],
                [Blockly.Msg.LISTS_GET_INDEX_LAST, 'LAST'],
                [Blockly.Msg.LISTS_GET_INDEX_RANDOM, 'RANDOM']];
        this.setHelpUrl('');
        this.setColour(230);
        var modeMenu = new Blockly.FieldDropdown(MODE, function(value) {
            var isStatement = (value == 'REMOVE');
            this.sourceBlock_.updateStatement_(isStatement);
        });
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('in redis list key');
        this.appendDummyInput()
            .appendField(modeMenu, 'MODE')
            .appendField('', 'SPACE');
        this.appendDummyInput('AT');
        if (Blockly.Msg.LISTS_GET_INDEX_TAIL) {
            this.appendDummyInput('TAIL')
                .appendField(Blockly.Msg.LISTS_GET_INDEX_TAIL);
        }
        this.setInputsInline(true);
        this.setOutput(true);
        this.updateAt_(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('MODE');
            var where = thisBlock.getFieldValue('WHERE');
            var tooltip = '';
            switch (mode + ' ' + where) {
                case 'GET FROM_START':
                case 'GET FROM_END':
                    tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
                    break;
                case 'GET FIRST':
                    tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
                    break;
                case 'GET LAST':
                    tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
                    break;
                case 'GET RANDOM':
                    tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
                    break;
                case 'GET_REMOVE FROM_START':
                case 'GET_REMOVE FROM_END':
                    tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
                    break;
                case 'GET_REMOVE FIRST':
                    tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
                    break;
                case 'GET_REMOVE LAST':
                    tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
                    break;
                case 'GET_REMOVE RANDOM':
                    tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
                    break;
                case 'REMOVE FROM_START':
                case 'REMOVE FROM_END':
                    tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
                    break;
                case 'REMOVE FIRST':
                    tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
                    break;
                case 'REMOVE LAST':
                    tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
                    break;
                case 'REMOVE RANDOM':
                    tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;
                    break;
            }
            if (where == 'FROM_START' || where == 'FROM_END') {
                tooltip += '  ' + Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP
                        .replace('%1', Blockly.Blocks.ONE_BASED_INDEXING ? '#1' : '#0');
            }
            return tooltip;
        });
    },
    /**
     * Create XML to represent whether the block is a statement or a value.
     * Also represent whether there is an 'AT' input.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
        var container = document.createElement('mutation');
        var isStatement = !this.outputConnection;
        container.setAttribute('statement', isStatement);
        var isAt = this.getInput('AT').type == Blockly.INPUT_VALUE;
        container.setAttribute('at', isAt);
        return container;
    },
    /**
     * Parse XML to restore the 'AT' input.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        // Note: Until January 2013 this block did not have mutations,
        // so 'statement' defaults to false and 'at' defaults to true.
        var isStatement = (xmlElement.getAttribute('statement') == 'true');
        this.updateStatement_(isStatement);
        var isAt = (xmlElement.getAttribute('at') != 'false');
        this.updateAt_(isAt);
    },
    /**
     * Switch between a value block and a statement block.
     * @param {boolean} newStatement True if the block should be a statement.
     *     False if the block should be a value.
     * @private
     * @this Blockly.Block
     */
    updateStatement_: function(newStatement) {
        var oldStatement = !this.outputConnection;
        if (newStatement != oldStatement) {
            this.unplug(true, true);
            if (newStatement) {
                this.setOutput(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
            } else {
                this.setPreviousStatement(false);
                this.setNextStatement(false);
                this.setOutput(true);
            }
        }
    },
    /**
     * Create or delete an input for the numeric index.
     * @param {boolean} isAt True if the input should exist.
     * @private
     * @this Blockly.Block
     */
    updateAt_: function(isAt) {
        // Destroy old 'AT' and 'ORDINAL' inputs.
        this.removeInput('AT');
        this.removeInput('ORDINAL', true);
        // Create either a value 'AT' input or a dummy input.
        if (isAt) {
            this.appendValueInput('AT').setCheck('Number');
            if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
                this.appendDummyInput('ORDINAL')
                    .appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
            }
        } else {
            this.appendDummyInput('AT');
        }
        var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(value) {
            var newAt = (value == 'FROM_START') || (value == 'FROM_END');
            // The 'isAt' variable is available due to this function being a closure.
            if (newAt != isAt) {
                var block = this.sourceBlock_;
                block.updateAt_(newAt);
                // This menu has been destroyed and replaced.  Update the replacement.
                block.setFieldValue(value, 'WHERE');
                return null;
            }
            return undefined;
        });
        this.getInput('AT').appendField(menu, 'WHERE');
        if (Blockly.Msg.LISTS_GET_INDEX_TAIL) {
            this.moveInputBefore('TAIL', null);
        }
    }
};

Blockly.Blocks['redis_set_list_index'] = {
    /**
     * Block for setting the element at index.
     * @this Blockly.Block
     */
    init: function() {
        var MODE =
            [[Blockly.Msg.LISTS_SET_INDEX_SET, 'SET'],
                [Blockly.Msg.LISTS_SET_INDEX_INSERT, 'INSERT']];
        this.WHERE_OPTIONS =
            [[Blockly.Msg.LISTS_GET_INDEX_FROM_START, 'FROM_START'],
                [Blockly.Msg.LISTS_GET_INDEX_FROM_END, 'FROM_END'],
                [Blockly.Msg.LISTS_GET_INDEX_FIRST, 'FIRST'],
                [Blockly.Msg.LISTS_GET_INDEX_LAST, 'LAST'],
                [Blockly.Msg.LISTS_GET_INDEX_RANDOM, 'RANDOM']];
        this.setHelpUrl(Blockly.Msg.LISTS_SET_INDEX_HELPURL);
        this.setColour(230);
        this.appendValueInput('LIST')
            .setCheck('String')
            .appendField('in redis list');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(MODE), 'MODE')
            .appendField('', 'SPACE');
        this.appendDummyInput('AT');
        this.appendValueInput('TO')
            .appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_TO);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LISTS_SET_INDEX_TOOLTIP);
        this.updateAt_(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('MODE');
            var where = thisBlock.getFieldValue('WHERE');
            var tooltip = '';
            switch (mode + ' ' + where) {
                case 'SET FROM_START':
                case 'SET FROM_END':
                    tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
                    break;
                case 'SET FIRST':
                    tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
                    break;
                case 'SET LAST':
                    tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
                    break;
                case 'SET RANDOM':
                    tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
                    break;
                case 'INSERT FROM_START':
                case 'INSERT FROM_END':
                    tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
                    break;
                case 'INSERT FIRST':
                    tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
                    break;
                case 'INSERT LAST':
                    tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
                    break;
                case 'INSERT RANDOM':
                    tooltip = Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM;
                    break;
            }
            if (where == 'FROM_START' || where == 'FROM_END') {
                tooltip += '  ' + Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP
                        .replace('%1', Blockly.Blocks.ONE_BASED_INDEXING ? '#1' : '#0');
            }
            return tooltip;
        });
    },
    /**
     * Create XML to represent whether there is an 'AT' input.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
        var container = document.createElement('mutation');
        var isAt = this.getInput('AT').type == Blockly.INPUT_VALUE;
        container.setAttribute('at', isAt);
        return container;
    },
    /**
     * Parse XML to restore the 'AT' input.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        // Note: Until January 2013 this block did not have mutations,
        // so 'at' defaults to true.
        var isAt = (xmlElement.getAttribute('at') != 'false');
        this.updateAt_(isAt);
    },
    /**
     * Create or delete an input for the numeric index.
     * @param {boolean} isAt True if the input should exist.
     * @private
     * @this Blockly.Block
     */
    updateAt_: function(isAt) {
        // Destroy old 'AT' and 'ORDINAL' input.
        this.removeInput('AT');
        this.removeInput('ORDINAL', true);
        // Create either a value 'AT' input or a dummy input.
        if (isAt) {
            this.appendValueInput('AT').setCheck('Number');
            if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
                this.appendDummyInput('ORDINAL')
                    .appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
            }
        } else {
            this.appendDummyInput('AT');
        }
        var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(value) {
            var newAt = (value == 'FROM_START') || (value == 'FROM_END');
            // The 'isAt' variable is available due to this function being a closure.
            if (newAt != isAt) {
                var block = this.sourceBlock_;
                block.updateAt_(newAt);
                // This menu has been destroyed and replaced.  Update the replacement.
                block.setFieldValue(value, 'WHERE');
                return null;
            }
            return undefined;
        });
        this.moveInputBefore('AT', 'TO');
        if (this.getInput('ORDINAL')) {
            this.moveInputBefore('ORDINAL', 'TO');
        }

        this.getInput('AT').appendField(menu, 'WHERE');
    }
};

Blockly.Blocks['redis_get_list_length'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("get redis list key length");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};