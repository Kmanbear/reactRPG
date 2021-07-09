import StoryOption from './StoryOption'

const StoryNode = ({text, options, onClickOption}) => {
    return (
        <>
        <p>{text}</p>
        {options.map((option) => 
                <StoryOption 
                key = {option.id} 
                text={option.text} 
                onClick = {onClickOption}
                dest = {option.dest} /> )}
        </> 
    )
}

export default StoryNode
