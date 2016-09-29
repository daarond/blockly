/**
 * Created by daarond on 8/19/2015.
 */
'use strict';

goog.provide('Blockly.Blocks.Email');

goog.require('Blockly.Blocks');

/**
 * Sends an email message
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#wz4qy9
 * @type {{init: Function}}
 */
Blockly.Blocks['internet_email_send'] = {
    init: function() {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(75);
        this.appendDummyInput()
            .appendField("Send Email");
        this.appendValueInput("RECEIVER")
            .setCheck("String")
            .appendField("To Address");
        this.appendValueInput("SUBJECT")
            .setCheck("String")
            .appendField("Subject");
        this.appendValueInput("MESSAGE_BODY")
            .setCheck("String")
            .appendField("Message");
        this.setPreviousStatement(true, "null");
        this.setNextStatement(true, "null");
        this.setTooltip('Send an email');
        this.setHelpUrl('http://www.dragtocode.com/docs/internet_email_send.html');
    }
};
