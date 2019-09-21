import React from 'react';
import Home from './components/Home';
import { withRouter } from 'react-router-dom';

class App extends React.Component{

  render(){
    return <div>
               <Home/>
           </div>
  }
}

export default withRouter(App)