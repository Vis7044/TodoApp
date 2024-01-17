import "./App.css";
import NavBar from "./component/NavBar";
import TodoItems from "./component/TodoItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditForm from "./component/EditForm";
import Signup from "./component/Signup";
import Login from "./component/Login";
import { useSelector } from "react-redux";
import PrivateRoute from "./component/PrivateRoute";
import Profile from "./component/Profile";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path="/" element={<TodoItems />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/:id" element={<EditForm />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
