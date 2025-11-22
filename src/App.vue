<template>
  <div class="h-screen w-screen flex flex-col overflow-hidden bg-vim-bg text-vim-fg" @keydown="handleKeydown">
    <TopNav />
    <div class="flex-1 overflow-hidden">
      <router-view v-slot="{ Component }">
        <component :is="Component" :key="$route.path" />
      </router-view>
    </div>
    <StatusBar />
    <CommandLine />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import TopNav from './components/TopNav.vue'
import StatusBar from './components/StatusBar.vue'
import CommandLine from './components/CommandLine.vue'
import { useVimStore } from './stores/vim'

const router = useRouter()
const vimStore = useVimStore()

const scrollAmount = 100

const isInputElement = (element: Element | null): boolean => {
  if (!element) return false
  const tagName = element.tagName.toLowerCase()
  return tagName === 'input' || tagName === 'textarea' || element.getAttribute('contenteditable') === 'true'
}

const handleKeydown = (event: KeyboardEvent) => {
  const activeElement = document.activeElement
  const isInInput = isInputElement(activeElement)
  
  if (isInInput && vimStore.mode !== 'COMMAND') {
    return
  }
  
  const scrollContainer = document.querySelector('.overflow-auto') as HTMLElement
  
  if (vimStore.mode === 'NORMAL') {
    switch(event.key) {
      case ':':
        event.preventDefault()
        vimStore.enterCommandMode()
        break
      case '?':
        event.preventDefault()
        router.push('/help')
        break
      case 'i':
        if (!isInInput) {
          event.preventDefault()
          vimStore.toggleMouseMode()
        }
        break
      case 'h':
      case 'ArrowLeft':
        if (!isInInput) {
          event.preventDefault()
          if (scrollContainer) {
            scrollContainer.scrollLeft -= scrollAmount
          }
        }
        break
      case 'j':
      case 'ArrowDown':
        if (!isInInput) {
          event.preventDefault()
          if (scrollContainer) {
            scrollContainer.scrollTop += scrollAmount
          }
        }
        break
      case 'k':
      case 'ArrowUp':
        if (!isInInput) {
          event.preventDefault()
          if (scrollContainer) {
            scrollContainer.scrollTop -= scrollAmount
          }
        }
        break
      case 'l':
      case 'ArrowRight':
        if (!isInInput) {
          event.preventDefault()
          if (scrollContainer) {
            scrollContainer.scrollLeft += scrollAmount
          }
        }
        break
      case 'g':
        if (!isInInput) {
          event.preventDefault()
          if (scrollContainer) {
            scrollContainer.scrollTop = 0
          }
        }
        break
      case 'G':
        if (!isInInput) {
          event.preventDefault()
          if (scrollContainer) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight
          }
        }
        break
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
