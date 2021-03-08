const Singlecart = ({img,name,email})=>{
    return (<div><div style={{backgroundColor:"cyan"}}>
    <img src= {img} alt="Avatar"  />
    <div class="container">
      <h4><b>{name}</b></h4> 
      <p>{email}</p> 
    </div>
  </div>
  </div>)
    }
    
export default Singlecart