<script setup>
    import Thumbnail from '../components/Biography/Thumbnail/Thumbnail.vue';
    import Professionals from '../components/Biography/Professionals/Professionals.vue';
    import Hobbies from '../components/Biography/Hobbies/Hobbies.vue';
    import Formations from '../components/Biography/Formations/Formations.vue';
    import Footer from '../components/Footer/Footer.vue';
</script>

<template>
    <main id="biography">
        <Thumbnail/>
        <Hobbies/>
        <Formations/>
        <Professionals/>
    </main>
    <Footer/>
</template>