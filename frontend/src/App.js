import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'

const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/home" component={Home} />
  </Switch>
  </BrowserRouter>
)

export default App