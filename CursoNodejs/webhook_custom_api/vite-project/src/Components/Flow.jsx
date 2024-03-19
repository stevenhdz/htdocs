import React, { useCallback, useEffect, useState, useRef } from "react";
import ReactFlow, {
    addEdge,
    Background,
    useNodesState,
    useEdgesState,
    ReactFlowProvider,
    MiniMap,
    Controls,
    getIncomers,
    getOutgoers,
    getConnectedEdges
} from "reactflow";

// Components
import Sidebar from "./NodeAdd/NodeAdd";
import Node from "./NodeCustom/NodeCustom";

// Styles
import "reactflow/dist/style.css";
import "./dnd.css";
import ChatbotButton from "./Iframe/ChatbotButton";



const nodeTypes = {
    end: Node, start: Node, conversation: Node
};

const OverviewFlow = () => {

    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [selectedNode, setSelectedNode] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    const [nodeName, setNodeName] = useState("Node 1");
    const [nodeBg, setNodeBg] = useState('#eee');
    const [nodeLabel, setNodeLabel] = useState('');

    const onInit = (reactFlowInstance) => setReactFlowInstance(reactFlowInstance);

    const getId = (lastId) => {
        const order = parseInt(lastId) + 1;
        return `${order}`;
    };

    useEffect(() => {
        loadNodesFromDatabase();
        loadEdgesFromDatabase();
    }, []);

    const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    };

    const onNodesDelete = useCallback(
        (deleted) => {
            setEdges(
                deleted.reduce((acc, node) => {
                    const incomers = getIncomers(node, nodes, edges);
                    const outgoers = getOutgoers(node, nodes, edges);
                    const connectedEdges = getConnectedEdges([node], edges);

                    const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge));

                    const createdEdges = incomers.flatMap(({ id: source }) =>
                        outgoers.map(({ id: target }) => ({ id: `${source}->${target}`, source, target }))
                    );

                    return [...remainingEdges, ...createdEdges];
                }, edges)
            );
        },
        [nodes, edges]
    );
    const onLoad = (_reactFlowInstance) => {
        setReactFlowInstance(_reactFlowInstance);
        _reactFlowInstance.zoomTo(1);
        console.log(_reactFlowInstance);
    };

    const onMoveEndHandler = (flowTransform) => {
        console.log(flowTransform);
    };

    const onDrop = (event) => {
        event.preventDefault();
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData("application/reactflow");
        console.log(reactFlowInstance, "reactIns");

        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top
        });

        if (type === 'start' && nodes.some(node => node.type === 'start')) {
            alert('Ya existe un nodo de inicio.');
            return;
        }

        if (type === 'end' && nodes.some(node => node.type === 'end')) {
            alert('Ya existe un nodo de fin.');
            return;
        }

        const nodesOfTypeConversation = nodes.filter(node => node.type === 'conversation');
        if (type === 'conversation' && nodesOfTypeConversation.length >= 10) {
            alert('Ya has alcanzado el límite de nodos de conversación.');
            return;
        }

        const nodesWithIds = nodes.map((name, id) => ({ id: name.id }));
        const lastId = nodesWithIds.length > 0 ? Math.max(...nodesWithIds.map(node => node.id)) : 0;

        let additionalData = {};
        if (type === 'start') {
            additionalData = { type: 'start', label: 'Start Label', content: 'Start Content' };
        } else if (type === 'end') {
            additionalData = { type: 'end', label: 'End Label', content: 'End Content' };
        } else if (type === 'conversation') {
            additionalData = { type: 'conversation', label: 'Conversation Label', content: 'Conversation Content' };
        }

        const newNode = {
            id: getId(lastId),
            type,
            position,
            data: {
                heading: [],
                ...additionalData
            }
        };


        setNodes((es) => es.concat(newNode));
        setSelectedNode(newNode.id);
    };
    const onConnect = useCallback(
        (params) =>
            setEdges((eds) =>
                addEdge({ ...params, animated: true, markerEnd: { type: "arrowclosed" } }, eds)
            ),
        [setEdges]
    );

    useEffect(() => {
        const node = nodes.filter((node) => {
            if (node.selected) return true;
            return false;
        });
        if (node[0]) {
            setSelectedNode(node[0]);
            setIsSelected(true);
        } else {
            setSelectedNode("");
            setIsSelected(false);
        }
    }, [nodes]);
    useEffect(() => {
        setNodeName(selectedNode?.data?.content || selectedNode);
    }, [selectedNode]);

    useEffect(() => {
        setNodeBg(selectedNode?.data?.heading || selectedNode);
    }, [selectedNode]);

    useEffect(() => {
        setNodeLabel(selectedNode?.data?.label || selectedNode);
    }, [selectedNode]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode?.id) {
                    node.data = {
                        ...node.data,
                        heading: nodeBg || " "
                    };
                }

                return node;
            })
        );
    }, [nodeBg, setNodes]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode?.id) {
                    node.data = {
                        ...node.data,
                        content: nodeName || " "
                    };
                }
                return node;
            })
        );
    }, [nodeName, setNodes]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode?.id) {
                    node.data = {
                        ...node.data,
                        label: nodeLabel || " "
                    };
                }
                return node;
            })
        );
    }, [nodeLabel, setNodes]);

    const saveHandler = () => {

        const hasStartNode = nodes.some(node => node.type === 'start');
        const hasEndNode = nodes.some(node => node.type === 'end');

        if (!hasStartNode || !hasEndNode) {
            alert('Debe haber al menos un nodo de inicio y un nodo de fin.');
            return;
        }

        const conversationNodes = nodes.filter(node => node.type === 'conversation');
        const isAllConversationValid = conversationNodes.every(conversationNode => {
            const incomingNodes = getIncomers(conversationNode, nodes, edges);
            const outgoingNodes = getOutgoers(conversationNode, nodes, edges);

            return incomingNodes.some(node => node.type === 'start') &&
                outgoingNodes.some(node => node.type === 'end');
        });

        /* if (!isAllConversationValid) {
            alert('Cada nodo de conversación debe estar conectado a un nodo de inicio y un nodo de fin.');
            return;
        } */

        alert('Congrats, it\'s correct');
        saveNodesToDatabase();
        saveEdgesToDatabase();
    };

    const saveNodesToDatabase = async () => {
        try {
            await fetch('https://localhost:3001/api/nodes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nodes),
            });
            console.log('Nodes saved successfully');
        } catch (error) {
            console.error('Error saving nodes:', error);
        }
    };

    const saveEdgesToDatabase = async () => {
        try {
            await fetch('https://localhost:3001/api/edges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(edges),
            });
            console.log('Nodes saved successfully');
        } catch (error) {
            console.error('Error saving nodes:', error);
        }
    };

    const loadNodesFromDatabase = async () => {
        try {
            const response = await fetch('https://localhost:3001/api/nodes/all');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const loadedNodes = await response.json();

            const formattedNodes = loadedNodes.map(node => ({
                ...node,
                data: JSON.parse(node.data),
                dragging: node.dragging == 0 ? false : true,
                position: {
                    x: node.positionX,
                    y: node.positionY,
                },
                positionAbsolute: {
                    x: node.positionXAbsolute,
                    y: node.positionYAbsolute
                },
                selected: node.selected == 0 ? false : true,


            }));

            setNodes(formattedNodes);

            console.log('Nodes loaded successfully');
        } catch (error) {
            console.error('Error loading nodes:', error);
        }
    };

    const loadEdgesFromDatabase = async () => {
        try {
            const response = await fetch('https://localhost:3001/api/edges/all');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const loadedEdges = await response.json();


            const formattedNodes = loadedEdges.map(edge => ({

                ...edge,
                markerEnd: {
                    type: edge.markerEnd
                },
                animated: edge.animated == 1 ? 'true' : 'false'


            }));

            setEdges(formattedNodes)

            // Handle the loaded edges as needed
            console.log('Edges loaded successfully:', loadedEdges);
        } catch (error) {
            console.error('Error loading edges:', error);
        }
    };

    return (
        <>
            <button onClick={saveHandler}>Save</button>
            <div className="dndflow">
                <ReactFlowProvider>
                    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesDelete={onNodesDelete}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onMoveEnd={onMoveEndHandler}
                            onDrop={onDrop}
                            onConnect={onConnect}
                            onLoad={onLoad}
                            nodeTypes={nodeTypes}
                            onInit={onInit}
                            onDragOver={onDragOver}
                            fitView
                            attributionPosition="top-left"
                        >
                            <Background variant="dots" gap={12} size={1} />
                        </ReactFlow>
                    </div>

                    <Sidebar
                        isSelected={isSelected}
                        nodeName={nodeName}
                        setNodeName={setNodeName}
                        nodeBg={nodeBg}
                        setNodeBg={setNodeBg}
                        nodeLabel={nodeLabel}
                        setNodeLabel={setNodeLabel}
                    />

                    <MiniMap

                        nodeStrokeColor={(n) => {
                            if (n.type === 'start') return '#00A896';
                            if (n.type === 'conversation') return ' #F2EFE9';
                            if (n.type === 'end') return '#FF6B6B';
                        }}
                        nodeColor={(n) => {
                            if (n.type === 'start') return '#00A896';
                            if (n.type === 'conversation') return ' #F2EFE9';
                            if (n.type === 'end') return '#FF6B6B';

                        }}
                        style={{

                            right: 'auto',
                            bottom: '120px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            padding: '4px',
                        }}
                    />
                    <Controls />
                </ReactFlowProvider>
            </div>
            <ChatbotButton />
        </>
    );
};

export default OverviewFlow;
