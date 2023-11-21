import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import {actions,orginals,horror} from './urls'
import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title="Netflix Orginals" />
      <RowPost url={actions} title="Action" isSmall />
      <RowPost url={horror} title="Horror"/>
    </div>
  );
}

export default App;
