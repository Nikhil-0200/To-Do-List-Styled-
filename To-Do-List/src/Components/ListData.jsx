
function ListData(props){
    return(
        <>
        <div id="ListDataDiv"  style={{backgroundColor: props.task.completed ? "skyblue" : "rgba(255, 0, 0, 0.34)"}}>
            <p>{props.task.title}</p>
            <span>
            <input 
            type="checkbox" 
            name="completed"
            id="" 
            checked={props.task.completed} 
            onChange={props.UpdBtn}
            />
            <button onClick={props.DltBtn}><i class="ri-delete-bin-6-line"></i></button>
            </span>
        </div>
        <hr/>
        </>
    )
}

export default ListData;