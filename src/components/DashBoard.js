import React, { Component } from 'react'
import {BrowserRouter, Route,Switch,NavLink} from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Edit from './Edit'
import Help from './Help'
import ErrorPage from './ErrorPage'
import Header from './Header'


 
class DashBoard extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/create" component={Create} />  
                        <Route path="/help"  component={Help} />
                        <Route path="/edit"  component={Edit} />
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default DashBoard
