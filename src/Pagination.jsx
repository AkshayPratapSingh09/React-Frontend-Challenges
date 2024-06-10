import { useState, useEffect } from "react";

function Pagination() {

    const [data, setData] = useState(0);
    const [page,setPage] = useState(1);
  
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=0");
      const data = await res.json();
  
     if (data && data.products){
      setData(data.products);
      console.log(data.products)
     }
    };
  
    const PageChange=()=>{
      if (event.target.className === "left"  && page>1){
        setPage(page-1)
      }
      else if (event.target.className === "left" && page===1){
  confirm
      }
      else if (event.target.className === "right"){
        setPage(page+1)
      }
    }
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
  
    return (
      <>
      {data.length}
      {data.length > 0 && (
        <div className="products">
          {data.slice(page*10 - 10,page*10).map((prod)=>{
            return <span>{prod.title}</span>
          })}
        </div>
      )}
      <div className="left" onClick={PageChange}>⬅️</div>
      <div className="current">{page}</div>
      <div className="right" onClick={PageChange} >➡️</div>
      </>
    );
  }

export default Pagination;