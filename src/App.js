import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoListBox from './components/TodoListBox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListBox></TodoListBox>
      </header>
    </div>
  );
}

export default App;
