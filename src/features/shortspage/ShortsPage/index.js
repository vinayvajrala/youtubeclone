import ShortItem from "../../../Components/ShortItem";
import {
  ShortsArrow,
  ShortsArrowButtons,
  ShortsList,
  ShortsPageContainer,
} from "./styledcomponent";
import { SHORTS_URL } from "../../../urls";
import { useDispatch, useSelector } from "react-redux";

import { fetchShorts } from "./shortsSlice";
import { useEffect, useRef } from "react";
import { shortsSelector } from "../../../selectors";

import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

const ShortsPage = () => {
  const { shorts, status } = useSelector(shortsSelector);
  const shortsListRef = useRef(null);

  const scrollDown = () => {
    if (shortsListRef.current) {
      const shortItemHeight =
        shortsListRef.current.firstElementChild.offsetHeight; // Get the height of one short item
      shortsListRef.current.scrollBy({
        top: shortItemHeight,
        behavior: "smooth",
      });
    }
  };

  const scrollUp = () => {
    if (shortsListRef.current) {
      const shortItemHeight =
        shortsListRef.current.firstElementChild.offsetHeight; // Get the height of one short item
      shortsListRef.current.scrollBy({
        top: -shortItemHeight,
        behavior: "smooth",
      });
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    let url = SHORTS_URL;
    dispatch(fetchShorts(url));
  }, [dispatch]);

  return (
    <ShortsPageContainer>
      {status === "loading" ? (
        <p style={{ color: "white" }}>Loading...</p>
      ) : shorts.length === 0 ? (
        <p style={{ color: "white" }}>No Shorts Available</p>
      ) : (
        <ShortsList ref={shortsListRef}>
          {shorts.map((item) => (
            <ShortItem key={item.id} shortsUrl={item.url} title={item.title} />
          ))}
        </ShortsList>
      )}
      <ShortsArrowButtons>
        <ShortsArrow onClick={scrollUp}>
          <IoMdArrowUp size={30} color="#f1f1f1" />
        </ShortsArrow>
        <ShortsArrow onClick={scrollDown}>
          <IoMdArrowDown size={30} color="#f1f1f1" />
        </ShortsArrow>
      </ShortsArrowButtons>
    </ShortsPageContainer>
  );
};

export default ShortsPage;
