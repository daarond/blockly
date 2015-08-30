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
        this.appendValueInput("OBJECT")
            .setCheck("object")
            .appendField("set object");
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("property");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("to value");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('set a property on an object');
    }
};


/**
 * convert string to number
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#8phonx
 * @type {{init: Function}}
 */
Blockly.Blocks['object_convert_number'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck("String")
            .appendField("convert to number");
        this.setOutput(true, "Number");
        this.setColour(135);
        this.setTooltip('convert string to number');
    }
};


/**
 * get a property from an object
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xsifac
 * @type {{init: Function}}
 */
Blockly.Blocks['objects_get_property'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("get property");
        this.appendValueInput("OBJECT")
            .setCheck("object")
            .appendField("from object");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(135);
        this.setTooltip('get a property from an object');
    }
};


/**
 * convert properties to named list
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gkxhas
 * @type {{init: Function}}
 */
Blockly.Blocks['objects_convert_list'] = {
    init: function() {
        this.appendValueInput("OBJECT")
            .setCheck("object")
            .appendField("convert to list");
        this.setOutput(true, "Array");
        this.setColour(135);
        this.setTooltip('convert properties to named list');
    }
};


/**
 * convert named list to object properties
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#m44onz
 * @type {{init: Function}}
 */
Blockly.Blocks['objects_convert_object'] = {
    init: function() {
        this.appendValueInput("OBJECT")
            .setCheck("Array")
            .appendField("convert to object");
        this.setOutput(true, "object");
        this.setColour(135);
        this.setTooltip('convert named list to object properties');
    }
};


/**
 * set a named value on a list
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#b2f33b
 * @type {{init: Function}}
 */
Blockly.Blocks['lists_set_named'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck("Array")
            .appendField("in list");
        this.appendValueInput("ITEM")
            .setCheck("String")
            .appendField("set name");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("=");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.lists.HUE);
        this.setTooltip('set a named value on a list');
        this.setHelpUrl('http://www.example.com/');
    }
};


/**
 * get a named value from a list
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bess5a
 * @type {{init: Function}}
 */
Blockly.Blocks['lists_get_named'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck("Array")
            .appendField("in list");
        this.appendValueInput("ITEM")
            .setCheck("String")
            .appendField("get named item");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.lists.HUE);
        this.setTooltip('get a named value from a list');
        this.setHelpUrl('http://www.example.com/');
    }
};


/**
 * map values from array to list
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#uuuvxq
 * @type {{init: Function}}
 */
Blockly.Blocks['lists_map'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck("Array")
            .appendField("in list");
        this.appendValueInput("VALUES")
            .setCheck("Array")
            .appendField("map values");
        this.appendValueInput("NAMES")
            .setCheck("Array")
            .appendField("to names");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.lists.HUE);
        this.setTooltip('map values from array to list');
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
        this.appendValueInput("VAR")
            .setCheck("object")
            .appendField("in object");
        this.appendValueInput("VALUES")
            .setCheck("Array")
            .appendField("map values");
        this.appendValueInput("NAMES")
            .setCheck("Array")
            .appendField("to properties");
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
        this.appendValueInput("VAR")
            .setCheck("object")
            .appendField("encode object");
        this.appendDummyInput()
            .appendField("as")
            .appendField(new Blockly.FieldDropdown([["JSON", "JSON"], ["YAML", "YAML"], ["XML", "XML"]]), "ENCODETYPE");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(135);
        this.setTooltip('encode object to a string');
        this.setHelpUrl('http://www.example.com/');
    }
};