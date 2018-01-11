import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './index.css'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Router>
  <div>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="*" component={NotFound}/>
  </Switch>
  <Footer />
  </div>
</Router>, document.getElementById('root'))
registerServiceWorker();
