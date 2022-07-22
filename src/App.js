import './App.css';
import Week2 from './templates/Week2';

function App() {
  let arr=[0, 1, 2]
  return (
    <div className="App">
      <Week2 list={ arr }/>
    </div>
  );
}

export default App;
