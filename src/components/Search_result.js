import React, { Component } from 'react';
import {Col, Row, Pagination} from 'react-materialize'

class Search_result extends Component {
  render() {
    return (
      <div className="container">
            <Row>
                <Col s={7} m={4}>
                    <div>
                      <ul className="collection">
                        <li className="collection-item avatar">
                          <i className="material-icons circle">category</i>
                          <span className="title flow-text">Categories</span>
                          <p>
                              Games <br></br>
                              Tools <br></br>
                              Phones<br></br>
                              Sports <br></br>
                              Electronics<br></br>
                              Clothes<br></br>
                              Computation <br></br>
                          </p>
                          <div>{[<a href='/'>More</a>]}</div>
                        </li>
                        <li className="collection-item avatar">
                          <i className="material-icons circle">location_city</i>
                          <span className="title flow-text">City</span>
                          <p> Bogotá D.C. <br></br>
                              Cundinamarca <br></br>
                              Atlantico <br></br>
                              Antioquia <br></br>
                              Valle Del Cauca <br></br>
                              Magdalena <br></br>
                              Santander <br></br>
                              Caldas <br></br>
                              Nariño <br></br>
                              Risaralda <br></br>
                          </p>
                          <div>{[<a href='/'>More</a>]}</div>
                        </li>
                        <li className="collection-item avatar">
                          <i className="material-icons circle">local_shipping</i>
                          <span className="title flow-text">Shipping</span>
                          <p>Free Shipping<br></br>
                            Inter-Regional Free Shipping
                          </p>
                          <div>{[<a href='/'>More</a>]}</div>
                        </li>
                        <li className="collection-item avatar">
                          <i className="material-icons circle">attach_money</i>
                          <span className="title flow-text">Price (COP)</span>
                          <p>Less than $50000.0 <br></br>
                              $51000.00 - $500000.0 <br></br>
                              More than $500000.0
                          </p>
                          <div>{[<a href='/'>More</a>]}</div>
                        </li>
                      </ul>
                    </div>
                </Col>
            </Row>
            <div className="container center">
              <Pagination items={10} activePage={1} maxButtons={8} />
            </div>
          </div>
    );
  }
}

export default Search_result;
