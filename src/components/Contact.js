import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

 $.ajax(
   {
     url: 'http://localhost:3000/users', 
     success: function(result){
         console.log(result);
     }
   }
 );

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: [],
    };
  }
  componentDidMount(){
      var _this = this;
      axios({
          method:'get',
          url:'http://localhost:3000/users',
      })
      .then(function(response) {

          console.log(response);
          _this.setState({
            name: response.data.message
          });
      })
      .catch(function (error) {
      console.log(error);

      });
  }
  
  render(){
    return (
      <div>
        
      </div>
    );
  }
}

export default Contact;
