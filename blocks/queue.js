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
            .setCheck("Array")
            .appendField("add data");
        this.appendDummyInput()
            .appendField("with")
            .appendField(new Blockly.FieldDropdown([["low", "LOW"], ["normal", "NORMAL"], ["high", "HIGH"]]), "PRIORITY")
            .appendField("priority");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip('adds data to the queue');
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
    }
};


/**
 * adds data to the queue
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rt4gje
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_item_data'] = {
    init: function() {
        this.appendValueInput("url")
            .setCheck("queue_item")
            .appendField("get queue item data");
        this.setOutput(true, "string");
        this.setColour(45);
        this.setTooltip('gets the data from a queue item');
    }
};


/**
 * adds data to the queue
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rt4gje
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_item_priority'] = {
    init: function() {
        this.appendValueInput("url")
            .setCheck("queue_item")
            .appendField("get queue item priority");
        this.setOutput(true, "string");
        this.setColour(45);
        this.setTooltip('gets the priority from a queue item');
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
        this.setOutput(true, "queue_item");
        this.setColour(45);
        this.setTooltip('gets the data for the next item in the queue');
    }
};


/**
 * gets the data for the next item from the first available queue
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#eepfj2
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_retrieve_list'] = {
    init: function() {
        this.appendValueInput("queue")
            .setCheck("Array")
            .appendField("retrieve next item from list of queues");
        this.setOutput(true, "queue_item");
        this.setColour(45);
        this.setTooltip('gets the data for the next item from the first available queue');
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
    }
};


/**
 * changes a queue item's priority
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vnf37c
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_item_setpriority'] = {
    init: function() {
        this.appendValueInput("item")
            .setCheck("queue_item")
            .appendField("change queue item");
        this.appendValueInput("priority")
            .setCheck("String")
            .appendField("priority to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip('changes a queue item\'s priority');
    }
};

/**
 * delete a queue and all contents
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#iyn83k
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_delete'] = {
    init: function() {
        this.appendValueInput("item")
            .setCheck("string")
            .appendField("delete queue");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip('delete a queue and all contents');
    }
};

/**
 * create a queue
 * @link https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#iyn83k
 * @type {{init: Function}}
 */
Blockly.Blocks['queue_create'] = {
    init: function() {
        this.appendValueInput("item")
            .setCheck("string")
            .appendField("create queue");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip('create a queue');
    }
};

