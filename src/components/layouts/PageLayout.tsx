import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";

type Props = {
    title?: string;
    _site?: any;
    global:any;
    children?: React.ReactNode;
};
  
  const PageLayout = ({
    title,
    _site,
    global,
    children,
  }: Props) => {
    return (
        <>

            <Nav global_Data={global} />
                {children}
            <Footer global_footer={global} />
        </>
    );
  };

export default PageLayout;
  