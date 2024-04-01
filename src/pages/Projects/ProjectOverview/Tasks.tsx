import {Card,CardBody,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap'
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";

//import images
import avatar2 from "../../../assets/images/users/avatar-2.jpg";

const Tasks = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                        <h5 className="card-title">Tasks</h5>
                    </div>
                    <div className="flex-shrink-0">
                        <UncontrolledDropdown className="float-end">
                            <DropdownToggle href="#" className="btn btn-link text-dark shadow-none" tag="a">
                                <i className="uil uil-ellipsis-h"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another action</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>

                <SimpleBar style={{ maxHeight: "325px" }}>
                    <div className="table-responsive">
                        <table className="table align-middle table-nowrap mb-0">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: "40px" }}></th>
                                    <th scope="col" style={{ width: "140px" }}>Task ID</th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Assignee</th>
                                    <th scope="col">Status</th>
                                    <th scope="col" style={{ width: "140px" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check font-size-16">
                                            <input className="form-check-input" type="checkbox" value="" id="taskcheck01" />
                                            <label className="form-check-label" htmlFor="taskcheck01"></label>
                                        </div>
                                    </td>
                                    <td><Link to="#">DS-045</Link></td>
                                    <td>
                                        <h5 className="font-size-14"><Link to="#" className="text-dark">Dashboard UI</Link></h5>
                                        <p className="text-muted mb-0">09 Mar, 2020</p>
                                    </td>

                                    <td>
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <Link to="#" className="d-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Emily Surface">
                                                    <div className="avatar-sm">
                                                        <div className="avatar-title rounded-circle bg-primary">
                                                            E
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-primary font-size-12">Open</span>
                                    </td>
                                    <td>
                                        <UncontrolledDropdown>
                                            <DropdownToggle href="#" className="font-size-16 px-2 text-muted" tag="a">
                                                <i className="uil uil-ellipsis-h"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem href="#">Action</DropdownItem>
                                                <DropdownItem href="#">Another action</DropdownItem>
                                                <DropdownItem href="#">Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check font-size-16">
                                            <input className="form-check-input" type="checkbox" value="" id="taskcheck02" />
                                            <label className="form-check-label" htmlFor="taskcheck02"></label>
                                        </div>
                                    </td>
                                    <td><Link to="#">DS-044</Link></td>
                                    <td>
                                        <h5 className="font-size-14"><Link to="#" className="text-dark">Calendar App Page</Link></h5>
                                        <p className="text-muted mb-0">08 Mar, 2020</p>
                                    </td>

                                    <td>
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <Link to="#" className="d-block" data-bs-toggle="tooltip" data-bs-placement="top" title="James Scott">
                                                    <div className="avatar-sm">
                                                        <img src={avatar2} alt="" className="img-fluid rounded-circle" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link to="#" className="d-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Lynn Hackett">
                                                    <div className="avatar-sm">
                                                        <div className="avatar-title rounded-circle bg-info">
                                                            E
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-primary font-size-12">Open</span>
                                    </td>
                                    <td>
                                        <UncontrolledDropdown>
                                            <DropdownToggle href="#" className="font-size-16 px-2 text-muted" tag="a">
                                                <i className="uil uil-ellipsis-h"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem href="#">Action</DropdownItem>
                                                <DropdownItem href="#">Another action</DropdownItem>
                                                <DropdownItem href="#">Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check font-size-16">
                                            <input className="form-check-input" type="checkbox" value="" id="taskcheck03" />
                                            <label className="form-check-label" htmlFor="taskcheck03"></label>
                                        </div>
                                    </td>
                                    <td><Link to="#">DS-043</Link></td>
                                    <td>
                                        <h5 className="font-size-14"><Link to="#" className="text-dark">Authentication Page Design</Link></h5>
                                        <p className="text-muted mb-0">07 Mar, 2020</p>
                                    </td>
                                    <td>
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <Link to="#" className="d-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Emily Surface">
                                                    <div className="avatar-sm">
                                                        <div className="avatar-title rounded-circle bg-danger">
                                                            E
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-warning font-size-12">Inprogress</span>
                                    </td>
                                    <td>
                                        <UncontrolledDropdown>
                                            <DropdownToggle href="#" className="font-size-16 px-2 text-muted" tag="a">
                                                <i className="uil uil-ellipsis-h"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem href="#">Action</DropdownItem>
                                                <DropdownItem href="#">Another action</DropdownItem>
                                                <DropdownItem href="#">Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check font-size-16">
                                            <input className="form-check-input" type="checkbox" value="" id="taskcheck04" />
                                            <label className="form-check-label" htmlFor="taskcheck04"></label>
                                        </div>
                                    </td>
                                    <td><Link to="#">DS-042</Link></td>
                                    <td>
                                        <h5 className="font-size-14"><Link to="#" className="text-dark">Component Pages</Link></h5>
                                        <p className="text-muted mb-0">06 Mar, 2020</p>
                                    </td>

                                    <td>
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <Link to="#" className="d-block" data-bs-toggle="tooltip" data-bs-placement="top" title="James Scott">
                                                    <div className="avatar-sm">
                                                        <img src={avatar2} alt="" className="img-fluid rounded-circle" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-warning font-size-12">Inprogress</span>
                                    </td>
                                    <td>
                                        <UncontrolledDropdown>
                                            <DropdownToggle href="#" className="font-size-16 px-2 text-muted" tag="a">
                                                <i className="uil uil-ellipsis-h"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem href="#">Action</DropdownItem>
                                                <DropdownItem href="#">Another action</DropdownItem>
                                                <DropdownItem href="#">Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-check font-size-16">
                                            <input className="form-check-input" type="checkbox" value="" id="taskcheck05" />
                                            <label className="form-check-label" htmlFor="taskcheck05"></label>
                                        </div>
                                    </td>
                                    <td><Link to="#">DS-041</Link></td>
                                    <td>
                                        <h5 className="font-size-14"><Link to="#" className="text-dark">Admin layout design</Link></h5>
                                        <p className="text-muted mb-0">05 Mar, 2020</p>
                                    </td>

                                    <td>
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <Link to="#" className="d-block" data-bs-toggle="tooltip" data-bs-placement="top" title="James Scott">
                                                    <div className="avatar-sm">
                                                        <img src={avatar2} alt="" className="img-fluid rounded-circle" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Link to="#" className="d-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Lynn Hackett">
                                                    <div className="avatar-sm">
                                                        <div className="avatar-title rounded-circle bg-info">
                                                            L
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-soft-success font-size-12">Completed</span>
                                    </td>
                                    <td>
                                        <UncontrolledDropdown>
                                            <DropdownToggle href="#" className="font-size-16 px-2 text-muted" tag="a">
                                                <i className="uil uil-ellipsis-h"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem href="#">Action</DropdownItem>
                                                <DropdownItem href="#">Another action</DropdownItem>
                                                <DropdownItem href="#">Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </SimpleBar>
            </CardBody>
        </Card>

    );
}

export default Tasks;