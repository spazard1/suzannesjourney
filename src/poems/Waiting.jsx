
import React from "react";
import TextContent from "../TextContent";

import content from "./Waiting.txt";

const Content = () => {
  return <TextContent title="Waiting" date="February 9th, 2017" messageLocation={content} />;
}

export default Content;
