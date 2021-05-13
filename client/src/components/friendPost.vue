<template>
  <div class="">
    <div class=" top">
      <div class="">
        <card :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card.vue";
export default {
  props:['items'],
  components: { card },

  data() {
    return {
  
    };
  },
};
</script>

<style scoped>
.top {
  margin-top: 16em;
}
</style>
