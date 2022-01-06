import { useEffect, useState } from "react";
import VideoDisplay from "../components/VideoDisplay";
import "../css/VideoPage.css";

export default function VideoPage(props: { routeEndpoints: string}): JSX.Element {

  const [videoIDs, setVideoIDs] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [duration, setDuration] = useState<number>();

  async function getVideosDb() {
    if (duration) {
    fetch(
      `https://yogafit-server.herokuapp.com/getvideos/3/${duration}/${tags.join("/")}`
    )
      .then((res) => {
        return res.json();
      })
      .then(
        (video) => {
          // console.log(video.data.videoIDs);
          setVideoIDs(video.data.videoIDs);
        }
        // (error) => console.log(error)
      )
      .catch((error) => console.log(error));
    }
  }

  async function getallIDs() {
    let allParams = props.routeEndpoints.split("&");
    setDuration(parseInt(allParams[0]));
    setTags(allParams[1].split("~"));
    
  }

    useEffect(() =>{
      getallIDs()
      // eslint-disable-next-line
    },[])

    useEffect(() => {
      getVideosDb();
      // eslint-disable-next-line
    }, [tags, duration])
  
    return <div className="VideoPage">
      <h1>Here are your results:</h1>
    <VideoDisplay vidIDs={videoIDs} />

    </div>;
}
