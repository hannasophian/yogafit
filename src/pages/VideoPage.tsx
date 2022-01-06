// import { useState } from "react";
// import { isVariableDeclarationList } from "typescript";
// import VideoDisplay from "../components/VideoDisplay";

export default function VideoPage(props: { idList: string }): JSX.Element {
//   const [videoIDs, setVideoIDs] = useState<string[]>([]);

  function getallIDs(list: string) {
    return list.split("&");
  }

  if (props.idList.length !== 0) {
    return <>
    {getallIDs(props.idList).map((id) => <p>{id}</p>)}
    </>;
  } else {
    return (
      <>
        <h1>GO Back</h1>
      </>
    );
  }
}
