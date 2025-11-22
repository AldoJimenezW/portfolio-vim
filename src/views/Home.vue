<template>
  <div class="flex h-full">
    <div class="line-numbers bg-vim-bg2 py-4 px-4 min-w-[60px] text-right">
      <div v-for="n in 50" :key="n" class="text-vim-comment leading-6 select-none">
        {{ n }}
      </div>
    </div>
    <div class="flex-1 overflow-auto p-8">
      <div class="text-center space-y-8 max-w-4xl mx-auto">
        <pre class="text-vim-cyan text-xl md:text-2xl font-bold leading-tight select-none">
 ____   ___  ____ _____ _____ ___  _     ___ ___
|  _ \ / _ \|  _ \_   _|  ___/ _ \| |   |_ _/ _ \
| |_) | | | | |_) || | | |_ | | | | |    | | | | |
|  __/| |_| |  _ < | | |  _|| |_| | |___ | | |_| |
|_|    \___/|_| \_\|_| |_|   \___/|_____|___\___/
        </pre>

        <h1 class="text-vim-green text-3xl font-bold">Aldo Jimenez Wiehoff</h1>

        <p class="text-vim-orange text-xl">~ Computer Engineer | Full Stack Developer ~</p>

        <div class="text-vim-fg text-left max-w-3xl mx-auto leading-relaxed mt-8 p-6 bg-vim-selection rounded border border-vim-border">
          <p class="mt-4">
            My goal is to consolidate myself as a Software Developer in agile environments, contributing with
            best practices in architecture, code quality, and a problem-solving oriented mindset.
          </p>
        </div>

        <div class="space-y-3 text-vim-fg mt-8 text-sm">
          <p>type <span class="text-vim-green font-bold">:help</span> for information</p>
          <p>type <span class="text-vim-blue font-bold">:experience</span> to see my work experience</p>
          <p>type <span class="text-vim-cyan font-bold">:projects</span> to see my projects</p>
          <p>type <span class="text-vim-purple font-bold">:blog</span> to read my thoughts</p>
          <p>type <span class="text-vim-yellow font-bold">:about</span> to learn more about me</p>
          <p>type <span class="text-vim-orange font-bold">:contact</span> to get in touch</p>
        </div>

        <div class="mt-12">
          <p class="text-vim-comment text-sm">Press <span class="text-vim-green font-bold">:</span> to enter command mode</p>
          <p class="text-vim-comment text-sm">Use <span class="text-vim-cyan font-bold">hjkl</span> or arrow keys to navigate</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
