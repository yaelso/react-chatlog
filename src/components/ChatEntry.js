import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const getSenderStyle = isLocal => isLocal ? 'local' : 'remote';
const LOCAL_USER_NAME = 'Vladimir';

const ChatEntry = (props) => {
  const likeFill = props.liked ? '❤️' : '🤍';

  const onLike = () => {
    props.updateLike(props.id);
  }

  const senderStyle = getSenderStyle(props.sender === LOCAL_USER_NAME)

  return (
    <div className={`chat-entry ${senderStyle}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like" onClick={onLike}>{likeFill}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  updateLike: PropTypes.func
};

export default ChatEntry;
