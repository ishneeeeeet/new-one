import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";
// Redux
import { withRouter } from "react-router-dom";

// users
import user1 from "../../../assets/images/users/avatar-1.jpg";

//redux
import { useSelector } from "react-redux";

const ProfileMenu = (props: any) => {
  const { success } = useSelector((state: any) => ({
    success: state.profile.success,
  }));

  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState<boolean>(false);

  const [username, setusername] = useState("Admin");
  const [email, setemail] = useState<string>("admin@calgarycarpetempire.com");

  useEffect(() => {
    const getAuthUser = localStorage.getItem("authUser");
    if (getAuthUser) {
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const obj = JSON.parse(getAuthUser);
        if(obj.displayName){
          setusername(obj.displayName);
        }else{
          setusername(obj.fullName);
        }
        setemail(obj.email);
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        const obj = JSON.parse(getAuthUser);
        if(obj.username){
          setusername(obj.username);
          setemail(obj.email);
        }else{
          setusername(obj.name);
        }
        
      }
    }
  }, [success]);

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item user text-start d-flex align-items-center"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user1}
            alt="Header Avatar"
          />
          <span className="ms-2 d-none d-sm-block user-item-desc">
            <span className="user-name">{username}</span>
            <span className="user-sub-title">Administrator</span>
          </span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end pt-0" dir="left">
          <div className="p-3 bg-primary border-bottom">
            <h6 className="mb-0 text-white">{username}</h6>
            <p className="mb-0 font-size-11 text-white-50 fw-semibold">{email}</p>
          </div>
          <DropdownItem tag="a" href="/profile"><i className="mdi mdi-account-circle text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">{props.t("Profile")}</span></DropdownItem>
          <DropdownItem tag="a" href="chat"><i className="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">{props.t("Messages")}</span></DropdownItem>
          <DropdownItem tag="a" href="kanban-board"><i className="mdi mdi-calendar-check-outline text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">{props.t("Taskboard")}</span></DropdownItem>
          <DropdownItem tag="a" href="pages-faqs"><i className="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">{props.t("Help")}</span></DropdownItem>
          <DropdownItem divider />
          {/* <DropdownItem tag="a" href="#"><i className="mdi mdi-wallet text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">{props.t("Balance")} : <b>$6951.02</b></span></DropdownItem> */}
          <DropdownItem tag="a" className="d-flex align-items-center" href="user-settings"><i className="mdi mdi-cog-outline text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">{props.t("Settings")}</span><span className="badge badge-soft-success ms-auto">New</span></DropdownItem>
          <DropdownItem tag="a" href="auth-lockscreen-basic"><i className="mdi mdi-lock text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">{props.t("Lock screen")} </span></DropdownItem>
          <DropdownItem tag="a" href="/logout">
            <i className="mdi mdi-logout text-muted font-size-16 align-middle me-1"></i> <span className="align-middle">{props.t("Logout")}</span>
            </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default withTranslation()(withRouter(ProfileMenu));
