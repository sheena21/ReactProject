import React , { Component } from 'react';
import { Navbar , NavbarBrand ,Jumbotron } from 'reactstrap';
class Header extends Component{
  render()
  {
    return(
      <React.Fragment>
      <Navbar className="navbar navbar-expand-sm bg-success navbar-dark">
         <div className="container">
           <NavbarBrand href="/"></NavbarBrand>
         </div>
      </Navbar>
      <Jumbotron>
         <div className="container">
           <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>
                  Restaurant with multiple south Indian cusines . Tasty fresh and delicious meal.
                </h1>
              </div>
           </div>
         </div>
      </Jumbotron>
      </React.Fragment>
    );
  }
}
export default Header;
