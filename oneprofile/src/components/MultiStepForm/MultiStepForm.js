import React from 'react';
import { useHistory } from 'react-router-dom';
import { Progress } from "@chakra-ui/react"
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import './MultiStepForm.css';
import {saveUser} from "../../Handler/firestoreHandler"


const MultiStepForm = (props) => {
  const [currentStep, setCurrentStep] = React.useState(0)
  const h = useHistory();


  function onFinishHandler(e) {
    saveUser(
    localStorage.getItem("loadedInEmail"),
    localStorage.getItem("loadedInName"),
    localStorage.getItem("photoURL"),
    localStorage.getItem("AboutDetails"),
    localStorage.getItem("PersonalDetails")
    ).then(()=>{
      localStorage.removeItem("loadedInName")
      localStorage.removeItem("photoURL")
      localStorage.removeItem("AboutDetails")
      localStorage.removeItem("loadedInEmail")
      h.push("/profile")
    })
  }


  function onNextHandler(e) {
    if (props.components[currentStep].onNext) {
      props.components[currentStep].onNext.call()
    }
    if (currentStep < props.components.length - 1)
      setCurrentStep(currentStep + 1)

    if (document.getElementById('nextBtn').innerText === 'Finish') {
      setCurrentStep(currentStep + 1)
      setTimeout(onFinishHandler(), 1000);
    }


  }

  function onPrevHandler(e) {
    if (currentStep > 0)
      setCurrentStep(currentStep - 1)
  }

  return (

    <div className="MultiStepForm">

      <div className="top-bar">
        <div className="stepCounter">
          Step{" "}{currentStep + 1}{" "}of{" "}{props.components.length}<br />
        </div>
        <Progress size="xs" colorScheme="blue" className="progress-bar" value={((currentStep) / props.components.length) * 100} />
      </div>


      {
        props.components.map((element, index) => {
          element.step = index
          if (currentStep === element.step)
            return <section>{element.compent}</section>
        }
        )}
      <div className="buttonHolder" >
        <button onClick={onPrevHandler} style={{ backgroundColor: (currentStep > 0 ? '#e2e8f0' : '#ffffff') }} className="prev">
          {((currentStep > 0) ? <ChevronLeftIcon /> : '')}</button>
        <button id="nextBtn" onClick={onNextHandler} className="next">
          {((currentStep < props.components.length - 1) ? <ChevronRightIcon /> : 'Finish')}
        </button>
      </div>
    </div>
  )
};

// MultiStepForm.propTypes = {};

// MultiStepForm.defaultProps = {};

export default MultiStepForm;

