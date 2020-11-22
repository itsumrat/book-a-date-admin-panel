import React, { Component, Fragment, useState } from 'react';
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button, Row } from 'reactstrap';

import { Colxx, Separator } from '../../../../components/common/CustomBootstrap';

import {
  getContacts,
  getConversations,
  changeConversation,
  addMessageToConversation
} from "../../../../redux/actions";
import ChatApplicationMenu from "../../../../containers/applications/ChatApplicationMenu";
import ChatHeading from "../../../../components/applications/ChatHeading";
import MessageCard from "../../../../components/applications/MessageCard";
import SaySomething from "../../../../components/applications/SaySomething";
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import AddNewSurveyModal from '../../../../containers/applications/AddNewSurveyModal';
import IntlMessages from '../../../../helpers/IntlMessages';

class TeamCustomerSupport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActiveTab: "messages",
      messageInput: "",
      surveyModalVisible: false
    };
  }

  componentDidMount() {
    const currentUserId = 0;
    this.props.getContacts();
    this.props.getConversations(currentUserId);
  }

  componentDidUpdate() {
    if (
      this.props.chatApp.loadingConversations &&
      this.props.chatApp.loadingContacts &&
      this.props.chatApp.selectedUser == null
    ) {
      this.props.changeConversation(this.props.chatApp.selectedUserId);
    }

    if (this._scrollBarRef) {
      this._scrollBarRef._ps.element.scrollTop = this._scrollBarRef._ps.contentHeight;
    }
  }

  handleChatInputPress = e => {
    if (e.key === "Enter") {
      if (this.state.messageInput.length > 0) {
        this.props.addMessageToConversation(
          this.props.chatApp.currentUser.id,
          this.props.chatApp.selectedUser.id,
          this.state.messageInput,
          this.props.chatApp.conversations
        );
        this.setState({
          messageInput: "",
          menuActiveTab: "messages"
        });
      }
    }
  };

  handleChatInputChange = e => {
    this.setState({
      messageInput: e.target.value
    });
  };

  handleSendButtonClick = () => {
    if (this.state.messageInput.length > 0) {
      this.props.addMessageToConversation(
        this.props.chatApp.currentUser.id,
        this.props.chatApp.selectedUser.id,
        this.state.messageInput,
        this.props.chatApp.conversations
      );
      this.setState({
        messageInput: "",
        menuActiveTab: "messages"
      });
    }
  };

  toggleAppMenu = tab => {
    this.setState({
      menuActiveTab: tab
    });
  };

  render() {
    const {
      allContacts,
      conversations,
      loadingConversations,
      loadingContacts,
      currentUser,
      selectedUser
    } = this.props.chatApp;

    const { menuActiveTab, messageInput } = this.state;
    const { messages } = this.props.intl;

    const selectedConversation =
      loadingConversations && loadingContacts && selectedUser
        ? conversations.find(
        x =>
          x.users.includes(currentUser.id) &&
          x.users.includes(selectedUser.id)
        )
        : null;
    return loadingConversations && loadingContacts ? (
      <Fragment>
        <Row>
          <Colxx xxs="10">
            <Breadcrumb heading="menu.team" match={this.props.match} />
            <Separator className="mb-5" />
          </Colxx>
          <Colxx>
            <Button
              color="primary"
              size="lg"
              className="top-right-button mr-1"
              onClick={() => this.setState({surveyModalVisible: true})}
            >
              <IntlMessages id="survey.add-new" />
            </Button>
          </Colxx>
          <Colxx xxs={12}>
            <Button onClick={()=>this.props.history.goBack()} color="primary" className="float-right">Back</Button>
          </Colxx>
        </Row>
        <Row className="app-row">
          <Colxx xxs="12" className="chat-app">
            {loadingConversations && selectedUser && (
              <ChatHeading
                name={selectedUser.name}
                thumb={selectedUser.thumb}
                lastSeenDate={selectedUser.lastSeenDate}
              />
            )}

            {selectedConversation && (
              <PerfectScrollbar
                ref={ref => {
                  this._scrollBarRef = ref;
                }}
                containerRef={ref => {}}
                options={{ suppressScrollX: true, wheelPropagation: false }}>
                {selectedConversation.messages.map((item, index) => {
                  const sender = allContacts.find(x => x.id === item.sender);
                  return (
                    <MessageCard
                      key={index}
                      sender={sender}
                      item={item}
                      currentUserid={currentUser.id}
                    />
                  );
                })}
              </PerfectScrollbar>
            )}
          </Colxx>
        </Row>
        <SaySomething
          placeholder={messages["chat.saysomething"]}
          messageInput={messageInput}
          handleChatInputPress={this.handleChatInputPress}
          handleChatInputChange={this.handleChatInputChange}
          handleSendButtonClick={this.handleSendButtonClick}
        />
        {/*<ChatApplicationMenu*/}
        {/*  activeTab={menuActiveTab}*/}
        {/*  toggleAppMenu={this.toggleAppMenu}*/}
        {/*/>*/}
        <AddNewSurveyModal
          toggleModal={() => this.setState({surveyModalVisible: !this.state.surveyModalVisible})}
          modalOpen={this.state.surveyModalVisible}
        />
      </Fragment>
    ) : (
      <div className="loading" />
    );
  }
}

const mapStateToProps = ({ chatApp }) => {
  return { chatApp };
};
export default injectIntl(
  connect(
    mapStateToProps,
    {
      getContacts,
      getConversations,
      changeConversation,
      addMessageToConversation
    }
  )(TeamCustomerSupport)
);
