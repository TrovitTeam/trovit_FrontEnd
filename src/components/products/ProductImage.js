import React from 'react';
import { Preloader } from "react-materialize";
import { uploadImageProduct } from '../../actions/imageProductActions';
import { fetchUserInfo } from "../../actions/userActions";
import { connect } from "react-redux";
import defaultImage from "../../resources/blank-profile.png";
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
        this.props.uploadImageProduct(this.state.image);
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
            <div>
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      productImage: state.productImage,
      selectedUser: state.selectedUser,
      currenUser: state.auth.user
    };
  }

export default connect (mapStateToProps, { uploadImageProduct, fetchUserInfo })(ProductImage);