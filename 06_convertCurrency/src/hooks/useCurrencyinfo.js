import { useEffect, useState} from "react";



function useCurrencyInfo(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/{currency}.json
`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
    },[currency])  //here [] is used to tell the dependencies
 return data;
}

export default useCurrencyInfo;