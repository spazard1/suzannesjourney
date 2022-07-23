import React, { useEffect, useState } from "react";

const TextContent = ({messageLocation}) => {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch(messageLocation)
      .then(r => r.text())
      .then(text => {
        setMessage(text.replace("\n", "<br />"));
      });
  }, [messageLocation]);

  return (
    <div>
      {message}
    </div>
  );
}

export default TextContent;