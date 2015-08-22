/**
 * Created by daarond on 8/21/2015.
 */
'use strict';

goog.provide('Blockly.Blocks.DataStorage');

goog.require('Blockly.Blocks');

/**
 * add (or delete) value to counter
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#yw3rhc
 * @type {{init: Function}}
 */
Blockly.Blocks['storage_change_counter'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck("String")
            .appendField("change counter");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("by");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(255);
        this.setTooltip('add (or delete) value to counter');
        this.setHelpUrl('http://www.example.com/');
    }
};


/**
 * get counter value
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9gs3q7
 * @type {{init: Function}}
 */
Blockly.Blocks['storage_get_counter'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck("String")
            .appendField("get counter value");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(255);
        this.setTooltip('get counter value');
        this.setHelpUrl('http://www.example.com/');
    }
};


/**
 * set time counter value
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xicygd
 * @type {{init: Function}}
 */
Blockly.Blocks['storage_set_counter'] = {
    init: function() {
        this.appendValueInput("NAME")
            .appendField("set time counter");
        this.appendValueInput("VAR")
            .setCheck("Number")
            .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(255);
        this.setTooltip('set time counter value');
        this.setHelpUrl('http://www.example.com/');
    }
};


/**
 * inserts/adds an object to the database
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ywceqr
 * @type {{init: Function}}
 */
Blockly.Blocks['storage_write_object'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck("object")
            .appendField("write object");
        this.appendValueInput("COLLECTION")
            .setCheck("String")
            .appendField("to collection");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(255);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


/**
 * locates an object in the database
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#yczru7
 * @type {{init: Function}}
 */
Blockly.Blocks['storage_find_object'] = {
    init: function() {
        this.appendValueInput("COLLECTION")
            .setCheck("String")
            .appendField("find objects in collection");
        this.appendValueInput("WHERE")
            .setCheck(null)
            .appendField("where property");
        this.setOutput(true, "Array");
        this.setColour(255);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


/**
 * deletes an object in the database by id
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#moa4fz
 * @type {{init: Function}}
 */
Blockly.Blocks['storage_delete_object'] = {
    init: function() {
        this.appendValueInput("COLLECTION")
            .setCheck("String")
            .appendField("delete in collection");
        this.appendValueInput("WHERE")
            .setCheck("Number")
            .appendField("where id is");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(255);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


/**
 * field in the collection
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#su7f4n
 * @type {{init: Function}}
 */
Blockly.Blocks['storage_field'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("field")
            .appendField(new Blockly.FieldDropdown([["collection", "collection"]]), "COLLECTION")
            .appendField(new Blockly.FieldDropdown([["field", "field"]]), "FIELD");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(255);
        this.setTooltip('field in the collection');
        this.setHelpUrl('http://www.example.com/');
    }
};


/**
 * field in the collection
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xjysvj
 * @type {{init: Function}}
 */
Blockly.Blocks['storage_insert_object'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck("object")
            .appendField("insert object");
        this.appendValueInput("COLLECTION")
            .setCheck("String")
            .appendField("in collection");
        this.appendDummyInput()
            .appendField("returning new id");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(255);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};