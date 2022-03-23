import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Form from './Form/Form';
import Bar from './Form/Bar/Bar';
import Information from './Information/Information';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    
        <Switch>
        <Route exact  path='/'>
       <Home></Home>
        </Route>
        <Route  path='/home'>
       <Home></Home>
        </Route>
        
        <Route  path='/form'>
        <Form/>
        </Route>
        <Route  path='/info'>
        <Information></Information>
        </Route>
        
        </Switch>
  
      </BrowserRouter>

    </div>
  );
}

export default App;
