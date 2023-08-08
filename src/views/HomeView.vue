<script setup>


import { ref, onMounted } from 'vue';

const data = ref({
  name: 'PXL',
  location: 'Los Angeles',
  description: 'A Dogs favorite creative agency based in LA',
});


</script>

<template>
  <div class="banner">
    <div class="banner-desc-box">
      <h1 class="banner-title">{{data.name}}</h1>
      <p class="banner-desc">{{data.description}}</p>
    </div>
    <div class="banner-image">
      <img src="../assets/finny.jpg" alt="finn at the beach" />
    </div>
  </div>
</template>


<style scoped>
/* when screen is smaller it defaults to text box on top via flex direction */
.banner {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
}
.banner-desc-box {
  display: flex;
  flex-direction: column;
  height: 60%;
  width: auto;
  min-width: 500px;
  background-color: #181818;
  padding: 2rem 1.5rem;
  transform: translateY(50px);
  border-radius: 5px;
}
.banner-desc-box .banner-title {
  font-size: 60px;
}
.banner-desc-box .banner-desc {
  font-size: 20px;
}
.banner-image {
  display: flex;
  flex-basis: 60%;
  justify-content: center;
  width: auto;
  height: 200px;
  overflow: hidden;
  border-radius: 5px;
}
.banner-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
}

/* Desktop Breakpoint places image to the right in line with text box */
@media (min-width: 1024px) {
  .banner {
    flex-direction: row;
  }
  /* slides over the image a bit */
  .banner-desc-box {
    transform: translateX(50px);
  }
  .banner-image {
    flex-basis: 60%;
    width: 700px;
    height: 500px;
    overflow: hidden;
    border-radius: 5px;
  }
}
</style>
