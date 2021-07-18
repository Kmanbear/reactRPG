const StoryOption = ({option, onClick,}) => {
    return (
        <button onClick = {()=>onClick(option.destStage, option.dest)}>{option.text}</button>
    )
}

export default StoryOption
