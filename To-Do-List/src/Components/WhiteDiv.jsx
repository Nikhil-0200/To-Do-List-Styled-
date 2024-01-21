import { useState } from "react";
import ListData from "./ListData";

function WhiteDiv(){
     const [task, setTask] = useState([])
    const [data, setData] = useState({
        title: "",
        completed: "flase"
    })

    function handleChange(event){
        const newData = {
            ...data,
            [event.target.name]: event.target.value
        }
        setData(newData)
    }

    function handleSubmit(event){
        event.preventDefault();
        
        const newData1 = {
            ...data,
            id: Date.now() + Math.random()
        }

        const newTask = [
            ...task, newData1
        ]

        setTask(newTask)

        setData({
            title: ""
        })
    }

    function DltBtn(index){
        const CopyData = [
            ...task 
        ]
        const FilterData = CopyData.filter((ele, i)=> i != index)
        setTask(FilterData)
    }



    return(
      <div id='whiteDiv'>
        <div id="box">
        <form action="" id="Form" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="title" value={data.title}/>
            <button type="submit">+</button>
        </form>
        <div id="box2">
        {task.map((ele, index)=>(
            <ListData
            key={index} 
            task={ele.title}
            DltBtn={()=>DltBtn(index)} 
            />
        ))}
        </div>
        </div>
      </div>
    )
  }

  export default WhiteDiv;