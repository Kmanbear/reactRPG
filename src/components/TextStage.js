import StoryText from "./StoryText"
import StoryOption from "./StoryOption"
import StoryField from "./StoryField"
import { useState, useEffect } from 'react'

const TextStage = ({playerState, currentStage, onSwitchStage, handleOption, handleSubmit, handleChange}) => {

    const [storyNodes, setStoryNodes] = useState(
        [
            {
                id: 0,
                template: "textField",
                data: {
                    text: 
                    `You arrive in the village of Calcutta with your brother, your sister, and a chance to start anew.
                    The first thing you learn: there are two powerful families in the village of Calcutta.
                    Whittle - an exiled elvish family
                    Portia - a family of fat dwarves
                    There is about to be only one family in Calcutta. From what bloodline do you come from?
                    `,
                    options: [
                        {
                            id: 0,
                            text: 'The Family of ',
                            dest: 1,
                        },
                    ],
                }
            },
            {
                id: 1,
                template: "textOption",
                data: {
                    text: 'Fight',
                    options: [
                        {
                            id: 0,
                            text: 'You won the fight!',
                            dest: 0,
                        },
                        {
                            id: 1,
                            text: 'You lost the fight!',
                            dest: 0,
                        }
                    ],
                }
            },
        ]
    )

    

    const generateUserOption = () => {
        let currentStoryNode = storyNodes[playerState.location]
        switch (currentStoryNode.template) {
            case "textOption": 
                return currentStoryNode.data.options.map((option) => 
                    <StoryOption 
                    key = {option.id} 
                    text={option.text} 
                    onClick = {handleOption}
                    dest = {option.dest} /> )
            case "textField":
                return currentStoryNode.data.options.map((option) => 
                    <StoryField 
                    key = {option.id} 
                    text={option.text} 
                    onSubmit = {handleSubmit}
                    dest = {option.dest}
                    onChange={handleChange}
                    value = {playerState.name} /> )
            default:
                return <div>Error, unhandled story node template</div>
        }
        
    }

    return (
        ((currentStage === "textStage") &&
        <div>
            <StoryText 
                text = {storyNodes[playerState.location].data.text} 
                />
            {generateUserOption()}
            <button onClick={onSwitchStage}>Switch Stage</button>
        </div>)
    )
}

export default TextStage
