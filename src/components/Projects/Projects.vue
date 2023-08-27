<template>
    <section class="projects">
        <div class="container">
            <div class="title">
                <h2>Projects</h2>
                <span></span>
            </div>
            <div class="timeline">
                <div class="project-container">
                    <div class="line"></div>
                    <div class="project-row">
                        <div class="timeline-item">
                            <div
                            v-for="(project, index) in projects"
                            :key="index"
                            class="circle"
                            :class="{ active: activeProjectIndex === index, 'project-2': index === 1 }"
                            @mouseover="showProject(index)"
                            >
                                <div class="project-details" v-if="activeProjectIndex === index">
                                    <div class="project-item">
                                        <div>
                                            <h2>{{ project.title }}</h2>
                                            <p>{{ project.description }}</p>
                                            <button>See More</button>
                                        </div>
                                    </div>
                                    <div class="project-date">
                                        <p>{{ project.date }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <router-link to="/my-portfolio/projects">
                    <p class="see-more">See More</p>
                    <svg class="arrow-animation" xmlns="http://www.w3.org/2000/svg" width="16" height="29" viewBox="0 0 16 29" fill="none">
                        <path d="M7.29289 28.7071C7.68342 29.0976 8.31658 29.0976 8.70711 28.7071L15.0711 22.3431C15.4616 21.9526 15.4616 21.3195 15.0711 20.9289C14.6805 20.5384 14.0474 20.5384 13.6569 20.9289L8 26.5858L2.34315 20.9289C1.95262 20.5384 1.31946 20.5384 0.928932 20.9289C0.538408 21.3195 0.538408 21.9526 0.928932 22.3431L7.29289 28.7071ZM7 0L7 28L9 28L9 0L7 0Z" fill="#64A2FF"/>
                    </svg>
                </router-link>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    data() {
        return {
            projects: [
                {
                    title: "Driving School",
                    description: "The purpose of this project is to develop a driving school website.",
                    date: "23 april 2021"
                },
                {
                    title: "My IRC",
                    description: "Development of my own Internet Relay Chat.",
                    date: "22 jun 2020"
                },
                {
                    title: "Rush Spotify",
                    description: "Creation of an online media player in 2 days.",
                    date: "4 march 2020"
                }
            ],
            activeProjectIndex: 0
        };
    },
    methods: {
        showProject(index) {
            this.activeProjectIndex = index;
        }
    }
};
</script>