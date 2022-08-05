import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { videos, error, loading, hasMore } = useVideoList(page);
  return (
    <div>
      {videos.length >= 0 && (
        <InfiniteScroll
          className="videos"
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 15)}
          loader={<h4>Loading...</h4>}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to="/quiz" key={video.youtubeID}>
                <Video
                  noq={video.noq}
                  title={video.title}
                  ID={video.youtubeID}
                />
              </Link>
            ) : (
              <Video noq={video.noq} title={video.title} ID={video.youtubeID} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <h2>Videos Not Found!</h2>}
      {error && <h2>There was an Error!</h2>}
    </div>
  );
}
