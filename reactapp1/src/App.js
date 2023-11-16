import "./App.css";
import Helloworld from "./components/Helloworld";
import Greetings from "./components/Greetings";
import Hello from "./components/Hello";
function App()
{
  return(
    <div className="App">
      <Helloworld />
      <Greetings />
      <Hello />
    </div>
  );
}

export default App;
