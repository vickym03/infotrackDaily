import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";



function App() {
  const [data, setData] = useState();

  const fetch = async () => {
    try {
      const url = "http://localhost:8000/notes";
     
      const resp = await axios.get(url);
      console.log(resp);
      console.log(resp.data);
      setData(resp.data);
     
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch();
    
  }, []);

  return <div className="App">

<h1> hello</h1>



{ data !==undefined && data.length>0  && data.map((val)=>{
    return(
    <p key={val._id}> {val.content}</p>
    )
  })
}



  </div>;
}

export default App;
