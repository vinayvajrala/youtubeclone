import VideoItem from "../../../Components/VideoItem";

import { HomePageContainer } from "./styledcomponent";
import { VIDEOS_URL } from "../../../urls";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "./videosSlice";
import { videosSelector } from "../../../selectors";

const HomePage = () => {
  const { videos, status } = useSelector(videosSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    let url = VIDEOS_URL;
    dispatch(fetchVideos(url));
  }, [dispatch]);

  return (
    <HomePageContainer>
      {status === "loading" ? (
        <p style={{ color: "white" }}>Loading...</p>
      ) : videos.length === 0 ? (
        <p style={{ color: "white" }}>No Videos Available</p>
      ) : (
        <>
          {videos.map((item) => (
            <VideoItem key={item.id} videoUrl={item.url} title={item.title} />
          ))}
        </>
      )}
    </HomePageContainer>
  );
};

export default HomePage;
