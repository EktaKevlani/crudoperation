import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


const Home = () => {
// making usestate so that we can excess the data anywhere
const[data,setdata]=useState([]);
const[descdata,showdesc]=useState('');
const [viewalldata,setalldata]=useState({});

// getting data from api

 async function showapi(){
    await axios
    .get('https://65321d8c4d4c2e3f333da052.mockapi.io/FinalCRUD')
    .then((res)=>{
        console.log("res......")
        console.table(res.data)
        setdata(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

useEffect(()=>{
    showapi()
},[]);
// x................................x...........................x........................


// delete data
 async function deletedata(id){
    if(confirm("do u want to delete")){
        await axios 
        .delete(`https://65321d8c4d4c2e3f333da052.mockapi.io/FinalCRUD/${id}`)
        .then((res)=>{
            showapi();
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
// x...........................x................................x.......................

// showdata

const showdescdata = (desc)=>{
    showdesc(desc);
}
// x..............................x..............................x.......................

// alldata in one modal

async function alldata(id){
    await axios                           /* getting all the data */
    .get(`https://65321d8c4d4c2e3f333da052.mockapi.io/FinalCRUD/${id}`)
    .then((res)=>{
        setalldata(res.data);
    })
    .catch((err)=>{
        console.log(err)
    })
}



  return (
    <>
          <table className="table-striped table-hover table table-bordered border-dark">
        <thead style={{backgroundColor:"black", color:"white"}}>
          <th>View</th>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Avatar</th>
          <th>Action</th>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <>
              <tr>
                {/* view */}
                <td>
                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={()=>alldata(user?.id)}>
                    View
                    </button>


                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">View all data</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {/* {console.log("alldata............")}
                            {console.log(viewalldata)} */}
                            {viewalldata?.id}<br/>
                            {viewalldata?.name}<br/>
                            {viewalldata?.desc}<br/>
                            <img src={viewalldata?.avatar} alt="" height={100} />
                          
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </td>

                {/* id */}
                <td>{user?.id}</td>

                {/* name */}
                <td>{user?.name}</td>


                {/* description */}
                <td>
                    <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>showdescdata(user?.desc)} >
                    Desc
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">User Description</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {descdata}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </td>
                <td>
                  <img src={user?.avatar} alt="" height={50} />
                </td>


                <td>
                    {/* navlink for update */}
                    <NavLink to={`/update/${user?.id}`} className="btn btn-success">Update</NavLink>

                   
                    {/* navlink for showdata */}
                    
                    <NavLink className='btn btn-secondary mx-3'to={`ShowSingleData/${user?.id}`}style={{color:"white",textDecoration:"none"}}>ShowData</NavLink>

                     {/* delete */}
                     <button className='btn btn-danger' onClick={()=>deletedata(user?.id)}>Delete</button>
                     
                     


                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
           
    </>
  )
}

export default Home
