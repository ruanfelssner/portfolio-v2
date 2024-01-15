<template>
  <div class="projects bgHeight max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex align-center justify-center" id="portfolio">
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
      <div class="flex h-10 justify-center align-center my-6">
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
</template>
<script setup lang="ts">
import axios from 'axios'
import { ref, onBeforeMount } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import { TransitionRoot } from '@headlessui/vue'

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
