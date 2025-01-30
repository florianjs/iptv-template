<template>
  <div class="w-full max-w-[1400px] relative">
    <!-- Animated background glow -->
    <div
      class="absolute inset-0 mx-auto -inset-x-24 h-full w-full transition-opacity duration-700"
      :class="[playerStore.isPlaying ? 'opacity-0' : 'opacity-100']"
    >
      <div
        class="absolute inset-0 w-full h-full bg-cover bg-center blur-[100px] mix-blend-screen background-pulse"
        style="
          background-size: 200% 200%, 200% 200%, cover;
          background-position: center;
        "
        :style="{
          background: `url(${currentMedia?.mediaThumbnail}),
            radial-gradient(
              circle at 30% 50%,
              rgba(255, 122, 89, 0.6),
              transparent 50%
            ),
            radial-gradient(
              circle at 70% 50%,
              rgba(78, 168, 222, 0.6),
              transparent 50%
            )`,
        }"
      ></div>
    </div>

    <!-- Player container -->
    <div
      class="relative z-10 backdrop-blur-sm rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col ring-1 ring-white/10 transition-all duration-700"
      :class="[playerStore.isPlaying ? 'bg-black' : 'bg-black/80']"
    >
      <div class="relative bg-black">
        <video
          ref="videoPlayer"
          class="w-full aspect-video"
          playsinline
          controls
          crossorigin="anonymous"
        >
          <source
            :src="currentMedia?.mediaUrl"
            :type="currentMedia?.mediaType"
          />
        </video>
      </div>

      <div
        class="transition-colors duration-300"
        :class="[playerStore.isPlaying ? 'bg-black' : 'bg-black/60']"
      >
        <div
          class="p-6 overflow-y-auto flex-shrink duration-700"
          :class="[playerStore.isPlaying ? 'text-white/30' : 'text-white']"
        >
          <div class="flex justify-between items-start mb-4">
            <h1 class="text-2xl font-bold leading-tight">
              {{ currentMedia?.title }}
            </h1>
            <div class="flex gap-2 mt-1">
              <span
                class="inline-flex items-center duration-700 px-2 py-1 text-xs bg-white/10 backdrop-blur-md rounded text-emerald-500"
                :class="[playerStore.isPlaying ? 'opacity-30' : 'opacity-100']"
              >
                {{ currentMedia?.quality }}
              </span>
              <span
                class="inline-flex items-center duration-700 px-2 py-1 text-xs bg-white/10 backdrop-blur-md rounded text-white"
                :class="[playerStore.isPlaying ? 'opacity-30' : 'opacity-100']"
              >
                {{ currentMedia?.duration }}
              </span>
              <span
                class="inline-flex items-center duration-700 px-2 py-1 text-xs bg-white/10 backdrop-blur-md rounded text-blue-500"
                :class="[playerStore.isPlaying ? 'opacity-30' : 'opacity-100']"
              >
                {{ currentMedia?.ageRating }}
              </span>
            </div>
          </div>

          <p
            class="text-sm text-zinc-400 duration-700 mb-4 max-w-3xl leading-relaxed"
            :class="[playerStore.isPlaying ? 'opacity-30' : 'opacity-100']"
          >
            {{ currentMedia?.description }}
          </p>

          <div
            class="flex flex-wrap duration-700 gap-2"
            :class="[playerStore.isPlaying ? 'opacity-30' : 'opacity-100']"
          >
            <span
              v-if="currentMedia?.year"
              class="px-3 py-1 rounded-full bg-white/5 text-zinc-200 text-xs transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
            >
              {{ currentMedia?.year }}
            </span>
            <span
              v-for="actor in currentMedia?.actors"
              class="px-3 py-1 rounded-full bg-white/5 text-zinc-200 text-xs transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
            >
              {{ actor }}
            </span>
            <span
              v-for="genre in currentMedia?.genres"
              class="px-3 py-1 rounded-full bg-white/5 text-zinc-200 text-xs transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
            >
              {{ genre }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const route = useRoute();

const { data: currentMedia, error } = await useAsyncData(
  `media-${route.params.slug}`,
  () => queryCollection('medias').where('slug', '=', route.params.slug).first()
);

if (error.value) {
  throw createError({
    statusCode: 404,
    message: 'Media not found',
  });
}

definePageMeta({
  layout: 'player',
});

const playerStore = usePlayerStore();
const videoPlayer = ref<HTMLVideoElement | null>(null);
let player: Plyr;

onMounted(() => {
  if (videoPlayer.value) {
    player = new Plyr(videoPlayer.value, {
      controls: [
        'play-large',
        'rewind',
        'play',
        'fast-forward',
        'progress',
        'current-time',
        'duration',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'fullscreen',
      ],
      settings: ['captions', 'quality', 'speed'],
      quality: {
        default: 1080,
        options: [2160, 1440, 1080, 720, 480],
      },
      keyboard: { focused: true, global: true },
      tooltips: { controls: true, seek: true },
      speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] },
    });

    player.on('play', () => {
      playerStore.setPlaying(true);
    });

    player.on('pause', () => {
      playerStore.setPlaying(false);
    });
  }
});
</script>

<style scoped>
.background-pulse {
  position: absolute;

  animation: pulse 30s ease-in-out infinite;
}

@media (max-width: 768px) {
  .background-pulse {
    width: 200%;
    animation: pulse 60s ease-in-out infinite;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.8;
    transform: scale(1.1) translate(-1%, -1%);
    background-position: 0% 50%, 100% 50%, center;
  }
  50% {
    opacity: 1;
    transform: scale(1.2) translate(-2%, -2%);
    background-position: 100% 50%, 0% 50%, center;
  }
}

.bg-gradient-radial {
  background-image: radial-gradient(
    circle at center,
    var(--tw-gradient-from) 0%,
    var(--tw-gradient-via) 45%,
    var(--tw-gradient-to) 100%
  );
}

/* Plyr customization */
.plyr--video .plyr__control--overlaid {
  @apply bg-white/20 p-5 border-2 border-white/80 transition-colors duration-200 !transform-none;
}

.plyr--video .plyr__control--overlaid:hover {
  @apply bg-white/30;
}

.plyr__control {
  @apply transition-colors duration-200 !transform-none;
}

.plyr__control:hover {
  @apply bg-white/10;
}

.plyr--video {
  @apply rounded-none;
}

.plyr__menu__container {
  @apply bg-black/90 backdrop-blur-md;
}

@screen md {
  .plyr--video .plyr__controls {
    @apply px-4 py-2;
  }
}
</style>
