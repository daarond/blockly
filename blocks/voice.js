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
            .appendField("start call to phone");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('http://www.dragtocode.com/docs/voice_call.html');
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
            .appendField(new Blockly.FieldTextInput("1"), "loop");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('http://www.dragtocode.com/docs/voice_tts.html');
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
            .appendField(new Blockly.FieldTextInput("1"), "loop")
            .appendField("times");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('http://www.dragtocode.com/docs/voice_play.html');
    }
};


/**
 * gets digits from a call
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#j9uj32
 * @type {{init: Function}}
 */
Blockly.Blocks['voice_get_digits'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("collect up to")
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
            .appendField("digits or ending in")
            .appendField(new Blockly.FieldDropdown([["none","none"], ["#","#"], ["*","*"]]), "terminator");
        this.appendStatementInput("statement")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("timeout in")
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
            ]), "timeout")
            .appendField("seconds, set")
            .appendField(new Blockly.FieldVariable("item"), "variable");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('Collect digits from the call');
        this.setHelpUrl('http://www.dragtocode.com/docs/voice_get_digits.html');
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
            ]), "seconds")
            .appendField("seconds");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('http://www.dragtocode.com/docs/voice_pause.html');
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
        this.setHelpUrl('http://www.dragtocode.com/docs/voice_hangup.html');
    }
};

Blockly.Blocks['voice_dial'] = {
    init: function() {
        this.appendValueInput("PHONE")
            .setCheck("String")
            .appendField("dial phone number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl('http://www.dragtocode.com/docs/voice_dial.html');
    }
};