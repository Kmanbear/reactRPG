const StoryOption = ({text, onClick, dest}) => {
    return (
        <button onClick = {()=>onClick(dest)}>{text}</button>
    )
}

export default StoryOption
