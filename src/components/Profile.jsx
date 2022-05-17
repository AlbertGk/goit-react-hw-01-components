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
    <ProfileContainer className="profile">
      <TopSection className="description">
        <ImgAvatar src={avatar} alt="User avatar" className="avatar" />
        <MainParagraph className="name">{username}</MainParagraph>
        <SideParagraph className="tag">@{tag}</SideParagraph>
        <SideParagraph className="location">{location}</SideParagraph>
      </TopSection>

      <BottomSection className="stats">
        <LiElem>
          <SpanLabel className="label">Followers</SpanLabel>
          <span className="quantity">{stats.followers}</span>
        </LiElem>
        <LiElem>
          <SpanLabel className="label">Views</SpanLabel>
          <span className="quantity">{stats.views}</span>
        </LiElem>
        <LiElem>
          <SpanLabel className="label">Likes</SpanLabel>
          <span className="quantity">{stats.likes}</span>
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
