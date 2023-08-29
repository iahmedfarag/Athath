import React, { useEffect } from "react";
import { Header, TextSection } from "../Page.js";

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header page={"About"} />

      <TextSection about={true} />
    </>
  );
};

export default AboutPage;
