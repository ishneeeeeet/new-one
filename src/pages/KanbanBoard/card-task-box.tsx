import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Badge,
  CardBody,
  UncontrolledTooltip,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const CardTaskBox = (props: any) => {
  return (
    <React.Fragment>
      <Card className="task-box">
        <CardBody className="borad-width">
          <div className="d-flex align-items-start mb-2">
            <div className="flex-grow-1">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="task-todoCheck1" />
                <label className="form-check-label text-primary" htmlFor="task-todoCheck1">{props.data["taskid"]}</label>
              </div>
            </div>

            <div className="flex-shrink-0 ms-2">
              <UncontrolledDropdown>
                <DropdownToggle href="#" className="font-size-16 text-muted" tag="a">
                  <i className="mdi mdi-dots-horizontal" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem href="#">View</DropdownItem>
                  <DropdownItem href="#">Edit</DropdownItem>
                  <DropdownItem href="#">Remove</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
          <h5 className="font-size-14 mb-1">{props.data["title"]}</h5>

          <p className="text-muted text-truncate">{props.data["description"]}</p>

          <div className="avatar-group">
            {
              props.data['team'].map((member: any, key: any) =>
                <div className="avatar-group-item" key={key}>
                  <Link to="# " className="d-block" id={"memberTooltip" + member.id} >
                    <div className="avatar-sm">
                      {
                        member.img === "Null" ?

                          <div className={"avatar-title rounded-circle " + member.badgeclass}>
                            {member.name.charAt(0)}

                          </div>
                          : <img src={member.img} className="img-fluid rounded-circle" alt="Nazox" />
                      }
                    </div>
                  </Link>
                  <UncontrolledTooltip target={"memberTooltip" + member.id} placement="top">
                    {member.name}
                  </UncontrolledTooltip>
                </div>
              )
            }

          </div>
        </CardBody>
        <div className="card-footer bg-transparent border-top d-flex">
          <div className="flex-grow-1">
            <div className="font-size-13 text-muted">{props.data["date"]}</div>
          </div>
          <div className="flex-shrink-0 ms-2">
            <Badge
              className={"badge-soft-" + props.data["badgecolor"] + " font-size-12"}
              pill
            >
              {props.data["status"]}
            </Badge>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default CardTaskBox;