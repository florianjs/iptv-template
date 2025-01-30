<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
    <NavBar />
    <main>
      <slot />
    </main>
    <footer class="py-6 text-center text-gray-400">
      <p>© {{ new Date().getFullYear() }} IPTV Service. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup></script>
