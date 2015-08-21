/**
 * Created by daarond on 8/19/2015.
 */

'use strict';

goog.provide('Blockly.Blocks.Regex');

goog.require('Blockly.Blocks');

/**
 * performs a regex split
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#j4fgcz
 * @type {{init: Function}}
 */
Blockly.Blocks['regex_split'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Split Text");
        this.appendValueInput("subject")
            .setCheck("String");
        this.appendDummyInput()
            .appendField("Using Expression");
        this.appendValueInput("expression")
            .setCheck("String");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(330);
        this.setTooltip('Split a text value using a regular expression');
    }
};

/**
 * performs a regex replace
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bxq2of
 * @type {{init: Function}}
 */
Blockly.Blocks['regex_replace'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Replace Text");
        this.appendValueInput("subject")
            .setCheck("String");
        this.appendValueInput("replacement")
            .setCheck("String")
            .appendField("With");
        this.appendDummyInput()
            .appendField("Using Expression");
        this.appendValueInput("expression")
            .setCheck("String");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(330);
        this.setTooltip('Replace text using a regular expression');
    }
};


/**
 * performs a regex match, returning true if matched
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nwoyt4
 * @type {{init: Function}}
 */
Blockly.Blocks['regex_simple_match'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Text")
            .appendField(new Blockly.FieldDropdown([["Completely", "COMPLETE"], ["Partially", "PARTIAL"]]), "match_type");
        this.appendValueInput("subject")
            .setCheck("String")
            .appendField("Matches");
        this.appendDummyInput()
            .appendField("Expression");
        this.appendValueInput("expression")
            .setCheck("String");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(330);
        this.setTooltip('performs a regex match, returning true if matched');
    }
};


/**
 * performs a regex match, returning the string that matched
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5crkuu
 * @type {{init: Function}}
 */
Blockly.Blocks['regex_match_string'] = {
    init: function() {
        this.appendValueInput("expression")
            .setCheck("String")
            .appendField("Get String Matched By Expression");
        this.appendValueInput("subject")
            .setCheck("String")
            .appendField("From");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(330);
        this.setTooltip('performs a regex match, returning the string that matched');
    }
};


/**
 * performs a regex match, returning a list of matches or groups
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#4qmns4
 * @type {{init: Function}}
 */
Blockly.Blocks['regex_match_list'] = {
    init: function() {
        this.appendValueInput("expression")
            .setCheck("String")
            .appendField("Get list of ")
            .appendField(new Blockly.FieldDropdown([["string", "STRING"], ["group", "GROUP"]]), "match_type")
            .appendField("matches of expression");
        this.appendValueInput("subject")
            .setCheck("String")
            .appendField("From");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(330);
        this.setTooltip('performs a regex match, returning a list of matches or groups');
    }
};