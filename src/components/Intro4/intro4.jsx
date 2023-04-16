import React, {useCallback} from "react";
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

import Typewriter from 'typewriter-effect';
const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
const Intro4 = ({ sliderRef, blackStar }) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const proOptions = { hideAttribution: true };
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9">
                  <div className="cont text-center">
                      <h1>
                          <span className="color-font">Software</span> defined <span className="color-font">
                          <Typewriter
                              options={{
                                  strings: ['Data', 'Analytics', 'Simulation', 'Api', 'Magic'],
                                  autoStart: true,
                                  loop: true,
                              }}
                          /></span> platform.
                      </h1>
                  </div>
              </div>
          </div>
          <div className="row feat justify-content-center mt-80">
              <div className="col-lg-8 items wow active fadeIn codeBlock" data-wow-delay=".3s" style={{ background: "rgba(0,0,0,0.8)!important;", zIndex: 1, height: "40vh", width: "auto", padding: "0.2rem!important;", borderRadius: "5rem"}}>
                  <ReactFlow
                      nodes={nodes}
                      edges={edges}
                      onNodesChange={onNodesChange}
                      onEdgesChange={onEdgesChange}
                      onConnect={onConnect}
                      proOptions={proOptions}
                      style={{borderRadius: "2rem"}}
                  >
                      <Background variant="dots" gap={12} size={1} />
                  </ReactFlow>
              </div>
          </div>
      </div>

      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />

        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro4;
