import React from 'react';
import { Preloader, Row, Col } from "react-materialize";
import { fetchUserInfo } from "../../actions/userActions";
import { connect } from "react-redux";
import defaultImage from "../../resources/upload.png";

class ProductImage extends React.Component{

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { image: "" };
    }   
    
    componentDidMount = () => {
        console.log("this.props")
        console.log(this.props);
        if(this.props.match){
            this.props.fetchUserInfo(this.props.match.params.id);
        }
    }

    componentDidUpdate = () => {
        this.handleChangeImage();
    }
    
    handleChangeImage = () => {
        this.props.handleChangeImage(this.state.image);
    };

    FileReader = () => {
        const input = this.imageRef.current;
    
        if (input.files[0]) {
          var reader = new FileReader();
          reader.onload = this.onImageLoad;
          reader.readAsDataURL(input.files[0]);
        }
      };
    
    onImageLoad = e => {
        this.setState({ image: e.target.result });
    };
    
    render(){
        const user = this.props.selectedUser;
        if(user===undefined){
            if (!user.id) {
                return (
                    <div className="preloader-container">
                        <Preloader className="preloader" />
                    </div>
                );
            }
        }

        return(
            <div className="container userInfoCard">
                <Row>
                    <img
                        src={this.state.image ? this.state.image : defaultImage}
                        alt={{ defaultImage }}
                    />
                </Row>
                <Row>
                    <label className="custom-file-input hoverable teal lighten-2 z-depth-2">
                        <input
                            className=""
                            onChange={this.FileReader}
                            type="file"
                            ref={this.imageRef}
                            style={{ display: "none" }}
                        />
                        <h6 className="white-text">Select Image</h6>
                    </label>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      selectedUser: state.selectedUser,
      currenUser: state.auth.user
    };
  }

export default connect (mapStateToProps, { fetchUserInfo })(ProductImage);