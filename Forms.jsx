import React, { useState } from 'react'

function Forms() {
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[submitdata,setsubmitdata]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formdata={name,email,password}
        setsubmitdata(formdata);
        setname("")
        setemail("")
        setpassword("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>FORMS</h2>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        {submitdata&&(
            <div>
                <p><strong>Name:</strong>{submitdata.name}</p>
                <p><strong>Email:</strong>{submitdata.email}</p>
                <p><strong>Password:</strong>{submitdata.password}</p>
            </div>
        )}
    </div>
  )
}

export default Forms
