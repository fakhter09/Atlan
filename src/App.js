import React, { useState } from 'react';
import DefaultTable from './components/DefaultTable';
import Editor from './components/Editor';
import FilterData from './components/FilterData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [query, setQuery] = useState('');

  const dataPass = (childData) => {
      setQuery(childData);
  }
  return (
  <> 
    <Navbar/>
    <Editor parentData={dataPass}/>
    <div className='container'>
      <FilterData query={query}/> 
    </div>
    <div className='container'>
      <DefaultTable/>
    </div>
    <Footer/>
    
  </>
  );
}

export default App;
