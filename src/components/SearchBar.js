import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    term: ' '
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.onFormSubmit}>
          <div className="input-field">
            <input type="text" value={this.state.term} onChange={(e)=>this.setState({term: e.target.value})}/>
            <label className="label-icon" htmlFor="search"></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
