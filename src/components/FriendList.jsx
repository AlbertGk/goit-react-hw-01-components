import PropTypes from 'prop-types';

import {
  StyledFriendList,
  FriendListElem,
  SpanStatus,
  FriendName,
} from 'Styles/FriendList.styles';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList class="friend-list">
      {friends.map(friend => (
        <FriendListElem key={friend.id} class="item">
          <SpanStatus class="status">{friend.isOnline}</SpanStatus>
          <img
            class="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <FriendName class="name">{friend.name}</FriendName>
        </FriendListElem>
      ))}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};