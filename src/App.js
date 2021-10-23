import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './component/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar';
// import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Home' component={Home}/>
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
