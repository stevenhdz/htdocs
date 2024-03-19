import React from "react";

import EditMessage from "../NodeEdit/NodeEdit";


export default ({ isSelected, textRef, nodeName, setNodeName, nodeBg, setNodeBg, nodeLabel, setNodeLabel }) => {

    const onDragStart = (event, nodeType, content) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.setData("content", content);
        event.dataTransfer.effectAllowed = "move";
    };

    return (
        <aside>
            {isSelected ? (
                <EditMessage
                    textRef={textRef}
                    nodeName={nodeName}
                    setNodeName={setNodeName}
                    nodeBg={nodeBg}
                    setNodeBg={setNodeBg}
                    nodeLabel={nodeLabel}
                    setNodeLabel={setNodeLabel}
                />
            ) : (
                <div className="sidebar">
                    <div
                        className="dndnode_start"
                        onDragStart={(event) => onDragStart(event, 'start', 'start')}
                        draggable>
                        Start
                    </div>
                    <div
                        className="dndnode_conversation"
                        onDragStart={(event) => onDragStart(event, 'conversation', 'conversation')}
                        draggable>
                        Conversation
                    </div>
                    <div
                        className="dndnode_end"
                        onDragStart={(event) => onDragStart(event, 'end', 'end')}
                        draggable>
                        End
                    </div>
                </div>
            )}
        </aside>
    );
};
