// Assign the anonymous arrow function to a variable
const postsReducer = (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
};

// Export the variable instead of using an anonymous function
export default postsReducer;
