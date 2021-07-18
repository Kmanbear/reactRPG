import StoryText from "./StoryText"
import StoryOption from "./StoryOption"
import StoryField from "./StoryField"
import { useState, useEffect } from 'react'

const TextStage = ({playerState, handleOption, handleSubmit, handleChange}) => {

    const [storyNodes, setStoryNodes] = useState(
        [
            {
                id: 1,
                template: "textOption",
                data: {
                    text: `Portia, a family of fat dwarves, come to greet you with axes. Let's say hello back.`,
                    options: [
                        {
                            id: 0,
                            text: 'Hello dwarves!',
                            destStage: "battleStage",
                            dest: 0,
                        }
                    ],
                }
            },
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
                            destStage: "textStage",
                            dest: 1,
                        },
                    ],
                }
            },
            
        ]
    )

    const getCurrentStoryNode = () => {
        return storyNodes.find((node) => node.id == playerState.location);
    }

    const generateUserOption = () => {
        const currentStoryNode = getCurrentStoryNode();
        switch (currentStoryNode.template) {
            case "textOption": 
                return currentStoryNode.data.options.map((option) => 
                    <StoryOption 
                    key = {option.id} 
                    option = {option}
                    onClick = {handleOption} /> )
            case "textField":
                return currentStoryNode.data.options.map((option) => 
                    <StoryField 
                    key = {option.id} 
                    option={option}
                    onSubmit = {handleSubmit}
                    onChange={handleChange}
                    value = {playerState.name} /> )
            default:
                return <div>Error, unhandled story node template</div>
        }
    }

    return (
        ((playerState.currentStage === "textStage") &&
        <div>
            <StoryText 
                text = {getCurrentStoryNode().data.text} 
                />
            {generateUserOption()}
        </div>)
    )
}

export default TextStage
