import React from "react";
import "./AboutDetails.module.css";
import { Textarea, Text } from '@chakra-ui/react'

const AboutDetails = () => {
  function storeAbout() {
    console.log(document.getElementById("about-bio"))
  }
  return (
    <div className="PersonalDetails">
      <div className="title">Tell us about yourself</div>

      <Text mt={1} mb={4} fontSize="md">Let people know you who you are</Text>
      <div>

        <Textarea id="about-bio"
          placeholder="Short bio about you"
          size="sm"
        />

      </div>
    </div>
  );
};

AboutDetails.propTypes = {};

AboutDetails.defaultProps = {};

export default AboutDetails;
