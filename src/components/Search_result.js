import React, { Component } from 'react';
import { connect } from 'react-redux';
import searchAction from '../actions/searchAction';
import {Card} from 'react-materialize'

class Search_result extends Component {

  componentDidMount = () => {
    this.props.searchAction();
  }

  renderList = () => {
    return this.props.searchAction.map( act => {
      return(
        <Card className='small blue-grey'
          header={<CardTitle image={src02}>Product Title</CardTitle>}
          actions={[<a href='/'>Product Link</a>]}>
          Product Description.
        </Card>
      )
    })
  }

  render() {
    return (
      <div className="container">

      </div>
    );
  }
}

export default Search_result;
