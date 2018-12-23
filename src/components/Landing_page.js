import React, { Component } from "react";
import "../styles/index.css";
import { Card, Col, CardTitle, Table, Row } from "react-materialize";
import axios from "axios";
import { baseUrl } from "../resources/url";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import src12 from "../resources/Captura12.PNG";
import src11 from "../resources/Captura11.PNG";
import src13 from "../resources/Captura13.PNG";
import src01 from "../resources/Captura01.PNG";
import src02 from "../resources/Captura02.PNG";
import src03 from "../resources/Captura03.PNG";
import src04 from "../resources/Captura04.PNG";
import src05 from "../resources/Captura05.PNG";
import src06 from "../resources/Captura06.PNG";
import src07 from "../resources/Captura07.PNG";
import src08 from "../resources/Captura08.PNG";
import src09 from "../resources/Captura09.PNG";

class Landing_page extends Component {
	state = {
		products: []
	};

	/* componentDidMount = async ()  => {
    const response = await axios.get(baseUrl+'/products');
    this.setState({ products: response.data})
  } */

	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			adaptiveHeight: false,
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
									<img width="100%" alt="" src={src12} />
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
										{/*                     
                        <div key = {0}>
                          <ProductCard
                            className="product-card"
                            product={this.state.products[0]}>
                            {this.state.products[0].description}
                          </ProductCard> 
                        </div>
                        */}
										<Card
											className="small blue-grey"
											header={
												<CardTitle
													image={
														this.state.products.length !== 0
															? this.state.products[0].urls
															: src01
													}
												>
													{" "}
													{this.state.products.length !== 0
														? this.state.products[0].title
														: "Trovit Papers"}
												</CardTitle>
											}
											actions={<a href="/">Details</a>}
										>
											This are Trovit official Papers!
										</Card>
									</td>
									<td>
										<Card
											className="small blue-grey"
											header={<CardTitle image={src02}>Door Hangers</CardTitle>}
											actions={[<a href="/">Details</a>]}
										>
											This are Trovit official door hangers!
										</Card>
									</td>
									<td>
										<Card
											className="small blue-grey"
											header={<CardTitle image={src03}>Trovit Book</CardTitle>}
											actions={<a href="/">Details</a>}
										>
											This are Trovit official books!
										</Card>
									</td>
								</tr>
								<tr>
									<td>
										<Card
											className="small blue-grey"
											header={
												<CardTitle image={src04}>Trovit Bottle</CardTitle>
											}
											actions={[<a href="/">Details</a>]}
										>
											This are Trovit official bottles!
										</Card>
									</td>
									<td>
										<Card
											className="small blue-grey"
											header={<CardTitle image={src05}>Trovit Cup</CardTitle>}
											actions={[<a href="/">Details</a>]}
										>
											This are Trovit official cups!
										</Card>
									</td>
									<td>
										<Card
											className="small blue-grey"
											header={
												<CardTitle image={src06}>Trovit Envelope</CardTitle>
											}
											actions={[<a href="/">Details</a>]}
										>
											This are Trovit official envelopes!
										</Card>
									</td>
								</tr>
								<tr>
									<td>
										<Card
											className="small blue-grey"
											header={
												<CardTitle image={src07}>Trovit Block Notes</CardTitle>
											}
											actions={[<a href="/">Details</a>]}
										>
											This are Trovit official blocks notes!
										</Card>
									</td>
									<td>
										<Card
											className="small blue-grey"
											header={<CardTitle image={src08}>Trovit Shirt</CardTitle>}
											actions={[<a href="/">Details</a>]}
										>
											This are Trovit official shirts!
										</Card>
									</td>
									<td>
										<Card
											className="small blue-grey"
											header={<CardTitle image={src09}>Trovit Phone</CardTitle>}
											actions={[<a href="/">Details</a>]}
										>
											This are Trovit official phones!
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
