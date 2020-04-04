import React, { Component } from 'react';
import SendMessage from './SendMessage';

export default class Messenger extends Component{
    state = {
      message:''
  }
  onMessageSend = e => {
      e.preventDefault();
      let message = e.target.elements.message.value;
      this.setState(()=>({
          message
      }));
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <SendMessage onMessageSend = {this.onMessageSend}/>
      </div>
    );
  }
}
