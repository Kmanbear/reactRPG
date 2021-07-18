const StoryField = ({option, onSubmit, onChange, value}) => {
    return (
        <form onSubmit={onSubmit(option.destStage, option.dest)}>
        <label>
        {option.text}
        <input
          type="text"
          value={value}
          onChange={onChange}
        />
        </label>
        <input type="submit" value="Submit" />
        </form>
      );
}

export default StoryField
