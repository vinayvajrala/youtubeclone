import { BsBroadcast } from "react-icons/bs";
import { GoVideo } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";

import {
  CreateMenuContainer,
  CreateMenuItem,
  MenuIcon,
  MenuLabel,
} from "./styledcomponent";
import { GiDefibrilate } from "react-icons/gi";

export const CreateMenuItems = [
  {
    key: 1,
    icon: <GoVideo />,
    text: "Upload Video",
  },
  {
    key: 2,
    icon: <BsBroadcast />,
    text: "Go Live",
  },
  {
    key: 3,
    icon: <IoCreateOutline />,
    text: "Create Post",
  },
];

const CreateMenu = ({ items }) => {
  return (
    <>
      <CreateMenuContainer>
        {items.map((item) => (
          <CreateMenuItem key={item.key}>
            <MenuIcon>{item.icon}</MenuIcon>
            <MenuLabel>{item.text}</MenuLabel>
          </CreateMenuItem>
        ))}
      </CreateMenuContainer>
    </>
  );
};

export default CreateMenu;
