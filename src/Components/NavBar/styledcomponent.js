import styled from "styled-components";
import avatar from "../../assets/images/Avatar.png";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 15px;
  // height: 120px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5000;
  padding: 0px 20px;
  // background-color: var(--dark-theme-background-color);
  background-color: rgba(15, 15, 15, 0.8);
  backdrop-filter: blur(50px);
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

const LogoMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoButton = styled.button`
  background-color: transparent;
  border: transparent;
  padding: 0px;
  cursor: pointer;
`;

const MenuButton = styled.button`
  border: transparent;
  padding: 7px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #272727;
    transition: all 0.3s ease-in-out;
  }
`;

const Logo = styled.img`
  width: 90px;
  object-fit: contain;
`;

const SearchMicContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 10px 0px;
  gap: 20px;
  margin-left: 30px;
  width: 50%;
`;

const SearchContainer = styled.div`
  border: 1px solid #2f2f2f;
  border-radius: 20px;
  padding: 0px 0px 0px 10px;
  width: 90%;
  display: flex;
  flex-direction: row;
  just-content: space-between;
`;

const InputContainer = styled.input`
  width: 88%;
  padding: 12px;
  background-color: transparent;
  border: transparent;
  outline: none;
  color: #f1f1f1;
  &::placeholder {
    font-weight: 450;
    font-size: 16px;
  }
`;

const SearchIconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
  border-radius: 0px 20px 20px 0px;
  // background-color: ${(props) => (props.isDark ? "#222222" : "white")};
  background-color: #222222;
  justify-self: flex-end;
  border: transparent;
  cursor: pointer;
`;

const MicContainer = styled.button`
  type: button;
  border-radius: 50%;
  border: transparent;
  background-color: #222222;
  padding: 7px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #3d3d3d;
    transition: all 0.3s ease-in-out;
  }
`;

const CreateNotiProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const CreateBtnContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #272727;
  gap: 5px;
  border: transparent;
  border-radius: 20px;
  padding: 7px 15px 7px 10px;
  cursor: pointer;
  &:hover {
    background-color: #3f3f3f;
    transition: all 0.3s ease-in-out;
  }
`;

const Typography = styled.p`
  font-size: 14px;
  color: white;
`;

const NotificationButton = styled.button`
  border: transparent;
  background-color: transparent;
  padding: 7px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #3f3f3f;
    transition: all 0.3s ease-in-out;
  }
`;

const AvatarContainer = styled.button`
  border-radius: 50%;
  border: transparent;
  cursor: pointer;
  background-image: url(${avatar});
  background-size: cover;
  width: 30px;
  height: 30px;
`;

const CreateMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  background-color: #282828;
  border-radius: 10px;
  padding: 10px 0px;
  position: absolute;
  top: 58px;
  z-index: 1001;
`;

const CreateMenuItem = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px 20px;
  gap: 20px;
  cursor: pointer;
  background-color: transparent;
  border: transparent;

  &:hover {
    background-color: #3e3e3e;
    transition: all 0.3s ease-in-out;
  }
`;

const MenuIcon = styled.i`
  font-size: 20px;
  color: #f1f1f1;
`;

const MenuLabel = styled.p`
  font-size: 16px;
  color: #f1f1f1;
`;

const FilterButtonsContainer = styled.div`
  display: flex;
  margin-left: 80px;
  height: 64px;
  position: relative;
`;

const FilterButton = styled.button`
  border: transparent;
  background-color: #272727;
  padding: 8px 12px;
  border-radius: 10px;
  margin-right: 12px;
  color: #f1f1f1;
  width: 100%;
  text-wrap: nowrap;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    background-color: #3f3f3f;
    transition: 0.3s all ease-in-out;
  }
`;

const ButtonsList = styled.ul`
  list-style-type: none;
  display: flex;
  // position: relative;
  align-items: center;
  flex-direction: row;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowButtonLeft = styled.button`
  border: transparent;
  background-color: #272727;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: absolute;
  border-radius: 50%;
  top: 25%;
  &:hover {
    background-color: #3a3a3a;
    z-index: 10;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
const ArrowButtonRight = styled.button`
  border: transparent;
  background-color: #272727;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: absolute;
  top: 25%;
  right: 0;
  border-radius: 50%;
  &:hover {
    background-color: #3a3a3a;
    z-index: 10;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export {
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
  ArrowButtonLeft,
  ArrowButtonRight,
};

export { CreateMenuContainer, CreateMenuItem, MenuIcon, MenuLabel };
