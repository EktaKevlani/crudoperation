import axios from "axios"
    import React, { useEffect, useState } from "react"
    import { useNavigate, useParams } from "react-router-dom"
   
function Update(){
    const [singleData,setSingleDadta]=useState({})
    const [updateSingleData,setUpdateSingleData] = useState({})
    const navigate = useNavigate();
    const {formId}=useParams();

   async function updateData (id) {
    await axios
    .get(`https://65321d8c4d4c2e3f333da052.mockapi.io/FinalCRUD/${id}`)
    .then((res)=>{
       
        setSingleDadta(res.data)
        console.log("gettingData.......")
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    useEffect(()=>{
        updateData(formId)
    },[])

    

    const onInput = (e) => {
        const { name, value } = e.target;
        setUpdateSingleData({...updateSingleData,[name]:value})
        
      };
    

    const submitData = async (e)=>{
       
            console.log("first updateing.......")
            e.preventDefault();
            await axios
            .put(`https://65321d8c4d4c2e3f333da052.mockapi.io/FinalCRUD/${formId}`,updateSingleData)
            .then((res)=>{
                console.log("updating.....")
                console.log(res);
                navigate("/")
            })
            .catch((err)=>{
                console.log(err)
            })

    }

    return(  
        <>
            <div className="container formupdate text-center">
                <div className="row">
                    <div className="col">
                            <h1 className="mt-4" style={{fontFamily:"'Playfair Display', serif"}}>User Information</h1>
                            <form action="" onSubmit={(e) =>submitData(e)} className="border border-dark pb-3 bg-secondary">
                                <div className="row pt-3 mt-3">
                                        <div className="profile ">
                                            <img src={singleData?.avatar} alt="" />
                                              <h4 className="pt-3">{singleData?.name}</h4> 
                                        </div>
                                        <div className="col pt-5">
                                            <label htmlFor="">Name : -</label>
                                            <input type="text" placeholder="Name Update"
                                             id="Inputname" name="name" defaultValue={singleData?.name}
                                             onChange={(e) =>onInput(e)} 
                                             
                                             />
                                        </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col">
                                        <label htmlFor="">Mobile :-</label> 
                                        <input type="text" id="inputpassword" placeholder="Mobie Update" 
                                        name="mobile" onChange={(e)=>onInput(e)} />
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col">
                                        <label htmlFor="">Desc :  -</label>
                                        <input type="text" id="descid" placeholder="Desc Id Update" name="desc"
                                            onChange={(e)=>onInput(e)}
                                        />
                                    </div>
                                </div>
                                <div className="text-center pt-5">
                                    <button className="btn btn-warning" type="submit"> Update</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
          

            
        </>
    )
}

export default Update