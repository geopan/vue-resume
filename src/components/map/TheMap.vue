<template>
  <l-map
    fadeAnimation
    zoomAnimation
    :center="center"
    :zoom="zoom"
    :min-zoom="zoom"
    :max-zoom="zoom"
  >
    <l-tile-layer :url="url" />
    <l-marker v-for="(ex, i) in experiences" :key="`marker-${i}`" :lat-lng="ex.center" />
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  name: "TheMap",
  components: { LMap, LTileLayer, LMarker },
  props: {
    experiences: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    url:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    center: [-33.8732279, 151.2077566],
    zoom: 15
  })
};
</script>
