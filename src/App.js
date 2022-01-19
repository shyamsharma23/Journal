
import Nav from './Components/Nav.js';
import Card from './Components/Card';
import data from './data.js';

function App() {

  const elements = data.map(items => <Card items={items} />)


  return (
    <div className="App">

      <Nav />
      {elements}

    </div>
  );
}

export default App;
