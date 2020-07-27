import React, { Component } from "react";
import "../sidebar.css";
import { connect } from "react-redux";
import PoldyDash from "./PoldyDash";
import CompanyDash from "./CompanyDash";
import UserDash from "./UserDash";
import { Redirect } from "react-router-dom";

class Panel extends Component {
  state = {
    drawerPos: 1,
  };

  handleDrawer = () => {
    if (this.state.drawerPos < 2) {
      this.setState((state) => ({
        drawerPos: state.drawerPos + 1,
      }));
    } else {
      this.setState({
        drawerPos: 0,
      });
    }
  };

  render() {
    let drawerClass = [];
    let mainClass = [];
    if (this.state.drawerPos === 1) {
      drawerClass.push("drawerMin");
      mainClass.push("mainMin");
    } else if (this.state.drawerPos === 2) {
      drawerClass.push("drawerOpen");
      mainClass.push("mainOpen");
    } else {
      drawerClass = [];
      mainClass = [];
    }

    return (
      <div className="AdminSidebar">
        <div className="navbar">
          {" "}
          <i className="material-icons" onClick={this.handleDrawer}>
            menu
          </i>{" "}
          <img
            className="logo"
            width="100px"
            src="https://www.poldy.com.tr/Content/gfx/logo-white.png"
            alt="POLDY LOGO"
          />{" "}
          <div>
            <strong>{this.props.companyName}</strong>
            <p>Hoşgeldin {this.props.userName}</p>
          </div>
        </div>
        <aside className={drawerClass.join(" ")}>
          <ul>
            <li>
              <i className="material-icons ">dashboard</i>
              <span>Dashboard</span>
            </li>
          </ul>
        </aside>
        <main className={mainClass.join(" ")}>
          {this.props.position === "PoldyAdmin" ? (
            <PoldyDash></PoldyDash>
          ) : this.props.position === "CompanyAdmin" ? (
            <CompanyDash></CompanyDash>
          ) : this.props.position === "user" ? (
            <UserDash></UserDash>
          ) : this.props.position === null ? (
            <Redirect to="login" />
          ) : null}
        </main>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    position: state.authReducer.tokenData
      ? state.authReducer.tokenData.position
      : null,
    userName: state.authReducer.tokenData
      ? state.authReducer.tokenData.UserName
      : null,
    companyName: state.companyReducer.userData
      ? state.companyReducer.userData.companyName
      : null,
  };
};

export default connect(mapStateToProps)(Panel);
