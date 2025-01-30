<template>
  <div class="min-h-screen bg-black flex flex-col">
    <PlayerNavbar />
    <main class="flex-1 flex items-center justify-center p-4 overflow-hidden">
      <slot />
    </main>
  </div>
</template>
