import StoryNode from "./StoryNode"
import { useState } from 'react'

const TextStage = ({currentStage, onSwitchStage}) => {

    const [playerState, setPlayerState] = useState(
        {
            location: 0
        }
    )
    
    const [storyNodes, setStoryNodes] = useState(
        [
            {
                id: 0,
                text: 
                `You arrive in the village of Calcutta with your brother, your sister, and a chance to start anew.
                The first thing you learn: there are two powerful families in the village of Calcutta.
                Whittle - an exiled elvish family
                Portia - a family of fat dwarves
                There is about to be only one family in Calcutta, the family of {__Xiong__}.
                `,
                options: [
                    {
                        id: 0,
                        text: 'Next',
                        dest: 1,
                    },
                ],
            },
            {
                id: 1,
                text: 'Fight',
                options: [
                    {
                        id: 0,
                        text: 'You won the fight!',
                        dest: 0,
                    }
                ],
            },
        ]
    )

    const changeLocation = (newLocation) => {
        setPlayerState({location: newLocation})
    }

    return (
        ((currentStage === "textStage") &&
        <div>
            <StoryNode 
            text = {storyNodes[playerState.location].text} 
            options = {storyNodes[playerState.location].options}
            onClickOption = {changeLocation}/>
            <button onClick={onSwitchStage}>Switch Stage</button>
        </div>)
    )
}

export default TextStage
