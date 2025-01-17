import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const entryComponents = props.entries.map((entry) => {
        return (
            <ChatEntry
                key={`${entry.sender}-${entry.timeStamp}`}
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked} 
                updateLike={props.updateLike} />
        );
    });

    return (
        <ul className="chat-log">{entryComponents}</ul>
    );
}

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool
    })),

    updateLike: PropTypes.func,
};


export default ChatLog;