import React, { useState } from "react";
import {
  Col,
  Popover,
  PopoverBody,
  PopoverHeader,
  NavLink,
  NavItem,
  Nav
} from "shards-react";

export default function Filter({ filters }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(on => !on);
  return (
    <div>
      <Col lg="2" md="2" sm="12">
        <div
          className="d-flex mr-3"
          style={{
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #17c671",
            padding: 7,
            color: "#17c671",
            cursor: "pointer",
            borderRadius: 30,
            width: 150,
            margin: "auto"
          }}
          id="popover-1"
          onClick={toggle}
        >
          <div style={{ paddingRight: 15, fontSize: 14 }}>Filter</div>
          <i class="material-icons md-18">filter_list</i>
        </div>
      </Col>
      <Popover
        placement="bottom"
        open={open}
        toggle={toggle}
        target="#popover-1"
      >
        <PopoverHeader>Filters</PopoverHeader>
        <PopoverBody>
          {filters
            ? filters.map((x, i) => (
                <Nav>
                  <NavItem>
                    <NavLink href="#">{x}</NavLink>
                  </NavItem>
                </Nav>
              ))
            : "No Filters"}
        </PopoverBody>
      </Popover>
    </div>
  );
}
