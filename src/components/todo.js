import React, { useEffect, useRef, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Modal from "./modal";

function Todo() {
  const value = useRef();
  useEffect(() => value.current.focus(), []);

  // task to do
  const [toDo, setToDo] = useState([
    // { id: 1, title: "go to doctor", State: false },
    // { id: 2, title: "go to office", State: false },
  ]);

  //state for modal
  const [modal, setModal] = useState(false);

  // temp state
  const [newtask, setnewTask] = useState("");
  const [currentTaskId, setCurrentTaskId] = useState(null);

  // add task
  const addTask = () => {
    if (newtask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newtask, State: false };
      setToDo([...toDo, newEntry]);
      setnewTask("");
    }
  };

  // delete task

  const deleteTask = (id) => {
    console.log(id, "id");
    let newtasks = toDo.filter((task) => task.id !== id);
    console.log(newtasks, "new");
    setToDo(newtasks);
  };

  // mark done
  const markdone = (id) => {
    const newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, State: !task.State };
      }
      return task;
    });
    setToDo(newTask);
  };

  // new
 const[key,setKey]=useState(null)

  return (
    <div className="items-center ">
      <h1 className="text-gray-700 text-6xl text-center uppercase font-bold  sm:item-center">
        Todo
      </h1>
      <br></br>
      <br></br>
      {/* todo */}

      {/* add task */}

      <div className="flex flex-col  items-center justify-center ">
        <div>
          <input
            value={newtask}
            onChange={(e) => setnewTask(e.target.value)}
            onKeyPress={(e)=>setKey(e.key==='Enter')} 
            ref={value}
            placeholder="enter task..."
            className=" border bg-gray-300 text-bold md:text-2xl md: px-34 md:py-2  md: rounded-lg 
                 px-2 py-2  focus:outline-none focus:ring-2  focus:ring-blue-500"
          />
        </div>
        <div>
          <button
            onClick={addTask}
            className="bg-green-500 md: px-4 md:py-2 uppercase text-bold ml-20 mt-3 focus:outline-none focus:ring-2  focus:ring-green-500 md:rounded-lg"
          >
            add task
          </button>
        </div>
      </div>

      <br></br>

      <center>
        {" "}
        <h2 className="text-xl">{toDo && toDo.length ? "" : "no tasks..."} </h2>
      </center>

      { toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <div className=" flex items-center justify-center ">
                <React.Fragment key={task.id}>
                  <div className="bg-gray-300 justify-center items-center px-5 py-3 mb-3 ml-20 mr-20  flex-grow rounded-lg md:ml-96 md:mr-80 ">
                    <div
                      className={task.State ? "line-through text-red-600 " : ""}
                    >
                      <h2 className="uppercase text-center text-gray-800 ml-10 mt-3 mb-3 text-3xl">
                        {index + 1}.... {task.title}{" "}
                      </h2>
                    </div>

                    
                    {/* icons */}

                    <div className="flex justify-end gap-5 object-center cursor-pointer ">
                      <p
                        onClick={() => {
                          markdone(task.id);
                        }}
                        title="complete"
                        className="text-green-700"
                      >
                        <BsCheckLg size={20} />
                      </p>
                      <p
                        onClick={() => {
                            setCurrentTaskId(task.id)
                          setModal(true);
                        }}
                        title="delete"
                        className="text-red-800"
                      >
                        <MdDelete size={25} />
                      </p>
                    </div>
                    
                   
                  </div>
                </React.Fragment>
              </div>
             
            );
          })
          
          }
        
           {modal && (
                      <Modal
                        closeModal={setModal}
                        deleteTask={deleteTask}
                      
                        id={currentTaskId}
                      />
                    
                    )}
    </div>
    
  );
}

export default Todo;
