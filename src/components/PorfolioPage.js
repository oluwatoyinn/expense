import React, { Component } from 'react'
import {Link}  from "react-router-dom"

const PortfolioPage =() => {
    return(
        <>
        <h2>Portfolio</h2>
        <p>Checkout for the things I've done</p>
        <Link to="/portfolio/1">Item one</Link>
        <Link  to="/portfolio/2">Item two</Link>
        </>
    )
}
   

export default PortfolioPage
