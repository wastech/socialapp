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
const card = defineAsyncComponent(() => import("@/components/card.vue")); // Async component without options

export default {
  props: ["items"],
  components: { card },
};
</script>

<style scoped>
.top {
  margin-top: 2em;
}
</style>
