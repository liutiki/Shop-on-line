function Clothes({shop}){

    return(
<div className="products">

{shop.map((item=>{
const{id,name,searchTerm,price,image}=item;
return <div className="product-card"key={id}>



<img src={image} width="400px" height="500px" alt="clothes"/>
<div className="product-info">
<h3>{id}-{name}</h3>
<h2>{searchTerm}</h2>
<h4>{price}</h4>
</div>

    </div>
}))}

</div>

)}


export default Clothes;