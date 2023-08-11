<template>
  <section class="contacts">
    <div class="container" ref="contactSection">
      <div class="title">
        <h2>Contact</h2>
        <span></span>
      </div>
      <form class="form-container" @submit.prevent="submitForm">
          <div class="wrapper-field">
              <label for="name">Name</label>
              <input v-model="name" id="name" required />
          </div>
          <div class="wrapper-field">
              <label for="email">Email</label>
              <input v-model="email" type="email" id="email" required />
          </div>
          <div class="wrapper-field">
              <label for="message">Message</label>
              <textarea class="fixed-textarea" v-model="message" id="message" required></textarea>
          </div>
        <button type="submit">Send</button>
      </form>
      <div class="iconContact">
        <a target="_blank" href="https://github.com/Lukas-Bouhlel"><img src="../../assets/images/GitIcon.svg"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/lukas-bouhlel/"><img src="../../assets/images/LinkedInIcon.svg"/></a>
        <a target="_blank" href="mailto:lukas.bouhlel@epitech.eu?subject=Collaboration Potentielle - Intéressé par votre Portfolio"><img src="../../assets/images/MailIcon.svg"/></a>
      </div>
      <p class="copyright">Lukas Bouhlel © 2023 </p>
    </div>
  </section>
</template>
  
  <script>
    export default {
        data() {
          return {
              name: "",
              email: "",
              message: "",
          };
        },
        methods: {
            submitForm() {
                console.log("Form submitted!");
                console.log("Name:", this.name);
                console.log("Email:", this.email);
                console.log("Message:", this.message);
            },
        },
    };
</script>
  
  