import { SiYoutubeshorts } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";

import {
  SideItemsContainer,
  SideItem,
  SideIcon,
  Typography,
} from "./styledcomponent";

const SideItems = [
  {
    key: 1,
    icon: <IoMdHome />,
    text: "Home",
  },
  {
    key: 2,
    icon: <SiYoutubeshorts />,
    text: "Shorts",
  },
  {
    key: 3,
    icon: <MdOutlineSubscriptions />,
    text: "Subscriptions",
  },
  {
    key: 4,
    icon: <MdOutlineVideoLibrary />,
    text: "You",
  },
];

const SideStaitcBar = () => {
  return (
    <SideItemsContainer>
      {SideItems.map((item) => (
        <SideItem key={item.key}>
          <SideIcon>{item.icon}</SideIcon>
          <Typography>{item.text}</Typography>
        </SideItem>
      ))}
    </SideItemsContainer>
  );
};

export default SideStaitcBar;
