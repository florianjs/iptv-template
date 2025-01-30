<template>
  <section
    class="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex flex-col justify-center items-center"
  >
    <div class="absolute inset-0 z-0">
      <MovieBackground />
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black z-10"
    ></div>
    <div class="container mx-auto text-center relative z-20">
      <span class="text-white font-semibold mb-4 block animate-fade-in"
        >Welcome to Premium IPTV</span
      >
      <h1
        class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text animate-fade-in-up"
      >
        Stream Your Favorite Channels Anywhere
      </h1>
      <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
        Access thousands of live TV channels, movies, and shows on any device,
        anytime. Start watching in minutes.
      </p>
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <NuxtLink
          to="/medias/dune"
          class="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          <Icon name="material-symbols:play-circle" class="w-6 h-6 mr-2" />
          Watch Now
          <span
            class="inline-block ml-2 group-hover:translate-x-1 transition-transform"
            >→</span
          >
        </NuxtLink>
        <NuxtLink
          to="/medias"
          class="group bg-black/20 backdrop-blur-lg border border-white/20 hover:border-white/40 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          View Library
          <span
            class="inline-block ml-2 group-hover:translate-x-1 transition-transform"
            >→</span
          >
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
