import React, { Component } from 'react';
import SendMessage from './SendMessage';
import store from '../store/configureStore';
import {sendMessage} from '../actions/messeges';

export default class Messenger extends Component{
  onMessageSend = e => {
      e.preventDefault();
      let message = 
      {
        message:e.target.elements.message.value,
        author:'Jasi'
      };
    store.dispatch(sendMessage(message));
    console.log(store.getState());
  }
  render() {
    return (
      <div>
        <SendMessage onMessageSend = {this.onMessageSend}/>
      </div>
    );
  }
}