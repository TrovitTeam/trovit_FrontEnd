import React, { Component } from 'react';
import '../styles/index.css';
import {Card, Col, CardTitle, Table, Row} from 'react-materialize'
import Slider from "react-slick";
import src12 from "../resources/Captura12.PNG"
import src11 from "../resources/Captura11.PNG"
import src13 from "../resources/Captura13.PNG"
import src01 from "../resources/Captura01.PNG"
import src02 from "../resources/Captura02.PNG"
import src03 from "../resources/Captura03.PNG"
import src04 from "../resources/Captura04.PNG"
import src05 from "../resources/Captura05.PNG"
import src06 from "../resources/Captura06.PNG"
import src07 from "../resources/Captura07.PNG"
import src08 from "../resources/Captura08.PNG"
import src09 from "../resources/Captura09.PNG"

class Landing_page extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      adaptiveHeight:false,
      arrows: true
    };
    return (
      <div>
        <div className="container-fluid">
          <Row>
            <Col id="land_slider" className="offset-s1" s={10}>
              <Slider {...settings}>
                <div>
                  <img width="100%" alt="" src={src13} />
                </div>
                <div>
                  <img width="100%" alt="" src={src12}  />
                </div>
                <div>
                  <img width="100%" alt="" src={src11} />
                </div>
              </Slider>
            </Col>
          </Row>
        </div>
          <div className="container">
          <Col s={12} m={12}>
                  <Table responsive={true}>
                    <tbody>
                      <tr>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src01}>  Product Title</CardTitle>}
                            actions={[<a href='/'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src02}>Product Title</CardTitle>}
                            actions={[<a href='/'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src03}>Product Title</CardTitle>}
                            actions={[<a href='/'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        
                      </tr>
                      <tr>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src04}>Product Title</CardTitle>}
                            actions={[<a href='/'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src05}>Product Title</CardTitle>}
                            actions={[<a href='/'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src06}>Product Title</CardTitle>}
                            actions={[<a href='/'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src07}>Product Title</CardTitle>}
                            actions={[<a href='/'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src08}>Product Title</CardTitle>}
                            actions={[<a href='/'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                        <td>
                          <Card className='small blue-grey'
                            header={<CardTitle image={src09}>Product Title</CardTitle>}
                            actions={[<a href='/'>Product Link</a>]}>
                            Product Description.
                          </Card>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
          </div>
      </div>
    );
  }
}

export default Landing_page;
