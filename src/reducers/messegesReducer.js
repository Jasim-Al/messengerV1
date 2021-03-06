const messagesReducerDefaultState = [];

export default (state = messagesReducerDefaultState, action) => {
    switch(action.type) {
        case 'SEND_MESSAGE' : 
            return [
                ...state,
                action.message
            ];
        default:
            return state;
    }
};