import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrVolume } from "react-icons/gr";
import { IoMdArrowDown, IoMdArrowUp, IoMdPlay } from "react-icons/io";
import { RiShareForwardFill } from "react-icons/ri";

import {
  ShortItemContainer,
  ShortButtonsContainer,
  ShortButton,
  ChannelButton,
  BottomDescriptionContainer,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelName,
  SubscribeButton,
  ShortsDescription,
  ShortsWrapper,
  ShortButtonLabel,
} from "./styledcomponent";
import ReactPlayer from "react-player";

const ShortButtonItems = [
  {
    key: 1,
    icon: <AiFillLike size={20} color="#f1f1f1" />,
    label: "412K",
  },
  {
    key: 2,
    icon: <AiFillDislike size={20} color="#f1f1f1" />,
    label: "Dislike",
  },
  {
    key: 3,
    icon: <BiCommentDetail size={20} color="#f1f1f1" />,
    label: "718",
  },
  {
    key: 4,
    icon: <RiShareForwardFill size={20} color="#f1f1f1" />,
    label: "Share",
  },
  {
    key: 5,
    icon: <BsThreeDotsVertical size={20} color="#f1f1f1" />,
    label: "",
  },
];

const ShortItem = ({ shortsUrl, title }) => {
  return (
    <ShortItemContainer>
      <ShortsWrapper>
        <ReactPlayer height="89vh" width="calc(78vh*9/16)" url={shortsUrl} />
        {/* <TopControlsContainer>
          <TopButton>
            <IoMdPlay color="#f1f1f1" size={15} />
          </TopButton>
          <TopButton>
            <GrVolume color="#f1f1f1" size={15} />
          </TopButton>
        </TopControlsContainer> */}
        <BottomDescriptionContainer>
          <ChannelDetailsContainer>
            <ChannelLogo></ChannelLogo>
            <ChannelName>@scuhs</ChannelName>
            <SubscribeButton>Subscribe</SubscribeButton>
          </ChannelDetailsContainer>
          <ShortsDescription>{title}</ShortsDescription>
        </BottomDescriptionContainer>
      </ShortsWrapper>
      <ShortButtonsContainer>
        {ShortButtonItems.map((item) => (
          <>
            <ShortButton key={item.key}>{item.icon}</ShortButton>
            <ShortButtonLabel>{item.label}</ShortButtonLabel>
          </>
        ))}
        <ChannelButton></ChannelButton>
      </ShortButtonsContainer>
    </ShortItemContainer>
  );
};

export default ShortItem;
