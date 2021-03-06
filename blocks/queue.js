/**
 * Created by daarond on 8/20/2015.
 */
'use strict';

goog.provide('Blockly.Blocks.Queue');

goog.require('Blockly.Blocks');

/**
 * adds data to the queue
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tusqdy
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_add'] = {
    init: function() {
        this.appendValueInput("queue")
            .setCheck("String")
            .appendField("to queue");
        this.appendValueInput("data")
            .setCheck("String")
            .appendField("add data");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip('adds data to the queue');
        this.setHelpUrl('http://www.dragtocode.com/docs/queue_add.html');
    }
};


/**
 * gets the data for the next item in the queue without dequeueing it
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#e4zn54
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_peek'] = {
    init: function() {
        this.appendValueInput("queue")
            .setCheck("String")
            .appendField("peek next item in queue");
        this.setOutput(true, "queue_item");
        this.setColour(45);
        this.setTooltip('gets the data for the next item in the queue without dequeueing it');
        this.setHelpUrl('http://www.dragtocode.com/docs/queue_peek.html');
    }
};


/**
 * adds data to the queue
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rt4gje
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_item_data'] = {
    init: function() {
        this.appendValueInput("item")
            .setCheck("queue_item")
            .appendField("get queue item data");
        this.setOutput(true, "string");
        this.setColour(45);
        this.setTooltip('gets the data from a queue item');
        this.setHelpUrl('http://www.dragtocode.com/docs/queue_item_data.html');
    }
};


/**
 * gets the data for the next item in the queue
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#e4zn54
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_retrieve'] = {
    init: function() {
        this.appendValueInput("queue")
            .setCheck("String")
            .appendField("retrieve next item in queue");
        this.appendValueInput("timeout")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("seconds");
        this.setOutput(true, "queue_item");
        this.setColour(45);
        this.setTooltip('gets the data for the next item in the queue');
        this.setHelpUrl('http://www.dragtocode.com/docs/queue_retrieve.html');
    }
};


/**
 * extends the timeout of a queue item
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#8rztpq
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_item_touch'] = {
    init: function() {
        this.appendValueInput("item")
            .setCheck("queue_item")
            .appendField("extend queue item");
        this.appendValueInput("timeout")
            .setCheck("Number")
            .appendField("timeout by");
        this.appendDummyInput()
            .appendField("seconds");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip('extends the timeout of a queue item');
        this.setHelpUrl('http://www.dragtocode.com/docs/queue_item_touch.html');
    }
};


/**
 * releases an item back to the queue
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gjr8i5
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_item_release'] = {
    init: function() {
        this.appendValueInput("item")
            .setCheck("queue_item")
            .appendField("release queue item");
        this.appendDummyInput()
            .appendField("back to queue");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip('releases an item back to the queue');
        this.setHelpUrl('http://www.dragtocode.com/docs/queue_item_release.html');
    }
};


/**
 * deletes an item from the queue
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tomn6n
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_item_delete'] = {
    init: function() {
        this.appendValueInput("item")
            .setCheck("queue_item")
            .appendField("delete queue item");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip('deletes an item from the queue');
        this.setHelpUrl('http://www.dragtocode.com/docs/queue_item_delete.html');
    }
};


/**
 * delete a queue and all contents
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#iyn83k
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_delete'] = {
    init: function() {
        this.appendValueInput("queue")
            .setCheck("String")
            .appendField("delete queue");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip('delete a queue and all contents');
        this.setHelpUrl('http://www.dragtocode.com/docs/queue_delete.html');
    }
};

/**
 * create a queue
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#iyn83k
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_create'] = {
    init: function() {
        this.appendValueInput("queue")
            .setCheck("String")
            .appendField("create queue");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip('create a queue');
        this.setHelpUrl('http://www.dragtocode.com/docs/queue_create.html');
    }
};

