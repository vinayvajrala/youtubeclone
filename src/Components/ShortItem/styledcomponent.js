import styled from "styled-components";
import avatar from "../../assets/images/Avatar.png";

const ShortItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
`;

const ShortsWrapper = styled.div`
  display: flex;
  position: relative;
`;

const TopControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 10px;
  left: 20px;
  gap: 10px;
  z-index: 100;
`;

const TopButton = styled.button`
  border-radius: 50%;
  border: transparent;
  background-color: #292929;
  padding: 7px 10px;
  cursor: pointner;
`;

const BottomDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;
const ChannelLogo = styled.button`
  border: transparent;
  border-radius: 50%;
  background-image: url(${avatar});
  background-size: cover;
  width: 35px;
  height: 35px;
  cursor: pointer;
`;
const ChannelName = styled.p`
  color: #f1f1f1;
  font-size: 16px;
  font-weight: bold;
`;
const SubscribeButton = styled.button`
  border-radius: 20px;
  background-color: #f1f1f1;
  color: #464646;
  font-size: 12px;
  border: transparent;
  padding: 5px;
  cursor: pointer;
`;
const ShortsDescription = styled.p`
  font-size: 14px;
  color: #f1f1f1;
`;

const ShortButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-bottom: 10px;
  gap: 10px;
`;

const ShortButton = styled.button`
  border: transparent;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background-color: #272727;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ChannelButton = styled.button`
  border: transparent;
  border-radius: 10px;
  background-image: url(${avatar});
  background-size: cover;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const ShortButtonLabel = styled.p`
  font-size: 16px;
  color: #f1f1f1;
  margin-top: 0;
  text-align: center;
`;

// const ShortVideoContainer = styled.div`
//   height: 500px;
//   width: 350px;
//   justify-content: center;
// `;

export {
  ShortItemContainer,
  ShortButtonsContainer,
  ShortButton,
  ChannelButton,
  // ShortVideoContainer,
  ShortsWrapper,
  TopControlsContainer,
  TopButton,
  BottomDescriptionContainer,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelName,
  SubscribeButton,
  ShortsDescription,
  ShortButtonLabel,
};
