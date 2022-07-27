
import React from "react";
import TextContent from "../TextContent";

import content from "./rubADubDub.txt";

const Content = () => {
  return <TextContent title="Rub A Dub Dub" date="October 13, 2018" messageLocation={content} />;
}

export default Content;
