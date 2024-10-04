import SideStaitcBar from "./SideStaticBar";
import {
  SiYoutubegaming,
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutubeshorts,
} from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import {
  MdOutlineFeedback,
  MdOutlineNewspaper,
  MdOutlinePlaylistPlay,
  MdOutlinePodcasts,
  MdOutlineSettings,
  MdOutlineSubscriptions,
  MdOutlineWifiTethering,
  MdPodcasts,
} from "react-icons/md";
import youtubelogo from "../../assets/images/youtubelogo.svg";

import {
  SideNavContainer,
  SideNavItemsContainer,
  SideNavLogoMenuContainer,
  SideNavMenuButton,
  MainContainer,
  NavItem,
  Icon,
  Label,
  HorizontalLine,
  YouContainer,
  YouButton,
  SubsItemsContainer,
  NavHeading,
  ExploreContainer,
  MoreContainer,
  SettingsContainer,
  FooterButtonsContainer,
  TopButtonsContainer,
  BottomButtonsContainer,
  NavFooterButton,
  CopyRightContainer,
  NavSubsLogoContainer,
} from "./styledcomponent";

import { IoChevronForward } from "react-icons/io5";
import { Logo, LogoButton } from "../NavBar/styledcomponent";
import { CgMenu } from "react-icons/cg";
import { TbFlag, TbHelp } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { GoClock, GoLightBulb, GoVideo } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { LiaHistorySolid } from "react-icons/lia";
import { RiShoppingBag4Line } from "react-icons/ri";
import { LuMusic4 } from "react-icons/lu";
import { BiMoviePlay } from "react-icons/bi";
import { TfiCup } from "react-icons/tfi";
import { GiHanger } from "react-icons/gi";

const MainContainerItems = [
  {
    key: 1,
    icon: <IoMdHome />,
    label: "Home",
  },
  {
    key: 2,
    icon: <SiYoutubeshorts />,
    label: "Shorts",
  },
  {
    key: 3,
    icon: <MdOutlineSubscriptions />,
    label: "Subscriptions",
  },
];

const YouContainerItems = [
  {
    key: 1,
    icon: <LiaHistorySolid />,
    label: "History",
  },
  {
    key: 2,
    icon: <MdOutlinePlaylistPlay />,
    label: "Playlists",
  },
  {
    key: 3,
    icon: <GoVideo />,
    label: "Your Videos",
  },
  {
    key: 4,
    icon: <GoLightBulb />,
    label: "Your Courses",
  },
  {
    key: 5,
    icon: <MdPodcasts />,
    label: "Your Podcasts",
  },
  {
    key: 6,
    icon: <GoClock />,
    label: "Watch Later",
  },
  {
    key: 7,
    icon: <AiOutlineLike />,
    label: "Liked Videos",
  },
];

const SubsContainerItems = [
  {
    key: 1,
    icon: <IoMdHome />,
    label: "3Blue1Brown",
  },
  {
    key: 2,
    icon: <SiYoutubeshorts />,
    label: "Absent Data",
  },
  {
    key: 3,
    icon: <MdOutlineSubscriptions />,
    label: "AI 1Minute",
  },
  {
    key: 4,
    icon: <MdOutlineSubscriptions />,
    label: "Alex The Analyst",
  },
  {
    key: 5,
    icon: <MdOutlineSubscriptions />,
    label: "Arvin Ash",
  },
  {
    key: 6,
    icon: <MdOutlineSubscriptions />,
    label: "Ashish Pratap Singh",
  },
  {
    key: 7,
    icon: <MdOutlineSubscriptions />,
    label: "Bhajan School",
  },
];

const ExploreItems = [
  {
    key: 1,
    icon: <IoMdHome />,
    label: "Trending",
  },
  {
    key: 2,
    icon: <RiShoppingBag4Line />,
    label: "Shopping",
  },
  {
    key: 3,
    icon: <LuMusic4 />,
    label: "Music",
  },
  {
    key: 4,
    icon: <BiMoviePlay />,
    label: "Movies",
  },
  {
    key: 5,
    icon: <MdOutlineWifiTethering />,
    label: "Live",
  },
  {
    key: 6,
    icon: <SiYoutubegaming />,
    label: "Gaming",
  },
  {
    key: 7,
    icon: <MdOutlineNewspaper />,
    label: "News",
  },
  {
    key: 8,
    icon: <TfiCup />,
    label: "Sports",
  },
  {
    key: 9,
    icon: <GoLightBulb />,
    label: "Courses",
  },
  {
    key: 10,
    icon: <GiHanger />,
    label: "Fashion&Beauty",
  },
  {
    key: 11,
    icon: <MdOutlinePodcasts />,
    label: "Podcasts",
  },
];

