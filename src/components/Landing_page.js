import React, { Component } from 'react';
import '../styles/index.css';
import {Card, Col, Carousel,Row, CardTitle, CardPanel, Table} from 'react-materialize'
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
              <img width="100%" height="30%"src="http://www.grupoduplex.com/wp-content/uploads/2018/09/H71626735-Khaki-Field-Auto-Chrono-in-Jack-Ryan-3-6000x500.jpg" />
            </div>
            <div>
              <img width="100%" height="30%" src="http://xn--schnstegeschenke-owb.de/wp-content/uploads/2018/07/kopfh%C3%B6rer_geschenke_m%C3%A4nner-e1531051063523-6000x500.jpg" />
            </div>
            <div>
              <img width="100%" height="30%" src="http://xn--schnstegeschenke-owb.de/wp-content/uploads/2018/07/brettspiele_geschenke_m%C3%A4nner-6000x500.jpg" />
            </div>
            <div>
              <img width="100%" height="30%" src="http://www.grupoduplex.com/wp-content/uploads/2018/09/H71626735-Khaki-Field-Auto-Chrono-in-Jack-Ryan-3-6000x500.jpg" />
            </div>
            <div>
              <img width="100%" height="30%" src="http://xn--schnstegeschenke-owb.de/wp-content/uploads/2018/07/kopfh%C3%B6rer_geschenke_m%C3%A4nner-e1531051063523-6000x500.jpg" />
            </div>
            <div>
              <img width="100%" height="30%" src="http://xn--schnstegeschenke-owb.de/wp-content/uploads/2018/07/brettspiele_geschenke_m%C3%A4nner-6000x500.jpg" />
            </div>
          </Slider>
          <Row>
              <Col s={6} m={3}>
                  <div>
                    <ul class="collection">
                      <li class="collection-item avatar">
                        <i class="material-icons circle">folder</i>
                        <span class="title">Title</span>
                        <p>First Line <br></br>
                            Second Line
                        </p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                      </li>
                      <li class="collection-item avatar">
                        <i class="material-icons circle">folder</i>
                        <span class="title">Title</span>
                        <p>First Line <br></br>
                            Second Line
                        </p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                      </li>
                      <li class="collection-item avatar">
                        <i class="material-icons circle">folder</i>
                        <span class="title">Title</span>
                        <p>First Line <br></br>
                            Second Line
                        </p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                      </li>
                      <li class="collection-item avatar">
                        <i class="material-icons circle">folder</i>
                        <span class="title">Title</span>
                        <p>First Line <br></br>
                            Second Line
                        </p>
                        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                      </li>
                    </ul>
                  </div>
              </Col>
              <Col s={6} m={9}>
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Card Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Card Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Card Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Card Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Card Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Card Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Card Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Card Title</CardTitle>}
                          actions={[<a href='#'>Product Link</a>]}>
                          Product Description.
                        </Card>
                      </td>
                      <td>
                        <Card className='small blue-grey'
                          header={<CardTitle image="http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg">Card Title</CardTitle>}
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
