<template>
  <div
    class="min-h-screen bg-gradient-to-b from-zinc-900 to-black px-4 pt-24 pb-8"
  >
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
        Media Library
      </h1>
      <p class="text-zinc-400 text-lg max-w-2xl">
        Explore our curated collection of high-quality content, from blockbuster
        movies to exclusive shows.
      </p>
    </div>

    <!-- Search and Filters -->
    <div class="max-w-7xl mx-auto mb-8 space-y-4">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-grow">
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search by title, actor, or genre..."
            class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
          />
        </div>
        <div class="flex gap-2">
          <select
            v-model="selectedGenre"
            class="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <option value="">All Genres</option>
            <option v-for="genre in uniqueGenres" :key="genre" :value="genre">
              {{ genre }}
            </option>
          </select>
          <select
            v-model="selectedQuality"
            class="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <option value="">All Qualities</option>
            <option
              v-for="quality in qualities"
              :key="quality"
              :value="quality"
            >
              {{ quality }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Media Grid -->
    <div class="max-w-7xl mx-auto">
      <div v-if="filteredMedias.length === 0" class="text-center py-12">
        <p class="text-zinc-400 text-lg">
          No media found matching your criteria.
        </p>
      </div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <MediaCard
          v-for="media in filteredMedias"
          :key="media.id"
          :media="media"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: medias } = await useAsyncData('medias', () =>
  queryCollection('medias').all()
);

const searchQuery = ref('');
const selectedGenre = ref('');
const selectedQuality = ref('');

const qualities = ['4K', '2K', '1080p', '720p', '480p'];

const uniqueGenres = computed(() => {
  const genres = new Set<string>();
  medias.value?.forEach((media) => {
    media.genres?.forEach((genre) => genres.add(genre));
  });
  return Array.from(genres).sort();
});

const filteredMedias = computed(() => {
  if (!medias.value) return [];

  return medias.value.filter((media) => {
    const matchesSearch =
      !searchQuery.value ||
      media.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      media.actors?.some((actor) =>
        actor.toLowerCase().includes(searchQuery.value.toLowerCase())
      ) ||
      media.genres?.some((genre) =>
        genre.toLowerCase().includes(searchQuery.value.toLowerCase())
      );

    const matchesGenre =
      !selectedGenre.value || media.genres?.includes(selectedGenre.value);

    const matchesQuality =
      !selectedQuality.value || media.quality === selectedQuality.value;

    return matchesSearch && matchesGenre && matchesQuality;
  });
});
</script>

<style>
.aspect-video {
  aspect-ratio: 16 / 9;
}
</style>
