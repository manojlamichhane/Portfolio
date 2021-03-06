import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";
import "../App.css";

function NavigationBar(props) {
  return (
    <Navbar
      color="light"
      light
      expand="md"
      style={{ justifyContent: "flex-end" }}
    >
      <Nav navbar data-testid="navbar">
        <NavItem>
          <NavLink
            data-testid="home-link"
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "#fbbe5c",
            }}
            tag={RRNavLink}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            data-testid="skills-link"
            to="/Skills"
            activeStyle={{
              fontWeight: "bold",
              color: "#fbbe5c",
            }}
            tag={RRNavLink}
          >
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            data-testId="projects-link"
            to="/Projects"
            activeStyle={{
              fontWeight: "bold",
              color: "#fbbe5c",
            }}
            tag={RRNavLink}
          >
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            data-testId="contact-link"
            to="/Contact"
            activeStyle={{
              fontWeight: "bold",
              color: "#fbbe5c",
            }}
            tag={RRNavLink}
          >
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
