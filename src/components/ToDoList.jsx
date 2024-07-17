import ToDoCard from './ToDoCard';
import PropTypes from 'prop-types';

export default function ToDoList(props) {
  const { toDoList } = props;
  return (
    <ul className="main">
      {toDoList.map((toDo, toDoIndex) => {
        return (
          <ToDoCard {...props} index={toDoIndex} key={toDoIndex}>
            <p>{toDo}</p>
          </ToDoCard>
        );
      })}
    </ul>
  );
}

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
