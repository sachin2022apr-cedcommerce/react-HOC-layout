import {Button, Topbar} from "@cedcommerce/ounce-ui";
import React from "react";

function Header() {
  return (
    <>
      <Topbar
        
        account={{
          image: "./logo192.png",
          name: "React",
          url: "https://reactjs.org/",
        }}
      />
    </>
  );
}

export default Header;
