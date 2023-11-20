<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: 'HomeView',

    data() {
        return {
            link_api: 'http://127.0.0.1:8000/api/projects',
            projects: [],
        };
    },

    mounted() {
        axios
            .get(this.link_api)
            .then(response => {
                console.log(response);
                this.projects = response.data.result;
            })
    },
};


</script>

<template>
    <div class="container my-2 bg-primary-subtle">

        <h1 class="text-center mt-5">Projects</h1>

        <div class="row justify-content-center flex-wrap">


            <div v-for="project in projects.data" class="col-2 my-5">
                <div class="card bg-success-subtle text-center h-100 p-3">
                    <img :src="'http://localhost:8000' + '/' + 'storage/' + project.thumb">
                    <h5 class="mt-3">{{ project.title }}</h5>
                    <p>{{ project.description }}</p>
                    <p>{{ project.authors }}</p>
                    <h6>{{ project.slug }}</h6>
                    <h6>{{ project.tech }}</h6>
                    <a href="https://github.com/Pietro907/vite-boolflix/blob/main/src/App.vue">{{ project.link
                    }}</a>
                    <a href="https://github.com/Pietro907/vite-boolflix/blob/main/src/App.vue">{{
                        project.github_link
                    }}</a>
                </div>
            </div>

        </div>

    </div>
</template>


<style lang="scss" scoped>
/* .container{
  width: 80%;
  margin: 0 auto;
}
.card{
  text-align: center;
  margin: 2rem 0;
} */
</style>
