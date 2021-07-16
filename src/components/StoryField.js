const StoryField = ({text, onSubmit, dest, onChange, value}) => {
    return (
        <form onSubmit={onSubmit(dest)}>
        <label>
        {text}
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
