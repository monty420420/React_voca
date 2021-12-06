import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import World from './component/World';
import styles from "./component/App.module.css";
function App() {
  
  return (
    <div className="App">
      <Welcome />
      <World />
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={310} />

      
      <div className={styles.box}>App</div>
      

    </div>
  );
}

export default App;
