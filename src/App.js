import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pokedex from './containers/Pokedex';
import AppNavigator from './components/AppNavigator';
import PokemonDetailClass from './containers/PokemonDetailClass';


function App() {
  return (
    <Router>
      <AppNavigator />
      <Route path="/" component={Pokedex} exact/>
      <Route path="/pokemon/:id" component={PokemonDetailClass} exact/>
    </Router>
  );
}

export default App;
