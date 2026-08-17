import React, { useEffect } from 'react';
import ReactFlow from 'reactflow';
import robot from 'robotjs';

const App = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Aquí puedes escribir el código para ejecutar tus acciones de RPA
      // Por ejemplo, mover el mouse y hacer clic en una posición específica:
      const { x, y } = robot.getMousePos();
      robot.moveMouse(x + 50, y + 50);
      robot.mouseClick();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow elements={[]} />
    </div>
  );
};

export default App;