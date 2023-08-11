<script setup>
//   import Audio from './components/Audio.vue';
  import Header from '../components/Header/Header.vue';
  import Thumbnail from '../components/Thumbnail/Thumbnail.vue';
  import Projects from '../components/Projects/Projects.vue';
  import About from '../components/About/About.vue';
  import Contact from '../components/Contact/Contact.vue';
  import Footer from '../components/Footer/Footer.vue';
</script>

<template>
  <Header @contact-link-clicked="handleContactLinkClick"/>
  <main>
    <Audio/>
    <Thumbnail/>
    <Projects/>
    <About/>
    <Contact ref="contactSection"/>
  </main>
  <Footer/>
</template>

<script>
export default {
  components: {
    Header,
    Contact
  },

  methods: {
    handleContactLinkClick() {
      this.$refs.contactSection.$el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>