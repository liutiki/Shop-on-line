function ButtonAll({backToAll}){

    return(
        <div className="cont">
              <button className="change" onClick={()=>backToAll()}>All</button>
        </div>
    )

    
}


export default ButtonAll;