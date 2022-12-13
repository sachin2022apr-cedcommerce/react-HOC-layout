import { Card, FlexChild, FlexLayout, TextField } from '@cedcommerce/ounce-ui'
import React from 'react'
import Layout from './Layout'

function Login({...props}) {
  return (
    <div className="signUp">
      {/* {props.name} */}
      <FlexLayout
        halign="center"
        valign="center"
        spacing="loose"
        direction="vertical"
      >
        <FlexChild desktopWidth="33" mobileWidth="66" tabWidth="50">
          <Card
            title="Login Page"
            primaryAction={{
              content: "Login",
              type: "Primary",
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
              <TextField
                name="Email"
                placeHolder="example@xyz.abc"
                type="text"
                thickness="thin"
              />
            </FlexLayout>
          </Card>
        </FlexChild>
      </FlexLayout>
    </div>
  )
}

export default  Layout(Login)