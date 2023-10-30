import React, {useEffect} from 'react';
import SearchPage from '../../SearchPage';
import {initializeHeadlessEngine} from '../../../common/Engine';
import { SearchEngine } from '@coveo/headless';


import './Search.css'; // Tell webpack that Button.js uses these styles
import Nav from '../../Nav/Nav';

const Search = () => {
  const [engine, setEngine] = React.useState<SearchEngine | null>(null);

  useEffect(() => {
    initializeHeadlessEngine().then((engine) => {
      setEngine(engine);
    });
  }, []);


  if (engine) {
    return (

      <div className="App">
          <Nav />
        <h1 className='App-header'> SearchPage</h1>
          
        {engine && <SearchPage engine={engine} />}
      </div>
    );
  } else {
    return <div>Waiting for engine</div>;
  }
};

export default Search;
