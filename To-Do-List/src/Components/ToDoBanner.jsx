import '../Style_Components/ToDoBanner.css'

function ToDoBanner(){
    
    const date = new Date().getDate()
    const month = new Date().toLocaleDateString("en-US", { month: "long"})
    const year = new Date().getFullYear()

    const newDate = `${date} ${month} ${year}`
    return(
      <>
      <div id="ToDoBanner">
        <h1>to do list</h1>
        <p>{newDate}</p>
      </div>
      </>
    )
  }


  export default ToDoBanner;