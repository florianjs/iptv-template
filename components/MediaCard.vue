<template>
  <NuxtLink
    :to="`/medias/${media.slug}`"
    class="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
  >
    <!-- Thumbnail with overlay -->
    <div class="aspect-[9/16] w-full overflow-hidden relative">
      <img
        :src="media.mediaThumbnail"
        :alt="media.title"
        class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <!-- Hover overlay with gradient -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>

      <!-- Play button overlay -->
      <div
        class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
      >
        <div
          class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
        >
          <div
            class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Quality badge -->
      <div class="absolute top-3 right-3">
        <span
          v-if="media.quality"
          class="px-2 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded backdrop-blur-sm"
        >
          {{ media.quality }}
        </span>
      </div>

      <!-- Duration badge -->
      <div class="absolute bottom-3 right-3">
        <span
          class="px-2 py-1 text-xs font-medium bg-black/50 text-white rounded backdrop-blur-sm"
        >
          {{ media.duration }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-4">
      <div class="flex items-start justify-between mb-2">
        <h2
          class="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300"
        >
          {{ media.title }}
        </h2>
        <span
          v-if="media.ageRating"
          class="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded ml-2 flex-shrink-0"
        >
          {{ media.ageRating }}
        </span>
      </div>

      <!-- Genres -->
      <div class="flex flex-wrap gap-2 mt-2">
        <span
          v-for="genre in media.genres"
          :key="genre"
          class="px-2 py-0.5 text-xs bg-white/10 text-white/70 rounded-full transition-colors duration-300 hover:bg-white/20 hover:text-white"
        >
          {{ genre }}
        </span>
      </div>

      <!-- Description preview -->
      <p
        v-if="media.description"
        class="mt-3 text-sm text-zinc-400 line-clamp-2 group-hover:text-zinc-300 transition-colors duration-300"
      >
        {{ media.description }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Media {
  slug: string;
  title: string;
  mediaThumbnail: string;
  quality?: string;
  duration: string;
  ageRating?: string;
  genres?: string[];
  description?: string;
}

defineProps<{
  media: Media;
}>();
</script>

<style scoped>
.aspect-video {
  aspect-ratio: 16 / 9;
}
</style>
