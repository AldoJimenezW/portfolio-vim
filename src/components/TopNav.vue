<template>
  <div class="bg-vim-bg2 border-b border-vim-border px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-1">
      <span class="text-vim-cyan font-bold mr-4">{{ vimStore.currentFile }}</span>
      <span class="text-vim-comment text-sm">[+]</span>
    </div>
    
    <nav class="flex gap-6">
      <router-link 
        to="/"
        class="text-vim-fg hover:text-vim-cyan transition-colors"
        :class="{ 'text-vim-cyan': route.path === '/' }"
      >
        Home
      </router-link>
      <router-link 
        to="/experience"
        class="text-vim-fg hover:text-vim-cyan transition-colors"
        :class="{ 'text-vim-cyan': route.path === '/experience' }"
      >
        Experience
      </router-link>
      <router-link 
        to="/projects"
        class="text-vim-fg hover:text-vim-cyan transition-colors"
        :class="{ 'text-vim-cyan': route.path === '/projects' }"
      >
        Projects
      </router-link>
      <router-link 
        to="/blog"
        class="text-vim-fg hover:text-vim-cyan transition-colors"
        :class="{ 'text-vim-cyan': route.path === '/blog' }"
      >
        Blog
      </router-link>
      <router-link 
        to="/about"
        class="text-vim-fg hover:text-vim-cyan transition-colors"
        :class="{ 'text-vim-cyan': route.path === '/about' }"
      >
        About
      </router-link>
      <router-link 
        to="/contact"
        class="text-vim-fg hover:text-vim-cyan transition-colors"
        :class="{ 'text-vim-cyan': route.path === '/contact' }"
      >
        Contact
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useVimStore } from '../stores/vim'

const route = useRoute()
const vimStore = useVimStore()
</script>
