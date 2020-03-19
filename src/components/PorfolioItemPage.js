import React, { Component } from 'react'

const PorfolioItemPage = (props) => (
   <div>
       <h1>A thind I've done</h1>
       <p>This page is for the item with an id of  {props.match.params.id} </p>

   </div>
)
    
export default PorfolioItemPage
