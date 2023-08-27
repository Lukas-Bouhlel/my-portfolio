<template>
    <section class="formations">
        <img class="svg-splash-2" src="../../../assets/images/Splash2.svg"/>
        <div class="container">
            <div class="contentFormations">
                <div>
                    <h1>Education and Professional Experiences</h1>
                    <span></span>
                </div>
                <p class="paragraph-formations">
                    I honed my expertise within several renowned institutions, notably at the École de l'Informatique et des Techniques Avancées Epitech, where I acquired a strong foundation. Currently, I am furthering my learning in Cloud Campus, where I continue to refine my skills and explore the latest advancements in the field.
                </p>
                <img class="svg-splash" src="../../../assets/images/Splash.svg"/>
                <div class="formations-content">
                    <a target="_blank" href="https://www.webacademie.org/">
                        <div class="epitech fade-in">
                            <div>
                                <h2>Epitech</h2> 
                                <span>FINISH</span>
                                <span class="date">2019/2021</span>
                            </div>
                            <p>During this training, I was able to become acquainted with an educational approach centered around project-based methodology, characterized by its dynamism, commitment to interaction, collaboration, and close connection with the professional world. Through this approach, I was able to develop essential foundations for learning web programming, particularly during an intensive three-week immersion (bootcamp) in the PHP environment, as well as the successful completion of SQL exams.</p>
                            <div class="content-svg-epitech">
                                <img src="../../../assets/images/icons/html.svg"/>
                                <img src="../../../assets/images/icons/css.svg"/>
                                <img src="../../../assets/images/icons/scss.svg"/>
                                <img src="../../../assets/images/icons/javascript.svg"/>
                                <img src="../../../assets/images/icons/docker.svg"/>
                                <img src="../../../assets/images/icons/react.svg"/>
                                <img src="../../../assets/images/icons/wordpress.svg"/>
                                <img src="../../../assets/images/icons/php.svg"/>
                                <img src="../../../assets/images/icons/phpmyadmin.svg"/>
                                <img src="../../../assets/images/icons/bootstrap.svg"/>
                                <img src="../../../assets/images/icons/git.svg"/>
                                <img src="../../../assets/images/icons/jasmine.svg"/>
                                <img src="../../../assets/images/icons/jquery.svg"/>
                                <img src="../../../assets/images/icons/laravel.svg"/>
                                <img src="../../../assets/images/icons/mongodb.svg"/>
                                <img src="../../../assets/images/icons/nodejs.svg"/>
                                <img src="../../../assets/images/icons/rubyonrails.svg"/>
                                <img src="../../../assets/images/icons/sql.svg"/>
                                <img src="../../../assets/images/icons/symfony.svg"/>
                                <img src="../../../assets/images/icons/django.svg"/>
                            </div>
                        </div>
                    </a>
                    <a target="_blank" href="https://cloud-campus.fr/cloud-campus-ecole-de-developpement-web-full-stack-en-distanciel-alternance/">
                        <div class="cloudCampus fade-in">
                            <div>
                                <h2>Cloud Campus</h2> 
                                <span>IN PROGRESS</span>
                                <span class="date">2022/2024</span>
                            </div>
                            <p>Within this training program, I've had the opportunity to strengthen and refine my existing skills, explore new areas of expertise, including UI/UX design, and enhance my ability to organize and manage projects. My personal development has also been enriched through interactions with various instructors, and I am committed to continuing this training with the goal of obtaining my diploma.</p>
                            <div class="content-svg-cloudcampus">
                                <img src="../../../assets/images/icons/html.svg"/>
                                <img src="../../../assets/images/icons/css.svg"/>
                                <img src="../../../assets/images/icons/javascript.svg"/>
                                <img src="../../../assets/images/icons/git.svg"/>
                                <img src="../../../assets/images/icons/react.svg"/>
                            </div>
                        </div>
                    </a>
                </div>
            </div> 
        </div>
    </section>
</template>

<script setup>
    import { onMounted } from 'vue';

    onMounted(() => {
        const fadeIns = document.querySelectorAll('.fade-in');

        const fadeInHandler = () => {
        fadeIns.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight) {
            setTimeout(() => {
                element.style.opacity = '1'
                element.style.transform = 'scale(1)'
            }, 200);
            }
        });
        };

        window.addEventListener('scroll', fadeInHandler);
        fadeInHandler();
    });
</script>