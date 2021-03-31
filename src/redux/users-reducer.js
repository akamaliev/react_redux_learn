const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const followActionCreator = (userId) => (
        {
            type: FOLLOW,
            id: userId
        }
);

export const unfollowActionCreator = (userId) => (
        {
            type: UNFOLLOW,
            id: userId
        }
);

export const setUsersActionCreator = (users) => (
        {
            type: SET_USERS,
            users: users
        }
);

let initialState = { users: [] };


export const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) return {
                        ...u,
                        follow: true
                    };
                    return u;
                })
                
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) return {
                        ...u,
                        follow: false
                    };
                    return u;
                })
                
            }
        }

        case SET_USERS:{
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state;
    }

}