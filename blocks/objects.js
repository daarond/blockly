/**
 * Created by daarond on 8/21/2015.
 */
'use strict';

goog.provide('Blockly.Blocks.Objects');

goog.require('Blockly.Blocks');

/**
 * create an empty object
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#aza6r2
 * @type {{init: Function}}
 */
Blockly.Blocks['objects_create_empty'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("empty object");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(135);
        this.setTooltip('create an empty object');
    }
};


/**
 * set a property on an object
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#38rfqe
 * @type {{init: Function}}
 */
Blockly.Blocks['objects_set_property'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("set object")
            .appendField(new Blockly.FieldVariable("item"), "OBJECT");
        this.appendValueInput("PROPERTY")
            .setCheck("String")
            .appendField("property");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("=");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('set a property on an object');
    }
};


/**
 * get a property from an object
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nk5rc8
 * @type {{init: Function}}
 */
Blockly.Blocks['objects_get_property'] = {
    init: function() {
        this.appendValueInput("PATH")
            .setCheck("String")
            .appendField("get property");
        this.appendDummyInput()
            .appendField("from object")
            .appendField(new Blockly.FieldVariable("item"), "OBJECT");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(135);
        this.setTooltip('get a property from an object');
        this.setHelpUrl('http://www.example.com/');
    }
};


/**
 * map values from array to object properties
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2uhbcj
 * @type {{init: Function}}
 */
Blockly.Blocks['objects_map'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("in object")
            .appendField(new Blockly.FieldVariable("item"), "NAME");
        this.appendValueInput("NAMES")
            .setCheck("Array")
            .appendField("map properties");
        this.appendValueInput("VALUES")
            .setCheck("Array")
            .appendField("to values");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('map values from array to object properties');
        this.setHelpUrl('http://www.example.com/');
    }
};


/**
 * encode object to a string
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#v3h5so
 * @type {{init: Function}}
 */
Blockly.Blocks['objects_encode'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("encode object")
            .appendField(new Blockly.FieldVariable("item"), "NAME");
        this.appendDummyInput()
            .appendField("as")
            .appendField(new Blockly.FieldDropdown([["JSON", "JSON"], ["XML", "XML"]]), "ENCODETYPE");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(135);
        this.setTooltip('encode object to a string');
        this.setHelpUrl('http://www.example.com/');
    }
};

/**
 * decode object from a string
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#f8k378
 * @type {{init: Function}}
 */
Blockly.Blocks['objects_decode'] = {
    init: function() {
        this.appendValueInput("DATA")
            .appendField("decode");
        this.appendDummyInput()
            .appendField("of type")
            .appendField(new Blockly.FieldDropdown([["JSON", "JSON"], ["XML", "XML"]]), "ENCODING");
        this.appendDummyInput()
            .appendField("into object")
            .appendField(new Blockly.FieldVariable("item"), "OBJECT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};