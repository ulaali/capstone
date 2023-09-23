import React,{useState,createContext} from 'react'



const Context = createContext();

export function Data({children}) {
    const [availalbe, setAvailalbe] = useState({
        '17:00':true,
        '18:00':false,
        '19:00':true,
        '20:00':true,
        '21:00':false,
        '22:00':false,
    })
    const [order, setOrder] = useState(1)
    const increament=()=>{
      setOrder((o)=>o+1)
    }
    const decreament=()=>{
      setOrder((o)=>o-1)
    }
  return (
    <Context.Provider value={{availalbe,setAvailalbe,order,setOrder,increament,decreament}}>
        {children}
    </Context.Provider>
  )
}

export default Context