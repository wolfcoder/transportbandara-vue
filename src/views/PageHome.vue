<template>
    <section class="pt-20 md:pt-32 pb-16 bg-black relative h-screen">
        <div style="background-image: url('../images/airport-1920x1080.jpg');" class="bg-cover absolute top-0 bottom-0 left-0 right-0 opacity-30"></div>
        <AirportTransfer/>
    </section>
   
   <Hero01/>
   <WorkWith01/>
   <Benefit01/>
   <CategoryProduct01/>
   <CategoryProduct02/>
   <Testimony01/>
   
</template>

<script>
import Hero01 from '../components/Hero-01.vue';
import AirportTransfer from '../components/AirportTransfer.vue';
import WorkWith01 from '../components/WorkWith-01.vue';
import Benefit01 from '../components/Benefit-01.vue';
import CategoryProduct01 from '../components/CategoryProduct-01.vue';
import CategoryProduct02 from '../components/CategoryProduct-02.vue';
import Testimony01 from '../components/Testimony-01.vue';
import TheFooter from '../components/TheFooter.vue';
 
export default {
    name: "PageHome",
    components: { Hero01, AirportTransfer, WorkWith01, Benefit01, CategoryProduct01, CategoryProduct02, Testimony01, TheFooter }
}
</script>
 