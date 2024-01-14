
import './App.css';
import NavBar from './component/NavBar';
import TodoItems from './component/TodoItems';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EditForm from './component/EditForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<TodoItems/>}/>
        <Route path='/:id' element={<EditForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
