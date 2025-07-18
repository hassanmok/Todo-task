import { useState } from "react";
import "./Submit.css";
import { Link } from "react-router-dom";
import Done from "./Done";
import Component from "./Component";
import { useParams } from "react-router-dom";
import { LoanFormContext } from "./Context/LoanFormContext";
import { useContext } from "react";
import { listPost } from "./Context/postContext";
export default function Submit() {
  const numpost = useContext(listPost)
  const {dataa} = useParams()
  const [data, setData] = useState([
    {
      name: "",
      phoneNumber: "",
      age: "",
      isEmployee: false,
      salary: "",
    },
  ]);

  const [show, setShow] = useState("none");

  let errortype = "";
  const { age, phoneNumber } = data;
  function subdata() {
    setShow("");
    if (age < 18 || age > 100) {
      errortype = "age false";
    } else if (phoneNumber.length != 10) {
      errortype = "phone number false, you should inter 10 number only";
    } else {
      errortype = "";
    }
  }

  const isDis =
    data.name == "" ||
    data.age == "" ||
    data.phoneNumber == "" ||
    data.salary == "";

  let name = "";

  if (isDis) {
    name = "disable";
  } else {
    name = "";
  }

  function removeall() {
    if (show == "") {
      setShow("none");
    } else {
    }
  }

  function Addname(e) {
    setData({ ...data, name: e.target.value });
  }

  return (
    <div
      onClick={removeall}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Link to={"/"}>
      <button>click</button>
      </Link>
      <h2>
        {numpost.map((item)=>{
          if(item.id == dataa){
          return(
            <div>
              <h1>{item.title}</h1>
              <h2>{item.detials}</h2>

            </div>

            

          )
        }
        })}
      </h2>
      {/* <label>name: </label>
      <input type="text" value={data.name} onChange={(e)=>{
        setData({...data, name: e.target.value})
        
      }}></input> */}
      <LoanFormContext.Provider
        value={{ title: "nnnnn", Addname: Addname, name: data.name }}
      >
        <Component />
      </LoanFormContext.Provider>
      <label>phone number: </label>
      <input
        type="text"
        value={data.phoneNumber}
        onChange={(e) => {
          setData({ ...data, phoneNumber: e.target.value });
        }}
      ></input>
      <label>age: </label>
      <input
        type="text"
        value={data.age}
        onChange={(e) => {
          setData({ ...data, age: e.target.value });
        }}
      ></input>
      <label>are you employee: </label>
      <input
        type="checkbox"
        value={data.isEmployee}
        onChange={(e) => {
          setData({ ...data, isEmployee: e.target.checked });
        }}
      ></input>
      <label>salary: </label>
      <select
        value={data.salary}
        onChange={(e) => {
          setData({ ...data, salary: e.target.value });
        }}
      >
        <option>less 500</option>
        <option>less 800</option>
        <option>less 1000</option>
      </select>
      <button onClick={subdata} className={name} disabled={isDis}>
        Submit
      </button>

      <div
        style={{
          display: show,
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
      >
        <Done error={errortype} />
      </div>
    </div>
  );
}
