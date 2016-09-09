'use strict';

goog.provide('Blockly.Blocks.Monitor');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.colour.HUE = 20;

Blockly.Blocks['monitor_notify'] = {
    init: function() {
        this.appendValueInput("message")
            .setCheck("String")
            .appendField("notify me, message");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.colour.HUE);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['monitor_log_message'] = {
    init: function() {
        this.appendValueInput("message")
            .setCheck("String")
            .appendField("save log message");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.colour.HUE);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['monitor_result'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("write")
            .appendField(new Blockly.FieldDropdown([["success", "SUCCESS"], ["failure", "FAILURE"]]), "RESULT")
            .appendField("result");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};