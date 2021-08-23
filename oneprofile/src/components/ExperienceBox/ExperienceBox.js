import React from 'react';

import styles from './ExperienceBox.module.css';
import ExperienceField from '../ExperienceField/ExperienceField';


const ExperienceBox = () => (
  <div className={styles.ExperienceBox}>
    <h3>Experience</h3>
    <div className={styles.ExperienceMain}>
      <ExperienceField />
      <ExperienceField />
      <ExperienceField />
    </div>
  </div>
);

ExperienceBox.propTypes = {};

ExperienceBox.defaultProps = {};

export default ExperienceBox;


//comment