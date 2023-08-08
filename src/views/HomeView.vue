<script setup>


import { ref, onMounted } from 'vue';

const data = ref({
  name: 'Beach Pup',
  location: 'Los Angeles',
  description: 'A Dogs favorite creative agency',
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
  <div class="solo-feature-column">
    <div class="solo-image">
      <img src="../assets/surfboard-palm.png" alt="finn at the beach" />
      <img src="../assets/santa-monica.png" alt="finn at the beach" />
      <img src="../assets/santa-monica-street.png" alt="finn at the beach" />
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

/* SoloFeature Component */
.solo-feature-column {
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.solo-image {
  display: grid;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  border-radius: 5px;
  gap: 10px;
}
.solo-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .4s;
  cursor: pointer;
}
/* if image 1 is NOT hovered it moves */
.solo-image:hover img:not(:hover) {
  object-fit: cover;
  /* filter: blur(1px); */
  filter: grayscale(.4);
  transition: .4s;
}
.solo-image img:hover {
  /* transform: translatey(-30px) translateX(-10px); */
  box-shadow: 5px 5px 1px #3e3e3e;
  border-radius: 5px;
  z-index: 20;
}
.solo-image img:nth-child(1):hover {
  transform: translatey(-10px) rotate(3deg) translatex(10px);
  box-shadow: 5px 5px 1px #3e3e3e;
  border-radius: 5px;
}
.solo-image img:nth-child(2):hover {
  transform: translatey(-10px) rotate(0deg);
  box-shadow: 5px 5px 1px #3e3e3e;
  border-radius: 5px;
}
.solo-image img:nth-child(3):hover {
  transform: translatey(-10px) translateX(-20px) rotate(-3deg);
  box-shadow: 5px 5px 1px #3e3e3e;
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
  .solo-image {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (min-width: 600px) and (max-width: 1024px) {
  .solo-image {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100%;
  }
  .solo-image img:last-child {
    grid-column: 1 / 3;
    height: 50%;
    width: 100%;
    object-position: bottom;
  }
}
</style>
