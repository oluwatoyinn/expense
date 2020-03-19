import React, { Component } from 'react'
import {NavLink}  from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact to="/" activeClassName="is-active"> DashBoard </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit page</NavLink>      
    </header>
)
    
export default Header
