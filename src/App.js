import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={}>Home</Route>
        <Route path="/about" element={}>About</Route>
      </Routes>
    </div>
  );
}

export default App;
