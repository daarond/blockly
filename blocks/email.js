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
Blockly.Blocks['email_send'] = {
    init: function() {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(75);
        this.appendDummyInput()
            .appendField("Send Email");
        this.appendValueInput("email_receiver")
            .setCheck("String")
            .appendField("To Address");
        this.appendValueInput("email_subject")
            .setCheck("String")
            .appendField("Subject");
        this.appendValueInput("email_body")
            .setCheck("String")
            .appendField("Message");
        this.setPreviousStatement(true, "null");
        this.setNextStatement(true, "null");
        this.setTooltip('Send an email');
    }
};
