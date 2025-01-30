<template>
  <section class="py-24 px-4 bg-black/40">
    <div class="container mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-blue-400 font-semibold mb-4 block">Testimonials</span>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          What Our Customers Say
        </h2>
        <p class="text-gray-300 text-lg">
          Don't just take our word for it - hear from our satisfied subscribers
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <SharedReviewCard
          v-for="review in reviews"
          :key="review.name"
          :review="review"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Sarah Thompson',
    role: 'Premium Subscriber',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
    text: "The streaming quality is exceptional! I've tried other services, but none come close to the reliability and channel selection offered here.",
  },
  {
    name: 'Michael Chen',
    role: 'Ultimate Plan User',
    avatar: 'https://i.pravatar.cc/150?img=53',
    rating: 5,
    text: 'The multi-device support is fantastic! I can watch on my TV, phone, and tablet without any issues. Customer support is always helpful too.',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Basic Plan User',
    avatar: 'https://i.pravatar.cc/150?img=44',
    rating: 5,
    text: 'Even the basic plan offers amazing value! The channel selection is vast, and the streaming quality is consistently good. Highly recommended!',
  },
];
</script>
