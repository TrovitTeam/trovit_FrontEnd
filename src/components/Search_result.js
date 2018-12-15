<<<<<<< HEAD
import React, { Component } from "react";
import { Col, Row, Pagination } from "react-materialize";

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
				</Row>
				<div className="container center">
					<Pagination items={10} activePage={1} maxButtons={8} />
				</div>
			</div>
		);
	}
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchSearchResults from '../actions/searchAction';
import {Card} from 'react-materialize';
import src02 from "../resources/Captura02.PNG";


class Search_result extends Component {

  componentDidMount = () => {
    this.props.searchAction();
  }

  renderList = () => {
    return this.props.fetchSearchResults.map( result => {
      return(
        <Card className='small blue-grey'
          header={<CardTitle image={src02}>{result.title}</CardTitle>}
          actions={[<a href='/'>Product Link</a>]}>
          {/*result.description*/}
        </Card>
      )
    })
  }

  render() {
    return (
      <div className="container">
        {this.renderList()}
      </div>
    );
  }
>>>>>>> be036c914f8040dcff8aab69d04d5cf10be415ab
}

const mapStateToProps = (state) => {
  return { searchResults: state.props}
}

export default connect(mapStateToProps, {fetchSearchResults}) (Search_result);
