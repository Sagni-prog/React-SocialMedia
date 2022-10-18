// import logo from './logo.svg';
// import laptop from './laptop.svg';
import './App.css';
import { Nav } from './component/nav/Nav';
import { Main } from './component/main/Main';
import { useReducer } from 'react';
import FacebookReducer from './reducer/FacebookReducer';
import FacebookContext from './context/FacebookContext';


function App() {

  const [state,dispatch] = useReducer(FacebookReducer,{toggle: false, nightmode: false});
  return (
    <div>
      <FacebookContext.Provider value={{state,dispatch}}>
        <Nav />
        <div className="container">
          <Main />
     </div>
     </FacebookContext.Provider>
   </div>
   
  );
}

export default App;
