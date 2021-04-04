// import React from 'react';

import React, { Component } from 'react';
import axios from "axios";

export default class Users extends Component {

    componentDidMount(){
        console.log('componentDidMount');
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items);
        })
        // this.props.setUsers(
        //     [
        //         {id: '1', username: 'User 1', img: '1.jpg', status:'i am here', follow: false},
        //         {id: '2', username: 'User 2', img: '2.jpg', status:'i am here', follow: false},
        //         {id: '3', username: 'User 3', img: '3.jpg', status:'i am here', follow: false},
        //         {id: '4', username: 'User 3', img: '3.jpg', status:'i am here', follow: false},
        //         {id: '5', username: 'User 3', img: '3.jpg', status:'i am here', follow: false},
        //         {id: '6', username: 'User 3', img: '3.jpg', status:'i am here', follow: false}
        //     ]
        // )
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    };

    componentWillUnmount(){
        console.log('componentWillUnmount');
    };

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(resp => {
            this.props.setUsers(resp.data.items);
        })
    };


    render() {

        let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        
        return (
            <div>
                <ul className='pagination'>
                    {pages.map(page => {
                        return <li className={page === this.props.currentPage ? 'pagination__item pagination__item--active' : 'pagination__item'} key={page} onClick={()=>{this.onPageChanged(page)}}>{page}</li>
                    })}
                </ul>
                {
                    this.props.users.map(u => <div className="user" key={u.id}>
                        <p>{u.id}</p>
                        <p>{u.name}</p>
                        <p>{u.status}</p>
                        <button onClick={u.followed ? () => this.props.unfollow(u.id) : () => this.props.follow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                    )
                }
            </div>
        )
    }
}


// export default function Users(props) {

//     debugger;

//     if(props.users.length === 0) {
//         debugger;
//         console.log(props.users);
//         props.setUsers(
//             [
//                 {id: '1', username: 'User 1', img: '1.jpg', status:'i am here', follow: false},
//                 {id: '2', username: 'User 2', img: '2.jpg', status:'i am here', follow: false},
//                 {id: '3', username: 'User 3', img: '3.jpg', status:'i am here', follow: false}
//             ]
//         )
//         console.log(props.users);
//     };

//     return (
//         <div>
//             {
//                 props.users.map(u => <div className="user" key={u.id}>
//                     <p>{u.id}</p>
//                     <p>{u.username}</p>
//                     <p>{u.img}</p>
//                     <p>{u.status}</p>
//                     <button onClick={u.follow ? () => props.unfollow(u.id) : () => props.follow(u.id)}>{u.follow ? 'Unfollow' : 'Follow'}</button>
//                 </div>
//                 )
//             }
//         </div>
//     )
// }
