import React, { useState } from "react";
import { Chat } from "./components/Chat";
import "./App.css";

function App() {
  // We no longer use isAuth. We now check if a user object exists.
  const [user, setUser] = useState(null);
  const [room, setRoom] = useState(null);

  // This ref is for the room input
  const roomInputRef = React.useRef(null);
  
  // This ref is for the username input
  const nameInputRef = React.useRef(null);

  // This function now just clears the user and room from state
  const logOut = () => {
    setUser(null);
    setRoom(null);
  };

  // The main view logic
  // 1. If no user is set, show the username input form.
  if (!user) {
    return (
      <div className="room">
        <label>Enter Your Name To Join</label>
        <input ref={nameInputRef} />
        <button
          onClick={() => {
            if (nameInputRef.current.value) {
              setUser(nameInputRef.current.value);
            }
          }}
        >
          Join
        </button>
      </div>
    );
  }

  // 2. If a user is set, but no room, show the room selection form.
  return (
    <>
      {room ? (
        <Chat room={room} user={user} />
      ) : (
        <div className="room">
          <label>Enter Room Name:</label>
          <input ref={roomInputRef} />
          <button
            onClick={() => {
              if (roomInputRef.current.value) {
                setRoom(roomInputRef.current.value);
              }
            }}
          >
            Enter Chat
          </button>
        </div>
      )}

      <div className="sign-out">
        <button onClick={logOut}>Leave</button>
      </div>
    </>
  );
}

export default App;
