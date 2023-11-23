import './App.css';
import Errorboundary from './components/Errorboundary';
import TestOne from './components/TestOne';
import TestThree from './components/TestThree';
import TestTwo from './components/TestTwo';

function App() {
  return (
    <div className="App">
      <Errorboundary>
      <TestOne />
      </Errorboundary>
      <Errorboundary>
      <TestTwo />
      </Errorboundary>
      <Errorboundary>
      <TestThree />
      </Errorboundary>
    </div>
  );
}

export default App;
