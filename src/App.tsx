import {Tabs} from "@cedcommerce/ounce-ui";
import React, {useState} from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

interface dataObj {
  firstName: string;
  lastName: string;
}

function App() {
  const data: dataObj = {
    firstName: "Sachin",
    lastName: "kush",
  };
  const [tabValue, setTabValue] = useState<string>("SignUp");

  return (
    <div className="App">
      <Tabs
        alignment="horizontal"
        onChange={(value) => {
          setTabValue(value);
        }}
        selected={tabValue}
        value={[
          {
            content: "Sign Up",
            id: "SignUp",
          },
          {
            content: "Login",
            id: "Login",
          },
        ]}
      >
        {tabValue === "SignUp" ? <Signup name={data} /> : <Login name={data} />}
      </Tabs>
    </div>
  );
}

export default App;
