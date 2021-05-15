import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SocketClient from "./components/SocketClient"
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const [loadClient, setLoadClient] = useState(true);
  return (
    <>
      {/* LOAD OR UNLOAD THE CLIENT */}
      <button onClick={() => setLoadClient(prevState => !prevState)}>
        STOP CLIENT
      </button>
      {/* SOCKET IO CLIENT*/}
      {loadClient ? <SocketClient /> : null}
    </>
  );
}

export default App;
