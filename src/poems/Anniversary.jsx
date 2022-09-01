
import React from "react";
import TextContent from "../TextContent";

import content from "./Anniversary.txt";

const Content = () => {
  return <TextContent title="Anniversary" date="July 1992" messageLocation={content} />;
}

export default Content;
