import PropTypes from 'prop-types';

import {
  StyledFriendList,
  FriendListElem,
  SpanStatus,
  FriendName,
  FriendPicture,
} from 'Styles/FriendList.styles';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList className="friend-list">
      {friends.map(({ id, isOnline, avatar, name}) => (
        <FriendListElem key={id} className="item">
          <SpanStatus isOnline={isOnline} className="status">
            {isOnline}
          </SpanStatus>
          <FriendPicture
            className="avatar"
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <FriendName className="name">{name}</FriendName>
        </FriendListElem>
      ))}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};