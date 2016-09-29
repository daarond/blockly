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
            .appendField("split text");
        this.appendValueInput("subject")
            .setCheck("String");
        this.appendDummyInput()
            .appendField("using expression");
        this.appendValueInput("expression")
            .setCheck("String");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(270);
        this.setTooltip('Split a text value using a regular expression');
        this.setHelpUrl('http://www.dragtocode.com/docs/regex_split.html');
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
            .appendField("replace text using expression");
        this.appendValueInput("expression")
            .setCheck("String");
        this.appendValueInput("replacement")
            .setCheck("String")
            .appendField("with");
        this.appendDummyInput()
            .appendField("in text");
        this.appendValueInput("subject")
            .setCheck("String");

        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(270);
        this.setTooltip('Replace text using a regular expression');
        this.setHelpUrl('http://www.dragtocode.com/docs/regex_replace.html');
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
            .appendField("expression");
        this.appendValueInput("expression")
            .setCheck("String");
        this.appendValueInput("subject")
            .setCheck("String")
            .appendField("matches text");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(270);
        this.setTooltip('performs a regex match, returning true if matched');
        this.setHelpUrl('http://www.dragtocode.com/docs/regex_simple_match.html');
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
            .appendField("get string matched by expression");
        this.appendValueInput("subject")
            .setCheck("String")
            .appendField("from");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(270);
        this.setTooltip('performs a regex match, returning the string that matched');
        this.setHelpUrl('http://www.dragtocode.com/docs/regex_match_string.html');
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
            .appendField("get list of ")
            .appendField(new Blockly.FieldDropdown([["string", "STRING"], ["group", "GROUP"]]), "match_type")
            .appendField("matches of expression");
        this.appendValueInput("subject")
            .setCheck("String")
            .appendField("from");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(270);
        this.setTooltip('performs a regex match, returning a list of matches or groups');
        this.setHelpUrl('http://www.dragtocode.com/docs/regex_match_list.html');
    }
};