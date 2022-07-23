import React, { useEffect, useState } from "react";

import "./TextContent.css";

const TextContent = ({messageLocation}) => {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch(messageLocation)
      .then(r => r.text())
      .then(text => {
        setMessage(text.replaceAll("\n", "<br />"));
      });
  }, [messageLocation]);

  return (
    <div dangerouslySetInnerHTML={{ __html: message}} />
  );
}

export default TextContent;