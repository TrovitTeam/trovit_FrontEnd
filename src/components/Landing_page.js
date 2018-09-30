import React, { Component } from 'react';
import '../styles/index.css';
import {Card, Col, Carousel, Row, CardTitle, CardPanel, Table} from 'react-materialize'
import Slider from "react-slick";


class Landing_page extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div class="container">
          <Slider {...settings}>
            <div class="container">
              <img width="100%" src="https://www.annarborartcenter.org/wp-content/uploads/2017/03/Text-and-Image-Ann-Arbor-Art-center-117-Gallery-Exhibition-Ann-Arbor-Gallery.png" />
            </div>
            <div>
              <img width="100%" src="https://www.annarborartcenter.org/wp-content/uploads/2017/03/Text-and-Image-Ann-Arbor-Art-center-117-Gallery-Exhibition-Ann-Arbor-Gallery.png" />
            </div>
            <div>
              <img width="100%" src="https://www.annarborartcenter.org/wp-content/uploads/2017/03/Text-and-Image-Ann-Arbor-Art-center-117-Gallery-Exhibition-Ann-Arbor-Gallery.png" />
            </div>
            <div>
              <img width="100%" src="https://www.annarborartcenter.org/wp-content/uploads/2017/03/Text-and-Image-Ann-Arbor-Art-center-117-Gallery-Exhibition-Ann-Arbor-Gallery.png" />
            </div>
            <div>
              <img width="100%" src="https://www.annarborartcenter.org/wp-content/uploads/2017/03/Text-and-Image-Ann-Arbor-Art-center-117-Gallery-Exhibition-Ann-Arbor-Gallery.png" />
            </div>
            <div>
              <img width="100%" src="https://www.annarborartcenter.org/wp-content/uploads/2017/03/Text-and-Image-Ann-Arbor-Art-center-117-Gallery-Exhibition-Ann-Arbor-Gallery.png" />
            </div>
          </Slider>
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
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Product Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Product Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Product Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Product Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Product Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Product Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Product Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Product Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Product Title</CardTitle>}
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
    );
  }
}

export default Landing_page;
