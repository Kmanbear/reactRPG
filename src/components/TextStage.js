import StoryNode from "./StoryNode"
import { useState } from 'react'

const TextStage = ({currentStage}) => {

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
                "Wake up in alleyway, man with you, fight or run?",
                options: [
                    {
                        id: 0,
                        text: 'Fight',
                        dest: 1,
                    },
                    {
                        id: 1,
                        text: 'Run',
                        dest: 2,
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
                        dest: 3,
                    }
                ],
            },
            {
                id: 2,
                text: 'Run',
                options: [],
            },
            {
                id: 3,
                text: 'Your hands tremble in victory',
                options: [],
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
        </div>)
    )
}

export default TextStage
