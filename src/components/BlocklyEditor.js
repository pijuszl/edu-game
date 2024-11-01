"use client";

import { useEffect } from 'react';
import * as Blockly from 'blockly';
import 'blockly/blocks';
import 'blockly/javascript';

Blockly.defineBlocksWithJsonArray([
    {
        type: 'move_forward',
        message0: 'Move Forward',
        previousStatement: null,
        nextStatement: null,
        colour: 230,
    },
    {
        type: 'turn_left',
        message0: 'Turn Left',
        previousStatement: null,
        nextStatement: null,
        colour: 230,
    },
    {
        type: 'turn_right',
        message0: 'Turn Right',
        previousStatement: null,
        nextStatement: null,
        colour: 230,
    },
]);

const BlocklyEditor = () => {
    useEffect(() => {
        const workspace = Blockly.inject('blocklyDiv', {
            toolbox: `
                <xml xmlns="https://developers.google.com/blockly/xml" style="display: none">
                    <block type="controls_repeat_ext"></block>
                    <block type="move_forward"></block>
                    <block type="turn_left"></block>
                    <block type="turn_right"></block>
                </xml>
            `,
            trashcan: true
        });

        return () => workspace.dispose(); // Clean up on component unmount
    }, []);

    return (
        <div className="blockly-editor h-full bg-gray-100">
            <div id="blocklyDiv" className="w-full h-full"></div>
        </div>
    );
}

export default BlocklyEditor;