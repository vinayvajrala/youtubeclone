import styled from "styled-components";
import avatar from "../../assets/images/Avatar.png";

const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 10px;
  width: calc(85vw / 3);
  position: relative;
  gap: 10px;
  // z-index: 1;
`;

const PlayerWrapper = styled.div`
  display: flex;
  height: 205px;
  // width: 30%;
  // border-radius: 20px;
`;
// const VideoContainer = styled.img`
//   display: flex;
//   height: 225px;
//   width: calc(225px * (16 / 9);
// `;
const VideoShortDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;
const VideoAvatarTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  gap: 20px;
`;
const VideoAvatarContainer = styled.button`
  border-radius: 50%;
  border: transparent;
  cursor: pointer;
  background-image: url(${avatar});
  background-size: cover;
  width: 36px;
  height: 36px;
`;
const VideoTitleDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
const VideoTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin-bottom: 5px;
`;
const VideoTitle = styled.p`
  font-size: 16px;
  color: #f1f1f1;
  font-size: 500;
`;
const VideoChannelNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin-bottom: 2px;
`;
const VideoChannelName = styled.div`
  font-size: 14px;
  color: #aaaaaa;
  font-size: 400;
`;
const VideoViewsAgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;
const ViewsCount = styled.p`
  font-size: 14px;
  color: #aaaaaa;
`;
const VideoAge = styled.p`
  font-size: 14px;
  color: #aaaaaa;
`;
const VideoMenuButton = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  color: white;
  padding: 5px;
  margin: 0px;
  cursor: pointer;
  border-radius: 50%;
  text-align: center;
  z-index: 1000;
  // display: flex;
  // align-items: center;

  &:hover {
    padding: 5px;
    background-color: #3f3f3f;
  }
`;

const VideoMenu = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  top: -58px;
`;

export {
  VideoItemContainer,
  // VideoContainer,
  PlayerWrapper,
  VideoShortDetailsContainer,
  VideoAvatarTitleContainer,
  VideoAvatarContainer,
  VideoTitleDescriptionContainer,
  VideoTitleContainer,
  VideoTitle,
  VideoChannelNameContainer,
  VideoChannelName,
  VideoViewsAgeContainer,
  ViewsCount,
  VideoAge,
  VideoMenuButton,
  VideoMenu,
};
