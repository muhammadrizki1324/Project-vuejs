<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template >

  <header>
    <img alt="Vue logo" class="logo" src="src/assets/mrizki.jpeg" width="500" height="250" />

    <div class="wrapper">
      
        <h2>Muhammad Rizki</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti fuga perspiciatis, fugit delectus eligendi earum deleniti laboriosam atque. </p>
        <nav>
         <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/personal">About me</RouterLink>
        <RouterLink to="/skill">Skill</RouterLink>
      </nav>
      
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

header {
  /* background-color: cornsilk; */
  width: 700px;
  height: 350px;
  margin-top: 150px;
  margin-right: 300px;
  border-style: solid ;
  margin-bottom: 100px;
  /* border-color:darkorchid ; */
  line-height: 1.5;
  max-height: 100vh;
}
.wrapper{
 display: flex;
 
  /* padding-left: 50px; */
}
.wrapper h2{
  font-size: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight:bold;
 
}

.wrapper p{
  font-style: italic;
}

.logo {
  
  padding-left: 20px;
  /* display: block; */
  margin: 0 auto 2rem;
  
}

nav {
 
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
