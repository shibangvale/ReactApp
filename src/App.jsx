// App.js 
import ToDoList from './Components/ToDoList/ToDoList'

// import 'jquery/dist/jquery.min.js'


const App = () => {
  
    return (
        <>
        <div className="container">
            <ToDoList className="my-10" id="toDoList"></ToDoList>
        </div>
        </>
    );
};

export default App