<template>
  <div class="home block pt-20">
    <header class="bg-texture bgHeight align-center flex justify-center">
      <div class="py-6">
        <TransitionRoot
          appear
          :show="true"
          enter="transform transition duration-[400ms]"
          enter-from="opacity-0 rotate-[-120deg] scale-50"
          enter-to="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leave-from="opacity-100 rotate-0 scale-100 "
          leave-to="opacity-0 scale-95 "
        >
          <div class="ruan mx-auto max-w-7xl my-5">
            <div class="gradient-container"></div>
            <img src="@/assets/Ruan-Felssner-AI.png" />
          </div>
          <h1 class="pt-3 mx-auto text-center font-kanit font-semi-bold text-5xl text-white text-uppercase">
            Ruan Felssner
          </h1>
          <h2 class="pt-3 mx-auto text-center font-kanit font-regular text-2xl text-white text-uppercase">
            Software Engineer
          </h2>
          <div class="flex justify-center my-5">
            <a
              href="https://www.linkedin.com/in/ruanfelssner/"
              target="_blank"
              class="bg-blue-active hover:bg-gray-800 text-slate-50 hover:text-sky-400 font-kanit font-medium py-2 px-4 border border-gray-400 rounded-full shadow"
            >
              LinkedIn
            </a>
            <a
              href="https://www.github.com/ruanfelssner"
              target="_blank"
              class="ml-3 bg-active hover:bg-gray-800 text-gray-800 hover:text-sky-400 font-kanit font-medium py-2 px-4 border border-gray-400 rounded-full shadow"
            >
              GitHub
            </a>
          </div>
        </TransitionRoot>
      </div>
    </header>
    <div class="border-top bg-gradient min-h-1"></div>
    <main class="bg-black">
      <div class="about bgHeight max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center align-center">
        <div class="block">
          <h1 class="text-center font-kanit font-semi-bold text-4xl mb-5">Sobre mim</h1>
          <div class="about-text text-justify px-8">
            <p>
              Desenvolvedor web com mais de 16 anos de experiência e estudante de Engenharia de Software na PUC PR, com
              conclusão prevista para 2025. Especializado em tecnologias como Vue, Nuxt, React, Next, Typescript, Node,
              Python, C#, e PHP, destaco participação em projetos para grandes organizações, ampla experiência em
              metodologias ágeis e um perfil comunicativo e proativo.
            </p>

            <div class="flex justify-center my-5">
              <RouterLink
                to="/sobre"
                class="text-center bg-active hover:bg-gray-800 text-gray-800 hover:text-sky-400 font-kanit font-medium mx-auto my-4 py-2 px-4 border border-gray-400 rounded-full shadow"
              >
                Saiba mais
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div class="border-top bg-gradient min-h-1"></div>
      <div class="habilities bgHeight max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex align-center justify-center">
        <div class="block">
          <h1 class="text-center font-kanit font-semi-bold text-4xl mb-5">Habilidades</h1>
          <div class="flex flex-wrap list-icons justify-center">
            <div class="icon flex flex-wrap justify-center py-4" v-for="(item, id) of listIcons" :key="'listIcon' + id">
              <FontAwesomeIcon
                :icon="item.prefix ? item.prefix + item.icon : 'fa-brands fa-' + item.icon"
                class="color-blue-active"
                :rotation="item.rotation"
              />
              <span class="w-100 text-center mt-2 font-kanit font-semi-bold">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-top bg-gradient min-h-1"></div>
      <div
        class="projects bgHeight max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex align-center justify-center"
        id="portfolio"
      >
        <div class="block py-8">
          <h1 class="text-center font-kanit font-semi-bold text-4xl mb-5">Projetos</h1>

          <div
            class="flex flex-wrap list-icons justify-center align-center grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            <div
              v-for="(item, id) of listProjects"
              :key="'projetos' + id"
              v-show="id <= showProjects - 1"
              class="mb-3 cursor-pointer hover:opacity-80"
              @click="item.link ? openNewWindow(item.link) : openModal(id)"
            >
              <TransitionRoot
                appear
                :show="true"
                enter="transform transition duration-[400ms]"
                enter-from="opacity-0 rotate-[-120deg] scale-50"
                enter-to="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leave-from="opacity-100 rotate-0 scale-100 "
                leave-to="opacity-0 scale-95 "
              >
                <h1 class="w-100 text-center mt-2 mb-3 font-kanit font-semi-bold text-lg color-blue-active">
                  {{ item.nome }}
                </h1>
                <div class="thumb relative">
                  <img :src="'https://felss.dev/api/img/' + item.img" alt="" class="rounded-md" />

                  <p class="mb-4 flex align-center justify-center absolute inset-x-0 bottom-0">
                    <span class="mx-auto font-kanit bg-active rounded-md px-2 py-1 text-black shadow">{{
                      item.descricao
                    }}</span>
                  </p>
                </div>
              </TransitionRoot>
            </div>
          </div>
          <div class="flex h-10 justify-center align-center">
            <button
              @click="showProjects += 3"
              :disabled="showProjects >= listProjects.length"
              class="disabled:opacity-50 hover:opacity-80"
            >
              <FontAwesomeIcon
                icon="fa-solid fa-circle-plus"
                :class="showProjects >= listProjects.length ? 'color-white' : 'color-blue-active'"
                size="2xl"
              />
            </button>
          </div>
          <vue-easy-lightbox
            escDisabled
            moveDisabled
            :visible="visible"
            :imgs="imgs"
            :index="index"
            @hide="visible = false"
          ></vue-easy-lightbox>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'
