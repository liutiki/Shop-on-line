function Buttons({filteredStuff}){

    return(
        <div className="cont">

         
 
<button className="change" onClick={()=>filteredStuff("dress")}>Dresses</button>
     


<button className="change"onClick={()=>filteredStuff("skirt")}>Skirts</button>
 

     
<button className="change"onClick={()=>filteredStuff("pants")}>Pants</button>


 
<button className="change"onClick={()=>filteredStuff("shoes")}>Shoes</button>
    



<button className="change"onClick={()=>filteredStuff("shirt")}>Shirts</button>
        

</div>
    )



}

export default Buttons;