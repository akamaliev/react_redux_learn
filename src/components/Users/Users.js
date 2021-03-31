import React from 'react'

export default function Users(props) {

    debugger;

    if(props.users.length === 0) {
        debugger;
        console.log(props.users);
        props.setUsers(
            [
                {id: '1', username: 'User 1', img: '1.jpg', status:'i am here', follow: false},
                {id: '2', username: 'User 2', img: '2.jpg', status:'i am here', follow: false},
                {id: '3', username: 'User 3', img: '3.jpg', status:'i am here', follow: false}
            ]
        )
        console.log(props.users);
    };

    return (
        <div>
            {
                props.users.map(u => <div className="user" key={u.id}>
                    <p>{u.id}</p>
                    <p>{u.username}</p>
                    <p>{u.img}</p>
                    <p>{u.status}</p>
                    <button onClick={u.follow ? () => props.unfollow(u.id) : () => props.follow(u.id)}>{u.follow ? 'Unfollow' : 'Follow'}</button>
                </div>
                )
            }
        </div>
    )
}
