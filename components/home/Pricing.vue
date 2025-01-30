<template>
  <section class="py-20 relative">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Choose the perfect plan for your entertainment needs. All plans
          include full access to our features.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="relative bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
          :class="{ 'md:scale-105 border-blue-500/50': plan.popular }"
        >
          <div
            class="absolute -top-4 left-1/2 -translate-x-1/2"
            v-if="plan.popular"
          >
            <span class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm"
              >Most Popular</span
            >
          </div>

          <h3 class="text-2xl font-bold mb-2">{{ plan.name }}</h3>
          <div class="flex items-baseline mb-6">
            <span class="text-4xl font-bold">${{ plan.price }}</span>
            <span class="text-gray-400 ml-2">/month</span>
          </div>

          <ul class="space-y-4 mb-8">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-center"
            >
              <Icon
                name="material-symbols:check-circle"
                class="text-blue-400 mr-2 w-5 h-5"
              />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <button
            class="w-full py-3 rounded-lg font-semibold transition-all duration-300"
            :class="
              plan.popular
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-gray-700 hover:bg-gray-600'
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    name: 'Basic',
    price: 9.99,
    features: [
      'HD Streaming',
      '2 Devices',
      '1000+ Channels',
      '7 Days Replay',
      'Basic Support',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: 19.99,
    features: [
      '4K Ultra HD Streaming',
      '4 Devices',
      '2000+ Channels',
      '14 Days Replay',
      'Priority Support',
      'Cloud DVR',
    ],
    popular: true,
  },
  {
    name: 'Family',
    price: 29.99,
    features: [
      '4K Ultra HD Streaming',
      '6 Devices',
      '3000+ Channels',
      '30 Days Replay',
      '24/7 Premium Support',
      'Unlimited Cloud DVR',
    ],
    popular: false,
  },
];
</script>

<style scoped>
.container {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
