import React from "react";
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from "cdbreact";

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%", height: "8.3vh" }}
      >
        <CDBBox
          style={{ color: "dimgray" }}
          sdisplay="flex"
          alignItems="center"
        >
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src="reaper.png" width="30px" />
            <span className="ml-4 h5 mb-0 font-weight-bold">
              Online Mission Planning Environment
            </span>
          </a>
        </CDBBox>
        <CDBBox style={{ color: "dimgray" }}>
          <small className="ml-2">
            &copy; Galvanize, 2022. All rights reserved.
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn
            flat
            color="dark"
            className="p-2"
            href="https://www.facebook.com/GalvanizeHQ/"
          >
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn
            flat
            color="dark"
            className="mx-3 p-2"
            href="https://twitter.com/galvanize?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn
            flat
            color="dark"
            className="p-2"
            href="https://www.instagram.com/galvanizehq/?hl=en"
          >
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
