<template>
    <div>
        <audio ref="audioPlayer" :src="audioSrc" type="audio/mp3"></audio>
    </div>
</template>  
  
<script>
export default {
  data() {
    return {
      audioSrc: "../../public/audio.mp3"
    };
  },
  methods: {
    playAudio() {
      audioPlayer.play();
    }
  }
};
</script>