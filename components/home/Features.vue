<template>
  <section class="py-24 px-4 bg-black/50">
    <div class="container mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <span class="text-blue-400 font-semibold mb-4 block"
          >Premium Features</span
        >
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Why Choose Our IPTV Service?
        </h2>
        <p class="text-gray-300 text-lg">
          Experience entertainment like never before with our cutting-edge IPTV
          platform
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <HomeFeatureCard
          v-for="feature in features"
          :key="feature.title"
          :icon-name="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>

      <div class="grid md:grid-cols-2 gap-8 mt-8">
        <SharedAdditionalFeatures />
        <SharedCompatibility />
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'material-symbols:high-quality',
    title: 'Crystal Clear Quality',
    description:
      'Enjoy stunning visuals with up to 4K resolution streaming. Experience sports, movies, and shows with exceptional clarity and zero buffering.',
  },
  {
    icon: 'material-symbols:devices',
    title: 'Watch Everywhere',
    description:
      'Stream seamlessly across all your devices - Smart TVs, phones, tablets, and more. Perfect sync with our dedicated apps and web player.',
  },
  {
    icon: 'material-symbols:schedule',
    title: 'Premium Support',
    description:
      'Our expert team is available 24/7 to help you. Get instant assistance through live chat, email, or phone support whenever you need it.',
  },
];
</script>
