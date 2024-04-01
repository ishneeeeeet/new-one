import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

//Import Icons
import Icon from "@ailibs/feather-react-ts";

//i18n
import { withTranslation } from "react-i18next";

//redux
import { useSelector } from "react-redux";

const Navbar = (props: any) => {

  const [pricing, setpricing] = useState<boolean>(false);
  const [app, setapp] = useState<boolean>(false);
  const [email, setemail] = useState<boolean>(false);
  const [contact, setcontact] = useState<boolean>(false);
  const [component, setcomponent] = useState<boolean>(false);
  const [form, setform] = useState<boolean>(false);
  const [table, settable] = useState<boolean>(false);
  const [chart, setchart] = useState<boolean>(false);
  const [icon, seticon] = useState<boolean>(false);
  const [map, setmap] = useState<boolean>(false);
  const [extra, setextra] = useState<boolean>(false);
  const [invoice, setinvoice] = useState<boolean>(false);
  const [timeline, settimeline] = useState<boolean>(false);
  const [auth, setauth] = useState<boolean>(false);
  const [authbasic, setauthbasic] = useState<boolean>(false);
  const [authcover, setauthcover] = useState<boolean>(false);
  const [error, seterror] = useState<boolean>(false);
  const [error1, seterror1] = useState<boolean>(false);
  const [error2, seterror2] = useState<boolean>(false);
  const [utility, setutility] = useState<boolean>(false);
  const [project, setproject] = useState<boolean>(false);
  const [dashoboard, setdashoboard] = useState<boolean>(false);
  const [elements, setelements] = useState<boolean>(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul: any = document.getElementById("navigation");
    var items: any = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  function activateParentDropdown(item: any) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setdashoboard(!dashoboard);
                    }}
                  >
                    <Icon name="monitor" />{" "}
                    <span>{props.t("Dashboards")}</span>{" "}
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: dashoboard })}
                  >
                    <Link to="/dashboard" className="dropdown-item">
                      {props.t("Dashboard")}
                    </Link>
                    <Link to="/dashboards-analytics" className="dropdown-item">
                      {props.t("Analytics")}
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setelements(!elements);
                    }}
                  >
                    <Icon name="package" />{" "}
                    <span>{props.t("Elements")}</span>
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl",
                      { show: elements }
                    )}
                  >
                    <div className="ps-2 p-lg-0">
                      <Row>
                        <Col lg={8}>
                          <div>
                            <div className="menu-title">
                              {props.t("Components")}
                            </div>
                            <Row>
                              <Col lg={5}>
                                <div>
                                  <Link
                                    to="/ui-alerts"
                                    className="dropdown-item"
                                  >
                                    {props.t("Alerts")}
                                  </Link>
                                  <Link
                                    to="/ui-buttons"
                                    className="dropdown-item"
                                  >
                                    {props.t("Buttons")}
                                  </Link>
                                  <Link
                                    to="/ui-cards"
                                    className="dropdown-item"
                                  >
                                    {props.t("Cards")}
                                  </Link>
                                  <Link
                                    to="/ui-carousel"
                                    className="dropdown-item"
                                  >
                                    {props.t("Carousel")}
                                  </Link>
                                  <Link
                                    to="/ui-dropdowns"
                                    className="dropdown-item"
                                  >
                                    {props.t("Dropdowns")}
                                  </Link>
                                  <Link to="/ui-grid" className="dropdown-item">
                                    {props.t("Grid")}
                                  </Link>
                                  <Link
                                    to="/ui-images"
                                    className="dropdown-item"
                                  >
                                    {props.t("Images")}
                                  </Link>
                                  <Link
                                    to="/ui-modals"
                                    className="dropdown-item"
                                  >
                                    {props.t("Modals")}
                                  </Link>
                                  <Link
                                    to="/ui-offcanvas"
                                    className="dropdown-item"
                                  >
                                    {props.t("Offcanvas")}
                                  </Link>
                                </div>
                              </Col>
                              <Col lg={5}>
                                <div>
                                  <Link
                                    to="/ui-placeholders"
                                    className="dropdown-item"
                                  >
                                    {props.t("Placeholders")}
                                  </Link>
                                  <Link
                                    to="/ui-progressbars"
                                    className="dropdown-item"
                                  >
                                    {props.t("Progress Bars")}
                                  </Link>
                                  <Link
                                    to="/ui-tabs-accordions"
                                    className="dropdown-item"
                                  >
                                    {props.t("Tabs & Accordions")}
                                  </Link>
                                  <Link
                                    to="/ui-typography"
                                    className="dropdown-item"
                                  >
                                    {props.t("Typography")}
                                  </Link>
                                  <Link
                                    to="/ui-video"
                                    className="dropdown-item"
                                  >
                                    {props.t("Video")}
                                  </Link>
                                  <Link
                                    to="/ui-general"
                                    className="dropdown-item"
                                  >
                                    {props.t("General")}
                                  </Link>
                                  <Link
                                    to="/ui-colors"
                                    className="dropdown-item"
                                  >
                                    {props.t("Colors")}
                                  </Link>
                                  <Link
                                    to="/ui-utilities"
                                    className="dropdown-item"
                                  >
                                    {props.t("Utilities")}
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div>
                            <div className="menu-title">
                              {props.t("Extended")}
                            </div>
                            <Link
                              to="/extended-lightbox"
                              className="dropdown-item"
                            >
                              {props.t("Lightbox")}
                            </Link>
                            <Link
                              to="/extended-rangeslider"
                              className="dropdown-item"
                            >
                              {props.t("Range Slider")}
                            </Link>
                            <Link
                              to="/extended-sweet-alert"
                              className="dropdown-item"
                            >
                              {props.t("SweetAlert 2")}
                            </Link>
                            <Link
                              to="/extended-rating"
                              className="dropdown-item"
                            >
                              {props.t("Rating")}
                            </Link>
                            <Link
                              to="/extended-notifications"
                              className="dropdown-item"
                            >
                              {props.t("Notifications")}
                            </Link>
                            <Link
                              to="/extended-swiperslider"
                              className="dropdown-item"
                            >
                              {props.t("Swiper Slider")}
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                  >
                    <Icon name="grid" />{" "}
                    <span>{props.t("Apps")}</span>
                    <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <Link to="/calendar" className="dropdown-item">
                      {props.t("Calendar")}
                    </Link>
                    <Link to="/chat" className="dropdown-item">
                      {props.t("Chat")}
                    </Link>
                    <Link to="/kanban-board" className="dropdown-item">
                      {props.t("Kanban Board")}
                    </Link>
                    <Link to="/file-manager" className="dropdown-item">
                      {props.t("File Manager")}
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setemail(!email);
                        }}
                      >
                        {props.t("Email")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: email })}
                      >
                        <Link to="/inbox" className="dropdown-item">
                          {props.t("Inbox")}
                        </Link>
                        <Link to="/read-email" className="dropdown-item">
                          {props.t("Read Email")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setcontact(!contact);
                        }}
                      >
                        {props.t("Contacts")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: contact,
                        })}
                      >
                        <Link to="/user-grid" className="dropdown-item">
                          {props.t("User Grid")}
                        </Link>
                        <Link to="/user-list" className="dropdown-item">
                          {props.t("User List")}
                        </Link>
                        <Link to="/user-settings" className="dropdown-item">
                          {props.t("User Settings")}
                        </Link>
                      </div>
                    </div>
                    <Link to="/gallery" className="dropdown-item">
                      Gallery
                    </Link>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setproject(!project);
                        }}
                      >
                        {props.t("Projects")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: project,
                        })}
                      >
                        <Link to="/projects-grid" className="dropdown-item">
                          {props.t("Projects Grid")}
                        </Link>
                        <Link to="/projects-list" className="dropdown-item">
                          {props.t("Projects List")}
                        </Link>
                        <Link to="/projects-overview" className="dropdown-item">
                          {props.t("Project Overview")}
                        </Link>
                        <Link to="/projects-create" className="dropdown-item">
                          {props.t("Create New")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setcomponent(!component);
                    }}
                  >
                    <Icon name="layers" />{" "}
                    <span>{props.t("Components")}</span>
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: component })}
                  >
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setform(!form);
                        }}
                      >
                        {props.t("Forms")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: form })}
                      >
                        <Link to="/form-elements" className="dropdown-item">
                          {props.t("Basic Elements")}
                        </Link>
                        <Link to="/form-validation" className="dropdown-item">
                          {props.t("Validation")}
                        </Link>
                        <Link to="/form-advanced" className="dropdown-item">
                          {props.t("Advanced Plugins")}
                        </Link>
                        <Link to="/form-editors" className="dropdown-item">
                          {props.t("Editors")}
                        </Link>
                        <Link to="/form-uploads" className="dropdown-item">
                          {props.t("File Upload")}{" "}
                        </Link>
                        <Link to="/form-wizard" className="dropdown-item">
                          {props.t("Wizard")}
                        </Link>
                        <Link to="/form-mask" className="dropdown-item">
                          {props.t("Form Mask")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          settable(!table);
                        }}
                      >
                        {props.t("Tables")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: table })}
                      >
                        <Link to="/tables-basic" className="dropdown-item">
                          {props.t("Bootstrap Basic")}
                        </Link>
                        <Link to="/tables-advanced" className="dropdown-item">
                          {props.t("Advance Tables")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setchart(!chart);
                        }}
                      >
                        {props.t("Apex Charts")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: chart })}
                      >
                        <Link to="/charts-line" className="dropdown-item">
                          {" "}
                          {props.t("Line")}
                        </Link>
                        <Link to="/charts-area" className="dropdown-item">
                          {" "}
                          {props.t("Area")}
                        </Link>
                        <Link to="/charts-column" className="dropdown-item">
                          {" "}
                          {props.t("Column")}
                        </Link>
                        <Link to="/charts-bar" className="dropdown-item">
                          {" "}
                          {props.t("Bar")}
                        </Link>
                        <Link to="/charts-mixed" className="dropdown-item">
                          {" "}
                          {props.t("Mixed")}
                        </Link>
                        <Link to="/charts-timeline" className="dropdown-item">
                          {" "}
                          {props.t("Timeline")}
                        </Link>
                        <Link
                          to="/charts-candlestick"
                          className="dropdown-item"
                        >
                          {" "}
                          {props.t("Candlestick")}
                        </Link>
                        <Link to="/charts-boxplot" className="dropdown-item">
                          {" "}
                          {props.t("Boxplot")}
                        </Link>
                        <Link to="/charts-bubble" className="dropdown-item">
                          {" "}
                          {props.t("Bubble")}
                        </Link>
                        <Link to="/charts-scatter" className="dropdown-item">
                          {" "}
                          {props.t("Scatter")}
                        </Link>
                        <Link to="/charts-heatmap" className="dropdown-item">
                          {" "}
                          {props.t("Heatmap")}
                        </Link>
                        <Link to="/charts-treemap" className="dropdown-item">
                          {" "}
                          {props.t("Treemap")}
                        </Link>
                        <Link to="/charts-pie" className="dropdown-item">
                          {" "}
                          {props.t("Pie")}
                        </Link>
                        <Link to="/charts-radialbar" className="dropdown-item">
                          {" "}
                          {props.t("Radialbar")}
                        </Link>
                        <Link to="/charts-radar" className="dropdown-item">
                          {" "}
                          {props.t("Radar")}
                        </Link>
                        <Link to="/charts-polararea" className="dropdown-item">
                          {" "}
                          {props.t("Polararea")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          seticon(!icon);
                        }}
                      >
                        {props.t("Icons")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: icon })}
                      >
                        <Link to="/icons-unicons" className="dropdown-item">
                          {props.t("Unicons")}
                        </Link>
                        <Link
                          to="/icons-feathericons"
                          className="dropdown-item"
                        >
                          {props.t("Feather icons")}
                        </Link>
                        <Link to="/icons-boxicons" className="dropdown-item">
                          {props.t("Boxicons")}
                        </Link>
                        <Link
                          to="/icons-materialdesign"
                          className="dropdown-item"
                        >
                          {props.t("Material Design")}
                        </Link>
                        <Link to="/icons-fontawesome" className="dropdown-item">
                          {props.t("Font awesome")}{" "}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setmap(!map);
                        }}
                      >
                        {props.t("Maps")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: map })}
                      >
                        <Link to="/maps-google" className="dropdown-item">
                          {props.t("Google")}{" "}
                        </Link>
                        <Link to="/maps-vector" className="dropdown-item">
                          {props.t("Vector")}{" "}
                        </Link>
                        <Link to="/maps-leaflet" className="dropdown-item">
                          {props.t("Leaflet")}{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setextra(!extra);
                    }}
                  >
                    <Icon name="file" />{" "}
                    <span>{props.t("Extra pages")}</span>
                    <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: extra })}>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="nav-link dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setpricing(!pricing);
                        }}
                      >
                        <span>{props.t("Pricing")} </span>
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: pricing,
                        })}
                      >
                        <Link to="/pricing-basic" className="dropdown-item">
                          {props.t("Basic")}
                        </Link>
                        <Link to="/pricing-table" className="dropdown-item">
                          {props.t("table")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault();
                          setinvoice(!invoice);
                        }}
                      >
                        {props.t("Invoices")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: invoice,
                        })}
                      >
                        <Link to="/invoices-list" className="dropdown-item">
                          {props.t("Invoice List")}
                        </Link>
                        <Link to="/invoices-detail" className="dropdown-item">
                          {props.t("Invoice Detail")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        className="dropdown-item dropdown-toggle arrow-none"
                        to="/#"
                        id="topnav-timeline"
                        onClick={e => {
                          e.preventDefault();
                          settimeline(!timeline);
                        }}
                      >
                        <span data-key="t-timeline">{props.t("Timeline")}</span>{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: timeline,
                        })}
                      >
                        <Link
                          to="timeline-center"
                          className="dropdown-item"
                          data-key="t-center-view"
                        >
                          {props.t("Center View")}
                        </Link>
                        <Link
                          to="timeline-left"
                          className="dropdown-item"
                          data-key="t-left-view"
                        >
                          {props.t("Left View")}
                        </Link>
                        <Link
                          to="timeline-horizontal"
                          className="dropdown-item"
                          data-key="t-horizontal-view"
                        >
                          {props.t("Horizontal View")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        className="dropdown-item dropdown-toggle arrow-none"
                        to="/#"
                        id="topnav-auth"
                        onClick={e => {
                          e.preventDefault();
                          setauth(!auth);
                        }}
                      >
                        <span data-key="t-authentication">{props.t("Authentication")}</span>{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div className={classname("dropdown-menu", { show: auth })}>
                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            id="topnav-auth-basic"
                            onClick={e => {
                              e.preventDefault();
                              setauthbasic(!authbasic);
                            }}
                          >
                            <span data-key="t-basic">{props.t("Basic")}</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            aria-labelledby="topnav-auth-basic"
                            className={classname("dropdown-menu", { show: authbasic })}
                          >
                            <Link
                              to="auth-signin-basic"
                              className="dropdown-item"
                              data-key="t-signin"
                            >
                              {props.t("Sign In")}
                            </Link>
                            <Link
                              to="auth-signup-basic"
                              className="dropdown-item"
                              data-key="t-signup"
                            >
                              {props.t("Sign Up")}
                            </Link>
                            <Link
                              to="auth-signout-basic"
                              className="dropdown-item"
                              data-key="t-signout"
                            >
                              {props.t("Sign Out")}
                            </Link>
                            <Link
                              to="auth-lockscreen-basic"
                              className="dropdown-item"
                              data-key="t-lock-screen"
                            >
                              {props.t("Lock Screen")}
                            </Link>
                            <Link
                              to="auth-forgotpassword-basic"
                              className="dropdown-item"
                              data-key="t-forgot-password"
                            >
                              {props.t("Forgot Password")}
                            </Link>
                            <Link
                              to="auth-resetpassword-basic"
                              className="dropdown-item"
                              data-key="t-reset-password"
                            >
                              {props.t("Reset Password")}
                            </Link>
                            <Link
                              to="auth-emailverification-basic"
                              className="dropdown-item"
                              data-key="t-email-verification"
                            >
                              {props.t("Email Verification")}
                            </Link>
                            <Link
                              to="auth-2step-basic"
                              className="dropdown-item"
                              data-key="t-2step-verification"
                            >
                              {props.t("2-step Verification")}
                            </Link>
                            <Link
                              to="auth-thankyou-basic"
                              className="dropdown-item"
                              data-key="t-thankyou"
                            >
                              {props.t("Thank you")}
                            </Link>
                          </div>
                        </div>
                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            id="topnav-auth-cover"
                            onClick={e => {
                              e.preventDefault();
                              setauthcover(!authcover);
                            }}
                          >
                            <span data-key="t-cover">{props.t("Cover")}</span>{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            aria-labelledby="topnav-auth-cover"
                            className={classname("dropdown-menu", { show: authcover })}
                          >
                            <Link
                              to="auth-signin-cover"
                              className="dropdown-item"
                              data-key="t-signin"
                            >
                              {props.t("Sign In")}
                            </Link>
                            <Link
                              to="auth-signup-cover"
                              className="dropdown-item"
                              data-key="t-signup"
                            >
                              {props.t("Sign Up")}
                            </Link>
                            <Link
                              to="auth-signout-cover"
                              className="dropdown-item"
                              data-key="t-signout"
                            >
                              {props.t("Sign Out")}
                            </Link>
                            <Link
                              to="auth-lockscreen-cover"
                              className="dropdown-item"
                              data-key="t-lock-screen"
                            >
                              {props.t("Lock Screen")}
                            </Link>
                            <Link
                              to="auth-forgotpassword-cover"
                              className="dropdown-item"
                              data-key="t-forgot-password"
                            >
                              {props.t("Forgot Password")}
                            </Link>
                            <Link
                              to="auth-resetpassword-cover"
                              className="dropdown-item"
                              data-key="t-reset-password"
                            >
                              {props.t("Reset Password")}
                            </Link>
                            <Link
                              to="auth-emailverification-cover"
                              className="dropdown-item"
                              data-key="t-email-verification"
                            >
                              {props.t("Email Verification")}
                            </Link>
                            <Link
                              to="auth-2step-cover"
                              className="dropdown-item"
                              data-key="t-2step-verification"
                            >
                              {props.t("2-step Verification")}
                            </Link>
                            <Link
                              to="auth-thankyou-cover"
                              className="dropdown-item"
                              data-key="t-thankyou"
                            >
                              {props.t("Thank you")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        className="dropdown-item dropdown-toggle arrow-none"
                        to="/#"
                        id="topnav-error"
                        onClick={e => {
                          e.preventDefault();
                          seterror(!error);
                        }}
                      >
                        <span data-key="t-error-pages">{props.t("Error Pages")}</span>{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div className={classname("dropdown-menu", { show: error })}>
                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            id="topnav-404"
                            onClick={e => {
                              e.preventDefault();
                              seterror1(!error1);
                            }}
                          >
                            <span>{props.t("404")}</span> <div className="arrow-down"></div>
                          </Link>
                          <div className={classname("dropdown-menu", { show: error1, })}>
                            <Link
                              to="error-404-basic"
                              className="dropdown-item"
                              data-key="t-basic"
                            >
                              {props.t("Basic")}
                            </Link>
                            <Link
                              to="error-404-cover"
                              className="dropdown-item"
                              data-key="t-cover"
                            >
                              {props.t("Cover")}
                            </Link>
                          </div>
                        </div>
                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            to="/#"
                            id="topnav-500"
                            onClick={e => {
                              e.preventDefault();
                              seterror2(!error2);
                            }}
                          >
                            <span>{props.t("500")}</span> <div className="arrow-down"></div>
                          </Link>
                          <div className={classname("dropdown-menu", { show: error2, })}>
                            <Link
                              to="error-500-basic"
                              className="dropdown-item"
                              data-key="t-basic"
                            >
                              {props.t("Basic")}
                            </Link>
                            <Link
                              to="error-500-cover"
                              className="dropdown-item"
                              data-key="t-cover"
                            >
                              {props.t("Cover")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        className="dropdown-item dropdown-toggle arrow-none"
                        to="/#"
                        id="topnav-utility"
                        onClick={e => {
                          e.preventDefault();
                          setutility(!utility);
                        }}
                      >
                        <span data-key="t-utility">{props.t("Utility")}</span>{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div className={classname("dropdown-menu", { show: utility, })}>
                        <Link
                          to="pages-starter"
                          className="dropdown-item"
                          data-key="t-starter-page"
                        >
                          {props.t("Starter Page")}
                        </Link>
                        <Link
                          to="pages-profile"
                          className="dropdown-item"
                          data-key="t-profile"
                        >
                          {props.t("Profile")}
                        </Link>
                        <Link
                          to="pages-maintenance"
                          className="dropdown-item"
                          data-key="t-maintenance"
                        >
                          {props.t("Maintenance")}
                        </Link>
                        <Link
                          to="pages-comingsoon"
                          className="dropdown-item"
                          data-key="t-coming-soon"
                        >
                          {props.t("Coming Soon")}
                        </Link>
                        <Link
                          to="pages-faqs"
                          className="dropdown-item"
                          data-key="t-faqs"
                        >
                          {props.t("FAQs")}
                        </Link>
                      </div>
                    </div>

                  </div>
                </li>
                
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(withRouter(Navbar));