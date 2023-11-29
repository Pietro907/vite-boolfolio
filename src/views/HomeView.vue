<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: 'HomeView',

    data() {
        return {
            link_api: 'http://127.0.0.1:8000/api/projects',
            page_api: '?page=',
            projects: [],
            current_page: 1,
        };
    },

    methods: {
        nextPage() {
            //console.log(this.current_page++);
            this.current_page++;
            this.callAxios();
        },
        prevPage() {
            //console.log(this.current_page--);
            this.current_page--;
            this.callAxios();
        },
        callAxios() {
            axios
                .get(this.link_api + this.page_api + this.current_page)
                .then(response => {
                    //console.log(response);
                    this.projects = response.data.result;
                });
        },
    },

    mounted() {
        this.callAxios();
    },
};


</script>

<template>
    <div class="container my-2 bg-primary-subtle img_bg">

        <h1 class="text-center pos_neg mt-5">Projects</h1>

        <div class="row justify-content-center flex-wrap">


            <div v-for="project in projects.data" class="col-2 my-5">
                <div class="card bg-success-subtle text-center h-100 p-3">

                    <img v-if="project.thumb" :src="'http://localhost:8000' + '/' + 'storage/' + project.thumb">
                    <span v-else>N/A</span>
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

    <!-- Pagination -->
    <div class="pages">
        <ul class="pagination">

            <li class="page-item"><a @click="prevPage" class="page-link">Prev</a></li>

            <li v-if="projects.current_page !== 1" class="page-item"><a @click="prevPage" class="page-link">{{ projects.current_page - 1 }}</a></li>
            
            
            <li class="page-item"><a class="page-link">{{ projects.current_page }}</a></li>
            
            <li v-if="projects.current_page < projects.last_page" class="page-item"><a @click="nextPage" class="page-link">{{ projects.current_page + 1 }}</a></li>

            <li class="page-item"><a @click="nextPage" class="page-link">Next</a></li>

        </ul>
    </div>

    <!--     <li v-if="projects.current_page !== 1" class="page-item"><a @click="prevPage" class="page-link" href="#">{{
        projects.current_page - 1 }}</a></li>

    <li class="page-item"><a class="page-link bg-secondary" href="#">{{ projects.current_page }}</a></li>

    <li v-if="projects.current_page < projects.last_page" class="page-item"><a @click="nextPage" class="page-link"
            href="#">{{ projects.current_page + 1 }}</a></li>
     -->
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
.img_bg {
    background: url(../assets/img/bg-portfolio.jpg);
    background-size: cover;
    background-position: center;
    height: 750px;
}

.pos_neg {
    position: relative;
    top: -60px;
}
</style>
