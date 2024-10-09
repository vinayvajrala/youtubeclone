import styled from "styled-components";

const ShortsPageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ShortsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  overflow: auto;
  gap: 20px;
  margin-top: -50px;
  list-style-type: none;
  overflow: auto;
  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ShortsArrowButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  right: 20px;
  top: 50%;
`;

const ShortsArrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #272727;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #3f3f3f;
    transition: 0.3s all ease-in-out;
  }
`;

export { ShortsPageContainer, ShortsList, ShortsArrowButtons, ShortsArrow };
