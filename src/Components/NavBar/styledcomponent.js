import styled from "styled-components";
import avatar from "../../assets/images/Avatar.png";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-theme-background-color);
  padding: 0px 20px;
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
`;

const SearchContainer = styled.div`
  border: 1px solid #2f2f2f;
  border-radius: 20px;
  padding: 0px 0px 0px 10px;
  width: 560px;
  display: flex;
  flex-direction: row;
  just-content: space-between;
`;

const InputContainer = styled.input`
  width: 90%;
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
  width: 10%;
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

export {
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
};
