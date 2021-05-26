import './App.css';

import ListContainer from './containers/ListContainer.js';
import GenreSelector from './containers/GenreSelector.js'

function App() {

  return (
    <>
      <GenreSelector />
      <ListContainer />
    </>
  );
}

export default App;
