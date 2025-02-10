
import './App.css';
import List from './List';

function App() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
  }}>
      <h1>
        ToDo List App
      </h1>
      <List></List>
    </div>
  );
}

export default App;
