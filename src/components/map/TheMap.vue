<template>
  <l-map
    fadeAnimation
    zoomAnimation
    :center="center"
    :zoom="zoom"
    :minZoom="zoom - 6"
    :maxZoom="zoom"
    worldCopyJump
    ref="theMap"
  >
    <l-tile-layer :url="url" />
    <exp-layer
      v-for="(ex, i) in experiences"
      :key="`layer-${i}`"
      :experience="ex"
      :visible="i === selectedExp"
    >
      <div slot="popup">
        {{ ex.company }}
      </div>
    </exp-layer>
  </l-map>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import ExpLayer from "./ExpLayer";

import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  name: "TheMap",
  components: { LMap, LTileLayer, ExpLayer },
  props: {
    experiences: {
      type: Array,
      default: () => []
    },
    selectedExp: {
      type: Number,
      default: 0
    },
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    url:
      // "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    center: [-33.8732279, 151.2077566],
    zoom: 6
  }),
  methods: {
    centerMap(center, zoom) {
      if (center && this.$refs.theMap && this.$refs.theMap.mapObject) {
        this.$refs.theMap.mapObject.flyTo(center, zoom);
      }
    }
  },
  watch: {
    selectedExp(v) {
      if (this.experiences[v]) {
        this.centerMap(this.experiences[v]["center"], this.zoom);
      }
    }
  }
};
</script>
