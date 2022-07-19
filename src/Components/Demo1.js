import React, { useState } from 'react'
const Demo1 = () => {
    
    const [user,setUser]=useState({fullname:" " ,email :" ",password:" ",address:" "})
    const [users, setUsers] = useState([])
    const handleChange=(e)=>{
       
        setUser({...user,[e.target.name]:e.target.value})

    }
    
    const handleSubmit=(event)=>{
        alert("Form submitted successfully");
        event.preventDefault();
        console.log("usercreated:",user)
        setUsers([...users, user])
        setUser({fullname:" " ,email :" ",password:" ",address:" "})
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
<label placeholder='fname'>FullName:
<input type="text" name="fullname" onChange={handleChange}/>
</label>
<br></br>
<label placeholder='email'>Email:
<input type="email" name="email" onChange={handleChange}/>
</label>
<br></br>
<label placeholder='password'>Password:
<input type="password" name="password" onChange={handleChange}/>
</label>
<br></br>
<label>Address:
<textarea name="address" onChange={handleChange} />
</label>
<button type="submit">Submit</button>
    </form>
    <ul>
    {
        users.map(item => <ol><li key={item.email}>{item.fullname}{item.email}{item.address}</li></ol>)
    }
    </ul>
    </>
  )
}
export default Demo1