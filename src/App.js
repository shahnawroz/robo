
import Search from './component/Search';
import Fullcart from './component/Fullcart';
import axios from 'axios'
import {useState,useEffect} from 'react'


function App() {
  const[search,setSearch] = useState('');
  const[array,setArray] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => setArray (res.data)).catch(err => console.log(err)) 
}, [])
const filterRobots = array.filter((robot) =>
robot.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="App">
      <h1>RoBoFriends</h1>
      <Search value={search} setSearch={setSearch}/>
      <div><Fullcart array={filterRobots}/></div>
      
    </div>
  );
}

export default App;
