<template>
  <div class="bg-gray-800/50 p-8 rounded-xl">
    <h3 class="text-2xl font-bold mb-6">Compatible Devices</h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
      <div
        v-for="device in devices"
        :key="device.name"
        class="flex flex-col items-center text-center group"
      >
        <div
          class="bg-gray-700/50 p-4 rounded-lg mb-3 group-hover:bg-blue-500/20 transition-colors duration-300"
        >
          <Icon :name="device.icon" class="w-8 h-8 text-blue-400" />
        </div>
        <h4 class="font-medium text-sm">{{ device.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
const devices = [
  {
    icon: 'material-symbols:tv',
    name: 'Smart TV',
  },
  {
    icon: 'material-symbols:smartphone',
    name: 'Smartphone',
  },
  {
    icon: 'material-symbols:tablet',
    name: 'Tablet',
  },
  {
    icon: 'material-symbols:computer',
    name: 'Computer',
  },
  {
    icon: 'material-symbols:gamepad',
    name: 'Gaming Console',
  },
  {
    icon: 'material-symbols:cast',
    name: 'Streaming Device',
  },
];
</script>
