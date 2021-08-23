import React from 'react';

import styles from './ExperienceField.module.css';
import { SocialIcon } from 'react-social-icons';

const ExperienceField = () => (
  <div className={styles.ExperienceField}>
    <div className={styles.company_logo}><SocialIcon url="https://twitter.com/jaketrent" /></div>
    <h1>Product Designer</h1>
    <div className={styles.company_details}>
      <h3>Twitter</h3>
      <h5> Present</h5>
    </div>
    <h3>I look after the Design strategy at the Google Ad-sense platform. I led a super-talented diverse bunch of product design leaders, user researchers, interaction designers, visual designers, motion designers, multi-modal and voice UI designers, AR/VR/XR, and 3D content designers.</h3>
  </div>
);

ExperienceField.propTypes = {};

ExperienceField.defaultProps = {};

export default ExperienceField;
