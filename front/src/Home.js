import React, { useState, useEffect } from "react";
import ListStore from "./ListStore";

function Home(props) {
  return (
    <div>
      {!props.user ? " " : `¡Bienvenido${props.user.username}!`}
      <ListStore />
    </div>
  );
}

export default Home;
