
import React from "react";
import TextContent from "../TextContent";

import content from "./ItsNotAboutTheTurkey.txt";

const Content = () => {
  return <TextContent title="It's Not About the Turkey" date="November 23rd, 2017" messageLocation={content} />;
}

export default Content;
