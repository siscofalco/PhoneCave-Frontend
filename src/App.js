import { Route } from 'react-router-dom';
import Phones from './components/PhonesComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Phones} />
    </div>
  );
}

export default App;
