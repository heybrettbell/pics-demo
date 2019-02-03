//Action creator
export const selectSong = () => {
  //Returning an action 
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

