import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = {
    videos: [],
    video: null,
  };

  componentDidMount() {
    this.onTermSubmit("bikes");
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    this.setState({
      videos: response.data.items,
      video: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ video: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.video} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
