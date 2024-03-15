import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


function Users() {

 const [person,setPerson] = useState([]);
 const [search, setSearch] = useState("");

 useEffect(()=>{
  
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {setPerson(response.data)})
 
 },[])

  return (
  <div>
 <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <p class="navbar-brand">Users</p>
    <div class="input-group mb-1">
  
    <input
     type="text" 
    class="form-control"
    onChange={(e)=>{setSearch(e.target.value)}}
    />
</div>
  </div>
</nav>  
 <div className=" bg-body-tertiary row row-cols-3 row-cols-md-4 row-cols-lg-6 g-4 w-100" >
            {
               person.filter((val)=>{
                if(search == " "){
                    return val
                }else if(val.name.toLowerCase().includes(search.toLowerCase())){
                    return val
                }
            }).map((val,index) =>{
                    return(
                      <div className="col-md-5 p-2 m-2" key={index}>
                      <div className="card h-100">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src="https://via.placeholder.com/200" alt="Card image" className="img-fluid rounded-start m-3" style={{borderRadius:'50%'}} />
                          </div>
                          <div className="col-md-8 p-0" style={{textAlign:'left'}}>
                            <div className="card-body">
                              <Link to='/detay' >
                              <h5 className="card-title">{val.address.city}</h5>
                              </Link>
                              <p className="card-text">Name:{val.name}</p>
                              <p className="card-text">Email:{val.email}</p>
                              <Link to='/detay' >
                               <button class="btn btn-primary btn-sm"  type="button">Button</button>
                               </Link>                   
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                        
                    )
                })
            }
                              </div>

</div>
  )

    
}

export default Users