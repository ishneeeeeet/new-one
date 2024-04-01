import React from "react";
import MetaTags from "react-meta-tags";
import { Container, CardHeader, Card, Row, Col} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import BasicPills from "./BasicPills";

const FormWizard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Form Wizard | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Forms" breadcrumbItem="Form Wizard" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Forms Steps</h4>
                </CardHeader>
                <BasicPills />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormWizard;
