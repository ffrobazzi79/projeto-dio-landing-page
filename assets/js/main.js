function switchTheme() {
    // Troca os temas
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    // Muda a música conforme o tema

    if (document.body.classList.contains("dark-theme")) {
        document.getElementById('musicSource').src = "./assets/musics/inverted-world.mpeg";
    } else {
        document.getElementById('musicSource').src = "./assets/musics/normal-world.mpeg";
    }
    
    // Carrega e toca a nova música
    document.getElementById('music').load();
    document.getElementById('music').volume = 0.3;
    document.getElementById('music').play();
}


// Script para parar a musica do site para escutar o video
// Carregar a API do YouTube
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Função chamada quando a API do YouTube estiver pronta
function onYouTubeIframeAPIReady() {
  youtubePlayer = new YT.Player('youtubeVideo', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// Função chamada quando o estado do player do YouTube muda
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    // Se o vídeo começar, pausa a música
    document.getElementById('music').pause();
  }
}

