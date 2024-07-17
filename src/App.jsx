import { useState, useEffect } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [toDoValue, setToDoValue] = useState('');

  function persistData(newToDoList) {
    localStorage.setItem('toDoList', JSON.stringify({ toDoList: newToDoList }));
  }

  function handleAddToDo(newToDo) {
    const newToDoList = [...toDoList, newToDo];
    persistData(newToDoList);
    setToDoList(newToDoList);
  }

  function handleDeleteToDo(index) {
    const newToDoList = toDoList.filter((toDo, toDoIndex) => {
      return toDoIndex !== index;
    });
    persistData(newToDoList);
    setToDoList(newToDoList);
  }

  function handleEditToDo(index) {
    const valueToBeEdited = toDoList[index];
    setToDoValue(valueToBeEdited);
    handleDeleteToDo(index);
  }

  useEffect(() => {
    if (!localStorage) return;
    let localToDoList = localStorage.getItem('toDoList');
    if (!localToDoList) return;
    localToDoList = JSON.parse(localToDoList).toDoList;
    setToDoList(localToDoList);
  }, []);

  return (
    <>
      <ToDoInput
        handleAddToDo={handleAddToDo}
        handleEditToDo={handleEditToDo}
        toDoValue={toDoValue}
        setToDoValue={setToDoValue}
      />
      <ToDoList
        handleDeleteToDo={handleDeleteToDo}
        handleEditToDo={handleEditToDo}
        toDoList={toDoList}
      />
    </>
  );
}

export default App;
