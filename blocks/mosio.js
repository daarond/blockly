/**
 * Created by daarond on 10/16/2015.
 */

'use strict';

goog.provide('Blockly.Blocks.Mosio');

goog.require('Blockly.Blocks');

/**
 * Sends a survey message
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#etodb5
 * @type {{init: Function}}
 */
Blockly.Blocks['mosio_survey_message'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("send question sms")
            .appendField(new Blockly.FieldDropdown(Blockly.Blocks.Mosio.getQuestionList_()), "QUESTION");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

/**
 * sets the current user's state
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#3xzzhc
 * @type {{init: Function}}
 */
Blockly.Blocks['mosio_get_state'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("user survey state");
        this.setOutput(true, ["Number", "String"]);
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

/**
 * sets the current user's state
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2kzn9q
 * @type {{init: Function}}
 */
Blockly.Blocks['mosio_set_state'] = {
    init: function() {
        this.appendValueInput("STATE")
            .setCheck(["Number", "String"])
            .appendField("set user state to");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

/**
 * adds an answer to a specific question
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#eyca48
 * @type {{init: Function}}
 */
Blockly.Blocks['mosio_add_answer'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("answer question")
            .appendField(new Blockly.FieldDropdown(Blockly.Blocks.Mosio.getQuestionList_()), "QUESTION");
        this.appendValueInput("ANSWER")
            .setCheck(["Number", "String"])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("with");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

/**
 * retrieves an answer to a question
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#eyca48
 * @type {{init: Function}}
 */
Blockly.Blocks['mosio_get_answer'] = {
    init: function() {
        var img = new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif",
            15, 15, "*", Blockly.Blocks.Mosio.imageClick);
        this.appendDummyInput()
            .appendField("get answer to")
            .appendField(new Blockly.FieldDropdown(Blockly.Blocks.Mosio.getQuestionList_()), "QUESTION")
            .appendField(img);
        this.setOutput(true, "String");
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks.Mosio.imageClick = function(event){
    alert('CLICK!');
};

/**
 * retrieves user's data
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#eyca48
 * @type {{init: Function}}
 */
Blockly.Blocks['mosio_get_userdata'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("get user data");
        this.setOutput(true, "object");
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

/*
list of objects, expected to be in the format:
"short_name":{_id: "db_id", question: "question text here"}
 */
Blockly.Blocks.Mosio.QuestionList = {};
Blockly.Blocks.Mosio.getQuestionList_ = function() {
    var questions = [];
    for (var name in this.QuestionList) {
        if (this.QuestionList.hasOwnProperty(name)) {
            questions.push([name, String(this.QuestionList[name]._id)]);
        }
    }
    return questions;
};
