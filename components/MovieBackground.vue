<template>
  <div class="movie-background absolute inset-0 overflow-hidden z-10 h-screen">
    <div
      class="overlay absolute backdrop-blur-sm inset-0 bg-black/60 z-10"
    ></div>
    <div class="grid-container">
      <div
        v-for="row in 4"
        :key="row"
        class="flex animate-slide"
        :style="{ animationDuration: `${20 + row * 5}s` }"
      >
        <div v-for="movie in movies" :key="movie.id" class="movie-poster">
          <template v-if="movie.poster_path && movie.poster_path !== 'N/A'">
            <img
              :src="movie.poster_path"
              :alt="movie.title"
              class="w-[150px] h-[225px] object-cover rounded-lg opacity-70"
              @error="handleImageError"
              crossorigin="anonymous"
            />
          </template>
          <div
            :class="[
              'w-[150px] h-[225px] bg-gray-800 rounded-lg opacity-50',
              'flex items-center justify-center text-center p-2',
              { hidden: movie.poster_path && movie.poster_path !== 'N/A' },
            ]"
          >
            {{ movie.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const config = useRuntimeConfig();
const movies = ref([]);
const movieTitles = [
  'inception',
  'matrix',
  'avatar',
  'interstellar',
  'oppenheimer',
  'barbie',
  'dune',
  'avengers',
  'top-gun-maverick',
  'everything-everywhere-all-at-once',
  'the-batman',
  'spider-man-no-way-home',
  'black-panther',
  'parasite',
  'joker',
  'mad-max-fury-road',
  'arrival',
  'get-out',
  'blade-runner-2049',
  'a-quiet-place',
  'the-godfather',
  'pulp-fiction',
  'gladiator',
  'the-dark-knight',
  'jurassic-park',
  'titanic',
  'forrest-gump',
  'the-shawshank-redemption',
  'fight-club',
  'goodfellas',
  'the-silence-of-the-lambs',
  'saving-private-ryan',
  'the-lord-of-the-rings',
  'star-wars-empire-strikes-back',
  'jaws',
  'back-to-the-future',
  'raiders-of-the-lost-ark',
  'alien',
  'terminator-2',
  'the-lion-king',
  'poor-things',
  'killers-of-the-flower-moon',
  'napoleon',
  'guardians-of-the-galaxy-vol-3',
  'mission-impossible-dead-reckoning',
  'john-wick-chapter-4',
  'creed-iii',
  'blue-beetle',
  'the-flash',
  'ant-man-and-the-wasp-quantumania',
  'cocaine-bear',
  'wonka',
  'saltburn',
  'the-whale',
  'tar',
  'the-banshees-of-inisherin',
  'the-fabelmans',
  'nope',
  'the-northman',
];

onMounted(async () => {
  try {
    // Try to get cached movies first
    const cachedMovies = localStorage.getItem('backgroundMovies');
    if (cachedMovies) {
      movies.value = JSON.parse(cachedMovies);
      return;
    }

    const API_KEY = config.public.omdbApiKey;
    const fetchMovies = movieTitles.map((title) =>
      fetch(
        `https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}&plot=short`
      ).then(async (res) => {
        const data = await res.json();
        return data;
      })
    );

    const results = await Promise.all(fetchMovies);
    movies.value = results
      .filter((movie) => movie.Response !== 'False')
      .map((movie) => {
        let poster = movie.Poster;
        if (poster && poster !== 'N/A') {
          poster = poster.replace('._V1_SX300.jpg', '._V1_SX500.jpg');
        }
        return {
          id: movie.imdbID,
          title: movie.Title,
          poster_path: poster && poster !== 'N/A' ? poster : null,
        };
      });

    // Save to localStorage
    localStorage.setItem('backgroundMovies', JSON.stringify(movies.value));

    console.log(
      'Final processed movies with posters:',
      movies.value.map((m) => ({
        title: m.title,
        poster: m.poster_path,
      }))
    );
  } catch (error) {
    console.error('Error fetching movies:', error);
    movies.value = [];
  }
});

const handleImageError = (event) => {
  console.log('Image failed to load:', event.target.src);
  const imgElement = event.target;
  if (imgElement.src.includes('SX500')) {
    imgElement.src = imgElement.src.replace('SX500', 'SX300');
  } else if (imgElement.src.includes('SX300')) {
    imgElement.style.display = 'none';
    const fallbackElement = imgElement.nextElementSibling;
    if (fallbackElement) {
      fallbackElement.style.display = 'flex';
    }
  }
};
</script>

<style scoped>
.movie-background {
  perspective: 1000px;
}

.grid-container {
  transform: rotateX(20deg);
  transform-origin: center top;
}

.animate-slide {
  display: flex;
  animation: slideLeft linear infinite;
  gap: 1rem;
  padding: 1rem;
}

.animate-slide:nth-child(2) {
  animation-direction: reverse;
}

@keyframes slideLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.movie-poster {
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.movie-poster:hover {
  transform: scale(1.05);
  opacity: 0.8;
}
</style>
