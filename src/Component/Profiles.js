import React from 'react'
import Card from './Card'
function Profiles({Liste,match}) {
    console.log(match)
    return (
        <div className="profile">
            <h1>Profiles</h1>
            {Liste.map((x,key) => <Card key={key} usersList={x}/>)}
        </div>
    )
}

export default Profiles
