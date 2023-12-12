import React from 'react'

const Create = () => {

    


  return (
    <>
    <h1 className='text-center pt-5' style={{fontFamily:"'Playfair Display', serif"}}>Add New Data</h1>
    <div className='d-flex  justify-content-center align-items-center'>
      <form className='border border-dark mt-5 mx-5 p-5 bg-secondary w-50'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}

export default Create
