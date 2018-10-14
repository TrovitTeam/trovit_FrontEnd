import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'http://localhost:3000/users';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

// $.ajax(
//   {
//     url: 'http://localhost:3000/users.json', 
//     success: function(result){
//         console.log(result);
//     }
//   }
// );

class Contact extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //       name: [],
  //   };
  // }
  // componentDidMount(){
  //     var _this = this;
  //     axios({
  //         method:'get',
  //         url:'http://localhost:3000/users.json',
  //     })
  //     .then(function(response) {

  //         console.log(response);
  //         _this.setState({
  //           name: response.data.message
  //         });
  //     })
  //     .catch(function (error) {
  //     console.log(error);

  //     });
  // }
  
  render(){
    return (
      <div>
        {/* <textarea onChange={this.handleChange} value={this.state.json} />
        <button onClick={this.saveJson}>SAVE to LocalStorage</button> 
        <button onClick={this.loadJson}>LOAD from LocalStorage</button> */}
          <p><a href="#" onClick="makeCorsRequest(); return false;">Run Sample</a></p>
      </div>
    );
  }
}

export default Contact;
