<template>
  <div class="bg-gray-800/50 p-8 rounded-xl">
    <h3 class="text-2xl font-bold mb-6">Additional Features</h3>
    <ul class="space-y-4">
      <li
        v-for="feature in additionalFeatures"
        :key="feature.title"
        class="flex items-start"
      >
        <Icon :name="feature.icon" class="w-6 h-6 text-blue-400 mt-1 mr-3" />
        <div>
          <h4 class="font-semibold mb-1">{{ feature.title }}</h4>
          <p class="text-gray-300 text-sm">{{ feature.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const additionalFeatures = [
  {
    icon: 'material-symbols:video-library',
    title: 'Video on Demand',
    description:
      'Access a vast library of movies and TV shows anytime, anywhere.',
  },
  {
    icon: 'material-symbols:tv',
    title: 'Cloud DVR',
    description: 'Record your favorite shows and access them from any device.',
  },
  {
    icon: 'material-symbols:closed-caption',
    title: 'Multi-language Subtitles',
    description: 'Enjoy content with subtitles in multiple languages.',
  },
  {
    icon: 'material-symbols:family-star',
    title: 'Parental Controls',
    description: 'Set content restrictions and create child-friendly profiles.',
  },
];
</script>
