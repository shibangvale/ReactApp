// App.js 
import AboutUs from './Components/About/AboutUs';
import Navbar from './Components/Navbar/Navbar';
import ToDoList from './Components/ToDoList/ToDoList'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";

// import 'jquery/dist/jquery.min.js'


const App = () => {
  
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Navbar />} >
                <Route exact path="todo" element={<ToDoList />} />
                <Route exact path="aboutus" element={<AboutUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default App