import axios from 'axios'
import { ref, onBeforeMount } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
const listIcons = [
  { name: 'Vue/Nuxt', icon: 'vuejs', rotation: '' },
  { name: 'React/Next', icon: 'react' },
  { name: 'React Native', icon: 'mobile-screen', prefix: 'fa-solid fa-' },
  { name: 'Express.js', icon: 'node-js' },
  { name: 'Python', icon: 'python' },
  { name: 'Php', icon: 'php' },
  { name: 'C#', icon: 'contao' },
  { name: 'Mysql', icon: 'database', prefix: 'fa-solid fa-' },
  { name: 'Mongodb', icon: 'database', prefix: 'fa-solid fa-' },
  { name: 'Postgree', icon: 'database', prefix: 'fa-solid fa-' },
  { name: 'Typescript', icon: 'code', prefix: 'fa-solid fa-', rotation: 225 },
  { name: 'Cypress', icon: 'vial-circle-check', prefix: 'fa-solid fa-' },
  { name: 'Jest', icon: 'vial-circle-check', prefix: 'fa-solid fa-' },
  { name: 'Tailwind', icon: 'hotjar', rotation: 225 },
  { name: 'Chakra vue', icon: 'bolt', prefix: 'fa-solid fa-' },
  { name: 'Quasar', icon: 'fan', prefix: 'fa-solid fa-' },
  { name: 'Sass', icon: 'sass' },
  { name: 'Boostrap', icon: 'bootstrap' },
  { name: 'Html 5', icon: 'html5' },
  { name: 'Css 3', icon: 'css3-alt' },
  { name: 'Wordpress', icon: 'wordpress' },
  { name: 'Drupal', icon: 'drupal' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Photoshop', icon: 'image', prefix: 'fa-solid fa-' },
  { name: 'Illustrator', icon: 'image', prefix: 'fa-solid fa-' },
  { name: 'Jira', icon: 'jira' },
  { name: 'Github', icon: 'github' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Aws', icon: 'aws' },
  { name: 'Azure', icon: 'microsoft' },
  { name: 'Google Auth', icon: 'google' },
  { name: 'Google Play', icon: 'google-play' },
  { name: 'Google Maps Api', icon: 'map-location-dot', prefix: 'fa-solid fa-' },
  { name: 'Linux', icon: 'terminal', prefix: 'fa-solid fa-' },
  { name: 'Npm', icon: 'npm' },
  { name: 'Yarn', icon: 'yarn' },
  { name: 'Git', icon: 'git' },
  { name: 'Bitbucket', icon: 'bitbucket' },
]

const showProjects = ref(6)
type Project = {
  nome: string
  link: string
  img: string
  empresa: string
  id: string
  descricao: string
  data: string
}
const listProjects = ref<Project[]>([])

const openNewWindow = (link: string) => {
  window.open(link, '_blank')
}

const visible = ref(false)
const imgs = ref([])
const index = ref(0)
const openModal = (id: number) => {
  index.value = id
  visible.value = true
}

onBeforeMount(async () => {
  const { data } = await axios.get('https://felss.dev/api/index.php?acao=portfolio')
  listProjects.value = data
  imgs.value = data.map((item: Project) => {
    return {
      src: 'https://felss.dev/api/img/' + item.img,
      caption: item.nome,
    }
  })
})
</script>
<style lang="scss" scoped>
@keyframes morph {
  from {
    background-position:
      0% 0%,
      0% 50%;
    transform: rotate(0deg);
  }

  to {
    background-position:
      100% 0%,
      0% 100%;
    transform: rotate(360deg);
  }
}

@keyframes rain {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 150% 150%;
  }
}
.bgHeight {
  min-height: calc(100vh - 85px);
}
.ruan {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  overflow: hidden;
  padding: 5px;

  .gradient-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      var(--color-blue-active) 00%,
      var(--color-active) 50%,
      var(--color-blue-active) 100%
    );
    background-origin: border-box;
    transition: 0.6s;
    animation: morph 35s infinite;
    z-index: 1;
  }
  img {
    z-index: 2;
    background: #000;
    position: relative;
    border-radius: 100%;
    margin-top: -2px;
    height: 293px;
    width: 295px;
  }
}
.bg-texture {
  background: #000 url('@/assets/slide.jpg');
  animation: rain 23s linear infinite;
}
.list-icons {
  .svg-inline--fa {
    font-size: 2rem !important;
  }
  span {
    font-size: 0.6rem;
  }
}
.projects {
  .thumb {
    img {
      width: 100%;
      height: 100%;
      max-height: 250px;
      object-fit: cover;
    }
  }
}
</style>
