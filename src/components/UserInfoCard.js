import React from "react";
import { Row, Col } from "react-materialize";
import { Link } from "react-router-dom";

import defaultImage from "../resources/blank-profile.png";
import "../styles/userInfoCard.css";

const UserInfoCard = props => {
  const { user, actions } = props;
  console.log(user);
  return (
    <Row className="white userInfoCard">
      <Col s={4}>
        <img src={defaultImage} />
        {actions}
      </Col>
      <Col s={8}>
        <ul>
          <li className="info">
            <Link to={`/Profile/${user.id}`} style={{ color: "black" }}>
              <h3>{user.name}</h3>
            </Link>
            <div className="divider" />
            <li className="type">
              <h4>
                {user.userType === "distributor"
                  ? "Distributor"
                  : "Bussinnes Manager"}
              </h4>
            </li>
            <div>
              <ul>
                <li className="item header">
                  <h5>Email</h5>
                  <ul>
                    <li className="content">
                      <h5>{user.email}</h5>
                    </li>
                  </ul>
                </li>
                <li className="item header">
                  <h5>Telephone</h5>
                  <ul>
                    <li className="content">
                      <h5>{user.phone ? user.phone : "Not Defined"}</h5>
                    </li>
                  </ul>
                </li>
                <li className="item header">
                  <h5>Address</h5>
                  <ul>
                    <li className="content">
                      <h5>{user.location ? user.location : "Not Defined"}</h5>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default UserInfoCard;
