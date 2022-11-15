import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Place from "./pages/Place";
import { Route,Routes } from 'react-router-dom';

function App() {
  return (

    
    <>
      <Layout> 
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Place' element={<Place />}/>
        </Routes>
        
        </Layout>
      
      </>
  );
}

export default App;
