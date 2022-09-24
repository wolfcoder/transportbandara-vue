<template>
   <Hero01/>
   <AirportTransfer/>
   <WorkWith01/>
   <Benefit01/>
   <CategoryProduct01/>
</template>

<script>
import Hero01 from '../components/Hero-01.vue';
import AirportTransfer from '../components/Airport-Transfer.vue';
import WorkWith01 from '../components/Work-With-01.vue';
import Benefit01 from '../components/Benefit-01.vue';
import CategoryProduct01 from '../components/Category-product-01.vue';
export default {
    name: "PageHome",
    components: { Hero01, AirportTransfer, WorkWith01, Benefit01, CategoryProduct01 }
}
</script>

<style scoped>

</style>
