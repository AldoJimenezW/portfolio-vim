<template>
  <div class="flex items-center justify-between bg-vim-blue text-vim-bg font-bold px-4 py-1 text-sm">
    <div class="flex items-center gap-4">
      <span class="px-2 py-0.5 bg-vim-bg text-vim-blue rounded">
        {{ vimStore.mode }}
      </span>
      <span>{{ vimStore.currentFile }}</span>
      <span v-if="vimStore.statusMessage" class="text-vim-bg/80">
        {{ vimStore.statusMessage }}
      </span>
    </div>
    <div class="flex items-center gap-4">
      <button
        @click="vimStore.toggleMouseMode"
        class="px-2 py-0.5 bg-vim-bg text-vim-blue rounded hover:bg-vim-bg2 transition-colors"
        title="Toggle mouse mode"
      >
        {{ vimStore.mouseMode ? '🖱️ Mouse' : '⌨️ Vim' }}
      </button>
      <span>{{ currentRoute }}</span>
      <span>{{ lineInfo }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useVimStore } from '../stores/vim'

const route = useRoute()
const vimStore = useVimStore()

const currentRoute = computed(() => route.path)
const lineInfo = computed(() => '1,1')
</script>
