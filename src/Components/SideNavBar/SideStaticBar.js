import { SiYoutubeshorts } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";

import {
  SideItemsContainer,
  SideItem,
  SideIcon,
  Typography,
} from "./styledcomponent";
import { useNavigate } from "react-router-dom";

const SideItems = [
  {
    key: 1,
    icon: <IoMdHome />,
    text: "Home",
    navigate: "/",
  },
  {
    key: 2,
    icon: <SiYoutubeshorts />,
    text: "Shorts",
    navigate: "/shorts",
  },
  {
    key: 3,
    icon: <MdOutlineSubscriptions />,
    text: "Subscriptions",
    navigate: "/feed/subscriptions",
  },
  {
    key: 4,
    icon: <MdOutlineVideoLibrary />,
    text: "You",
    navigate: "/feed/you",
  },
];

const SideStaitcBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <SideItemsContainer>
        {SideItems.map((item) => (
          <SideItem onClick={() => navigate(item.navigate)} key={item.key}>
            <SideIcon>{item.icon}</SideIcon>
            <Typography>{item.text}</Typography>
          </SideItem>
        ))}
      </SideItemsContainer>
    </>
  );
};

export default SideStaitcBar;
