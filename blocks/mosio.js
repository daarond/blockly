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
            .appendField(new Blockly.FieldDropdown(Blockly.Blocks.Mosio.getQuestionList_()), "QUESTION")
            .appendField(new Blockly.FieldImage("http://findicons.com/files/icons/2033/large_icons_for/16/gear.png",
                15, 15, "*", Blockly.Blocks.Mosio.AnswerClickEvent));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

/**
 * Sends a generic message
 * @type {{init: Function}}
 */
Blockly.Blocks['mosio_send_sms'] = {
    init: function() {
        this.appendValueInput("MESSAGE")
            .appendField("send sms text");
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
 * retrieves a known value
 * @type {{init: Function}}
 */
Blockly.Blocks['mosio_get_value'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("get mosio value")
            .appendField(new Blockly.FieldDropdown([["last answer", "ANSWER"], ["survey id", "SURVEY_ID"], ["user id", "USER_ID"], ["survey state", "SURVEY_STATE"], ["microboard id", "MICROBOARD_ID"]]), "VALUE_NAME");
        this.setTooltip('');
        this.setOutput(true, "String");
        this.setColour(60);
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
        this.appendDummyInput()
            .appendField("get answer to")
            .appendField(new Blockly.FieldDropdown(Blockly.Blocks.Mosio.getQuestionList_()), "QUESTION")
            .appendField(new Blockly.FieldImage("http://findicons.com/files/icons/2033/large_icons_for/16/gear.png",
                15, 15, "*", Blockly.Blocks.Mosio.AnswerClickEvent));
        this.setOutput(true, "String");
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks.Mosio.AnswerClickEvent = function(){ };

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

Blockly.Blocks['mosio_get_preference'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("get user preference")
            .appendField(new Blockly.FieldTextInput("silo"), "PREFERENCE");
        this.setOutput(true, "String");
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['mosio_set_preference'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck("String")
            .appendField("set user preference")
            .appendField(new Blockly.FieldTextInput("silo"), "PREFERENCE")
            .appendField("to");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setColour(60);
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['mosio_add_storyline'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("add user to storyline")
            .appendField(new Blockly.FieldTextInput("sampleStory"), "STORYLINE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setColour(60);
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['mosio_add_task'] = {
    init: function() {
        this.appendValueInput("URL")
            .appendField("add task URL");
        this.appendValueInput("DELAY")
            .setCheck("Number")
            .appendField("with");
        this.appendDummyInput()
            .appendField("second delay");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setColour(60);
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['mosio_push_survey'] = {
    init: function() {
        this.appendValueInput("SURVEY")
            .setCheck("String")
            .appendField("push survey");
        this.appendValueInput("DELAY")
            .setCheck("Number")
            .appendField("in");
        this.appendDummyInput()
            .appendField("seconds");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#yz6nr7
Blockly.Blocks['mosio_add_appointment'] = {
    init: function() {
        this.appendValueInput("DATETIME")
            .setCheck(["Number", "String"])
            .appendField("add appointment on");
        this.appendValueInput("MESSAGE")
            .setCheck("String")
            .appendField("with message");
        this.appendDummyInput()
            .appendField("on survey")
            .appendField(new Blockly.FieldTextInput("sampleSurvey"), "SURVEY");
        this.appendDummyInput()
            .appendField("days prior")
            .appendField(new Blockly.FieldDropdown([["1", "OPTIONNAME"], ["2", "OPTIONNAME"], ["3", "OPTIONNAME"], ["4", "OPTIONNAME"]]), "PRIOR");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
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
