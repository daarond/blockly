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
        this.appendDummyInput()
            .appendField('change counter')
            .appendField(new Blockly.FieldTextInput('counter'), "VAR");
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
        this.appendDummyInput()
            .appendField('get counter value')
            .appendField(new Blockly.FieldTextInput('counter'), "VAR");
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
Blockly.Blocks['storage_set_time_counter'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('set time counter')
            .appendField(new Blockly.FieldTextInput('counter'), "NAME");
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
Blockly.Blocks['storage_update_object'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("update object")
            .appendField(new Blockly.FieldVariable("item"), "OBJECT");
        this.appendDummyInput()
            .appendField("to collection")
            .appendField(new Blockly.FieldDropdown(CollectionList), "COLLECTION");
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
        this.appendDummyInput()
            .appendField("find object in")
            .appendField(new Blockly.FieldDropdown(CollectionList), "COLLECTION");
        this.appendValueInput("WHERE")
            .setCheck(null)
            .appendField("where");
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
        this.appendDummyInput()
            .appendField("delete in collection")
            .appendField(new Blockly.FieldDropdown(CollectionList), "COLLECTION");
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
            .appendField(new Blockly.FieldDropdown(CollectionList, function(option){
                this.sourceBlock_.updateShape_(option);
            }), "COLLECTION")
            .appendField(new Blockly.FieldDropdown([['Field1', 'Col2343']]), "FIELD");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(255);
        this.setTooltip('field in the collection');
        this.setHelpUrl('http://www.example.com/');
    },
    updateShape_: function(option) {
        var fieldInput = this.getField('FIELD');
        var option_list = getDataStorageFieldList(option);
        fieldInput.menuGenerator_ = option_list;
        fieldInput.setValue(option_list[0][1]);
    }
};


/**
 * field in the collection
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xjysvj
 * @type {{init: Function}}
 */
Blockly.Blocks['storage_insert_object'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("insert object")
            .appendField(new Blockly.FieldVariable("item"), "OBJECT");
        this.appendDummyInput()
            .appendField("in collection")
            .appendField(new Blockly.FieldDropdown(CollectionList), "COLLECTION");
        this.appendDummyInput()
            .appendField("returning new id");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(255);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};