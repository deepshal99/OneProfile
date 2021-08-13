import React, { Component } from "react";
import { useState } from "react";
import { Button, Input, useColorModeValue, Textarea} from "@chakra-ui/react";
import {Card} from "../components/SigninNew/Card"


export function InfoGetter(){

  const [current_index, setCurrent] = useState(0)

  function TitleWithDiscription(props){
    return (
      <form onSubmit={nextStepHandler}>
              <Input placeholder={props.title} m='20px' color='black' textWeight='bold' required/>
              <Textarea placeholder={props.discription} m='20px' required id={props.title+props.discription}/>
              <Button bg='#07aaff' type="submit" ml='20px' color='#ffffff' style={{ display: (props.isLast ? 'none' : 'inline') }}>Next</Button>
              <Button bg='#07aaff' ml='20px' color='#ffffff' onClick = {skipHandler} style={{ display: (props.isLast ? 'inline' : 'none') }} >Finish</Button>
              <Button bg='#07aaff' ml='20px' color='#ffffff' onClick = {skipHandler} style={{ display: (props.canSkip ? 'inline' : 'none') }} >Skip</Button>
      </form>
    )
  }

  class InfoDisplay extends Component{
    render() {
      switch (current_index) {
        case 0:
          return <TitleWithDiscription title="Education" discription="Discription" canSkip={true} />
        case 1:
          return <TitleWithDiscription title="Profession" discription="Discription" canSkip={true} />
        case 2:
          return <TitleWithDiscription title="Job" discription="Discription" canSkip={false} isLast={true}/>
      
        default:
          break;
      }
    }
  }

  function nextStepHandler(){
    setCurrent((current_index+1)%3)
    console.log("Index Changed To: "+current_index)
  }

  function skipHandler(){
    setCurrent((current_index+1)%3)
    console.log("Index Changed To: "+current_index)
  }

    return (
        <div className="dashboard">
          <Card 
          w='500px'
          h='300px'
          display='flex'
          justifyContent=''
          bg = {useColorModeValue('#ddffff', 'black')}>
          <InfoDisplay />
          </Card>
        </div>
      );
}

