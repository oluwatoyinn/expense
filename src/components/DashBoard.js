import React, { Component } from 'react'
import {BrowserRouter, Route,Switch,NavLink} from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import PortfolioPage from './PorfolioPage'
import Help from './Help'
import ErrorPage from './ErrorPage'
import Header from './Header'
import PortfolioItemPage from './PorfolioItemPage'


 
class DashBoard extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/create" component={Create} />  
                        <Route path="/portfolio/:id" component={PortfolioItemPage}/>
                        <Route exact path="/portfolio" component={PortfolioPage} />
                        <Route path="/help"  component={Help} />
                        
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default DashBoard
