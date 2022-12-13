import {Card, FlexChild, FlexLayout, TextField} from "@cedcommerce/ounce-ui";
import React from "react";
import Layout from "./Layout";

function Signup({...props}) { 
  console.log(props);
  
  return (
    <div className="signUp">
      <FlexLayout
        halign="center"
        valign="center"
        spacing="loose"
        direction="vertical"
      >
        <FlexChild desktopWidth="33" mobileWidth="66" tabWidth="50">
          <Card
            title="Signup Page"
            primaryAction={{
              content: "Sign Up",
              type: "Primary",
              onClick: () => console.log("dd"),
            }}
          >
            <FlexLayout direction="vertical" halign="center" spacing="loose">
              <TextField
                name="First Name"
                placeHolder="Enter First Name"
                type="text"
                thickness="thin"
                value={props.name.firstName}
              />
              <TextField
                name="Last Name"
                placeHolder="Enter Last Name"
                type="text"
                thickness="thin"
                value={props.name.lastName}
              />
            </FlexLayout>
          </Card>
        </FlexChild>
      </FlexLayout>
    </div>
  );
}
export default Layout(Signup);
