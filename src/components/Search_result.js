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
}

const mapStateToProps = (state) => {
  return { searchResults: state.props}
}

export default connect(mapStateToProps, {fetchSearchResults}) (Search_result);
