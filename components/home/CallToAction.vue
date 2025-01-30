<template>
  <section class="py-24 px-4 relative overflow-hidden">
    <!-- Background blur effect -->
    <div class="absolute inset-0"></div>

    <div class="container mx-auto text-center relative">
      <div
        class="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40 p-14 rounded-lg backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500"
      >
        <!-- Animated heading -->
        <h2
          class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
        >
          Ready to Start Streaming?
        </h2>

        <p class="text-xl text-gray-300/90 mb-10 max-w-2xl mx-auto">
          Join thousands of satisfied customers and elevate your streaming
          experience today.
        </p>

        <!-- Enhanced CTA button -->
        <button
          class="group relative px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 animate-gradient"
        >
          <span class="relative z-10">Get Started Now</span>
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"
          ></div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s linear infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
