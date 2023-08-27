<template>
  <section class="slider">
    <div
      id="carousel-wrapper"
      :class="{ 'anim-next': transitionNext, 'anim-previous': transitionPrevious }"
    >
      <div id="menu" :style="{ background: colorOptions[currentIndex] }">
        <div id="current-option">
          <span
            id="current-option-text1"
            :data-previous-text="previousText1"
            :data-next-text="nextText1"
          >
            {{ text1Options[currentIndex] }}
          </span>
          <p 
              id="current-option-text2"
              :data-previous-text="previousText2"
              :data-next-text="nextText2"
          >
              {{ text2Options[currentIndex] }}
          </p>
          <a
            id="current-option-text3"
            :data-previous-text="seeMoreText"
            :data-next-text="seeMoreText"
            :href="text3Options[currentIndex]"
            target="_blank"
          >
          See More
          </a>
        </div>
        <button id="previous-option" @click="previousOption"></button>
        <button id="next-option" @click="nextOption"></button>
        <div
          id="image"
          :style="{ backgroundImage: 'url(' + imageOptions[currentIndex] + ')' }"
          :key="currentIndex"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      previousText1: "",
      previousText2: "",
      previousText3: "",
      nextText1: "",
      nextText2: "",
      nextText3: "",
      text1Options: [
        "Morpion [JavaScript]",
        "My IRC [Socket.io]",
        "Yama Shop [HTML/CSS]",
        "Driving School [Django]",
        "My Site RaR [Ruby and Rails]",
        "My Snapchat [React Native]",
        "Puissance 4 [JQuery]",
        "Rush Spotify [Laravel]",
        "My Meetic [PHP/JS/SQL]",
        "Tweet Academie [PHP/JS/SQL]",
        "My Cinema [PHP/SQL]"
      ],
      text2Options: [
        "The goal of the project is to create a tic-tac-toe game.",
        "Development of my own Internet Relay Chat.",
        "Website coding in HTML/CSS for a one-day review.",
        "The purpose of this project is to develop a driving school website.",
        "Development of a management system where multiple different users write articles about cats.",
        "Recreation of the Snapchat application.",
        "Creating a Cyberpunk-themed game based on the rules of the famous game Connect Four.",
        "Creation of an online media player in 2 days.",
        "The goal of the project is to create a dating website similar to Meetic.",
        "The aim of this project is to create a social network for students, which will have the same functionalities as Twitter.",
        "Develop a website for managing a cinema based on the MySQL database."
      ],
      text3Options: [
        "https://github.com/Lukas-Bouhlel/morpion.js",
        "https://github.com/Lukas-Bouhlel/my_IRC",
        "https://github.com/Lukas-Bouhlel/Yama-Shop-Showcase-Site",
        "https://github.com/Lukas-Bouhlel/DrivingSchool",
        "https://github.com/Lukas-Bouhlel/My-Site-Ruby-and-Rails",
        "https://github.com/Lukas-Bouhlel/my_snapchat",
        "https://github.com/Lukas-Bouhlel/puissance4",
        "https://github.com/Lukas-Bouhlel/rush_spotify",
        "https://github.com/Lukas-Bouhlel/my_meetic",
        "https://github.com/Lukas-Bouhlel/tweet_academie",
        "https://github.com/Lukas-Bouhlel/my_cinema"
      ],
      colorOptions: [
        "#85B6FF", 
        "#99C2FF", 
        "#A2C8FF", 
        "#AACDFF", 
        "#B2D2FF", 
        "#B9D6FF", 
        "#BFDAFF",
        "#B2D2FF", 
        "#AACDFF", 
        "#A2C8FF",
        "#99C2FF"
      ],
      imageOptions: [
        "https://i.imgur.com/iYLJv3Y.jpg",
        "https://i.imgur.com/JLKtI6C.jpg",
        "https://i.imgur.com/NkAIX0c.jpg",
        "https://i.imgur.com/jZdIRUB.jpg",
        "https://i.imgur.com/lSS0J78.jpg",
        "https://i.imgur.com/iRKKryX.png",
        "https://i.imgur.com/Ssrzu6b.jpg",
        "https://i.imgur.com/wBpx2Fv.png",
        "https://i.imgur.com/YsUgcj0.jpg",
        "https://i.imgur.com/dZYSNkq.png",
        "https://i.imgur.com/gxcF2lq.png"
      ],
      transitionNext: false,
      transitionPrevious: false,
      loadedImages: [],
      seeMoreText: "See More"
    };
  },
  methods: {
    updateText() {
      const nextIndex = (this.currentIndex + 1) % this.text1Options.length;
      const prevIndex = (this.currentIndex - 1 + this.text1Options.length) % this.text1Options.length;
      this.nextText1 = this.text1Options[nextIndex];
      this.nextText2 = this.text2Options[nextIndex];
      this.nextText3 = this.text3Options[nextIndex];
      this.previousText1 = this.text1Options[prevIndex];
      this.previousText2 = this.text2Options[prevIndex];
      this.previousText3 = this.text3Options[prevIndex];
    },
    preloadImage(index) {
      const imageUrl = this.imageOptions[index];
      if (imageUrl) {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          this.loadedImages[index] = img;
          setTimeout(() => {
            const currentOptionImage = document.getElementById('image');
            currentOptionImage.style.backgroundImage = 'url(' + imageUrl + ')';
          }, 455);
        };
      }
    },
    preloadNextImage() {
      this.preloadImage((this.currentIndex + 1) % this.imageOptions.length);
    },
    preloadPreviousImage() {
      this.preloadImage((this.currentIndex - 1 + this.imageOptions.length) % this.imageOptions.length);
    },
    previousOption() {
      this.transitionPrevious = true;
      this.preloadPreviousImage();
      setTimeout(() => {
        this.transitionPrevious = false;
        this.currentIndex = (this.currentIndex - 1 + this.text1Options.length) % this.text1Options.length;
        this.updateText();
      }, 650);
    },
    nextOption() {
      this.transitionNext = true;
      this.preloadNextImage();
      setTimeout(() => {
        this.transitionNext = false;
        this.currentIndex = (this.currentIndex + 1) % this.text1Options.length;
        this.updateText();
      }, 650);
    },
  },
  mounted() {
    this.imageOptions.forEach((index) => {
      this.preloadImage(index);
    });
      this.updateText();
  },
};
</script>