<template>
  <nav class="w-full z-50 h-16 transition-all duration-300 backdrop-blur-md">
    <div
      class="max-w-[1400px] mx-auto px-8 h-full flex items-center justify-between md:px-4"
    >
      <NuxtLink
        to="/"
        class="text-2xl font-bold tracking-wide drop-shadow-lg no-underline duration-1000"
        :class="[!playerStore.isPlaying ? 'text-white' : 'text-white/20']"
      >
        IPTV
      </NuxtLink>
      <div class="flex gap-4 items-center">
        <button
          @click="goBack"
          class="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 backdrop-blur-md md:px-2"
          :class="[
            !playerStore.isPlaying
              ? 'text-white bg-white/10'
              : 'text-white/20 bg-white/5',
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-[18px] h-[18px]"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span class="md:hidden">Back</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~/stores/player';

const router = useRouter();
const isScrolled = ref(false);
const playerStore = usePlayerStore();

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const goBack = () => {
  router.back();
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
