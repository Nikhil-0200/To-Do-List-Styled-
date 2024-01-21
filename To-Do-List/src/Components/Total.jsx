function Total(props){
    return(
      <div id="Total" >
      <span className="TotalClass">
        <h3>Pending Tasks</h3>
        <h1>{props.Fnum}</h1>
        <h1></h1>
      </span>
      <span className="TotalClass">
        <h3>Finished Tasks</h3>
        <h1>{props.Tnum}</h1>
      </span>
      </div>
    )
  }

  export default Total;