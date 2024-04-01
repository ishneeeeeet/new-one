import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem
} from "reactstrap";

const RecentFile = (prop: any) => {
  const recentfile = [
    {
      id: 1,
      icon: "fas fa-file-alt align-middle text-primary me-2",
      file: "index.html",
      date: "12-10-2020, 09:45",
      size: "09",
    },
    {
      id: 2,
      icon: "fas fa-file-archive align-middle text-warning me-2",
      file: "Project-A.zip",
      date: "11-10-2020, 17:05",
      size: "115",
    },
    {
      id: 3,
      icon: "fas fa-image align-middle text-muted me-2",
      file: "Img-1.jpeg",
      date: "11-10-2020, 13:26",
      size: "86",
    },
    {
      id: 4,
      icon: "fas fa-file-alt align-middle text-muted me-2",
      file: "update list.txt",
      date: "10-10-2020, 11:32",
      size: "08",
    },
    {
      id: 5,
      icon: "fas fa-folder align-middle text-warning me-2",
      file: "Project B",
      date: "10-10-2020, 10:51",
      size: "72",
    },
    {
      id: 6,
      icon: "fas fa-file-alt align-middle text-muted me-2",
      file: "Changes list.txt",
      date: "09-10-2020, 17:05",
      size: "07",
    },
    {
      id: 7,
      icon: "fas fa-image align-middle text-success me-2",
      file: "Img-2.png",
      date: "09-10-2020, 15:12",
      size: "31",
    },
    {
      id: 8,
      icon: "fas fa-folder align-middle text-warning me-2",
      file: "Project C",
      date: "09-10-2020, 10:11",
      size: "20",
    },
    {
      id: 9,
      icon: "fas fa-file-alt align-middle text-primary me-2",
      file: "starter-page.html",
      date: "08-10-2020, 03:22",
      size: "11",
    },
  ];
  return (
    <React.Fragment>
      <div className="mt-4">
        <div className="d-flex flex-wrap">
          <h5 className="font-size-16 me-3">Recent Files</h5>

          <div className="ms-auto">
            <Link to="#" className="fw-medium text-reset">View All</Link>
          </div>
        </div>
        <hr className="mt-2" />

        <div className="table-responsive">
          <Table className="table align-middle table-nowrap table-hover mb-0">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date Modified</th>
                <th scope="col">
                  Size
                </th>
              </tr>
            </thead>
            <tbody>
              {recentfile.map((recentfile, key) => (
                <tr key={key}>
                  <td>
                    <Link to="#" className="text-dark fw-medium">
                      <i className={recentfile.icon}></i> {recentfile.file}
                    </Link>
                  </td>
                  <td>{recentfile.date}</td>
                  <td>{recentfile.size} KB</td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        color="white"
                        tag="a"
                        className="font-size-16 text-muted"
                      >
                        <i className="uil uil-ellipsis-h"></i>
                      </DropdownToggle>

                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem className="dropdown-item" to="#">
                          Open
                        </DropdownItem>
                        <DropdownItem className="dropdown-item" to="#">
                          Edit
                        </DropdownItem>
                        <DropdownItem className="dropdown-item" to="#">
                          Rename
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem className="dropdown-item" to="#">
                          Remove
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecentFile;
