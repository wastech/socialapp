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
import { defineAsyncComponent } from "vue";
// Async component without options
const card = defineAsyncComponent(() => import("@/components/card.vue"));
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
