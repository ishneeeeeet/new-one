import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import ReactDrawer from "react-drawer";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Button,
  Card,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "react-drawer/lib/react-drawer.css";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiDrawer = () => {
  const [openLink, setOpenLink] = useState(false);
  const [menu1, setMenu1] = useState<boolean>(false);

  const [position1, setPosition1] = useState<any>();
  const [positiontop, setPositiontop] = useState<any>();
  const [positionright, setPositionRight] = useState<any>();
  const [positionbottom, setPositionBottom] = useState<any>();

  const [positionColorScrollig, setPositionColorScrollig] = useState<any>();
  const [positionBackdrop, setPositionBackdrop] = useState<any>();
  const [positionBackdroped, setPositionBackdroped] = useState<any>();

  const [openTop, setopenTop] = useState(false);
  const [openRight, setopenRight] = useState(false);
  const [openBottom, setopenBottom] = useState(false);

  const [openColorScrollig, setopenColorScrollig] = useState(false);
  const [openBackdrop, setopenBackdrop] = useState(false);
  const [openBackdroped, setopenBackdroped] = useState(false);

  const toggleTop = () => {
    setPositiontop("top");
    setopenTop(!openTop);
  };

  const toggleBottom = () => {
    setPositionBottom("bottom");
    setopenBottom(!openBottom);
  };

  const toggleRight = () => {
    setPositionRight("right");
    setopenRight(!openRight);
  };

  const toggleLinkTopDrawer = () => {
    setPosition1("left");
    setOpenLink(!openLink);
  };

  const toggleColorScrollig = () => {
    setPositionColorScrollig("left");
    setopenColorScrollig(!openColorScrollig);
  };

  const toggleBackdrop = () => {
    setPositionBackdrop("left");
    setopenBackdrop(!openBackdrop);
  };

  const toggleBackdroped = () => {
    setPositionBackdroped("left");
    setopenBackdroped(!openBackdroped);
  };

  const onLinkDrawerClose = () => {
    setOpenLink(false);
  };
  const onTopClose = () => {
    setopenTop(false);
  };
  const onRightClose = () => {
    setopenRight(false);
  };
  const onBottomClose = () => {
    setopenBottom(false);
  };

  const onColorScrolligClose = () => {
    setopenColorScrollig(false);
  };
  const onBackdropClose = () => {
    setopenBackdrop(false);
  };
  const onBackdropedClose = () => {
    setopenBackdroped(false);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Offcanvas | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Ui Elements" breadcrumbItem="Offcanvas" />
          <Row>
            <Col xl={4}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Demo</h4>
                  <Link to="//www.npmjs.com/package/react-drawer" target="_blank" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </CardHeader>
                <CardBody>
                  <div className="d-flex flex-wrap gap-2">
                    <Link className="btn btn-primary" to="#" 
                      onClick={toggleLinkTopDrawer}>
                      Link with href
                    </Link>
                    <Button color="primary" onClick={toggleLinkTopDrawer} disabled={openLink}>
                      Button with data-bs-target
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Placement</h4>
                  <Link to="//www.npmjs.com/package/react-drawer" target="_blank" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </CardHeader>
                <CardBody>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      className=""
                      onClick={toggleTop}
                      disabled={openTop}
                    >
                      Toggle top offcanvas
                    </Button>
                    <Button
                      color="primary"
                      className=""
                      onClick={toggleRight}
                      disabled={openRight}
                    >
                      Toggle right offcanvas
                    </Button>
                    <Button
                      color="primary"
                      className=""
                      onClick={toggleBottom}
                      disabled={openBottom}
                    >
                      Toggle bottom offcanvas
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Backdrop</h4>
                  <Link to="//www.npmjs.com/package/react-drawer" target="_blank" rel="noreferrer" className="btn btn-sm btn-soft-secondary">Docs <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </CardHeader>
                <CardBody>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      className=""
                      onClick={toggleColorScrollig}
                      disabled={openColorScrollig}
                    >
                      Enable body scrolling
                    </Button>
                    <Button
                      color="primary"
                      className=""
                      onClick={toggleBackdrop}
                      disabled={openBackdrop}
                    >
                      Enable backdrop (default)
                    </Button>
                    <Button
                      color="primary"
                      className=""
                      onClick={toggleBackdroped}
                      disabled={openBackdroped}
                    >
                      Enable both scrolling & backdrop
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <ReactDrawer open={openLink} position={position1} onClose={onLinkDrawerClose}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
          <Dropdown
            isOpen={menu1}
            toggle={() => setMenu1(!menu1)}
            className="mt-3"
          >
            <DropdownToggle tag="button" className="btn btn-primary">
              Dropdown button <i className="mdi mdi-chevron-down"></i>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem to="#">Action</DropdownItem>
              <DropdownItem to="#">Another action</DropdownItem>
              <DropdownItem to="#">Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </div>
      </ReactDrawer>

      <ReactDrawer open={openTop} position={positiontop} onClose={onTopClose}>
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel">Offcanvas Top</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          ...
        </div>
      </ReactDrawer>

      <ReactDrawer open={openRight} position={positionright} onClose={onRightClose}>
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas Right</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          ...
        </div>
      </ReactDrawer>

      <ReactDrawer open={openBottom} position={positionbottom} onClose={onBottomClose}>
        <div className="offcanvas-header">
          <h5 id="offcanvasBottomLabel">Offcanvas Bottom</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          ...
        </div>
      </ReactDrawer>

      <ReactDrawer open={openColorScrollig} position={positionColorScrollig} onClose={onColorScrolligClose}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </ReactDrawer>

      <ReactDrawer open={openBackdrop} position={positionBackdrop} onClose={onBackdropClose}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>.....</p>
        </div>
      </ReactDrawer>

      <ReactDrawer open={openBackdroped} position={positionBackdroped} onClose={onBackdropedClose}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </ReactDrawer>

    </React.Fragment>
  );
};

export default UiDrawer;
