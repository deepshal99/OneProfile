import React from "react";
import styles from "./MultiStepFormHolder.module.css";
import PersonalDetails from "../PersonalDetails/PersonalDetails"
import MultiStepForm from "../MultiStepForm/MultiStepForm"
import AboutDetails from "../AboutDetails/AboutDetails"

const MultiStepFormHolder = () => {
  let components = [
    {
      compent: <PersonalDetails />, name: "PersonalDetails",
      onNext: () => {
        console.log(document.getElementById("profession-detail").value)
        localStorage.setItem("PersonalDetails",document.getElementById("profession-detail").value)
      }
    },
    {
      compent: <AboutDetails />, name: "AboutDetails",
      onNext: () => {
        console.log(document.getElementById("about-bio").value)
        localStorage.setItem("AboutDetails",document.getElementById("about-bio").value)

      }
    },
  ]
  return (
    <div className={styles.MultiStepFormHolder}>
      <MultiStepForm components={components} />
    </div>
  );
};

MultiStepFormHolder.propTypes = {};

MultiStepFormHolder.defaultProps = {};

export default MultiStepFormHolder;
