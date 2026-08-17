import { use } from 'react';
import { memo, useState } from 'react';

const MOC = memo(({ nombre, edad }) => {
  const [test, setTest] = useState(0);
  console.log('Renderizando MiComponenteMemoizado');
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Test: {test}</p>
    </div>
  );
});
MOC.displayName = 'MOC';
export default MOC;
