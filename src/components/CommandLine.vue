<template>
  <div
    v-if="vimStore.showCommandLine"
    class="bg-vim-bg2 text-vim-fg px-4 py-1 font-mono text-sm flex items-center"
  >
    <input
      ref="commandInput"
      v-model="vimStore.command"
      @keydown.enter="handleEnter"
      @keydown.esc="handleEscape"
      class="bg-transparent outline-none flex-1"
      autofocus
    />
    <span class="inline-block w-2 h-5 bg-vim-green animate-blink ml-1"></span>
  </div>
  <div v-else class="bg-vim-bg2 text-vim-fg px-4 py-1 font-mono text-sm">
    Press <span class="text-vim-green font-bold">:</span> for commands |
    <span class="text-vim-cyan font-bold">?</span> for help |
    <span class="text-vim-orange font-bold">i</span> for mouse mode
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useVimStore } from '../stores/vim'

const router = useRouter()
const vimStore = useVimStore()
const commandInput = ref<HTMLInputElement | null>(null)

watch(() => vimStore.showCommandLine, async (newVal) => {
  if (newVal) {
    await nextTick()
    commandInput.value?.focus()
  }
})

const handleEnter = () => {
  vimStore.executeCommand(router)
}

const handleEscape = () => {
  vimStore.setMode('NORMAL')
}
</script>
