<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      link_api: 'http://127.0.0.1:8000/api/projects',
      projects: [],
    }
  },
  mounted() {
    axios.get(this.link_api)
    .then(response => {
      console.log(response);
      this.projects = response.data.result;
    });
    caches(err =>{
      console.error(err);
    });

  }
}
</script>

<template>
  
<div class="container">
  <div class="row">
    <div class="col">
      <div class="card text-center">
        <h1>Ciao</h1>
        <h2 v-for="project in projects.data">{{ project.title }}</h2>
      </div>
    </div>
  </div>
</div>

<Main />

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
