import PropTypes from 'prop-types';
import {
  ProfileContainer,
  TopSection,
  ImgAvatar,
  MainParagraph,
  SideParagraph,
  BottomSection,
  LiElem,
  SpanLabel,
} from 'Styles/Profile.styles';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileContainer class="profile">
      <TopSection class="description">
        <ImgAvatar src={avatar} alt="User avatar" class="avatar" />
        <MainParagraph class="name">{username}</MainParagraph>
        <SideParagraph class="tag">@{tag}</SideParagraph>
        <SideParagraph class="location">{location}</SideParagraph>
      </TopSection>

      <BottomSection class="stats">
        <LiElem>
          <SpanLabel class="label">Followers</SpanLabel>
          <span class="quantity">{stats.followers}</span>
        </LiElem>
        <LiElem>
          <SpanLabel class="label">Views</SpanLabel>
          <span class="quantity">{stats.views}</span>
        </LiElem>
        <LiElem>
          <SpanLabel class="label">Likes</SpanLabel>
          <span class="quantity">{stats.likes}</span>
        </LiElem>
      </BottomSection>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  stats: PropTypes.object.isRequired,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
