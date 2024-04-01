import React from "react";
import MetaTags from "react-meta-tags";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const PageStarter = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Starter Page | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Utility" breadcrumbItem="Starter Page" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PageStarter;
