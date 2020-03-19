import React, { Component } from 'react'
import {NavLink}  from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact to="/" activeClassName="is-active"> Home </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help Expense</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active">Portfolio Page</NavLink>      
    </header>
)
    
export default Header
