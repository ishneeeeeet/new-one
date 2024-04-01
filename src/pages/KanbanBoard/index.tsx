import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import MetaTags from "react-meta-tags";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { withRouter } from "react-router-dom"
import { isEmpty, map } from "lodash"
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Task Cards
import UncontrolledBoard from "./UncontrolledBoard"

import "../../assets/scss/tasks.scss"
import { getKanbanboards as onGetKanbanBoards } from "../../slices/thunks"

//import images
import logoSm from "../../assets/images/logo-sm.png";
import avatar2 from "../../assets/images/users/avatar-2.jpg";

const KanbanBoard = (props: any) => {
  const dispatch = useDispatch();

  // const { kanbanboards } = useSelector((state: any) => ({
  //   kanbanboards: state.kanbanboards.kanbanboards,
  // }));
  const kanbanboards = [{ "id": 1, "title": "Todo", "tasks": [{ "id": 11, "taskid": "DS-045", "title": "Order Received", "description": "Process the tiles order to customer A", "team": [{ "id": 1, "name": "Emily Surface", "img": "Null", "badgeclass": "primary" }], "status": "Open", "badgecolor": "primary", "date": "09 Mar, 2023" }, { "id": 12, "taskid": "DS-046", "title": "Invoice Adjustment received", "description": "Do the adjustments in the existing order", "team": [{ "id": 2, "name": "James Scott", "img": "/static/media/avatar-2.0fdabd61.jpg" }, { "id": 3, "name": "Emily Surface", "img": "Null", "badgeclass": "info" }], "status": "Open", "badgecolor": "primary", "date": "08 Mar, 2023" }] }, { "id": 2, "title": "In Progress", "tasks": [{ "id": 21, "taskid": "DS-044", "title": "Shipment Ready to move", "description": "Order is ready and dispatched soon.", "team": [{ "id": 7, "name": "James Scott", "img": "/static/media/avatar-2.0fdabd61.jpg" }], "status": "Inprogress", "badgecolor": "warning", "date": "08 Mar, 2023" }] }, { "id": 3, "title": "Completed", "tasks": [{ "id": 31, "taskid": "DS-041", "title": "Shipment Received by customer", "description": "Installation Acknowledged and feedback received.", "team": [{ "id": 10, "name": "James Scott", "img": "/static/media/avatar-2.0fdabd61.jpg" }, { "id": 11, "name": "Lynn Hackett", "img": "Null", "badgeclass": "info" }], "status": "Completed", "badgecolor": "success", "date": "06 Mar, 2023" }] }]

  // useEffect(() => {
  //   if (kanbanboards && !kanbanboards.length) {
  //     dispatch(onGetKanbanBoards());
  //   }
  // }, [dispatch, kanbanboards]);

  const data = map(kanbanboards, kanbanboard => ({ ...kanbanboard, cards: kanbanboard.tasks }))

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Kanban Board | Calgary Carpet Empire</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Apps" breadcrumbItem="Kanban Board" />
          {!isEmpty(data) && (
            <React.Fragment>
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardBody className="p-4">
                      <div className="border-bottom pb-4 mb-4">
                        <Row>
                          <Col sm={6}>
                            <div className="d-flex">
                              {/* <div className="avatar flex-shrink-0 me-3">
                                <div className="avatar-title bg-light rounded-circle">
                                  <img src={logoSm} alt="" height="28" />
                                </div>
                              </div> */}
                              <div className="flex-grow-1">
                                <h5 className="font-size-16 mb-1">All Tasks</h5>
                                {/* <p className="text-muted mb-0">Lorem ipsum dolor sit amet adipiscing elit</p> */}
                              </div>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="mt-4 mt-sm-0">
                              <div className="avatar-group justify-content-sm-end">
                                <div className="avatar-group-item">
                                  <Link to="#" className="d-block" data-bs-toggle="tooltip" data-placement="top" title="Emily Surface">
                                    <div className="avatar-sm">
                                      <div className="avatar-title rounded-circle bg-primary">
                                        E
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="avatar-group-item">
                                  <Link to="#" className="d-block" data-bs-toggle="tooltip" data-placement="top" title="James Scott">
                                    <div className="avatar-sm">
                                      <img src={avatar2} alt="" className="img-fluid rounded-circle" />
                                    </div>
                                  </Link>
                                </div>
                                <div className="avatar-group-item">
                                  <Link to="#" className="d-block" data-bs-toggle="tooltip" data-placement="top" title="Lynn Hackett">
                                    <div className="avatar-sm">
                                      <div className="avatar-title rounded-circle bg-info">
                                        L
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="avatar-group-item">
                                  <Link to="#" className="d-block" data-bs-toggle="tooltip" data-placement="top" title="Add New">
                                    <div className="avatar-sm">
                                      <div className="avatar-title rounded-circle bg-light text-primary">
                                        <i className="mdi mdi-plus fs-5"></i>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <UncontrolledBoard board={{ columns: data }} content={kanbanboards} />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </React.Fragment>
          )}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(KanbanBoard);