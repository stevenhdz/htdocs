import logo from './logo.svg';
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

export const UserContext = createContext();

function App() {
  const number = 2023;

  return (
    <div className="App">
      <header className="App-header">
      <h1>Hooks</h1>
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
          </div>
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default App;
