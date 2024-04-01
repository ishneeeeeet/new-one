import React from "react";
import MetaTags from "react-meta-tags";
import {
  Container,
  Row,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import NormalValidation from "./NormalValidation";
import TooltipsValidation from "./TooltipsValidation";

const FormValidation = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Form Validation | Dashonic - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Forms" breadcrumbItem="Form Validation" />

          <Row>
            {/* import NormalValidation */}
            <NormalValidation />

            {/* import TooltipsValidation */}
            <TooltipsValidation />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormValidation;
