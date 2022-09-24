import { Component } from "react"
import { Route, Switch } from "react-router-dom"

import Main from './pages/main/main'
class App extends Component{
  render () {
      return (
        <div>
          <Switch>
            <Route exact path='/' component={ Main } />

            {/* <Route path='/*' component={ Error404 } /> */}

          </Switch>
        </div>
      )
  }
}
export default App;
