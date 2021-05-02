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
  components: { card },
  data() {
    return {
      items: [
        {
          topImage:
            "https://media.istockphoto.com/photos/retro-styled-handsome-ethnic-man-with-glasses-picture-id961882900?k=6&m=961882900&s=612x612&w=0&h=vIk3O71I_kdmQfCPH9UwXcZjBfCRRg56x4G9k3G8jDM=",
          name: "Custom component",
          add: "mumbai, india",
          pic:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "Some quick example text to",
          updated: "3 weeks ago",
          liked: "aremu",
          total: "30999",
        },
        {
          topImage:
            "https://image.shutterstock.com/image-photo/head-shoulders-portrait-young-african-260nw-388588540.jpg",
          name: "Custom component",
          add: "mumbai, india",
          pic:
            "https://image.shutterstock.com/image-photo/head-shoulders-portrait-young-african-260nw-388588540.jpg",
          title: "Some quick example text to",
          updated: "3 weeks ago",
          liked: "aremu",
          total: "30999",
        },
        {
          topImage:
            "https://image.shutterstock.com/image-photo/head-shoulders-portrait-young-african-260nw-388588540.jpg",
          name: "Custom component",
          add: "mumbai, india",
          pic:
            "https://image.shutterstock.com/image-photo/head-shoulders-portrait-young-african-260nw-388588540.jpg",
          title: "Some quick example text to",
          updated: "3 weeks ago",
          liked: "aremu",
          total: "30999",
        },
        {
          topImage:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          name: "Custom component",
          add: "mumbai, india",
          pic:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "Some quick example text to",
          updated: "3 weeks ago",
          liked: "aremu",
          total: "30999",
        },
        {
          topImage:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          name: "Custom component",
          add: "mumbai, india",
          pic:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "Some quick example text to",
          updated: "3 weeks ago",
          liked: "aremu",
          total: "30999",
        },
        {
          topImage:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          name: "Custom component",
          add: "mumbai, india",
          pic:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "Some quick example text to",
          updated: "3 weeks ago",
          liked: "aremu",
          total: "30999",
        },
        {
          topImage:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          name: "Custom component",
          add: "mumbai, india",
          pic:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "Some quick example text to",
          updated: "3 weeks ago",
          liked: "aremu",
          total: "30999",
        },
        {
          topImage:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          name: "Custom component",
          add: "mumbai, india",
          pic:
            "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
          title: "Some quick example text to",
          updated: "3 weeks ago",
          liked: "aremu",
          total: "30999",
        },
      ],
    };
  },
};
</script>

<style scoped>
.top {
  margin-top: 12em;
}
</style>
