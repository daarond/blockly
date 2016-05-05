/**
 * Created by daarond on 10/3/2015.
 */

'use strict';

goog.provide('Blockly.Blocks.Voice');

goog.require('Blockly.Blocks');

/**
 * starts a voice call
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#wvc4t6
 * @type {{init: Function}}
 */
Blockly.Blocks['voice_call'] = {
    init: function() {
        this.appendValueInput("phone")
            .setCheck("String")
            .appendField("start call to");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

/**
 * converts text to speech
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#snjn35
 * @type {{init: Function}}
 */
Blockly.Blocks['voice_tts'] = {
    init: function() {
        this.appendValueInput("text")
            .setCheck("String")
            .appendField("convert text to speech");
        this.appendDummyInput()
            .appendField("using voice")
            .appendField(new Blockly.FieldDropdown([["male", "male"], ["female", "female"]]), "gender");
        this.appendDummyInput()
            .appendField("language")
            .appendField(new Blockly.FieldDropdown([["english", "en"], ["spanish", "es"], ["french", "fr"], ["german", "de"]]), "language");
        this.appendDummyInput()
            .appendField("loop count")
            .appendField(new Blockly.FieldTextInput("3"), "loop");
        this.setOutput(true, "String");
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

/**
 * plays a file to a call
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#cqsn3o
 * @type {{init: Function}}
 */
Blockly.Blocks['voice_play'] = {
    init: function() {
        this.appendValueInput("url")
            .setCheck("String")
            .appendField("play file url");
        this.appendDummyInput()
            .appendField("loop")
            .appendField(new Blockly.FieldTextInput("3"), "loop")
            .appendField("times");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


/**
 * gets digits from a call
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#hr5xfq
 * @type {{init: Function}}
 */
Blockly.Blocks['voice_get_digits'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("collect")
            .appendField(new Blockly.FieldDropdown([
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
                ["5", "5"],
                ["6", "6"],
                ["7", "7"],
                ["8", "8"],
                ["9", "9"],
                ["10", "10"],
                ["11", "11"],
                ["12", "12"],
                ["13", "13"],
                ["14", "14"],
                ["15", "15"],
                ["16", "16"],
                ["17", "17"],
                ["18", "18"],
                ["19", "19"],
                ["20", "20"]
            ]), "digits")
            .appendField("digits, ending in")
            .appendField(new Blockly.FieldDropdown([
                ["#", "#"],
                ["*", "*"],
                ["0", "0"],
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"], 
                ["5", "5"],
                ["6", "6"],
                ["7", "7"],
                ["8", "8"],
                ["9", "9"],
                ["none", "none"]]), "terminator")
            .appendField(", waiting")
            .appendField(new Blockly.FieldDropdown([
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
                ["5", "5"],
                ["6", "6"],
                ["7", "7"],
                ["8", "8"],
                ["9", "9"],
                ["10", "10"],
                ["11", "11"],
                ["12", "12"],
                ["13", "13"],
                ["14", "14"],
                ["15", "15"],
                ["16", "16"],
                ["17", "17"],
                ["18", "18"],
                ["19", "19"],
                ["20", "20"],
                ["21", "21"],
                ["22", "22"],
                ["23", "23"],
                ["24", "24"],
                ["25", "25"],
                ["26", "26"],
                ["27", "27"],
                ["28", "28"],
                ["29", "29"],
                ["30", "30"]
            ]), "timeout")
            .appendField("seconds");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

/**
 * gets digits from a call
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#866qqm
 * @type {{init: Function}}
 */
Blockly.Blocks['voice_pause'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("pause")
            .appendField(new Blockly.FieldTextInput("3"), "seconds")
            .appendField("seconds");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

/**
 * gets digits from a call
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#z5mrpa
 * @type {{init: Function}}
 */
Blockly.Blocks['voice_hangup'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("hangup call");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};