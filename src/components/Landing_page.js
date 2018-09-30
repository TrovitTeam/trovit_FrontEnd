import React, { Component } from 'react';
import '../styles/index.css';
import {Card, Col, Carousel,Row, CardTitle, CardPanel} from 'react-materialize'
import Slider from "react-slick";

import AppBar from '@material-ui/core/AppBar';

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
                      <li class="collection-item">Item 1</li>
                      <li class="collection-item">Item 2</li>
                      <li class="collection-item">Item 3</li>
                      <li class="collection-item">Item 4</li>
                    </ul>
                  </div>
              </Col>
              <Col s={6} m={9}>
                  <div>
                    <ul class="collection">
                      <li class="collection-item">Item 1</li>
                      <li class="collection-item">Item 2</li>
                      <li class="collection-item">Item 3</li>
                      <li class="collection-item">Item 4</li>
                    </ul>
                  </div>
              </Col>
          </Row>


          
      </div>
    );
  }
}

export default Landing_page;
