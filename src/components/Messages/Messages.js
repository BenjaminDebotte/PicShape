import React from 'react';

class Messages extends React.Component {
  render() {
    return this.props.messages.success ? (
      <div role="alert" className="ui floating positive message">
        <i className="close icon"></i>
        <div className="header">Success!</div>
        {this.props.messages.success.map((message, index) => <div key={index}>{message.msg}</div>)}
      </div>
    ) : this.props.messages.error ? (
      <div role="alert" className="ui floating negative message">
      <i className="close icon"></i>

      <div className="header">Error!</div>
        {this.props.messages.error.map((message, index) => <div key={index}>{message.msg}</div>)}
      </div>
    ) : this.props.messages.info ? (
      <div role="alert" className="ui floating info message">
      <i className="close icon"></i>

      <div className="header">Information</div>
        {this.props.messages.info.map((message, index) => <div key={index}>{message.msg}</div>)}
      </div>
    ) : null;
  }
}



export default Messages;
