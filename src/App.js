import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const name = useSelector(state => state.name);

  return (
    <div className="App">
      Hello World - {name}
    </div>
  );
};

export default App;
