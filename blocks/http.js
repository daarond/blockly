/**
 * Created by daarond on 8/20/2015.
 */
'use strict';

goog.provide('Blockly.Blocks.Http');

goog.require('Blockly.Blocks');


/**
 * Performs a HTTP retrieval
 * @type {{init: Function}}
 */
Blockly.Blocks['internet_http'] = {
    init: function () {
        var METHODS =
            [["GET", "GET"], ["POST", "POST"], ["PUT", "PUT"], ["DELETE", "DELETE"]];
        this.setColour(210);
        var dropdown = new Blockly.FieldDropdown(METHODS, function(option) {
            var dataInput = (option == 'POST' || option == 'PUT');
            this.sourceBlock_.updateDataShape_(dataInput);
        });
        this.appendDummyInput()
            .appendField("HTTP")
            .appendField(dropdown, 'METHOD');
        this.appendValueInput("URL")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("from URL");
        var headerCheck = new Blockly.FieldCheckbox("FALSE", function(value){
            this.sourceBlock_.updateHeaderShape_(value);
        });
        this.appendDummyInput()
            .appendField(headerCheck, "INCLUDE_HEADERS")
            .appendField("Extra Headers");
        this.setOutput(true, 'String');
        this.setInputsInline(false);
        this.setHelpUrl('http://www.dragtocode.com/docs/internet_http.html');
    },
    /**
     * Create XML to represent whether the 'dataInput' should be present.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
        var container = document.createElement('mutation');
        var dataInput = (this.getFieldValue('METHOD') == 'POST' || this.getFieldValue('METHOD') == 'PUT');
        container.setAttribute('data_input', dataInput);
        container.setAttribute('header_input', this.getFieldValue('INCLUDE_HEADERS'));
        return container;
    },
    /**
     * Parse XML to restore the 'divisorInput'.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        var dataInput = (xmlElement.getAttribute('data_input') == 'true');
        this.updateDataShape_(dataInput);
        var headerInput = (xmlElement.getAttribute('header_input') == 'true');
        this.updateHeaderShape_(headerInput);
    },
    /**
     * Modify this block to have (or not have) an input for 'with data'
     * @param {boolean} dataInput True if this block has a data input.
     * @private
     * @this Blockly.Block
     */
    updateDataShape_: function(dataInput) {
        // Add or remove a Value Input.
        var dataInputExists = this.getInput('DATA');
        if (dataInput && !dataInputExists) {
            this.appendValueInput('DATA')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("with data");
        } else if (!dataInput && dataInputExists) {
            this.removeInput('DATA');
        }
    },
    /**
     * Modify this block to have (or not have) an input for headers
     * @param {boolean} headerInput True if this block has a header input.
     * @private
     * @this Blockly.Block
     */
    updateHeaderShape_: function(headerInput) {
        var headerInputExists = this.getInput('HEADERS');
        if (headerInput && !headerInputExists) {
            this.appendValueInput('HEADERS')
                .setCheck('object')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("with headers");
            var dataInput = this.getInput('DATA');
            if (dataInput) {
                this.moveInputBefore('HEADERS', 'DATA');
            }
        } else if (!headerInput && headerInputExists) {
            this.removeInput('HEADERS');
        }
    }
};