const MoreItems = [
  {
    key: 1,
    icon: <FaYoutube color="#ff0033" />,
    label: "YouTube Premium",
  },
  {
    key: 2,
    icon: <SiYoutubeshorts color="#ff0033" />,
    label: "YouTube Studio",
  },
  {
    key: 3,
    icon: <SiYoutubemusic color="#ff0033" />,
    label: "YouTube Music",
  },
  {
    key: 4,
    icon: <SiYoutubekids color="#ff0033" />,
    label: "YouTube Kids",
  },
];

const SettingsItems = [
  {
    key: 1,
    icon: <MdOutlineSettings />,
    label: "Settings",
  },
  {
    key: 2,
    icon: <TbFlag />,
    label: "Report History",
  },
  {
    key: 3,
    icon: <TbHelp />,
    label: "Help",
  },
  {
    key: 4,
    icon: <MdOutlineFeedback />,
    label: "Send Feedback",
  },
];

const TopButtonItems = [
  {
    key: 1,
    text: "About",
  },
  {
    key: 2,
    text: "Press",
  },
  {
    key: 3,
    text: "Copyright",
  },
  {
    key: 4,
    text: "Contact Us",
  },
  {
    key: 5,
    text: "Creators",
  },
  {
    key: 6,
    text: "Advertise",
  },
  {
    key: 7,
    text: "Developers",
  },
];

const BottomButtonItems = [
  {
    key: 1,
    text: "Terms",
  },
  {
    key: 2,
    text: "Privacy",
  },
  {
    key: 3,
    text: "Policy & Safety",
  },
  {
    key: 4,
    text: "How YouTube works",
  },
  {
    key: 5,
    text: "Test new features",
  },
];

const SideNavBar = ({ isSideNavBarOpen, renderSideMenu }) => {
  return (
    <SideNavContainer isOpen={isSideNavBarOpen}>
      <SideNavLogoMenuContainer>
        <SideNavMenuButton onClick={renderSideMenu}>
          <CgMenu color="white" size={24} />
        </SideNavMenuButton>
        <LogoButton>
          <Logo src={youtubelogo} alt="youtube-logo"></Logo>
        </LogoButton>
      </SideNavLogoMenuContainer>
      <SideNavItemsContainer>
        <MainContainer>
          {MainContainerItems.map((item) => (
            <NavItem key={item.key}>
              <Icon>{item.icon}</Icon>
              <Label>{item.label}</Label>
            </NavItem>
          ))}
        </MainContainer>
        <HorizontalLine></HorizontalLine>
        <YouContainer>
          <YouButton>
            You
            <IoChevronForward size={18} />
          </YouButton>
          {YouContainerItems.map((item) => (
            <NavItem key={item.key}>
              <Icon>{item.icon}</Icon>
              <Label>{item.label}</Label>
            </NavItem>
          ))}
        </YouContainer>
        <HorizontalLine></HorizontalLine>
        <SubsItemsContainer>
          <NavHeading>Subscriptions</NavHeading>
          {SubsContainerItems.map((item) => (
            <NavItem key={item.key}>
              <NavSubsLogoContainer></NavSubsLogoContainer>
              <Label>{item.label}</Label>
            </NavItem>
          ))}
        </SubsItemsContainer>
        <HorizontalLine></HorizontalLine>
        <ExploreContainer>
          <NavHeading>Explore</NavHeading>
          {ExploreItems.map((item) => (
            <NavItem key={item.key}>
              <Icon>{item.icon}</Icon>
              <Label>{item.label}</Label>
            </NavItem>
          ))}
        </ExploreContainer>
        <HorizontalLine></HorizontalLine>
        <MoreContainer>
          <NavHeading>More from YouTube</NavHeading>
          {MoreItems.map((item) => (
            <NavItem key={item.key}>
              <Icon>{item.icon}</Icon>
              <Label>{item.label}</Label>
            </NavItem>
          ))}
        </MoreContainer>
        <HorizontalLine></HorizontalLine>
        <SettingsContainer>
          {SettingsItems.map((item) => (
            <NavItem key={item.key}>
              <Icon>{item.icon}</Icon>
              <Label>{item.label}</Label>
            </NavItem>
          ))}
        </SettingsContainer>
        <HorizontalLine></HorizontalLine>
        <FooterButtonsContainer>
          <TopButtonsContainer>
            {TopButtonItems.map((item) => (
              <NavFooterButton key={item.key}>{item.text}</NavFooterButton>
            ))}
          </TopButtonsContainer>
          <BottomButtonsContainer>
            {BottomButtonItems.map((item) => (
              <NavFooterButton key={item.key}>{item.text}</NavFooterButton>
            ))}
          </BottomButtonsContainer>
          <CopyRightContainer>© 2024 Google LLC</CopyRightContainer>
        </FooterButtonsContainer>
      </SideNavItemsContainer>
    </SideNavContainer>
  );
};

export default SideNavBar;
