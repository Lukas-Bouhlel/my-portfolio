<template>
    <section class="thumbnail">
        <div class="container">
            <h3>Developper web</h3>
            <div>
                <h1>Hello,  my name is Lukas Bouhlel</h1>
                <p>Aged 25 and hailing from Lyon, I am passionate about digital and web creation. My journey led me to obtain a diploma at the Bac+2 level as a Web Developer and Integrator.</p>
                <div class="thumbnail-buttons">
                    <a @click="handleScrollLinkClick"><button class="button-1">Contact</button></a>
                    <a target="_blank" href="https://www.linkedin.com/in/lukas-bouhlel/"><button class="button-2">LinkedIn</button></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>    
export default {
    methods: {
        handleScrollLinkClick() {
            console.log('toto')
            this.$emit('scroll-link-clicked');
        }
    }
}
</script>