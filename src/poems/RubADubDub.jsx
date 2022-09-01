
import React from "react";
import TextContent from "../TextContent";

import content from "./RubADubDub.txt";

const Content = () => {
  return <TextContent title="Rub A Dub Dub" date="October 13th, 2018" messageLocation={content} />;
}

export default Content;
