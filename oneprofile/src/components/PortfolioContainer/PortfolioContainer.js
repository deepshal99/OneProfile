import React from 'react';
import PropTypes from 'prop-types';
import './PortfolioContainer.css';
import PortfolioBox from '../PortfolioBox/PortfolioBox';
import { AddIcon } from '@chakra-ui/icons'

const PortfolioContainer = () => {
  let portfolios = [

    {
      name: "Design",
      thumbnail: "https://cdn.dribbble.com/users/702789/screenshots/6982114/media/117dab56acf1321cc3e6d335af9cfa48.png?compress=1&resize=400x300", discription: "SonmeDiscription"
    },
    {
      name: "Design",
      thumbnail: "https://cdn.dribbble.com/users/702789/screenshots/6982114/media/117dab56acf1321cc3e6d335af9cfa48.png?compress=1&resize=400x300", discription: "SonmeDiscription"
    },
    {
      name: "Design",
      thumbnail: "https://cdn.dribbble.com/users/702789/screenshots/6982114/media/117dab56acf1321cc3e6d335af9cfa48.png?compress=1&resize=400x300", discription: "SonmeDiscription"
    },
    {
      name: "Design",
      thumbnail: "https://cdn.dribbble.com/users/702789/screenshots/6982114/media/117dab56acf1321cc3e6d335af9cfa48.png?compress=1&resize=400x300", discription: "SonmeDiscription"
    },


  ]
  return (
    <div className="PortfolioContainer">
      {/* <button className="addButton">
        <span><AddIcon w={8} h={8} /></span>
      </button> */}
      {
        portfolios.map((element) => {
          return <PortfolioBox portfolio={element} />
        })
      }
    </div>
  );
}

PortfolioContainer.propTypes = {};

PortfolioContainer.defaultProps = {};

export default PortfolioContainer;
