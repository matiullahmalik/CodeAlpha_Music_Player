const songs = [
    { name: "Song 1 - Artist 1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { name: "Song 2 - Artist 2", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { name: "Song 3 - Artist 3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
  ];
  
  let currentSongIndex = 0;
  let audioPlayer = document.getElementById('audio-player');
  
  // Load the first song initially
  loadSong(currentSongIndex);
  
  // Function to load the selected song
  function loadSong(index) {
    audioPlayer.src = songs[index].url;
    audioPlayer.play();
  }
  
  // Play or Pause the song
  function playPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
  
  // Go to the next song
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
  }
  
  // Go to the previous song
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
  }
  
  // Change the volume
  function changeVolume(value) {
    audioPlayer.volume = value;
  }
  
  // Select a song from the playlist
  function selectSong(index) {
    currentSongIndex = index;
    loadSong(currentSongIndex);
  }
  
  // Filter the songs in the playlist
  function filterSongs() {
    let filter = document.getElementById('search').value.toUpperCase();
    let ul = document.getElementById('song-list');
    let li = ul.getElementsByTagName('li');
    
    for (let i = 0; i < li.length; i++) {
      let txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  