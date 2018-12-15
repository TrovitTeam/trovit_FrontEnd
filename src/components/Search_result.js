import React, { Component } from "react";
import { Col, Row, Pagination } from "react-materialize";
import ProductCard from "./ProductCard";
import src12 from "../resources/Captura12.PNG";

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
										Games <br />
										Tools <br />
										Phones
										<br />
										Sports <br />
										Electronics
										<br />
										Clothes
										<br />
										Computation <br />
									</p>
									<div>{[<a href="/">More</a>]}</div>
								</li>
								<li className="collection-item avatar">
									<i className="material-icons circle">location_city</i>
									<span className="title flow-text">City</span>
									<p>
										{" "}
										Bogotá D.C. <br />
										Cundinamarca <br />
										Atlantico <br />
										Antioquia <br />
										Valle Del Cauca <br />
										Magdalena <br />
										Santander <br />
										Caldas <br />
										Nariño <br />
										Risaralda <br />
									</p>
									<div>{[<a href="/">More</a>]}</div>
								</li>
								<li className="collection-item avatar">
									<i className="material-icons circle">local_shipping</i>
									<span className="title flow-text">Shipping</span>
									<p>
										Free Shipping
										<br />
										Inter-Regional Free Shipping
									</p>
									<div>{[<a href="/">More</a>]}</div>
								</li>
								<li className="collection-item avatar">
									<i className="material-icons circle">attach_money</i>
									<span className="title flow-text">Price (COP)</span>
									<p>
										Less than $50000.0 <br />
										$51000.00 - $500000.0 <br />
										More than $500000.0
									</p>
									<div>{[<a href="/">More</a>]}</div>
								</li>
							</ul>
						</div>
					</Col>
					<Col s={5} m={8}>
						<ProductCard
							image={src12}
							title="Product 1"
							description="This is a product"
							rating="3"
						/>
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
