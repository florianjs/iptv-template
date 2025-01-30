<template>
  <nav class="w-full fixed bg-transparent z-50 backdrop-blur-sm">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo section avec animation -->
        <div class="flex items-center">
          <NuxtLink
            to="/"
            class="text-2xl font-bold text-white flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
          >
            <Icon name="material-symbols:tv" class="inline-block" />
            <p class="text-2xl font-bold text-white">LOGO</p>
          </NuxtLink>
        </div>

        <!-- Mobile menu button avec animation -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-white hover:text-blue-400 transition-colors duration-300"
          >
            <Icon
              :name="isOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="w-6 h-6"
            />
          </button>
        </div>

        <!-- Desktop menu avec nouveaux styles -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="(link, index) in navLinks"
            :key="index"
            :to="link.to"
            class="relative text-white hover:text-blue-400 transition-colors duration-300 group"
          >
            {{ link.text }}
            <span
              class="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            ></span>
          </NuxtLink>

          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="relative text-white hover:text-green-400 transition-colors duration-300 group flex items-center space-x-2"
          >
            <Icon name="logos:whatsapp-icon" class="w-5 h-5" />
            <span>Chat with Us</span>
          </a>

          <NuxtLink
            to="/medias/dune"
            class="relative overflow-hidden bg-blue-600 px-6 py-2 rounded-lg group"
          >
            <span
              class="absolute inset-0 bg-blue-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            ></span>
            <span class="relative flex items-center gap-2">
              <Icon name="material-symbols:play-circle" class="w-5 h-5" />
              Watch Now
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile menu avec animation -->
      <div
        :class="
          isOpen
            ? 'translate-y-0 opacity-100 h-auto'
            : '-translate-y-4 opacity-0 h-2'
        "
        class="md:hidden pb-4 transform transition-all duration-300"
      >
        <div class="flex flex-col space-y-4">
          <NuxtLink
            v-for="(link, index) in navLinks"
            :key="index"
            :to="link.to"
            class="text-white hover:text-blue-400 transition-colors duration-300"
          >
            {{ link.text }}
          </NuxtLink>

          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-green-400 transition-colors duration-300 flex items-center space-x-2"
          >
            <Icon name="logos:whatsapp-icon" class="w-5 h-5" />
            <span>Chat with Us</span>
          </a>

          <button
            class="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Icon name="material-symbols:play-circle" class="w-5 h-5" />
            Watch Now
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false);

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/medias', text: 'Library' },
  { to: '/pricing', text: 'Pricing' },
];

const whatsappLink = 'https://wa.me/1234567890'; // Replace with your WhatsApp number
</script>
