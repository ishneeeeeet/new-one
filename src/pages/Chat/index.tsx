import React, { useEffect, useState, useCallback } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { isEmpty, map } from "lodash";
import moment from "moment";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledDropdown,
} from "reactstrap";

import classnames from "classnames";

//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//import images
import logoSm from "../../assets/images/logo-sm.png";
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import {
  addMessage as onAddMessage,
  getChats as onGetChats,
  getContacts as onGetContacts,
  getGroups as onGetGroups,
  getMessages as onGetMessages,
} from "../../slices/thunks";

//redux
import { useSelector, useDispatch } from "react-redux";

interface CurrentUserTypes {
  name: string;
  isActive: boolean;
}
const Chat = () => {
  const dispatch = useDispatch();

  const { chats, groups, contacts, messages } = useSelector((state: any) => ({
    chats: state.chat.chats,
    groups: state.chat.groups,
    contacts: state.chat.contacts,
    messages: state.chat.messages,
  }));

  const [messageBox, setMessageBox] = useState<any>(null);
  const [Chat_ACTIVE_TAB, setChat_ACTIVE_TAB] = useState("chat");
  const [Chat_GROUP_IMAGE, setChat_GROUP_IMAGE] = useState("G");
  const [Chat_Contact_Image, setChat_Contact_Image] = useState("A");
  const [CurrentNullImage, setCurrentNullImage] = useState("");
  const [currentRoomId, setCurrentRoomId] = useState<number>(1);
  const [currentUser, setCurrentUser] = useState<CurrentUserTypes>({
    name: "Henry Wells",
    isActive: true,
  });
  const [menu1, setMenu1] = useState<boolean>(false);
  const [search_Menu, setsearch_Menu] = useState<boolean>(false);
  const [settings_Menu, setsettings_Menu] = useState<boolean>(false);
  const [activeTab, setactiveTab] = useState<string>("1");
  const [Chat_Box_Username, setChat_Box_Username] =
    useState<string>("Daniel Pickering");
  const [CurrentImage, setCurrentImage] =
    useState<string>(avatar2);
  const [Chat_Box_User_Status, setChat_Box_User_Status] =
    useState<string>("online");
  const [curMessage, setcurMessage] = useState<string>("");

  useEffect(() => {
    dispatch(onGetChats());
    dispatch(onGetGroups());
    dispatch(onGetContacts());
    dispatch(onGetMessages(currentRoomId));
  }, [dispatch, currentRoomId]);

  const scrollToBottom = useCallback(() => {
    if (messageBox) {
      messageBox.scrollTop = messageBox.scrollHeight + 1000;
    }
  }, [messageBox]);

  useEffect(() => {
    if (!isEmpty(messages)) scrollToBottom();
  }, [messages, scrollToBottom]);

  //Toggle Chat Box Menus
  const toggleSearch = () => {
    setsearch_Menu(!search_Menu);
  };

  const toggleSettings = () => {
    setsettings_Menu(!settings_Menu);
  };

  const toggleTab = (tab: any) => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  //Use For Chat Box
  const userChatOpen = (roomId: any, name: string, id: any, status: any, image: string, nameimg?: any) => {
    setCurrentImage(image);
    setChat_Contact_Image(image);
    setChat_GROUP_IMAGE(image);
    setCurrentNullImage("");
    if (image === "Null") {
      setCurrentNullImage(nameimg);
    }
    setChat_Box_Username(name);
    setCurrentRoomId(roomId);
    dispatch(onGetMessages(roomId));
  };

  const changeactive_tab = (activte: any) => {
    setCurrentImage(avatar1);

    setChat_GROUP_IMAGE("G");
    setChat_Contact_Image("A");
    setChat_ACTIVE_TAB(activte);
  };

  const addMessage = (roomId: number, sender: string) => {
    const message: any = {
      id: Math.floor(Math.random() * 100),
      roomId,
      sender,
      message: curMessage,
      createdAt: new Date(),
    };
    setcurMessage("");
    dispatch(onAddMessage(message));
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Chat | Dashonic - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Apps" breadcrumbItem="Chat" />

          <div className="d-lg-flex mb-4">
            <Card className="chat-leftsidebar">
              <div className="pt-4 px-4 bg-soft-primary rounded-top">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1">
                    <img
                      src={logoSm}
                      className="avatar-sm h-auto"
                      alt=""
                    />
                  </div>

                  <div className="flex-shrink-0">
                    <div className="d-flex gap-2 align-items-start">
                      <div className="dropdown chat-noti-dropdown">
                        <button className="btn dropdown-toggle py-0 shadow-none" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="uil uil-search"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-md p-2">
                          <form className="px-2">
                            <div>
                              <input type="text" className="form-control bg-light rounded" placeholder="Search..." />
                            </div>
                          </form>
                        </div>
                      </div>
                      <Dropdown
                        isOpen={menu1}
                        toggle={() => setMenu1(!menu1)}
                        className="chat-noti-dropdown"
                      >
                        <DropdownToggle tag="button" className="btn dropdown-toggle py-0">
                          <i className="uil uil-ellipsis-h"></i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem to="#">Profile</DropdownItem>
                          <DropdownItem to="#">Edit</DropdownItem>
                          <DropdownItem to="#">Add Contact</DropdownItem>
                          <DropdownItem to="#">Setting</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </div>

                <div className="chat-leftsidebar-nav mt-4">
                  <ul className="nav nav-tabs nav-tabs-custom border-bottom-0 nav-justified">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "1",
                        })}
                        onClick={() => {
                          toggleTab("1");
                          changeactive_tab("chat");
                        }}
                      >
                        <i className="uil uil-comment-lines font-size-20 d-sm-none"></i>
                        <span className="d-none d-sm-block">Chat</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "2",
                        })}
                        onClick={() => {
                          toggleTab("2");
                          changeactive_tab("group");
                        }}
                      >
                        <i className="uil uil-users-alt font-size-20 d-sm-none"></i>
                        <span className="d-none d-sm-block">Groups</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "3",
                        })}
                        onClick={() => {
                          toggleTab("3");
                          changeactive_tab("contacts");
                        }}
                      >
                        <i className="uil uil-user-circle font-size-20 d-sm-none"></i>
                        <span className="d-none d-sm-block">Contacts</span>
                      </NavLink>
                    </NavItem>
                  </ul>
                </div>
              </div>

              <div>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <PerfectScrollbar style={{ height: "604px" }} className="chat-message-list">
                      <div className="p-4">
                        <div>

                          <h5 className="font-size-14 mb-3">Recent</h5>

                          <ul className="list-unstyled chat-list">
                            {map(chats, chat => (
                              <li
                                key={chat.id + chat.status}
                                className={
                                  currentRoomId === chat.roomId ? "active" : ""
                                }
                              >
                                <Link
                                  to="#"
                                  onClick={() => {
                                    userChatOpen(
                                      chat.roomId,
                                      chat.name,
                                      chat.id,
                                      chat.status,
                                      chat.image,
                                      chat.nameimg
                                    );
                                  }}
                                >
                                  <div className="d-flex align-items-start">

                                    <div className={
                                      chat.status === ""
                                        ? "flex-shrink-0 user-img align-self-center me-3"
                                        : chat.status === "online"
                                          ? "flex-shrink-0 user-img online align-self-center me-3"
                                          : "flex-shrink-0 user-img away align-self-center me-3"
                                    }>

                                      {chat.image == "Null" ?
                                        <div className="avatar-sm align-self-center">
                                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                            {chat.nameimg}
                                          </span>
                                        </div>
                                        :
                                        <img
                                          src={chat.image}
                                          className="rounded-circle avatar-sm"
                                          alt=""
                                        />
                                      }

                                      <span className="user-status"></span>

                                    </div>

                                    <div className="flex-grow-1 overflow-hidden">
                                      <h5 className="text-truncate font-size-14 mb-1">
                                        {chat.name}
                                      </h5>
                                      <p className="text-truncate mb-0">
                                        {chat.description}
                                      </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                      <div className="font-size-11">
                                        {chat.time}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </PerfectScrollbar>
                  </TabPane>

                  <TabPane tabId="2">
                    <PerfectScrollbar
                      className="chat-message-list"
                      style={{ height: "604px" }}
                    >
                      <div className="p-4">
                        <div>
                          <div className="d-flex">
                            <h5 className="font-size-14">Groups</h5>
                            <div className="ms-auto">
                              <Link to="#"><i className="uil uil-plus"></i> Add New</Link>
                            </div>
                          </div>
                          <ul className="list-unstyled chat-list">
                            {groups &&
                              groups.map((group: any) => (
                                <li key={"test" + group.image}>
                                  <Link
                                    to="#"
                                    onClick={() => {
                                      userChatOpen(
                                        group.id,
                                        group.name,
                                        Math.floor(Math.random() * 100),
                                        group.status,
                                        group.image
                                      );
                                    }}
                                  >
                                    <div className="d-flex align-items-start">
                                      <div className="flex-shrink-0 user-img online align-self-center me-3">
                                        <div className="avatar-sm align-self-center">
                                          <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                            {group.image}
                                          </span>
                                        </div>
                                      </div>

                                      <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="text-truncate font-size-14 mb-1">{group.name}</h5>
                                        <p className="text-truncate mb-0">12 Members</p>
                                      </div>

                                    </div>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </PerfectScrollbar>
                  </TabPane>

                  <TabPane tabId="3">
                    <PerfectScrollbar
                      className="chat-message-list"
                      style={{ height: "604px" }}
                    >
                      <div className="p-4">
                        <div>
                          <div className="d-flex">
                            <h5 className="font-size-14">Contacts</h5>
                            <div className="ms-auto">
                              <Link to="#"><i className="uil uil-plus"></i> Add New</Link>
                            </div>
                          </div>

                          {contacts &&
                            contacts.map((contact: any) => (
                              <div
                                key={"test_" + contact.category}
                                className={
                                  contact.category === "A" ? "mt-2" : "mt-4"
                                }
                              >
                                <div className="contact-list mb-0"> {contact.category}</div>
                                <ul className="list-unstyled chat-list">
                                  {contact.child.map((array: any) => (
                                    <li key={"test" + array.id}>
                                      <Link
                                        to="#"
                                        onClick={() => {
                                          userChatOpen(
                                            array.id,
                                            array.name,
                                            Math.floor(Math.random() * 100),
                                            array.status,
                                            contact.category
                                          );
                                        }}
                                      >
                                        <h5 className="font-size-14 mb-0">
                                          {array.name}
                                        </h5>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                        </div>
                      </div>
                    </PerfectScrollbar>
                  </TabPane>
                </TabContent>
              </div>
            </Card>
            <div className="w-100 user-chat mt-4 mt-sm-0 ms-lg-1">
              <Card>
                <div className="p-3 border-bottom">
                  <Row>
                    <Col xl="4" xs="7">
                      <div className="d-flex align-items-center">

                        {Chat_ACTIVE_TAB === "chat" && CurrentNullImage === "" ?
                          <React.Fragment>
                            <div className="flex-shrink-0 avatar me-3 d-sm-block d-none">
                              <img src={CurrentImage} alt="" className="img-thumbnail d-block rounded-circle" />
                            </div>
                          </React.Fragment>
                          :
                          <React.Fragment>
                            {Chat_ACTIVE_TAB === "chat" ?
                              <React.Fragment>
                                <div className="flex-shrink-0 user-img online align-self-center me-3">
                                  <div className="avatar-sm align-self-center">
                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                      {CurrentNullImage}
                                    </span>
                                  </div>
                                </div>
                              </React.Fragment>
                              : null}
                          </React.Fragment>
                        }

                        {Chat_ACTIVE_TAB === "group" ? (
                          <div className="flex-shrink-0 user-img online align-self-center me-3">
                            <div className="avatar-sm align-self-center">
                              <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                {Chat_GROUP_IMAGE}
                              </span>
                            </div>
                          </div>
                        ) : null
                        }

                        {Chat_ACTIVE_TAB === "contacts" ? (
                          <div className="flex-shrink-0 user-img online align-self-center me-3">
                            <div className="avatar-sm align-self-center">
                              <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                {Chat_Contact_Image}
                              </span>
                            </div>
                          </div>
                        ) : null
                        }

                        <div className="flex-grow-1">
                          <h5 className="font-size-14 mb-1 text-truncate"><Link to="#" className="text-dark">{Chat_Box_Username}</Link></h5>
                          <p className="text-muted text-truncate mb-0">
                            <i
                              className={
                                Chat_Box_User_Status === "online"
                                  ? "mdi mdi-circle text-success align-middle me-1"
                                  : Chat_Box_User_Status === "intermediate"
                                    ? "mdi mdi-circle text-warning align-middle me-1"
                                    : "mdi mdi-circle align-middle me-1"
                              }
                            />
                            Online
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col xl="8" xs="5">
                      <ul className="list-inline user-chat-nav text-end mb-0">
                        <li className="list-inline-item">
                          <Dropdown isOpen={search_Menu} toggle={toggleSearch}>
                            <DropdownToggle className="btn nav-btn" tag="button">
                              <i className="uil uil-search" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end dropdown-menu-md p-2">
                              <Form className="px-2">
                                <div>
                                  <Input
                                    type="text"
                                    className="form-control bg-light rounded"
                                    placeholder="Search ..."
                                    aria-label="Recipient's username"
                                  />
                                </div>
                              </Form>
                            </DropdownMenu>
                          </Dropdown>
                        </li>{" "}
                        <li className="list-inline-item">
                          <Dropdown
                            isOpen={settings_Menu}
                            toggle={toggleSettings}
                          >
                            <DropdownToggle className="btn nav-btn" tag="button">
                              <i className="uil uil-ellipsis-h" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem to="#">Profile</DropdownItem>
                              <DropdownItem to="#">Archive</DropdownItem>
                              <DropdownItem to="#">Muted</DropdownItem>
                              <DropdownItem to="#">Delete</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>

                <div>
                  <PerfectScrollbar
                    className="chat-conversation p-3"
                    style={{ height: "600px" }}
                    containerRef={ref => setMessageBox(ref)}
                  >
                    <ul className="list-unstyled mb-0">
                      <li>
                        <div className="chat-day-title">
                          <span className="title">Today</span>
                        </div>
                      </li>
                      {messages &&
                        map(messages, message => {
                          return (
                            <li
                              key={"test_k" + message.id}
                              className={
                                message.sender === currentUser.name
                                  ? "right"
                                  : ""
                              }
                            >
                              <div className="conversation-list">
                                <div className="ctext-wrap">
                                  <div className="chat-avatar">

                                    {Chat_ACTIVE_TAB === "chat" && CurrentNullImage === "" ?
                                      <React.Fragment>
                                        {message.sender !== currentUser.name ? <img src={CurrentImage} alt="" /> : <img src={avatar1} alt="" />}
                                      </React.Fragment>
                                      :
                                      null
                                    }
                                    {Chat_ACTIVE_TAB === "chat" && CurrentNullImage !== "" ?
                                      <React.Fragment>
                                        {message.sender !== currentUser.name ?
                                          <div className="flex-shrink-0 user-img online align-self-center">
                                            <div className="avatar-sm align-self-center">
                                              <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                {CurrentNullImage}
                                              </span>
                                            </div>
                                          </div>
                                          : <img src={avatar1} alt="" />}
                                      </React.Fragment> :
                                      null
                                    }

                                    {Chat_ACTIVE_TAB === "group" ?
                                      <React.Fragment>
                                        {message.sender !== currentUser.name ?
                                          <React.Fragment>
                                            <div className="flex-shrink-0 user-img online align-self-center">
                                              <div className="avatar-sm align-self-center">
                                                <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                  {Chat_GROUP_IMAGE}
                                                </span>
                                              </div>
                                            </div>
                                          </React.Fragment>
                                          : <img src={avatar1} alt="" />}
                                      </React.Fragment>
                                      : null
                                    }

                                    {Chat_ACTIVE_TAB === "contacts" ?
                                      <React.Fragment>
                                        {message.sender !== currentUser.name ?
                                          <React.Fragment>
                                            <div className="flex-shrink-0 user-img online align-self-center">
                                              <div className="avatar-sm align-self-center">
                                                <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                  {Chat_Contact_Image}
                                                </span>
                                              </div>
                                            </div>
                                          </React.Fragment>
                                          : <img src={avatar1} alt="" />}
                                      </React.Fragment>
                                      : null
                                    }
                                  </div>

                                  <div className="ctext-wrap-content">
                                    <h5 className="conversation-name">
                                      <Link to="#" className="user-name">
                                        {message.sender}
                                      </Link>
                                      <span className="time">
                                        {moment(message.createdAt).format(
                                          "DD-MM-YY hh:mm"
                                        )}
                                      </span>
                                    </h5>
                                    <p className="mb-0">{message.message}</p>
                                  </div>

                                  <UncontrolledDropdown className="align-self-start">
                                    <DropdownToggle
                                      href="#"
                                      tag="a"
                                    >
                                      <i className="uil uil-ellipsis-v" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                      <DropdownItem to="#">Copy</DropdownItem>
                                      <DropdownItem to="#">Save</DropdownItem>
                                      <DropdownItem to="#">
                                        Forward
                                      </DropdownItem>
                                      <DropdownItem to="#">Delete</DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </PerfectScrollbar>

                  <div className="p-3 chat-input-section">
                    <Row>
                      <div className="col">
                        <div className="position-relative">
                          <input
                            type="text"
                            value={curMessage}
                            // onKeyPress={onKeyPress}
                            onChange={e => setcurMessage(e.target.value)}
                            className="form-control chat-input"
                            placeholder="Enter Message..."
                          />
                        </div>
                      </div>
                      <div className="col-auto">
                        <Button
                          type="button"
                          color="primary"
                          onClick={() =>
                            addMessage(currentRoomId, currentUser.name)
                          }
                          className="btn btn-primary chat-send w-md"
                        >
                          <span className="d-none d-sm-inline-block me-2">Send</span> <i className="mdi mdi-send float-end"></i>
                        </Button>
                      </div>
                    </Row>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Chat;