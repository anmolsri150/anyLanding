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
    <header ref={sliderRef} className="particles particles2 circle-bg valign">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9">
                  <div className="cont text-center">
                      <h1>
                          <span className="color-font"><Typewriter
                              options={{
                                  strings: ['Software', 'GPT'],
                                  autoStart: true,
                                  delay: 20,
                                  loop: true,
                              }}
                          /><br/>
                          </span>Defined
                          <br/>
                          <span className="color-font">
                          <Typewriter
                              options={{
                                  strings: ['ML Flows', 'Analytics', 'Web-Apps', 'Fun'],
                                  autoStart: true,
                                  delay: 20,
                                  loop: true,
                              }}
                          /></span>
                          <br/>
                          Platform.
                      </h1>
                  </div>
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
