/**
 * Created by daarond on 8/20/2015.
 */
'use strict';

goog.provide('Blockly.Blocks.Http');

goog.require('Blockly.Blocks');

/**
 * Retrieves by HTTP GET
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nvnwma
 * @type {{init: Function}}
 */
Blockly.Blocks['http_get'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Get");
        this.appendValueInput("url")
            .setCheck("String")
            .appendField("URL");
        this.appendDummyInput()
            .appendField("into")
            .appendField(new Blockly.FieldVariable("item"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('Retrieves by HTTP GET');
    }
};

/**
 * Retrieves by HTTP GET
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#7suruq
 * @type {{init: Function}}
 */
Blockly.Blocks['http_delete'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Delete");
        this.appendValueInput("url")
            .setCheck("String")
            .appendField("URL");
        this.appendDummyInput()
            .appendField("into")
            .appendField(new Blockly.FieldVariable("item"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('Performs an HTTP DELETE');
    }
};


/**
 * Performs a HTTP POST
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#8ohq8p
 * @type {{init: Function}}
 */
Blockly.Blocks['http_post'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Post");
        this.appendValueInput("url")
            .setCheck("String")
            .appendField("URL");
        this.appendValueInput("data")
            .setCheck("Array")
            .appendField("Data");
        this.appendDummyInput()
            .appendField("into")
            .appendField(new Blockly.FieldVariable("item"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('Performs a HTTP POST');
    }
};


/**
 * Performs a HTTP PUT
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vmdt4b
 * @type {{init: Function}}
 */
Blockly.Blocks['http_put'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Put");
        this.appendValueInput("url")
            .setCheck("String")
            .appendField("URL");
        this.appendValueInput("data")
            .setCheck("Array")
            .appendField("Data");
        this.appendDummyInput()
            .appendField("into")
            .appendField(new Blockly.FieldVariable("item"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('Performs a HTTP PUT');
    }
};