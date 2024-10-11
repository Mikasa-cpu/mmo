<template>
  <div>
    <a-carousel autoplay class="w-[35vw]">
      <div>
        <img
          src="../../images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
          alt=""
          class="w-[35vw]"
        />
      </div>
      <div>
        <img
          src="../../images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png"
          alt=""
          class="w-[35vw]"
        />
      </div>
      <div>
        <img
          src="../../images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png"
          alt=""
          class="w-[35vw]"
        />
      </div>
    </a-carousel>
    <div class="fixed top-[13.5vw] right-[25vw]">
      <h1 class="mb-[4vw] ml-[4vw]">登录，即刻创建你的应用</h1>
      <a-space direction="vertical">
        <a-input
          v-model:value="value"
          autofocus
          placeholder="账号"
          class="w-[25vw] mb-[0.8vw] text-xs/3"
        />
        <a-input-password
          v-model:value.lazy="value1"
          placeholder="密码"
          class="text-xs/5"
        />
      </a-space>
    </div>
    <a-checkbox
      v-model:checked="checked"
      class="fixed top-[27vw] right-[33vw] text-[10px] leading-4"
      >我已阅读并同意<a class="text-blue-600">服务协议</a>和<a
        class="text-blue-600"
        >隐私政策</a
      ></a-checkbox
    >
    <a-button
      type="primary"
      class="fixed top-[30vw] right-[25vw] w-[25vw] h-[3vw]"
      @click="goToUser"
      >登录</a-button
    >
    <span class="fixed top-[33vw] right-[34vw] text-[8px]"
      >还未注册？<a href="" class="text-blue-600">立即注册</a></span
    >
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goToUser() {
  router.push("/user");
}

const value = ref("1760609957@163.com");
const value1 = ref("153153135");

watch(value, () => {
  console.log(value.value);
});
watch(value1, () => {
  console.log(value1.value);
});
const checked = ref(false);
</script>

<style scoped>
:deep(.slick-slide) {
  height: 100%;
  line-height: 160px;
  overflow: hidden;
}
</style>
