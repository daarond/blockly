/**
 * Created by daarond on 8/19/2015.
 */
'use strict';

goog.provide('Blockly.Blocks.Sms');

goog.require('Blockly.Blocks');

/**
 * Sends an sms message
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ket3po
 * @type {{init: Function}}
 */
Blockly.Blocks['sms_send'] = {
    init: function() {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(330);
        this.appendDummyInput()
            .appendField("Send SMS");
        this.appendValueInput("phone_number")
            .setCheck("String")
            .appendField("To Phone #");
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("With Text");
        this.setInputsInline(true);
        this.setPreviousStatement(true, "null");
        this.setNextStatement(true, "null");
        this.setTooltip('Send an SMS message');
    }
};

/**
 * Sends an sms message, waiting for a response
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#psvey7
 * @type {{init: Function}}
 */
Blockly.Blocks['sms_send_response'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Send SMS");
        this.appendValueInput("phone_number")
            .setCheck("String")
            .appendField("To Phone #");
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("With Text");
        this.appendDummyInput()
            .appendField("Wait For Response");
        this.setInputsInline(false);
        this.setOutput(true, "String");
        this.setColour(330);
        this.setTooltip('Send an SMS message and wait for a response');
    }
};
