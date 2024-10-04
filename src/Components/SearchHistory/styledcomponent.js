import styled from "styled-components";

const SearchHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  gap: 2px;
  background-color: #212121;
  position: absolute;
  top: 58px;
  left: 26%;
  z-index: 100;
  border-radius: 10px;
  width: calc(550px * 0.9);
`;

const SearchHistoryItem = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
  padding: 3px 20px;
  align-items: center;
  border: transparent;
  &:hover {
    background-color: #383838;
  }
`;

const HistoryIcon = styled.i`
  font-size: 18px;
  color: white;
  margin-right: 20px;
  padding-bottom: 0px;
`;

const HistoryContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-grow: 1;
  width: 100%;
  align-items: flex-start;
  padding-bottom: 3px;
`;

const Typography = styled.p`
  font-size: 16px;
  color: white;
  line-height: 25px;
`;

const RemoveButton = styled.button`
  font-size: 12px;
  color: #3ea6ff;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export {
  SearchHistoryContainer,
  SearchHistoryItem,
  HistoryIcon,
  HistoryContent,
  Typography,
  RemoveButton,
};
