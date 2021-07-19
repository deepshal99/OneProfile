
import MultiStep from 'react-multistep'
import { Spacer, Button, Input, useColorModeValue, Textarea} from "@chakra-ui/react";

const steps = [
    { component: <TitleWithDiscription title="Education" discription="Discription" canSkip={true} /> },
    { component: <TitleWithDiscription title="Job" discription="Discription" canSkip={true} /> },
    { component: <TitleWithDiscription title="Profession" discription="Discription" canSkip={true} /> },

]


const prevStyle = { 'background': '#33c3f0', 'border-width': '2px' }
const nextStyle = { 'background': '#33c3f0', 'border-width': '2px' }


const MultiStepForm = () => {
    return (
        <div className='container'>
        <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
        <div className='container app-footer'>
        </div>
    </div>
    )
}

export default MultiStepForm

function TitleWithDiscription(props){
    return (
      <form >
              <Input placeholder={props.title} m='20px' color='black' textWeight='bold' required/>
              <Textarea placeholder={props.discription} m='20px' required id={props.title+props.discription}/>
      </form>
    )
}