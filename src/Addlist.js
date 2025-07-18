
import { useState } from "react"

let count = 2

function Addlist(){
    const [nameinput, setNameinput] = useState("")
    const [devices, setDevices] = useState([{
        id: 0, name: "ali"},
        {id: 1, name: "ahmed"}])
    const Listdevices = devices.map((d)=>{
        return(
            <li key={d.id} onClick={()=>{
                delete_f(d.id)
            }}>{d.name} <span style={{color: "red"}}>X</span></li>
        )
    })
    function add(){
        setDevices([...devices,{id: count, name: nameinput}])
        count = count + 1;
    }
    function delete_f(id){
        const newdevice = devices.filter((d)=>{
            return d.id !== id
        })
        setDevices(newdevice)
    }
    return(
        <div>
            <h1>hhhhh</h1>
            {Listdevices}
            <input type="text" value={nameinput} onChange={(e)=>{
                setNameinput([e.target.value])
            }}></input>
            <button onClick={add}>Add</button>
            <button>Delete</button>
        </div>
    )
}


///////////////// New


const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    const pp = products.map((p)=>{
        if(p.id == productId){
            return {...p, count: p.count + 1}
        }
        return p
    })
    setProducts(pp)

  }
  function handledeleteClick(productId) {
    let newproduct = []
    for(let p of products){
        if (p.id == productId){
            if(p.count > 1){
                let DD = {...p, count: p.count - 1}
                newproduct.push(DD)
            }
        }
        else{
            newproduct.push(p)
        }
    }
    setProducts(newproduct)

  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
           handledeleteClick(product.id);
          }}>
            -
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ShoppingCart;