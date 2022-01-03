import React from 'react'

function Details({Liste,match,history}) {
    console.log(history)
    const found=Liste.find((elem) => (elem.id == match.params.id))
    console.log(found)
    return (
        <div>
            <h1>{found.name}</h1>
            <h2>{found.profession}</h2>
            <h3>{found.age}</h3>
            <button onClick={()=>history.goBack()}>Go back</button>
            <button onClick={()=>history.push('/')}>Home</button>
            <button onClick={()=>history.push('/Profiles')}>Profiles</button>
            <button onClick={()=>history.push('/Login')}>Login</button>
        </div>
    )
}

export default Details
