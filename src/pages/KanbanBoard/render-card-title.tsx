import React from "react"
import { CardHeader } from "reactstrap";
import {
  CardTitle,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

const RenderCardTitle = (props: any) => {
  return (
    <React.Fragment>
      <CardHeader className="bg-transparent border-bottom d-flex align-items-start">
        <div className="flex-grow-1">
          <CardTitle className="h4 mb-0">{props.title} <span className="ml-1 text-muted">(03)</span></CardTitle>
        </div>
        <div className="flex-shrink-0">
          <UncontrolledDropdown>
            <DropdownToggle href="#" className="arrow-none font-size-16" tag="a">
              <i className="uil uil-ellipsis-h text-muted" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem href="#">Edit</DropdownItem>
              <DropdownItem href="#">Delete</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </CardHeader>
    </React.Fragment>
  )
}

export default RenderCardTitle;