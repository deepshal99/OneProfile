
import MultiStep from 'react-multistep'
import { Input, Textarea } from "@chakra-ui/react";

const steps = [

    { component: <TitleWithDiscription title="Education" discription="Discription" canSkip={true} /> },
    { component: <TitleWithDiscription title="Job" discription="Discription" canSkip={true} /> },
    { component: <TitleWithDiscription title="Profession" discription="Discription" canSkip={true} /> },

]


const prevStyle = { 'background': 'blue', 'padding': '10px 40px', 'color': 'white', 'margin-right': '10px' }
const nextStyle = { 'background': 'blue', 'padding': '10px 40px', 'color': 'white', 'float': 'right' }


const MultiStepForm = () => {
    return (


        <div className='containerStep'>
            <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
            <div className='container app-footer'>
            </div>
        </div>


    )
}

export default MultiStepForm

function TitleWithDiscription(props) {
    return (
        <form >
            <Input placeholder={props.title} m='20px' color='black' textWeight='bold' required />
            <Textarea placeholder={props.discription} m='20px' required id={props.title + props.discription} />
        </form>
    )
}