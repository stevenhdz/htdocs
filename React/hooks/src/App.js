import './App.css';
import { MyComponentuseCallback } from './components/useCallback';
import { createContext } from 'react';
import { MyComponentuseDebugValue } from './components/useDebugValue';
import { MyComponentuseEffect } from './components/useEffect';
import { MyComponentuseRef } from './components/useRef';
import { MyComponentuseState } from './components/useState';
import { MyComponentuseReducer } from './components/useReducer';
import { MyComponentuseMemo } from './components/useMemo';
import { MyComponentuseDeferredValue } from './components/useDeferredValue';
import { MyComponentuseTransition } from './components/useTransition';
import { MyComponentuseId } from './components/useId';
import MOC from './components/MOC';
import ComponenteA from './components/ComponenteA';
import ComponenteB from './components/ComponenteB';
import { Provider } from 'react-redux';
import { store } from './store';
import {FlowNavigatorSingleGrid} from './components/test';

export const UserContext = createContext();

function App() {
  const number = 2023;

  return (
    <div className="App">
      <header className="App-header">
      <h1>Hooks</h1>
      <ul>
  <li>UI local → useState</li>
  <li>Reglas → useReducer</li>
  <li>Efectos → useEffect</li>
  <li>Cálculo → useMemo</li>
  <li>Funciones → useCallback</li>
  <li>DOM / valores mutables → useRef</li>
  <li>Compartir estado → useContext / Store</li>
  <li>UX concurrente → useTransition / useDeferredValue</li>
  <li>Mediciones DOM → useLayoutEffect</li>
  <li>IDs accesibles → useId</li>
</ul>

        <UserContext.Provider value={number}>
          <div style={{ 'display': 'grid','grid-template-columns': 'repeat(3, 1fr)','gap': '20px'}}>
            <MyComponentuseCallback />
            <MyComponentuseDebugValue />
            <MyComponentuseEffect />
            <MyComponentuseRef />
            <MyComponentuseState />
            <MyComponentuseReducer />
            <MyComponentuseMemo />
            <MyComponentuseDeferredValue />
            <MyComponentuseTransition />
            <MyComponentuseId />
            <MOC nombre={'steven'} edad={28}/>
            <FlowNavigatorSingleGrid />
          </div>
        </UserContext.Provider>
        <Provider store={store}>
          <ComponenteA />
          <ComponenteB />
        </Provider>
      </header>
    </div>
  );
}

export default App;
