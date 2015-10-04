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
            .appendField("call phone");
        this.appendValueInput("url")
            .setCheck("String")
            .appendField("and play file url");
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
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
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
            .appendField("wait")
            .appendField(new Blockly.FieldTextInput("10"), "timeout");
        this.appendDummyInput()
            .appendField("seconds for")
            .appendField(new Blockly.FieldTextInput("10"), "digits");
        this.appendDummyInput()
            .appendField("digits ending in")
            .appendField(new Blockly.FieldDropdown([["#", "#"], ["*", "*"], ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["none", "none"]]), "NAME");
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
            .appendField(new Blockly.FieldTextInput("3"), "pause")
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