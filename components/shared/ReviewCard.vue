<template>
  <div
    class="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50"
  >
    <div class="flex items-center mb-6">
      <img
        :src="review.avatar"
        :alt="review.name"
        class="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h4 class="font-semibold">{{ review.name }}</h4>
        <p class="text-sm text-gray-400">{{ review.role }}</p>
      </div>
    </div>
    <div class="flex text-yellow-400 mb-4">
      <Icon
        name="material-symbols:star"
        class="w-5 h-5"
        v-for="i in review.rating"
        :key="i"
      />
    </div>
    <p class="text-gray-300">{{ review.text }}</p>
  </div>
</template>

<script setup>
defineProps({
  review: {
    type: Object,
    required: true,
  },
});
</script>
