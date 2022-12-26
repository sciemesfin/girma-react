import React from "react";
import { NavItem, NavLink } from "shards-react";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem className="border-right dropdown notifications">
        <NavLink className="nav-link-icon text-center" href="/notifications">
          <div href="/sd" className="nav-link-icon__wrapper">
            <i className="material-icons">&#xE7F4;</i>
          </div>
        </NavLink>
      </NavItem>
    );
  }
}
