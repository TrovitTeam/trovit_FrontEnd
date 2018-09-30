import React, { Component } from 'react';
import '../styles/index.css';
import {Card, Col, Carousel, Row, CardTitle, CardPanel, Table, Pagination} from 'react-materialize'
import Slider from "react-slick";
import src01 from "../resources/Captura01.PNG"
import src02 from "../resources/Captura02.PNG"
import src03 from "../resources/Captura03.PNG"
import src04 from "../resources/Captura04.PNG"
import src05 from "../resources/Captura05.PNG"
import src06 from "../resources/Captura06.PNG"
import src07 from "../resources/Captura07.PNG"
import src08 from "../resources/Captura08.PNG"
import src09 from "../resources/Captura09.PNG"
import src12 from "../resources/Captura12.PNG"
import src11 from "../resources/Captura11.PNG"
import src13 from "../resources/Captura13.PNG"
import logo from "../resources/LogoNoBack.png"

class Landing_page extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight:true
    };
    return (
      <div>
        <div class="container-fluid">
          <Slider {...settings}>
              <div>
                <img width="100%" src={src13} />
              </div>
              <div>
                <img width="100%" src={src12}  />
              </div>
              <div>
                <img width="100%" src={src13} />
              </div>
            </Slider>
          </div>
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
                <Col s={5} m={8}>
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src01}>  Product Title</CardTitle>}
                            actions={[<a href='#'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src02}>Product Title</CardTitle>}
                            actions={[<a href='#'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src03}>Product Title</CardTitle>}
                            actions={[<a href='#'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src04}>Product Title</CardTitle>}
                            actions={[<a href='#'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src05}>Product Title</CardTitle>}
                            actions={[<a href='#'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src06}>Product Title</CardTitle>}
                            actions={[<a href='#'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src07}>Product Title</CardTitle>}
                            actions={[<a href='#'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src08}>Product Title</CardTitle>}
                            actions={[<a href='#'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src09}>Product Title</CardTitle>}
                            actions={[<a href='#'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
            </Row>
          </div>
          <div class="container center">
            <Pagination items={10} activePage={1} maxButtons={8} />
          </div>
      </div>
    );
  }
}

export default Landing_page;
