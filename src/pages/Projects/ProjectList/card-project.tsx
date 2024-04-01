import React from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Row,
  UncontrolledTooltip,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

import moment from 'moment';

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
          .map(({ category, name, description, team, dueDate, status }: any, key: any) => (
            <Card className="border shadow-none" key={key}>
              <CardBody>
                <div className="d-flex">
                  <div className="flex-grow-1 me-2 flex-wrap">
                    <h5 className="font-size-15 mb-1"><Link to="projects-overview" className="text-dark">{name}</Link></h5>
                    <p className="text-muted mb-0">{description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="d-flex gap-2">
                      <div>
                        <Link to="#" className="btn btn-light btn-sm"><i className="uil uil-pen"></i></Link>
                      </div>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          href="#"
                          className="btn btn-light btn-sm"
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
                </div>
              </CardBody>

              <div className="">
                <Row className="g-0">
                  <Col xl={3} sm={6}>
                    <div className="border p-3 h-100">
                      <div>
                        <p className="text-muted font-size-13 mb-2">Department</p>
                        <div className="badge badge-soft-primary font-size-12">{category}</div>
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} sm={6}>
                    <div className="border p-3 h-100">
                      <div>
                        <p className="text-muted font-size-13 mb-2">Due Date</p>
                        <h5 className="font-size-14 mb-0">{moment(dueDate).format('DD MMM Y')}</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} sm={6}>
                    <div className="border p-3 h-100">
                      <div>
                        <p className="text-muted font-size-13 mb-2">Status</p>
                        {status === 'active' ?
                          <div className="badge bg-warning font-size-12">{status}</div>
                          : <div className="badge bg-success font-size-12">{status}</div>}
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} sm={6}>
                    <div className="border p-3 h-100">
                      <div>
                        <div className="avatar-group align-items-center">
                          {team.map((team: any, key: number) =>
                            !team.img || team.img !== "Null" ?
                              <React.Fragment key={key}>
                                <div className="avatar-group-item" >
                                  <Link
                                    to="#"
                                    className="d-inline-block"
                                    id={"member" + team.id}
                                  >
                                    <img
                                      src={team.img}
                                      className="rounded-circle avatar-sm"
                                      alt=""
                                    />
                                    <UncontrolledTooltip
                                      placement="top"
                                      target={"member" + team.id}
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
                                    id={"member" + team.id}

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
                                        target={"member" + team.id}
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
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          ))
      }
    </React.Fragment>
  )
}

export default CardProject