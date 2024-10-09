import styled from "styled-components";
import avatar from "../../assets/images/Avatar.png";

const SideItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 64px;
  margin-left: 10px;
  transition: all 1s ease-in-out;
  position: fixed;
  top: 56px;
  left: 0;
  z-index: 5001;
`;

const SideItem = styled.button`
  type: button;
  display: flex;
  flex-direction: column;
  gap: 0px;
  border: transparent;
  background-color: transparent;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #3f3f3f;
    transition: all 0.3s ease-in-out;
  }
`;

const SideIcon = styled.i`
  font-size: 24px;
  color: white;
`;

const Typography = styled.p`
  font-size: 10px;
  color: white;
`;

const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #0f0f0f;
  position: fixed;
  top: 10px;
  left: ${(props) => (props.isOpen ? "0px" : "-250px")};
  transition: left 1s ease;
  z-index: 1003;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const SideNavItemsContainer = styled.div`
  padding-top: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 93vh;

  &::-webkit-scrollbar {
    width: 7px;
    margin-top: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #0f0f0f;
  }

  &::-webkit-scrollbar-thumb {
    background: #717171;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const SideNavLogoMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-left: 10px;
`;

const SideNavMenuButton = styled.button`
  border: transparent;
  padding: 7px;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #272727;
    transition: all 0.3s ease-in-out;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const YouContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const SubsItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ExploreContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const MoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const NavHeading = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: white;
  padding: 10px;
`;

const NavItem = styled.button`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: transparent;
  border: transparent;
  padding: 5px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #3f3f3f;
    padding: 5px;
    border-radius: 10px;
  }
`;

const YouButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: transparent;
  border: transparent;
  color: white;
  font-size: 18px;
  align-items: center;
  padding: 10px;
  padding-left: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #3f3f3f;
  }
`;

const NavSubsLogoContainer = styled.button`
  border-radius: 50%;
  border: transparent;
  cursor: pointer;
  background-image: url(${avatar});
  background-size: cover;
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

const Icon = styled.i`
  font-size: 24px;
  color: #ffff;
  margin-left: 10px;
`;

const Label = styled.p`
  font-size: 15px;
  color: #f1f1f1;
`;

const HorizontalLine = styled.hr`
  width: 85%;
  height: 0.5px;
  opacity: 0.3;
  color: #f1f1f1;
  margin: 0px 100px 0px 20px;
`;

const FooterButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const TopButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2px;
  padding-left: 5px;
`;

const BottomButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2px;
  padding-left: 5px;
`;

const NavFooterButton = styled.button`
  background-color: transparent;
  border: transparent;
  font-size: 14px;
  font-weight: 500;
  color: #d7d7d7;
  cursor: pointer;
`;

const CopyRightContainer = styled.p`
  font-size: 12px;
  color: #494949;
  padding-left: 15px;
`;

export { SideItemsContainer, SideItem, SideIcon, Typography };

export {
  SideNavContainer,
  SideNavItemsContainer,
  SideNavLogoMenuContainer,
  SideNavMenuButton,
  MainContainer,
  NavItem,
  NavSubsLogoContainer,
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
};
