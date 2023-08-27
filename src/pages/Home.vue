<script setup>
  // import Audio from '../components/Audio.vue';
  import Thumbnail from '../components/Home/Thumbnail/Thumbnail.vue';
  import Projects from '../components/Home/Projects/Projects.vue';
  import About from '../components/Home/About/About.vue';
  import Contact from '../components/Home/Contact/Contact.vue';
  import Footer from '../components/Footer/Footer.vue';
</script>

<template>
  <main>
    <Thumbnail @scroll-link-clicked="handleScrollLinkClick"/>
    <Projects/>
    <About/>
    <Contact/>
  </main>
  <Footer/>
</template>

<script>
export default {
  components: {
    Contact
  },
  methods: {
    handleScrollLinkClick() {
      const contactSection = document.querySelector('#contacts');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>