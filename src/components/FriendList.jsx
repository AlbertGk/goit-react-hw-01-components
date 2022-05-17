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
    <StyledFriendList class="friend-list">
      {friends.map(({ id, isOnline, avatar, name}) => (
        <FriendListElem key={id} class="item">
          <SpanStatus isOnline={isOnline} class="status">
            {isOnline}
          </SpanStatus>
          <FriendPicture
            class="avatar"
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <FriendName class="name">{name}</FriendName>
        </FriendListElem>
      ))}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};