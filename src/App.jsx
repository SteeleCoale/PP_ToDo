import GlobalStyle from './globalStyles';
import ToDoList from './ToDoList';
import PomodoroTimer from './Pomodoro';
// import './index.css';
/**
 * Goal for today: have one list that updates on load from DB, and can add Todos to.
 * publish it using AWS amplify.

 * Next, make them todos drag and droppable using dndKit.com.
 * componentize ToDo list so the page can have multiple lists.
 */

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
      <PomodoroTimer />
    </>
  );
}

export default App;
