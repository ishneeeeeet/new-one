import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  UncontrolledTooltip,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

//Import Icons
import Icon from "@ailibs/feather-react-ts";

interface CardProjectProps {
  projects: any;
  newstatus: any;
}

const CardProject = ({ projects, newstatus }: CardProjectProps) => {
  return (
    <React.Fragment>
      {
        projects
          .filter(
            ({ status }: any) => newstatus === status ||
              newstatus === "all"
          )
          .map(({ category, name, description, team }: any, key: any) => (
            <Col xl={3} sm={6} key={key}>
              <Card className="border shadow-none border">
                <CardBody>
                  <div className="d-flex align-items-start mb-3">
                    <div className="flex-grow-1">
                      <div className={category === 'Design' ? 'badge badge-soft-primary font-size-12' : 'badge badge-soft-info font-size-12'}>{category}</div>
                    </div>
                    <div className="flex-shrink-0">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          href="#"
                          className="text-body dropdown-toggle font-size-16"
                          tag="a"
                        >
                          <Icon className="icon-xs" name="more-horizontal" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem to="#">Action</DropdownItem>
                          <DropdownItem to="#">Another action</DropdownItem>
                          <DropdownItem to="#">
                            <hr className="dropdown-divider" />
                          </DropdownItem>
                          <DropdownItem to="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-size-15 mb-1 text-truncate"><Link to="projects-overview" className="text-dark">{name}</Link></h5>
                    <p className="text-muted mb-4 text-truncate">{description}</p>
                  </div>

                  <div className="border-top pt-3">
                    <div className="avatar-group align-items-center">
                      <div className="me-4">Team :</div>
                      {team.map((team: any, key: number) =>
                        !team.img || team.img !== "Null" ?
                          <React.Fragment key={key}>
                            <div className="avatar-group-item" >
                              <Link
                                to="#"
                                className="d-inline-block"
                                id={"member-" + team.id}
                              >
                                <img
                                  src={team.img}
                                  className="rounded-circle avatar-sm"
                                  alt=""
                                />
                                <UncontrolledTooltip
                                  placement="top"
                                  target={"member-" + team.id}
                                >
                                  {team.fullname}
                                </UncontrolledTooltip>
                              </Link>
                            </div>
                          </React.Fragment>
                          :
                          <React.Fragment key={key}>
                            <div className="avatar-group-item">
                              <Link
                                to="#"
                                id={"member-" + team.id}

                              >
                                <div className="avatar-sm">
                                  <span
                                    className={
                                      "avatar-title rounded-circle bg-" +
                                      team.color +
                                      " text-white font-size-16"
                                    }
                                  >
                                    {team.name.charAt(0)}
                                  </span>
                                  <UncontrolledTooltip
                                    placement="top"
                                    target={"member-" + team.id}
                                  >
                                    {team.fullname}
                                  </UncontrolledTooltip>
                                </div>
                              </Link>
                            </div>
                          </React.Fragment>
                      )
                      }
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))
      }
    </React.Fragment>
  )
}

export default CardProject