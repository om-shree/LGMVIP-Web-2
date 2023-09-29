import React, { useState } from 'react'

export default function Users() {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  
  const loadUsers = async () => {
    setPage( page => page + 1)
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const jsonresponse = await response.json();
    setUsers([...users, ...jsonresponse.data]);
    console.log(users);
  }

  return (
    <div >
        <button onClick={loadUsers}>Load Data</button>
        <div className='container'>
            {
                users.map((user, id) => (
                    <div key={id} className="card">
                        <img className='img' src={user.avatar} alt={user.first_name + " " + user.last_name} />
                        <div className='name'>{user.first_name + " " + user.last_name}</div>
                        <div className='email'>Email : <a href="#">{user.email}</a></div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
