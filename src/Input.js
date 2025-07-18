import { useState } from "react";


function Input() {
  const [data, setData] = useState({name: "", email: "", info: "", isStudent: false});



  return (
    <div style={{display: "flex", justifyContent: "center", paddingTop: "300px"}}>
      <form onSubmit={(e)=>{
        e.preventDefault();
        console.log(data);
      }}>

        <label>Name:</label>
        <input type="text" value={data.name} onChange={(e)=>{
          setData({...data, name: e.target.value})
        }}></input>
        <br></br>
        <label>Email:</label>
        <input type="email" value={data.email} onChange={(e)=>{
          setData({...data, email: e.target.value})
        }}></input>

        <br></br>
        <textarea value={data.info} onChange={(e)=>{
          setData({...data, info: e.target.value})
        }}> </textarea>
        <br></br>
        <lable>is student:</lable>
        <input type="checkbox" checked={data.isStudent} onChange={(e)=>{
          setData({...data, isStudent: e.target.checked})
        }}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Input;
