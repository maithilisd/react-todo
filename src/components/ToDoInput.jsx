import PropTypes from 'prop-types';

export default function ToDoInput(props) {
  const { handleAddToDo, toDoValue, setToDoValue } = props;

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddToDo(toDoValue);
      setToDoValue('');
    }
  };

  return (
    <header>
      <input
        value={toDoValue}
        onChange={(e) => setToDoValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="enter to do..."
      />
      <button
        onClick={() => {
          handleAddToDo(toDoValue);
          setToDoValue('');
        }}
      >
        Add
      </button>
    </header>
  );
}

ToDoInput.propTypes = {
  handleAddToDo: PropTypes.func.isRequired,
  toDoValue: PropTypes.string.isRequired,
  setToDoValue: PropTypes.func.isRequired,
};
