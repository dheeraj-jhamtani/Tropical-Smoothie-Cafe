import * as React from "react";
import { useEffect, useState } from "react";
import Logo from "../../images/logo-header.svg";
import Menu from "./Menu";
import { CSSTransition } from "react-transition-group";
import { humburgerIcon, logo } from "../../../sites-global/global";
import Cta from "../commons/cta";
import Ctaicon from "../commons/Ctaicon";

const Nav = (props: any) => {
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  })
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("menu-opened");
  };
  return (
    <>
      <div className="site-header">
        <div className="header-top">
          <div className="container">
            <div className="logo">
              {props.global_Data.c_logo?
              <img src={props.global_Data.c_logo.url} alt="logo" />:
              <div dangerouslySetInnerHTML={{ __html: logo }} />}
            </div>
          </div>
        </div>
        <div className="main-nav">
          <div className="container">
            <Menu c_menu={props.global_Data.c_navigationLinks} />

            <Ctaicon buttonText={props.global_Data.c_downloadApp.link.label} url={props.global_Data.c_downloadApp.link.link} style="text-black" buttonIcon={props.global_Data.c_downloadApp.icon.url}  />

            <Ctaicon buttonText={props.global_Data.c_findACafe.link.label} url={props.global_Data.c_findACafe.link.link} style="text-black" buttonIcon={props.global_Data.c_findACafe.icon.url}  />            

            <Cta buttonText={props.global_Data.c_orderNow.label} url={props.global_Data.c_orderNow.link} style="primary-cta"  />
          </div>
        </div>
        <button type="button" className="menu-btn" id="menu-btn" onClick={toggle}>
        <div dangerouslySetInnerHTML={{ __html: humburgerIcon }} />
        <span>Menu</span>
        </button>
      </div>
    </>
  )
}

export default Nav;