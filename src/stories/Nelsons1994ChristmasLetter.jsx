
import React from "react";
import TextContent from "../TextContent";

import content from "./Nelsons1994ChristmasLetter.txt";

const Content = () => {
  return <TextContent title="Nelson's 1994 Christmas Letter" date="December 1994" messageLocation={content} />;
}

export default Content;
