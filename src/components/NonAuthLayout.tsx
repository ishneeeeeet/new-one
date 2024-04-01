import React from "react";
import { withRouter } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

const NonAuthLayout = ({ children }: any) => {
  const {
    layoutMode,
  } = useSelector((state: any) => ({
    layoutMode: state.Layout.layoutMode
  }));

  if (layoutMode === "dark") {
    document.body.setAttribute("data-layout-mode", "dark");
  } else {
    document.body.setAttribute("data-layout-mode", "light");
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(NonAuthLayout);