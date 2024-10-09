import { BsThreeDotsVertical } from "react-icons/bs";
import { PiQueue } from "react-icons/pi";
import CreateMenu from "../NavBar/CreateMenu";
import { useState } from "react";

import {
  VideoItemContainer,
  // VideoContainer,
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
} from "./styledcomponent";
import { LuDot } from "react-icons/lu";
import thumbnail from "../../assets/images/Thumbnail 1.jpg";
import CustomVideoPlayer from "./CustomVideoPlayer";

export const VideoItemMenuItems = [
  {
    key: 1,
    logo: <PiQueue />,
    text: "Add to queue",
  },
  {
    key: 2,
    logo: <PiQueue />,
    text: "Add to queue",
  },
  {
    key: 3,
    logo: <PiQueue />,
    text: "Add to queue",
  },
  {
    key: 4,
    logo: <PiQueue />,
    text: "Add to queue",
  },
  {
    key: 5,
    logo: <PiQueue />,
    text: "Add to queue",
  },
  {
    key: 6,
    logo: <PiQueue />,
    text: "Add to queue",
  },
  {
    key: 7,
    logo: <PiQueue />,
    text: "Add to queue",
  },
  {
    key: 8,
    logo: <PiQueue />,
    text: "Add to queue",
  },
];

const VideoItem = ({ videoUrl, title }) => {
  const [isVideoItemMenuOpen, setIsVideoItemMenuOpen] = useState(false);

  const renderVideoItemMenu = () => {
    setIsVideoItemMenuOpen(!isVideoItemMenuOpen);
  };

  return (
    <VideoItemContainer>
      {/* <VideoContainer src={thumbnail}></VideoContainer> */}
      <CustomVideoPlayer
        videoUrl={videoUrl}
      />
      <VideoShortDetailsContainer>
        <VideoAvatarTitleContainer>
          <VideoAvatarContainer></VideoAvatarContainer>
          <VideoTitleDescriptionContainer>
            <VideoTitleContainer>
              <VideoTitle>{title}</VideoTitle>
            </VideoTitleContainer>
            <VideoChannelNameContainer>
              <VideoChannelName>Telugu Web Tech</VideoChannelName>
            </VideoChannelNameContainer>
            <VideoViewsAgeContainer>
              <ViewsCount>3.4k Views</ViewsCount>
              <LuDot color="#aaaaaa" />
              <VideoAge>4 Months Ago</VideoAge>
            </VideoViewsAgeContainer>
          </VideoTitleDescriptionContainer>
        </VideoAvatarTitleContainer>
        <VideoMenuButton onClick={renderVideoItemMenu}>
          <BsThreeDotsVertical />
          {isVideoItemMenuOpen && (
            <VideoMenu>
              <CreateMenu items={VideoItemMenuItems} />
            </VideoMenu>
          )}
        </VideoMenuButton>
      </VideoShortDetailsContainer>
    </VideoItemContainer>
  );
};

export default VideoItem;
