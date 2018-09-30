import React, { Component } from 'react';
import {Card, Col, Row, CardTitle, CardPanel, Table, Pagination} from 'react-materialize'

class Search_result extends Component {
  render() {
    return (
      <div class="container">
            <Row>
                <Col s={7} m={4}>
                    <div>
                      <ul class="collection">
                        <li class="collection-item avatar">
                          <i class="material-icons circle">category</i>
                          <span class="title flow-text">Categories</span>
                          <p>
                              Games <br></br>
                              Tools <br></br>
                              Phones<br></br>
                              Sports <br></br>
                              Electronics<br></br>
                              Clothes<br></br>
                              Computation <br></br>
                          </p>
                          <div>{[<a href='#'>More</a>]}</div>
                        </li>
                        <li class="collection-item avatar">
                          <i class="material-icons circle">location_city</i>
                          <span class="title flow-text">City</span>
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
                          <div>{[<a href='#'>More</a>]}</div>
                        </li>
                        <li class="collection-item avatar">
                          <i class="material-icons circle">local_shipping</i>
                          <span class="title flow-text">Shipping</span>
                          <p>Free Shipping<br></br>
                            Inter-Regional Free Shipping
                          </p>
                          <div>{[<a href='#'>More</a>]}</div>
                        </li>
                        <li class="collection-item avatar">
                          <i class="material-icons circle">attach_money</i>
                          <span class="title flow-text">Price (COP)</span>
                          <p>Less than $50000.0 <br></br>
                              $51000.00 - $500000.0 <br></br>
                              More than $500000.0
                          </p>
                          <div>{[<a href='#'>More</a>]}</div>
                        </li>
                      </ul>
                    </div>
                </Col>
            </Row>
            <div class="container center">
              <Pagination items={10} activePage={1} maxButtons={8} />
            </div>
          </div>
    );
  }
}

export default Search_result;
