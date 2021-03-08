import Singlecart from "./Singlecart"
import "./Fullcart.css"
const Fullcart = ({array}) => { 

 
  return (
    <div className="box">
        {array.length===0 && <h3>Loading</h3>}
     {array.map((data,index)=><Singlecart img={`https://robohash.org/${index}?200x200`} name={data.name} email={data.email} key={index}/>)}
    </div>
  );
};


export default Fullcart;