export const initialState = {
    movies: [],
    genres: null,
    dev: "Mohammed ELkhamlichi",
};

const actionTypes = {
    GET_MOVIES_GENERS: "GET_MOVIES_GENERS",
    GET_MOVIES_LIST: "GET_MOVIES_LIST",
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIES_GENERS":
            return { ...state, genres: action.genersfetched };

        case GET_MOVIES_LIST:
            return {
                ...state,
                movies: [{ id: 1, title: "the title of this movie" }],
            };

        default:
            return state;
    }
};
