<template>
  <div>
    <el-container>
      <el-aside
        style="width: 60px"
        class="h-[90vw] border-r-[0.1vw] border-solid border-gray-300"
      >
        <div v-for="(com, index) in data" :key="index" class="text-center">
          <router-link :to="com.to" @click="activateCom(index)">
            <div
              :class="{ active: activeIndex === index }"
              :style="
                activeIndex === index
                  ? { transform: 'scale(0.8)', backgroundColor: '#d3eafd' }
                  : {}
              "
              class="rounded-lg"
            >
              <img :src="com.img" alt="" class="w-[1.8vw] ml-[1.5vw]" />
              <div class="text-[1vw] mb-[0.7vw]">
                {{ com.attrs }}
              </div>
            </div>
          </router-link>
        </div>
      </el-aside>
      <el-container>
        <el-header
          class="border-b-[0.1vw] border-solid border-gray-300 leading-[5vw] text-[25px]"
        >
          {{ currentCom }}
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentCom = ref(null);
const activeIndex = ref(-1);

const data = ref([
  { attrs: "工作台", img: "../../src/images/workbench.png", to: "/work" },
  { attrs: "项目", img: "../../src/images/project.png", to: "/project" },
  { attrs: "AI", img: "../../src/images/ai.png", to: "/ai" },
  { attrs: "事项", img: "../../src/images/note.png", to: "/note" },
  { attrs: "代码", img: "../../src/images/code.png", to: "/code" },
  { attrs: "制品", img: "../../src/images/box.png", to: "/box" },
  { attrs: "洞察", img: "../../src/images/think.png", to: "/think" },
  { attrs: "知识", img: "../../src/images/book.png", to: "/book" },
  { attrs: "自动化", img: "../../src/images/auto.png", to: "/auto" },
]);

router.afterEach((to) => {
  const path = to.path;
  data.value.forEach((com, index) => {
    if (com.to === path) {
      currentCom.value = com.attrs;
      activeIndex.value = index;
    }
  });
});

function activateCom(index) {
  activeIndex.value = index;
}
</script>

<style scoped>
.active {
  background-color: #60b7ff;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
img {
  transition: transform 0.3s ease;
}
</style>
