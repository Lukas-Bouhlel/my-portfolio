<template>
    <section class="about">
        <div class="container" @mousemove="moveImage" ref="tiltImageWrapper">
            <div>
                <div class="container-images">
                    <div class="image-wrapper">
                        <img src="../../assets/images/myProfile.png" ref="tiltImage"/>
                    </div>
                </div>
            </div>
            <div class="container-text">
                <h2>About me</h2>
                <p>I have honed my expertise within several renowned schools, notably at the School of Computer 
                    Science and Advanced Techniques Epitech, where I acquired a solid foundation. 
                    Currently, I am continuing my learning journey at Cloud Campus, 
                    where I am further refining my skills and exploring the latest advancements in the field of 
                    <span id="typedMessage" class="typed">
                        <span v-if="typedInitialized">{{ typed }}</span>
                    </span>
                    ...
                </p>
                <router-link to="/my-portfolio/biography">
                    <button>Resume</button>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import Typed from 'typed.js';

export default {
    name: '',
    data() {
        return {
            typed: '',
            typedInitialized: false,
            typedInstance: null
        };
    },
    mounted() {
        this.initializeTyped();
    },
    methods: {
        initializeTyped() {
            this.typedInstance = new Typed('#typedMessage', {
                strings: ['web development', 'web integration', 'LowCode', 'NoCode', 'Design UI/UX'],
                typeSpeed: 150,
                backSpeed: 50,
                loop: true
            });
        },
        moveImage(event) {
            const tiltImageWrapper = this.$refs.tiltImageWrapper;
            const containerWidth = tiltImageWrapper.offsetWidth;
            const containerHeight = tiltImageWrapper.offsetHeight;

            const mouseX = event.clientX - tiltImageWrapper.getBoundingClientRect().left;
            const mouseY = event.clientY - tiltImageWrapper.getBoundingClientRect().top;

            const moveXPercentage = (mouseX / containerWidth - 0.5) * 2;
            const moveYPercentage = (mouseY / containerHeight - 0.5) * 2;

            const tiltAngleX = 10 * moveYPercentage;
            const tiltAngleY = -10 * moveXPercentage; 

            this.$refs.tiltImage.style.transform = `rotateX(${tiltAngleX}deg) rotateY(${tiltAngleY}deg)`;
        },
    },
    beforeUnmount() {
        if (this.typedInstance) {
            this.typedInstance.destroy();
        }
    }
};
</script>
