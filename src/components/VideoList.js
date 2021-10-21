import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //propsdan birdefelik cixardiriq
  const renderedVideos = videos.map((video) => (
    <VideoItem
      video={video}
      key={video.id.videoId} //arrayde key react ucun lazimdir duzgun render etmeyi ucun
      onVideoSelect={onVideoSelect}
    />
  ));
  return <div className="ui relaxed divided list">{renderedVideos}</div>;
};

export default VideoList;
