import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

//Import Icons
import Icon from "@ailibs/feather-react-ts";

const CardContact = (props: any) => {
  const { user } = props;

  return (
    <React.Fragment>
      <Col xl="4" sm="6">
        <Card className="border shadow-none">

          <CardBody className="p-4">
            <div className="d-flex align-items-start">
              <div className="flex-shrink-0 avatar rounded-circle me-3">
                <img src={user.img} alt=""
                  className="img-fluid rounded-circle" />
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <h5 className="font-size-15 mb-1 text-truncate">
                  <Link to="pages-profile" className="text-dark">{user.name}</Link></h5>
                <p className="text-muted text-truncate mb-0">{user.designation}</p>
              </div>


              <UncontrolledDropdown className="dropdown flex-shrink-0">
                <DropdownToggle className="text-body font-size-16" tag="a">
                  <Icon className="icon-xs" name="more-horizontal"></Icon>
                </DropdownToggle>

                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem to="#">Edit</DropdownItem>
                  <DropdownItem to="#">Action</DropdownItem>
                  <DropdownItem to="#">Remove</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardBody>

          <div className="btn-group btn-icon" role="group">
            <button type="button" className="btn btn-outline-light"
              data-bs-toggle="tooltip" data-bs-placement="top" title="Profile"><i
                className="uil uil-user"></i></button>
            <button type="button" className="btn btn-outline-light"
              data-bs-toggle="tooltip" data-bs-placement="top" title="Message"><i
                className="uil uil-envelope-alt"></i></button>
            <button type="button" className="btn btn-outline-light"
              data-bs-toggle="tooltip" data-bs-placement="top" title="Projects"><i
                className="uil uil-chart-pie"></i></button>
          </div>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default CardContact;
