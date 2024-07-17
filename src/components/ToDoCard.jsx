import { PropTypes } from 'prop-types';

export default function ToDoCard(props) {
  const { children = null, handleDeleteToDo, handleEditToDo, index } = props;
  return (
    <li className="toDoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEditToDo(index)}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteToDo(index)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

ToDoCard.propTypes = {
  children: PropTypes.node,
  handleDeleteToDo: PropTypes.func.isRequired,
  handleEditToDo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
