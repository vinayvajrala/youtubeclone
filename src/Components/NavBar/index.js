import {
  IoAddSharp,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";

import {
  NavContainer,
  LogoMenuContainer,
  LogoButton,
  MenuButton,
  Logo,
  SearchMicContainer,
  SearchContainer,
  InputContainer,
  SearchIconContainer,
  MicContainer,
  CreateNotiProfileContainer,
  CreateBtnContainer,
  Typography,
  NotificationButton,
  AvatarContainer,
} from "./styledcomponent";

import youtubelogo from "../../assets/images/youtubelogo.svg";
import { MdMic } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import SideNavBar from "../SideNavBar";
import { useState } from "react";
import SearchHistory from "../SearchHistory";

const NavBar = () => {
  const [isSideNavBarOpen, setIsSideNavBarOpen] = useState(false);
  const [isSearchHistoryOpen, setIsSearchHistoryOpen] = useState(false);

  const renderSideMenu = () => {
    setIsSideNavBarOpen(!isSideNavBarOpen);
  };

  const renderSearchHistory = () => {
    setIsSearchHistoryOpen(!isSearchHistoryOpen);
  };

  return (
    <NavContainer>
      <LogoMenuContainer>
        <MenuButton onClick={renderSideMenu}>
          <CgMenu color="white" size={24} />
        </MenuButton>
        <LogoButton>
          <Logo src={youtubelogo} alt="youtube-logo"></Logo>
        </LogoButton>
      </LogoMenuContainer>
      <SearchMicContainer>
        <SearchContainer>
          <InputContainer
            placeholder="Search"
            onFocus={renderSearchHistory}
            onBlur={renderSearchHistory}
          ></InputContainer>
          <SearchIconContainer>
            <IoSearchOutline color="#ffffff" size={20} />
          </SearchIconContainer>
        </SearchContainer>
        <MicContainer>
          <MdMic size={20} color="#ffffff" />
        </MicContainer>
      </SearchMicContainer>
      <CreateNotiProfileContainer>
        <CreateBtnContainer>
          <IoAddSharp size={20} color="#ffffff" />
          <Typography>Create</Typography>
        </CreateBtnContainer>
        <NotificationButton>
          <IoNotificationsOutline size={20} color="#ffffff" />
        </NotificationButton>
        <AvatarContainer></AvatarContainer>
      </CreateNotiProfileContainer>
      {isSideNavBarOpen && (
        <SideNavBar
          isSideNavBarOpen={isSideNavBarOpen}
          renderSideMenu={renderSideMenu}
        />
      )}
      {isSearchHistoryOpen && <SearchHistory />}
    </NavContainer>
  );
};

export default NavBar;
