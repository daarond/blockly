/**
 * Created by daarond on 4/2/2019.
 */
'use strict';

goog.provide('Blockly.Blocks.SmsGrouper');

goog.require('Blockly.Blocks');

Blockly.Blocks.SmsGrouper.SmsContactFields = [["First Name","FirstName"], ["Last Name","LastName"], ["Zip","Zip"], ["Email","Email"], ["Phone","Phone"]];

Blockly.Blocks['grouper_state'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("State")
			.appendField(new Blockly.FieldTextInput("1"), "State");
		this.appendDummyInput()
			.appendField("Prompt");
		this.appendStatementInput("Prompt")
			.setCheck(null);
		this.appendDummyInput()
			.appendField("Response");
		this.appendStatementInput("Response")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['grouper_sms_send'] = {
	init: function() {
		this.appendValueInput("Message")
			.setCheck(null)
			.appendField("Send SMS");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['grouper_contact_set'] = {
	init: function() {
		this.appendValueInput("ContactValue")
			.setCheck(null)
			.appendField("Set")
			.appendField(new Blockly.FieldDropdown(SmsContactFields), "ContactField")
			.appendField("to");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['grouper_state_set'] = {
	init: function() {
		this.appendValueInput("State")
			.setCheck(null)
			.appendField("Set next question to");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['grouper_send_error'] = {
	init: function() {
		this.appendValueInput("ErrorMessage")
			.setCheck(null)
			.appendField("Send error message");
		this.appendDummyInput()
			.appendField("and stop after")
			.appendField(new Blockly.FieldNumber(5, 1, 10), "ErrorLimit")
			.appendField("errors");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['grouper_start_end'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("State")
			.appendField(new Blockly.FieldTextInput("Welcome"), "State");
		this.appendStatementInput("DO")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['grouper_queue_zip_job'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("queue zip lookup");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks.SmsGrouper.TagList = {};

Blockly.Blocks['grouper_add_tag'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Add tag")
			.appendField(new Blockly.FieldDropdown(Blockly.Blocks.SmsGrouper.TagList), "TagId");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['grouper_remove_tag'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Remove tag")
			.appendField(new Blockly.FieldDropdown(Blockly.Blocks.SmsGrouper.TagList), "TagId");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(60);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};