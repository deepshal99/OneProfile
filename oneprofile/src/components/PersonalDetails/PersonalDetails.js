import React from "react";
import "./PersonalDetails.css";
import { Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'

const PersonalDetails = () => {
  function storeInfo() {
    console.log(document.getElementById("profession-detail"))
  }
  return (
    <div className="PersonalDetails">
      <div className="title">Tell us about what you do</div>

      <Text mt={1} mb={4} fontSize="md">This will help us build your profile better</Text>
      <div>
        <InputGroup>
          <InputLeftAddon children="I am a" />
          <Input id="profession-detail" placeholder="Designer" />
        </InputGroup>
      </div>
      </div>
      );
};

      PersonalDetails.propTypes = { };

      PersonalDetails.defaultProps = { };

      export default PersonalDetails;
