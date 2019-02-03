//Action creator
export const selectSong = (song) => {
  //Returning an action 
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

