/**
 * Created by daaron on 3/20/2017.
 */

'use strict';

goog.provide('Blockly.Blocks.Redis');

goog.require('Blockly.Blocks');

Blockly.Blocks['redis_append'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("append redis value");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("to key");
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
        this.appendDummyInput()
            .appendField("by")
            .appendField(new Blockly.FieldDropdown([["integer","integer"], ["float","float"]]), "TYPE");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("value");
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
        this.appendDummyInput()
            .appendField("by")
            .appendField(new Blockly.FieldDropdown([["integer","integer"], ["float","float"]]), "TYPE");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("value");
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
            .appendField("get redis key array values");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

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

Blockly.Blocks['redis_keys'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("get redis keys by pattern");
        this.setOutput(true, "Array");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_set_expire_sec'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("set redis key");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("to value");
        this.appendValueInput("EXPIRATION")
            .setCheck(null)
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
            .appendField("get redis list key");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_get_list_index'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("in redis list key");
        this.appendValueInput("INDEX")
            .setCheck("String")
            .appendField("get")
            .appendField(new Blockly.FieldDropdown([["#","#"], ["first","first"], ["last","last"]]), "listpoint");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['redis_set_list_index'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("in redis list key");
        this.appendValueInput("INDEX")
            .setCheck("String")
            .appendField(new Blockly.FieldDropdown([["set","set"], ["insert","insert"]]), "settype")
            .appendField(new Blockly.FieldDropdown([["#","#"], ["first","first"], ["last","last"]]), "listpoint");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("as");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
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