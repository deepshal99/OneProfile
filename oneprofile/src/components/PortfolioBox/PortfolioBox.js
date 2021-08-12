// import React from 'react';
// import PropTypes from 'prop-types';
// import './PortfolioBox.css';



// const PortfolioBox = (props) => {
//   return (
//     <div className="PortfolioBox">
//       <img className="CoverThumbnail" src={props.portfolio.thumbnail}></img>
//       <div className="namePorfolio">{props.portfolio.name}</div>
//       <div className="discription">{props.portfolio.discription}</div>
//     </div>
//   )
// };

// PortfolioBox.propTypes = {};

// PortfolioBox.defaultProps = {};

// export default PortfolioBox;
import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const Ma = (props) => {
  return (
    <Flex
      // bg={useColorModeValue("#FFFFFF")}
      p={0}
      mr={10}
      w="auto"
      alignItems="start"
      justify='start'
    >
      <Box id="PortfolioBox"

        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"

      >
        <Image
          w={"full"}
          h={56}
          fit="cover"
          src={props.portfolio.thumbnail}
          alt="avatar"
        />

        <Box p={5} textAlign="left">
          <Link

            display="block"
            fontSize="xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            {props.portfolio.name}
          </Link>
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            {props.portfolio.discription}
          </chakra.span>
        </Box>
      </Box>
    </Flex>
  );
};

export default Ma;