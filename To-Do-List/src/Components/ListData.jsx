
function ListData(props){
    return(
        <>
        <div id="ListDataDiv">
            <p>{props.task}</p>
            <span>
            <input 
            type="checkbox" 
            name="completed"
            id="" 
            value={data.checked} 

            />
            <button onClick={props.DltBtn}><i class="ri-delete-bin-6-line"></i></button>
            </span>
        </div>
        <hr />
        </>
    )
}

export default ListData;