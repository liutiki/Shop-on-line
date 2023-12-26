import {useState} from "react";
import {data} from './data';
import Clothes from "./Clothes";
import './App.css';
import Buttons from "./Buttons";
import ButtonAll from "./ButtonAll";


function Home(){

const[stuff, setStuff]=useState(data);

const backAll = () => {
    setStuff(data);
}

const chosenClothes = (searchTerm) => {
    const newClothes=data.filter(element=>element.searchTerm === searchTerm)
    setStuff(newClothes);
}

return(<div>
    <div className="cont">
        <h2 className="back">Free Standard Shipping</h2>
        </div>
        <ButtonAll backToAll={backAll}/>
  <Buttons filteredStuff={chosenClothes}/>  
<Clothes shop={stuff}/>


   




</div>
)

}

export default Home;