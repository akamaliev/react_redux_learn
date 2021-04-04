import { followActionCreator, setUsersActionCreator, unfollowActionCreator, setCurrentPageActionCreator } from "../../redux/users-reducer";
import Users from "./Users";
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage

    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)