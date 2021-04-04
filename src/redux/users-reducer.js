const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

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

export const setCurrentPageActionCreator = (currentPage) => (
        {
            type: SET_CURRENT_PAGE,
            currentPage: currentPage
        }
);

let initialState = { 
    users: [],
    pageSize: 10,
    totalCount: 50,
    currentPage: 3
};


export const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) return {
                        ...u,
                        followed: true
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
                        followed: false
                    };
                    return u;
                })
                
            }
        }

        case SET_USERS:{
            return {
                ...state,
                users: action.users
            }
        }

        case SET_CURRENT_PAGE:{
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        default:
            return state;
    }

}