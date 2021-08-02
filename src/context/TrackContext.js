import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks': 
            return action.payload;
        case 'delete_track':
            return state.filter(track => track._id !== action.payload);
        default:
            return state;
    }
};

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data });
};

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', {name, locations});
};

const deleteTrack = dispatch => async (_id) => {
    await trackerApi.delete(`/tracks/${_id}`);
    dispatch({ type: 'delete_track', payload: _id });
}

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack, deleteTrack },
    []
);

