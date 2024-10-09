import {
  IoAddSharp,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";

import {
  HeaderContainer,
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
  FilterButtonsContainer,
  FilterButton,
  ButtonsList,
  ArrowButton,
  ArrowButtonLeft,
  ArrowButtonRight,
} from "./styledcomponent";

import youtubelogo from "../../assets/images/youtubelogo.svg";
import { MdMic } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import SideNavBar from "../SideNavBar";
import { useRef, useState } from "react";
import SearchHistory from "../SearchHistory";
import CreateMenu, { CreateMenuItems } from "./CreateMenu";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SideStaitcBar from "../SideNavBar/SideStaticBar";

const FilterButtonItems = [
  {
    key: 1,
    text: "All",
  },
  {
    key: 2,
    text: "Music",
  },
  {
    key: 3,
    text: "Tamil Cinema",
  },
  {
    key: 4,
    text: "Skills",
  },
  {
    key: 5,
    text: "JavaScript",
  },
  {
    key: 6,
    text: "Rackets",
  },
  {
    key: 7,
    text: "Gaming",
  },
  {
    key: 8,
    text: "Job interviews",
  },
  {
    key: 9,
    text: "Podcasts",
  },
  {
    key: 10,
    text: "Media theories",
  },
  {
    key: 11,
    text: "Thoughts",
  },
  {
    key: 12,
    text: "Live",
  },
  {
    key: 13,
    text: "Archaeology",
  },
  {
    key: 14,
    text: "Electronic circuits",
  },
  {
    key: 15,
    text: "Strategies",
  },
  {
    key: 16,
    text: "Chemistry",
  },
  {
    key: 17,
    text: "Physics",
  },
];

const NavBar = ({ isSideNavBarOpen, setIsSideNavBarOpen }) => {
  const [isSearchHistoryOpen, setIsSearchHistoryOpen] = useState(false);
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const filterButtonsRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    filterButtonsRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    filterButtonsRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const renderSideMenu = () => {
    setIsSideNavBarOpen(!isSideNavBarOpen);
  };

  const renderSearchHistory = () => {
    setIsSearchHistoryOpen(!isSearchHistoryOpen);
  };

  const renderCreateMenu = () => {
    setIsCreateMenuOpen(!isCreateMenuOpen);
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <LogoMenuContainer>
          <MenuButton onClick={renderSideMenu}>
            <CgMenu color="white" size={24} />
          </MenuButton>
          <LogoButton onClick={() => navigate("/")}>
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
              <IoSearchOutline color="#ffffff" size={24} />
            </SearchIconContainer>
            {isSearchHistoryOpen && <SearchHistory />}
          </SearchContainer>
          <MicContainer>
            <MdMic size={20} color="#ffffff" />
          </MicContainer>
        </SearchMicContainer>
        <CreateNotiProfileContainer>
          <CreateBtnContainer onClick={renderCreateMenu}>
            <IoAddSharp size={20} color="#ffffff" />
            <Typography>Create</Typography>
            {isCreateMenuOpen && <CreateMenu items={CreateMenuItems} />}
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
      </NavContainer>
      {window.location.pathname == "/" && (
        <FilterButtonsContainer>
          <ButtonsList ref={filterButtonsRef}>
            {FilterButtonItems.map((item) => (
              <FilterButton key={item.key}>{item.text}</FilterButton>
            ))}
          </ButtonsList>
          <ArrowButtonLeft onClick={scrollLeft}>
            <BsChevronLeft size={20} color={"#f1f1f1"} />
          </ArrowButtonLeft>
          <ArrowButtonRight onClick={scrollRight}>
            <BsChevronRight size={20} color={"#f1f1f1"} />
          </ArrowButtonRight>
        </FilterButtonsContainer>
      )}
    </HeaderContainer>
  );
};

export default NavBar;
