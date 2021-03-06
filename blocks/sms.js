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
Blockly.Blocks['internet_sms_send'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Send SMS");
        this.appendValueInput("phone_number")
            .setCheck("String")
            .appendField("To Phone #");
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("With Text");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Send an SMS message');
        this.setColour(30);
        this.setHelpUrl('http://www.dragtocode.com/docs/internet_sms_send.html');
    }
};

Blockly.Blocks['internet_sms_info'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("get incoming SMS data")
            .appendField(new Blockly.FieldDropdown([["from number","FROM"], ["to number","TO"], ["body","BODY"]]), "NAME");
        this.setOutput(true, null);
        this.setColour(30);
        this.setTooltip('get incoming SMS data');
        this.setHelpUrl('http://www.dragtocode.com/docs/internet_sms_send.html');
    }
};