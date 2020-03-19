import React, { Component } from 'react'
import {} from 'react-router-dom'
import {Nav} from 'react-bootstrap' 

class Home extends Component {
    render() {
        return (
            <>
            <h2>Welcome to the Home Page</h2>
            <Nav className="" activeKey="">
                <Nav.Item>
                    <Nav.Link href="/item1">Item1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Item2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Item3</Nav.Link>
                </Nav.Item>
            </Nav>

            </>
        )
    }
}

export default Home

// import React from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';

// const Home = (props) => {
//   return (
//     <div>
//       <p>List Based</p>
//       <Nav>
//         <NavItem>
//           <NavLink href="#">Link</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#">Link</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="#">Another Link</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink disabled href="#">Disabled Link</NavLink>
//         </NavItem>
//       </Nav>
//       <hr />
//       <p>Link Based</p>
//       <Nav>
//         <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
//       </Nav>
//     </div>
//   );
// }

// export default Home;

