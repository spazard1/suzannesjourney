
import React from "react";
import TextContent from "../TextContent";

import content from "./theresASharkInMyBathtub.txt";

const Content = () => {
  return <TextContent title="There's A Shark In My Bathtub!" date="October 24, 1993" messageLocation={content} />;
}

export default Content;
