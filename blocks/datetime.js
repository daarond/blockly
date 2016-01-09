/**
 * Created by daarond on 1/8/2016.
 */

'use strict';

goog.provide('Blockly.Blocks.Datetime');

goog.require('Blockly.Blocks');

/**
 * get the current datetime
 * @type {{init: Function}}
 */
Blockly.Blocks['datetime_current'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("now");
        this.setOutput(true, "Number");
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ojqbu2
Blockly.Blocks['datetime_set_date'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("set date")
            .appendField(new Blockly.FieldVariable("item"), "VARIABLE")
            .appendField("to month")
            .appendField(new Blockly.FieldDropdown([
                ["01", "01"], ["02", "02"], ["03", "03"],
                ["04", "04"], ["05", "05"], ["06", "06"],
                ["07", "07"], ["08", "08"], ["09", "09"],
                ["10", "10"], ["11", "11"], ["12", "12"]
            ]), "MONTH")
            .appendField("day")
            .appendField(new Blockly.FieldDropdown([
                ["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
                ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
                ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
                ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
                ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
                ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
                ["30", "30"], ["31", "31"]
            ]), "DAY")
            .appendField("year")
            .appendField(new Blockly.FieldDropdown([
                ["2000", "2000"], ["2001", "2001"], ["2002", "2002"], ["2003", "2003"], ["2004", "2004"],
                ["2005", "2005"], ["2006", "2006"], ["2007", "2007"], ["2008", "2008"], ["2009", "2009"],
                ["2010", "2010"], ["2011", "2011"], ["2012", "2012"], ["2013", "2013"], ["2014", "2014"],
                ["2015", "2015"], ["2016", "2016"], ["2017", "2017"], ["2018", "2018"], ["2019", "2019"],
                ["2020", "2020"], ["2021", "2021"], ["2022", "2022"], ["2023", "2023"], ["2024", "2024"],
                ["2025", "2025"], ["2026", "2026"], ["2027", "2027"], ["2028", "2028"], ["2029", "2029"]
            ]), "YEAR")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2s2vrp
Blockly.Blocks['datetime_set_time'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("set")
            .appendField(new Blockly.FieldVariable("item"), "VARIABLE")
            .appendField("to time")
            .appendField(new Blockly.FieldDropdown([["00 (Midnight)", "00"], ["01", "01"], ["02", "02"], ["03", "03"],
                ["04", "04"], ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"], ["10", "10"],
                ["11", "11"], ["12 (Noon)", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"],
                ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]
            ]), "HOUR")
            .appendField(":")
            .appendField(new Blockly.FieldDropdown([
                ["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
                ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
                ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
                ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
                ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
                ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
                ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"],
                ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"],
                ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"],
                ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"],
                ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"],
                ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]
            ]), "MINUTE")
            .appendField(":")
            .appendField(new Blockly.FieldDropdown([
                ["00", "00"], ["01", "01"], ["02", "02"], ["03", "03"], ["04", "04"],
                ["05", "05"], ["06", "06"], ["07", "07"], ["08", "08"], ["09", "09"],
                ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],
                ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
                ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"],
                ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
                ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"],
                ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"],
                ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"],
                ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"],
                ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"],
                ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]
            ]), "SECOND");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ecm96o

Blockly.Blocks['datetime_modify_date'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("modify")
            .appendField(new Blockly.FieldVariable("item"), "VARIABLE")
            .appendField("date,");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(new Blockly.FieldDropdown([["add", "add"], ["delete", "delete"]]), "DIRECTION");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["month", "month"], ["day", "day"], ["year", "year"]]), "UNIT");
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ez9zjc
Blockly.Blocks['datetime_modify_time'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("modify")
            .appendField(new Blockly.FieldVariable("item"), "VARIABLE")
            .appendField("time,");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(new Blockly.FieldDropdown([["add", "add"], ["delete", "delete"]]), "DIRECTION");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["hour", "hour"], ["minute", "minute"], ["second", "second"]]), "UNIT");
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


Blockly.Blocks['datetime_format'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("format date")
            .appendField(new Blockly.FieldVariable("item"), "VARIABLE")
            .appendField("as")
            .appendField(new Blockly.FieldTextInput("Y-m-d h:i:s"), "FORMAT");
        this.setOutput(true);
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};