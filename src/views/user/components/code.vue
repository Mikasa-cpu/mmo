<template>
  <div class="flex" style="gap: 25px">
    <div v-for="(some, index) in any" :key="index" class="text-center">
      <router-link :to="some.to" @click="activateCom(index)">
        <div
          :style="
            activeIndex === index ? { borderBottom: '1.2px solid #306fde' } : {}
          "
          class="text-[1vw] mb-[0.7vw] cursor-pointer pb-[0.6vw]"
        >
          {{ some.id }}
        </div>
      </router-link>
    </div>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const activeIndex = ref(-1);

const any = ref([
  { id: "最近访问", to: "/recent" },
  { id: "全部仓库", to: "/repos" },
  { id: "开源仓库", to: "/open-source" },
]);

function activateCom(index) {
  activeIndex.value = index;
}
</script>

<style scoped></style>
