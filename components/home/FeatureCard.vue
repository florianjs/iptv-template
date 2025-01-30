<template>
  <div
    class="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
  >
    <div
      class="bg-blue-500/10 rounded-xl p-3 w-14 h-14 mb-6 group-hover:scale-110 transition-transform"
    >
      <Icon :name="iconName" class="w-full h-full text-blue-400" />
    </div>
    <h3 class="text-2xl font-semibold mb-4">{{ title }}</h3>
    <p class="text-gray-400 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  iconName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
