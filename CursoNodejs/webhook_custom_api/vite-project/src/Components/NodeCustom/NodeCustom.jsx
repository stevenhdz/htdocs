import React, { memo } from "react";
import { Handle, Position, NodeResizer } from "reactflow";
import { style } from "./NodeCustomStyle";

const Node = ({ data, selected }) => {

    let customContentStyle = {};
    let customLabelStyle = {};
    let customBodyStyle = {};

    if (data.type === 'start') {
        customContentStyle = {
            backgroundColor: "#00A896",
            textAlign: 'center',
            color: 'white'
        }
        customLabelStyle = {
            backgroundColor: "#6c35de",
            color: 'white'
        }

    } else if (data.type === 'end') {
        customContentStyle = {
            backgroundColor: "#FF6B6B",
            textAlign: 'center',
            color: 'white'
        }
        customLabelStyle = {
            backgroundColor: "#6c35de",
            color: 'white'
        }
    } else if (data.type === 'conversation') {
        customContentStyle = {
            backgroundColor: "#F2EFE9",
            textAlign: 'center',
            color: 'dark'
        }
        customLabelStyle = {
            backgroundColor: "#6c35de",
            color: 'white'
        }
    }

    return (
        <div className="text-updater-node">

            <div style={{ ...style.body, ...(selected ? style.selected : []), ...customBodyStyle }}>

                <div style={{ ...style.title, ...customContentStyle }}>{data.content}</div>

                <div style={{ ...style.title, ...customLabelStyle }}>{data.label}</div>

                <div>
                    {data?.heading != '' ?
                        <select style={{ ...style.contentWrapper }} multiple value={data?.heading}>
                            {data?.heading?.map((option, index) => (
                                <option key={index} value={option}>
                                    {option.includes('data:image') ? option.slice(4, 40) : option}
                                </option>
                            ))}
                        </select> : <></>
                    }
                </div>
            </div>


            {data.type === 'start' && <Handle type="source" position={Position.Right} id="b" />}
            {data.type === 'end' && <Handle type="target" position={Position.Left} id="a" />}
            {data.type === 'conversation' && (
                <>
                    <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={30} />
                    <Handle type="source" position={Position.Right} id="b" />
                    <Handle type="target" position={Position.Left} id="a" />
                </>
            )}
        </div >
    );
};

export default memo(Node);
