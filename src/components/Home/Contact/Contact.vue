<template>
  <section id="contacts">
    <div class="container" ref="contactSection">
      <div class="title">
        <h2>Contact</h2>
        <span></span>
      </div>
      <form class="form-container" @submit.prevent="submitForm">
        <div class="wrapper-field">
            <label for="name">Name</label>
            <div>
              <input v-model="name" id="name" maxlength="50" pattern="[A-Za-z\- ]+" required/>
              <span class="char-counter">{{ name.length }} / 50</span>
            </div>
            
        </div>
        <div class="wrapper-field">
            <label for="email">Email</label>
            <div>
              <input v-model="email" type="email" id="email" pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}" required />
            </div>
        </div>   
        <div class="wrapper-field">
            <label for="message">Message</label>
            <div>
              <textarea class="fixed-textarea" v-model="message" id="message" maxlength="500" required></textarea>
              <span class="char-counter2">{{ message.length }} / 500</span>
            </div>
            
        </div>
        <p class="message" :class="{ 'error-message': formError, 'success-message': formSuccess }">
          {{ formError ? errorMessage : (formSuccess ? successMessage : '') }}
        </p>
        <button type="submit">Send</button>
      </form>
      <div class="iconContact">
        <a target="_blank" href="https://github.com/Lukas-Bouhlel"><img src="../../../assets/images/GitIcon.svg"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/lukas-bouhlel/"><img src="../../../assets/images/LinkedInIcon.svg"/></a>
        <a target="_blank" href="mailto:lukas.bouhlel@epitech.eu?subject=Collaboration Potentielle - Intéressé par votre Portfolio"><img src="../../../assets/images/MailIcon.svg"/></a>
      </div>
      <p class="copyright">Lukas Bouhlel © 2023 </p>
    </div>
  </section>
</template>
  
<script>
import axios from 'axios';
import confetti from "canvas-confetti";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      formError: false,
      formSuccess: false,
      errorMessage: "",
      successMessage: ""
    };
  },
  methods: {
    async submitForm() {
      if (this.validateForm()) {
        const formData = {
          name: this.name,
          email: this.email,
          message: this.message,
          origin: "portfolio-lukas-bouhlel"
        };
        try {
          await axios.post('https://hook.eu1.make.com/uqvsbho8b8dth6d2vwfk98f97598l4i9', formData);
          this.formSuccess = true;
          this.successMessage = "Congratulations ! Your request has been successfully submitted. Thank you very much !"
          const canvas = this.$refs.canvas;
          const myConfetti = confetti.create(canvas, {
            resize: true,
          });
          myConfetti({
            particleCount: 150,
            spread: 500,
            colors: [
              "#64A2FF",
              "#85B6FF", 
              "#99C2FF", 
              "#A2C8FF", 
              "#AACDFF", 
              "#B2D2FF", 
              "#B9D6FF", 
              "#64A2FF"
            ]
          });
          this.name = "";
          this.email = "";
          this.message = "";
        } catch (error) {
          this.formError = true;
          this.errorMessage = "Oops! Something went wrong during the form submission. Please try again later.";
          return false;
        }
      }
    },
    validateForm() {
      const namePattern = /^[A-Za-z\- ]+$/;
      const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;

      if (!namePattern.test(this.name)) {
        this.formError = true;
        this.errorMessage = "Enter a valid name.";
        return false;
      }

      if (!emailPattern.test(this.email)) {
        this.formError = true;
        this.errorMessage = "Enter a valid email address.";
        return false;
      }

      if (this.name.length > 50) {
        this.formError = true;
        this.errorMessage = "Name should not exceed 50 characters.";
        return false;
      }

      if (this.message.length > 500) {
        this.formError = true;
        this.errorMessage = "Message should not exceed 500 characters.";
        return false;
      }

      this.formError = false;
      this.errorMessage = "";
      return true;
    },
  },
};
</script>

<style>
#confetti-canvas {
  position: fixed; 
  z-index: 999; 
  top: 0; 
  left: 0; 
  width: 100vw; 
  height: 100vh; 
  pointer-events: none;
}
</style>
