import React from 'react';

export default props => (
    <div>
        <form onSubmit = {props.onMessageSend} action="">
            <input name ="message" type="text"/>
            <button>SEND</button>
        </form>
    </div>
);

