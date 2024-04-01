import React from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import {
  Form,
  Card,
  CardBody,
  Col,
  Row,
  Container,
  CardHeader,
} from "reactstrap";

// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const FormEditors = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Form Editors | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Editors" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader className="card-header justify-content-between d-flex align-items-center">
                  <h4 className="card-title">react-draft-wysiwyg</h4>
                  <Link
                    to="//www.npmjs.com/package/react-draft-wysiwyg"
                    target="_blank" rel="noreferrer"
                    className="btn btn-sm btn-soft-secondary"
                  >
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>
                <CardBody>
                  <Form method="post">
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                    />
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormEditors;
