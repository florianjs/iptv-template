<template>
  <footer
    class="bg-gradient-to-b from-zinc-900 to-black border-t border-white/5"
  >
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <!-- Brand section -->
        <div class="space-y-8">
          <div class="flex items-center space-x-3">
            <div class="relative w-8 h-8">
              <div
                class="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 animate-pulse"
              ></div>
              <div
                class="absolute inset-0.5 rounded-lg bg-zinc-900 flex items-center justify-center"
              >
                <span class="text-white font-bold">TV</span>
              </div>
            </div>
            <span
              class="text-xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
            >
              IPTV Stream
            </span>
          </div>
          <p class="text-sm leading-6 text-zinc-300">
            Experience the future of streaming with our cutting-edge platform.
            Bringing you the best content with stunning quality.
          </p>
          <div class="flex space-x-6">
            <a
              href="#"
              class="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              <span class="sr-only">Discord</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation sections -->
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">
                Navigation
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <NuxtLink
                    to="/"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Home
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/medias"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Movies
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/categories"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Categories
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/search"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Search
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">
                Categories
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Drama
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Sci-Fi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Comedy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">
                Support
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm leading-6 text-zinc-300 hover:text-white transition-colors"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <div
          class="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <p class="text-xs leading-5 text-zinc-400">
            &copy; {{ new Date().getFullYear() }} IPTV Stream. All rights
            reserved. Built with ❤️ using Nuxt 3.
          </p>
          <div class="flex items-center space-x-4">
            <NuxtLink
              external
              to="https://github.com/florianjs/iptv-template"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center space-x-2 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <svg
                class="h-4 w-4 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Star on GitHub</span>
            </NuxtLink>
            <NuxtLink
              external
              to="https://twitter.com/share?url=https://your-domain.com&text=Check out this awesome IPTV streaming platform!"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center space-x-2 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <svg
                class="h-4 w-4 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
              <span>Share on Twitter</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
