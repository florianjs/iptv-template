<template>
  <div
    :class="[
      'relative p-8 rounded-2xl backdrop-blur-lg transition-all duration-300 flex flex-col',
      isPopular
        ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/50 hover:border-blue-400'
        : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50',
    ]"
  >
    <div
      v-if="isPopular"
      class="absolute -top-4 left-1/2 transform -translate-x-1/2"
    >
      <span class="bg-blue-500 text-sm px-3 py-1 rounded-full font-semibold"
        >Most Popular</span
      >
    </div>
    <div>
      <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
      <div class="text-3xl font-bold mb-6">
        ${{ plan.price }}
        <span class="text-lg text-gray-400 font-normal">/month</span>
      </div>
      <ul class="space-y-4 mb-8">
        <li
          v-for="(feature, index) in plan.features"
          :key="index"
          class="flex items-center"
        >
          <Icon
            name="material-symbols:check-circle-outline"
            class="w-5 h-5 text-blue-400 mr-2"
          />
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
    <div class="mt-auto">
      <button
        :class="[
          'w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300',
          isPopular
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-blue-600/20 hover:bg-blue-600 border border-blue-500',
        ]"
      >
        Get Started
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  plan: {
    type: Object,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
});
</script>
