import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Nav from './Nav'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Question from './Question'
import Complete from './Complete'
import Home from './Home'
import Consent from './Consent'
import Details from './Details'
import Current from './Current'

class App extends React.Component{
  render(){
    return (      
      <HashRouter>
        <div>
          <Nav/>
          <div className="container"> 
              <Route exact path='/' component={Home} />               
              <Route path="/login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/current" component={Current} />
              <Route path="/details" component={Details} />
              <Route path="/consent" component={Consent} />
              <Route path="/question/:id" component={Question} />
              <Route path="/complete" component={Complete} />
          </div>
        </div>
      </HashRouter>   
    )
  }
}

export default App