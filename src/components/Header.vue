<template>
  <Disclosure as="nav" class="bg-black fixed w-100 z-10" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-12 logo"
              src="@/assets/logo.png"
              alt="Felss Dev"
              href="javascript:void(0)"
              @click="pushRoute('/')"
            />
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              href="javascript:void(0)"
              @click="pushRoute(item.href)"
              :class="[
                currentRoute.path === item.href
                  ? 'bg-active text-black'
                  : 'text-gray-300 hover:bg-black hover:text-white',
                'rounded-md px-3 py-2 text-sm font-bold',
              ]"
              :aria-current="currentRoute.path === item.href ? 'page' : undefined"
              >{{ item.name }}</a
            >
          </div>
        </div>
        <div class="flex md:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Abrir menu</span>
            <Bars3Icon v-if="!open" class="color-active block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="color-active block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden bg-black">
      <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          href="javascript:void(0)"
          @click="pushRoute(item.href)"
          :class="[
            currentRoute.path === item.href
              ? 'bg-active text-black'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md mx-6 py-5 text-base font-bold text-center',
          ]"
          :aria-current="currentRoute.path === item.href ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRoute, useRouter } from 'vue-router'
const currentRoute = useRoute()
const router = useRouter()
const navigation = [
  { name: 'Principal', href: '/' },
  { name: 'Sobre', href: '/about' },
  { name: 'Projetos', href: '/projects' },
  { name: 'Hobbies', href: '/hobbies' },
  { name: 'Contato', href: '/contact' },
]

const pushRoute = (route: string) => {
  router.push({ path: route })
}
</script>

<style scoped>
.logo {
  margin-bottom: -13px;
}
</style>
