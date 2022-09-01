
import React from "react";
import TextContent from "../TextContent";

import content from "./MyJabberwock.txt";

const Content = () => {
  return <TextContent title="My Jabberwock" date="October 11th, 2015" messageLocation={content} />;
}

export default Content;
