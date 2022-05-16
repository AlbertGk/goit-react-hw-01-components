import styled from 'styled-components';

export const StyledFriendList = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0;
`;

export const FriendListElem = styled.li`
  width: 300px;
  border: 2px solid #b2b2b2;
  border-radius: 10px;
  margin-top: 20px;

  display: flex;
  align-items: center;
  padding: 10px;
`;

export const FriendName = styled.p`
padding-left: 25px;
font-size: 20px;
margin: 0;
`;


export const SpanStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: ${({isOnline}) => (isOnline ? 'green' : 'red')};
`;

