import React, {useCallback, useEffect, useState} from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import ReactFlow, {
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import ColorSelectorNode from './ColorSelectorNode';

import Typewriter from 'typewriter-effect';
const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
const initBgColor = '#1A192B';
const connectionLineStyle = { stroke: '#fff' };
const snapGrid = [20, 20];
const nodeTypes = {
    selectorNode: ColorSelectorNode,
};
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };
const Intro4 = ({ sliderRef, blackStar }) => {
    const [bgColor, setBgColor] = useState(initBgColor);
    const [visibility, setVisibility] = useState(initBgColor);
    useEffect(()=> {
        if (visibility) {
            Array.from(document.getElementsByClassName("mouse-cursor")).forEach((el) => {
                el.style.visibility ="hidden";
            });
        } else if (!visibility) {
            Array.from(document.getElementsByClassName("mouse-cursor")).forEach((el) => {
                el.style.visibility ="visible";
            });
        }
    }, [visibility])
    const switchMouseCursor = (val) => {
        console.log("sd")
        setVisibility(val)
    }
    const onChange = (event) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id !== '2') {
                    return node;
                }

                const color = event.target.value;

                setBgColor(color);

                return {
                    ...node,
                    data: {
                        ...node.data,
                        color,
                    },
                };
            })
        );
    };
    const [nodes, setNodes, onNodesChange] = useNodesState([
        {
            id: '1',
            type: 'input',
            data: { label: '' },
            position: { x: 0, y: 50 },
            style: { background: '#010101', border: '1px solid #777' },
            sourcePosition: 'right',
        },
        {
            id: '2',
            type: 'selectorNode',
            data: { onChange: onChange, color: initBgColor },
            style: { background: '#010101', border: '1px solid #777', padding: 10 },
            position: { x: 300, y: 50 },
        },
        {
            id: '3',
            type: 'output',
            data: { label: '' },
            position: { x: 650, y: 25 },
            style: { background: '#010101', border: '1px solid #777' },
            targetPosition: 'left',
        },
        {
            id: '4',
            type: 'output',
            data: { label: '' },
            position: { x: 650, y: 100 },
            style: { background: '#010101', border: '1px solid #777' },
            targetPosition: 'left',
        },
    ]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([
        {
            id: 'e1-2',
            source: '1',
            target: '2',
            animated: true,
            style: { stroke: '#fff' },
        },
        {
            id: 'e2a-3',
            source: '2',
            target: '3',
            sourceHandle: 'a',
            animated: true,
            style: { stroke: '#fff' },
        },
        {
            id: 'e2b-4',
            source: '2',
            target: '4',
            sourceHandle: 'b',
            animated: true,
            style: { stroke: '#fff' },
        },
    ]);

    const proOptions = { hideAttribution: true };
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
      <div className="container mb-100 mt-60">

          <div className="row feat justify-content-center mt-100" style={{width: "100%"}} onMouseEnter={() => switchMouseCursor(true)} onMouseLeave={() => switchMouseCursor(false)}>
              <div className="col-10 offset-1 offset-lg-0 col-lg-10 items wow active fadeIn codeBlock" data-wow-delay=".3s" style={{ background: "rgba(0,0,0,0.8)!important;", zIndex: 3, height: "40vh", width: "100%", padding: "0.2rem!important;", borderRadius: "5rem"}}>
                  <ReactFlow
                      nodes={nodes}
                      edges={edges}
                      onNodesChange={onNodesChange}
                      onEdgesChange={onEdgesChange}
                      onConnect={onConnect}
                      proOptions={proOptions}
                      style={{borderRadius: "2rem", width: "100%"}}
                      nodeTypes={nodeTypes}
                      connectionLineStyle={connectionLineStyle}
                      snapToGrid={true}
                      snapGrid={snapGrid}
                      defaultViewport={defaultViewport}
                      fitView
                      attributionPosition="bottom-left"
                  >
                      <Background variant="dots" gap={12} size={1} />
                  </ReactFlow>
              </div>
          </div>
      </div>
  );
};

export default Intro4;
