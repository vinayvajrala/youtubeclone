import { MdOutlineHistory } from "react-icons/md";
import {
  SearchHistoryContainer,
  SearchHistoryItem,
  HistoryIcon,
  HistoryContent,
  Typography,
  RemoveButton,
} from "./styledcomponent";

const SearchHistoryItems = [
  {
    key: 1,
    historyText: "mkbhd latest videos",
  },
  {
    key: 2,
    historyText: "devara review",
  },
  {
    key: 3,
    historyText: "redux toolkit in react js",
  },
  {
    key: 4,
    historyText: "react js tutorial",
  },
  {
    key: 5,
    historyText: "react interview questions",
  },
  {
    key: 6,
    historyText: "js basics and dsa",
  },
  {
    key: 7,
    historyText: "react router dom",
  },
  {
    key: 8,
    historyText: "react",
  },
  {
    key: 9,
    historyText: "table tennis serves",
  },
];

const SearchHistory = () => {
  return (
    <SearchHistoryContainer>
      {SearchHistoryItems.map((item) => (
        <SearchHistoryItem>
          <HistoryIcon>
            <MdOutlineHistory />
          </HistoryIcon>
          <HistoryContent>
            <Typography key={item.key}>{item.historyText}</Typography>
          </HistoryContent>
          <RemoveButton>Remove</RemoveButton>
        </SearchHistoryItem>
      ))}
    </SearchHistoryContainer>
  );
};

export default SearchHistory;
