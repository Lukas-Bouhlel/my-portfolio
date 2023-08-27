<template>
    <section class="professionals">
        <div class="container">
            <div class="contentProfessionnalExp">
                <div class="professional-container" @click="toggleExperience">
                    <transition name="experience-fade" mode="out-in">
                        <div :key="showInflucom" class="professional-details">
                          <h2>{{ showInflucom ? 'INFLUCOM' : 'CG CONSULTING' }}</h2>
                          <p v-if="showInflucom">
                            During this alternating period, I was able to consolidate my knowledge, significantly improve my skills in both frontend and backend development, with a particular emphasis on the Symfony framework and the JavaScript programming language. Moreover, I had the opportunity for the first time to explore the field of web development within a company, thus broadening my understanding of the sector.
                          </p>
                          <p v-else>
                            After concluding this apprenticeship under the title of NoCode Maker, I delved into the exciting horizons of codeless creation, thereby showcasing my ability to innovate and bring innovative projects to fruition.
                          </p>
                          <div v-if="showInflucom" class="content-svg-influcom">
                              <img src="../../../assets/images/icons/html.svg"/>
                              <img src="../../../assets/images/icons/css.svg"/>
                              <img src="../../../assets/images/icons/javascript.svg"/>
                              <img src="../../../assets/images/icons/php.svg"/>
                              <img src="../../../assets/images/icons/jquery.svg"/>
                              <img src="../../../assets/images/icons/git.svg"/>
                              <img src="../../../assets/images/icons/symfony.svg"/>
                              <img src="../../../assets/images/icons/phpmyadmin.svg"/>
                              <img src="../../../assets/images/icons/prestashop.svg"/>
                              <img src="../../../assets/images/icons/bootstrap.svg"/>
                              <img src="../../../assets/images/icons/sql.svg"/>
                          </div>
                          <div v-else class="content-svg-cgconsulting">
                              <img src="../../../assets/images/icons/airtable.svg"/>
                              <img src="../../../assets/images/icons/integromat.svg"/>
                              <img src="../../../assets/images/icons/javascript.svg"/>
                              <img src="../../../assets/images/icons/shopify.svg"/>
                              <img src="../../../assets/images/icons/webflow.svg"/>
                              <img src="../../../assets/images/icons/react.svg"/>
                          </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </section>
</template>
  
  <script>
  export default {
    data() {
      return {
        showInflucom: true,
      };
    },
    methods: {
      toggleExperience() {
        this.showInflucom = !this.showInflucom;
      },
    },
  };
</script>

<style scoped>
.experience-fade-enter-active,
.experience-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.experience-fade-enter,
.experience-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.experience-fade-enter-to,
.experience-fade-leave {
  opacity: 1;
  transform: translateY(0);
}

</style>