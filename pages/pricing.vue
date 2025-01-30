<template>
  <div class="py-32 px-4">
    <div class="container mx-auto">
      <!-- Header Section -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Choose Your Perfect Plan
        </h1>
        <p class="text-xl text-gray-300/90 mb-8">
          Select the plan that best fits your needs. Switch or cancel anytime.
        </p>

        <!-- Billing Toggle -->
        <div class="flex items-center justify-center gap-4 mb-12">
          <span :class="{ 'text-blue-400': !isAnnual }">Monthly</span>
          <button
            @click="toggleBilling"
            class="relative w-16 h-8 rounded-full bg-gray-700 transition-colors duration-300"
            :class="{ 'bg-blue-600': isAnnual }"
          >
            <div
              class="absolute w-6 h-6 bg-white rounded-full top-1 transition-transform duration-300"
              :class="isAnnual ? 'left-9' : 'left-1'"
            ></div>
          </button>
          <span :class="{ 'text-blue-400': isAnnual }">
            Annual
            <span class="text-sm text-green-400 ml-1">Save 20%</span>
          </span>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <SharedPricingCard
          v-for="plan in currentPlans"
          :key="plan.name"
          :plan="plan"
          :is-popular="plan.popular"
        />
      </div>

      <!-- Comparison Table -->
      <div
        class="max-w-6xl mx-auto bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm"
      >
        <h2 class="text-2xl font-bold mb-8 text-center">
          Compare All Features
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-700">
                <th class="text-left py-4 px-4">Features</th>
                <th
                  v-for="plan in plans.monthly"
                  :key="plan.name"
                  class="text-center py-4 px-4"
                >
                  {{ plan.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="feature in comparisonFeatures"
                :key="feature.name"
                class="border-b border-gray-700/50"
              >
                <td class="py-4 px-4">{{ feature.name }}</td>
                <td
                  v-for="plan in plans.monthly"
                  :key="`${plan.name}-${feature.name}`"
                  class="text-center py-4 px-4"
                >
                  <Icon
                    v-if="feature.plans.includes(plan.name.toLowerCase())"
                    name="material-symbols:check-circle"
                    class="inline-block w-5 h-5 text-blue-400"
                  />
                  <Icon
                    v-else
                    name="material-symbols:circle"
                    class="inline-block w-5 h-5 text-gray-500"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isAnnual = ref(true);

const plans = {
  monthly: [
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
  ],
  annual: [
    {
      name: 'Basic',
      price: 7.99,
      monthlyPrice: 9.99,
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
      price: 15.99,
      monthlyPrice: 19.99,
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
      price: 23.99,
      monthlyPrice: 29.99,
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
  ],
};

const comparisonFeatures = [
  { name: 'HD Streaming', plans: ['basic', 'prhen emium', 'family'] },
  { name: '4K Ultra HD', plans: ['premium', 'family'] },
  { name: 'Multiple Devices', plans: ['basic', 'premium', 'family'] },
  { name: 'Cloud DVR', plans: ['premium', 'family'] },
  { name: 'Unlimited Cloud DVR', plans: ['family'] },
  { name: 'Live TV', plans: ['basic', 'premium', 'family'] },
  { name: 'Video on Demand', plans: ['premium', 'family'] },
  { name: 'Mobile App Access', plans: ['basic', 'premium', 'family'] },
  { name: 'No Contract Required', plans: ['basic', 'premium', 'family'] },
  { name: 'Priority Support', plans: ['premium', 'family'] },
  { name: '24/7 Premium Support', plans: ['family'] },
  { name: 'Parental Controls', plans: ['premium', 'family'] },
];

const currentPlans = computed(() =>
  isAnnual.value ? plans.annual : plans.monthly
);

const toggleBilling = () => {
  isAnnual.value = !isAnnual.value;
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
