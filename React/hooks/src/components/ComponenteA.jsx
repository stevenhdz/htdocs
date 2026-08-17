import { useDispatch } from 'react-redux';
import { setPersona } from '../store/sharedSlice';


export default function ComponenteA() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        dispatch(setPersona({ nombre: 'Juan', edad: 30 }))
      }
    >
      Guardar Persona
    </button>
  );
}