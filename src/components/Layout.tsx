import {Card} from "@cedcommerce/ounce-ui";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  [key: string]: any;
};

function Layout(OrignalComponent: React.FC): React.FC<Props> {
  function NewComponent(props: Props): JSX.Element {
    return (
      <>
        <Header />
        <OrignalComponent {...props} />
        <Footer />
      </>
    );
  }
  return NewComponent;
}

export default Layout;
