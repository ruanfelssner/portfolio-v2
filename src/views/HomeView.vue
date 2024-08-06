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
                to="/about"
                class="text-center bg-active hover:bg-gray-800 text-gray-800 hover:text-sky-400 font-kanit font-medium mx-auto my-4 py-2 px-4 border border-gray-400 rounded-full shadow"
              >
                Saiba mais
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div class="border-top bg-gradient min-h-1"></div>
      <div class="habilities bgHeight max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex align-center justify-center">
        <div class="block">
          <h1 class="text-center font-kanit font-semi-bold text-4xl mb-12">Habilidades</h1>
          <div class="grid grid-cols-4 md:grid-cols-8 gap-4 list-icons justify-center">
            <div
              class="icon flex flex-wrap justify-center bg-gray-800 pt-4 hover:bg-gray-700"
              v-for="(item, id) of listIcons"
              :key="'listIcon' + id"
            >
              <FontAwesomeIcon
                :icon="item.prefix ? item.prefix + item.icon : 'fa-brands fa-' + item.icon"
                class="color-blue-active"
                :rotation="item.rotation"
              />
              <span class="w-100 text-center mt-2 font-kanit font-semi-bold mb-4">{{ item.name }}</span>
              <div class="border-bottom w-100 bg-gradient min-h-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-top bg-gradient min-h-1"></div>
      <ProjectPortfolio />

      <div class="border-top bg-gradient min-h-1"></div>
      <div class="experience bgHeight max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex align-center justify-center">
        <div class="block">
          <h1 class="text-center font-kanit font-semi-bold text-4xl mb-12">Experiência</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 list-icons justify-center mb-16">
            <div
              class="icon flex flex-wrap justify-center align-start bg-gray-800 pt-4 hover:bg-gray-700 cursor-pointer relative"
              v-for="(item, id) of listExperience"
              :key="'listIcon' + id"
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
                <div class="p-6 grid grid-rows-1 gap-0">
                  <p class="font-kanit font-semi-bold text-lg">{{ item.ano }}</p>
                  <h2 class="font-kanit font-semi-bold text-2xl mb-6">{{ item.cargo }} - {{ item.empresa }}</h2>
                  <p>{{ item.descricao }}</p>
                </div>
                <div class="border-bottom w-100 bg-gradient min-h-1 max-h-1 absolute bottom-0"></div>
              </TransitionRoot>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'

const listExperience = [
  {
    cargo: 'Engenheiro de Software Sênior',
    empresa: 'Muvz - Omint Saúde',
    ano: '2022 - 2024',
    descricao:
      'Trabalhei nos projetos da Omint Saúde desenvolvendo o redesign dos aplicativos principais de associados, Kipp Saude, App Prestadores da Omint, Desenvolvimento de Frontend e seus padrões.',
    posicao: 'right',
    icon: 'devicon-devicon-plain',
  },
  {
    cargo: 'Tech Lead Sênior',
    empresa: 'Auzza Capital',
    ano: '2022 - 2023',
    descricao:
      'Atuando na gestão de equipe de tecnologia, desenvolvimento de produto, regras de negócios e programando em Node.js (Backend) + Mysql e Mongodb + Nuxt.js e Next.js',
    posicao: 'left',
    icon: 'devicon-devicon-plain',
  },
  {
    cargo: 'Engenheiro de Software Sênior',
    empresa: 'Franq Open Bank',
    ano: '2021 - 2022',
    descricao:
      'Trabalho focado no desenvolvimento de frontend ux ui dos produtos de Home Equity, Crédito Imobiliario, Consórcio PJ',
    posicao: 'right',
    icon: 'devicon-devicon-plain',
  },
  {
    cargo: 'Fullstack Sênior',
    empresa: 'AMA - Agentes do Meio Ambiente',
    ano: '2019 - 2021',
    descricao:
      'Apoiando a todos os setores no desenvolvimento dos produtos de software, desde o desenvolvimento de ferramentas para o mapeamento de microáreas, infraestrutura devops, requisitos de software e com o foco maior no desenvolvimento web de front e back end.',
    posicao: 'left',
    icon: 'devicon-devicon-plain',
  },
  {
    cargo: 'Fullstack Sênior',
    empresa: 'Agência Candy',
    ano: '2013 - 2021',
    descricao:
      'Trabalhando com a parte Administrativa na gestão e com o desenvolvimento desde as partes gráficas como Photoshop, Illustrator, Premiere vetores logos cartões de visitas etc, como parte de front end, estruturação Bootstrap, UX UI, Wordpress, e parte de Programação em PHP, Ajax, Jquery, em sistemas personalizados aplicações de facebook, wireframes, integrações de sistemas e etc.Google analytics, Google Ads, Face Ads, Google Webmaster entre outras aplicações de divulgação e indexação.',
    posicao: 'right',
    icon: 'devicon-devicon-plain',
  },
  {
    cargo: 'Front End Pleno',
    empresa: 'Grupo Negócios Públicos',
    ano: '2019',
    descricao:
      'Trabalhei no desenvolvimento web de seus produtos como ERP, Sollicita, Contract Vision, Compliance GOV, durante todo o período utilizei Sass, Razor do C#.net, participei de todo desenvolvimento do zero de alguns produtos como o Sollicita, Contract Vision, Compliance Criei alguns layouts e marcas do Contract Vision/Compliance, neste trabalho mesmo que o período pequeno as amizades continuam, equipe super enturmada, criamos um um bom vinculo mesmo após a saída.',
    posicao: 'left',
    icon: 'devicon-devicon-plain',
  },
  {
    cargo: 'Fullstack Pleno',
    empresa: 'Sites 10',
    ano: '2014-2015',
    descricao:
      "Exportação de Layouts em psd's para html/css/js e programação dos mesmos em php/mysql, paineis administrativos e gerenciaveis/ criação de ecommerce/ e etc.",
    posicao: 'right',
    icon: 'devicon-devicon-plain',
  },
  {
    cargo: 'Front End Pleno',
    empresa: 'Magic Web Design',
    ano: '2013-2014',
    descricao:
      'Trabalho de atualizações de sites, portais, sistemas. Front end para sites de novos clientes, PSD, Html, Css, Jquery, clientes de grande porte tais como itau, sadia, yamaha etc.',
    posicao: 'left',
    icon: 'devicon-devicon-plain',
  },
  // {
  //   cargo: 'Auxiliar de Recursos Humanos',
  //   empresa: 'Vaccinar',
  //   ano: '2011-2013',
  //   descricao:
  //     'Como aprendiz trabalhei auxiliando todos os setores de RH, recrutamento e seleção, departamento pessoal e segurança no trabalho.',
  //   posicao: 'right',
  //   icon: '',
  // },
]
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
.icon {
  .border-bottom {
    transition: all 0.5s ease-out;
    background: var(--color-active);
  }
  &:hover {
    .border-bottom {
      background: var(--color-blue-active);
    }
  }
}
</style>
