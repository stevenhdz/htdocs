import { useSelector } from 'react-redux';

export default function ComponenteB() {
  const { nombre, edad } = useSelector(
    (state) => state.shared
  );

  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}
