
import React from "react";
import TextContent from "../TextContent";

import content from "./LittleToe.txt";

const LittleToe = () => {
  return <TextContent title="The Story of Little Toe" date="October 2000" messageLocation={content} />;
}

export default LittleToe;
