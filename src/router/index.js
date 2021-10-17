import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'


  import Axioss from '../fetchingData';
  


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Axioss} />   
        
      
    


      </Switch>
    </BrowserRouter>
  );
}

export { App };
