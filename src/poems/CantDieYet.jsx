
import React from "react";
import TextContent from "../TextContent";

import content from "./cantDieYet.txt";

const Content = () => {
  return <TextContent title="Can't Die Yet" date="February 17, 2016" messageLocation={content} />;
}

export default Content;
