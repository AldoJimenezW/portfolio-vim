<template>
  <div class="flex h-full">
    <div class="line-numbers bg-vim-bg2 py-4 px-4 min-w-[60px] text-right">
      <div v-for="n in 60" :key="n" class="text-vim-comment leading-6 select-none">
        {{ n }}
      </div>
    </div>
    <div class="flex-1 overflow-auto p-8">
      <div class="space-y-6">
        <h1 class="text-vim-cyan text-2xl">// Work Experience</h1>
        <p class="text-vim-comment">/* Professional positions and responsibilities */</p>

        <div class="space-y-8 mt-8">
          <div class="border-l-4 border-vim-green pl-6 py-4">
            <div class="flex justify-between items-start flex-wrap gap-2">
              <h3 class="text-vim-green text-xl">Forcast - DobProtocol</h3>
              <span class="bg-vim-green text-vim-bg px-3 py-1 rounded text-sm">Active</span>
            </div>
            <p class="text-vim-orange font-semibold mt-1">Developer</p>
            <p class="text-vim-fg mt-2">
              • Implementation of Smart Contracts for Web3 applications<br/>
              • Full stack development across multiple technology stacks<br/>
              • Building decentralized applications and blockchain solutions
            </p>
            <div class="flex gap-2 mt-3 flex-wrap">
              <span class="text-vim-blue text-sm">Web3</span>
              <span class="text-vim-blue text-sm">Blockchain</span>
              <span class="text-vim-blue text-sm">Smart Contracts</span>
              <span class="text-vim-blue text-sm">Full-Stack</span>
            </div>
            <p class="text-vim-comment text-sm mt-2">Jul 2025 - Present</p>
          </div>

          <div class="border-l-4 border-vim-cyan pl-6 py-4">
            <div class="flex justify-between items-start flex-wrap gap-2">
              <h3 class="text-vim-cyan text-xl">Cloud And Digital</h3>
              <span class="bg-vim-cyan text-vim-bg px-3 py-1 rounded text-sm">Completed</span>
            </div>
            <p class="text-vim-orange font-semibold mt-1">Developer</p>
            <p class="text-vim-fg mt-2">
              • Website maintenance and optimization<br/>
              • Performance improvements and SEO implementation<br/>
              • Platform development and deployment
            </p>
            <div class="flex gap-2 mt-3 flex-wrap">
              <span class="text-vim-blue text-sm">Next.js</span>
              <span class="text-vim-blue text-sm">TypeScript</span>
              <span class="text-vim-blue text-sm">Angular</span>
              <span class="text-vim-blue text-sm">SEO</span>
            </div>
            <p class="text-vim-comment text-sm mt-2">Mar 2024 - Jul 2025</p>
          </div>

          <div class="border-l-4 border-vim-purple pl-6 py-4">
            <div class="flex justify-between items-start flex-wrap gap-2">
              <h3 class="text-vim-purple text-xl">Universidad Adolfo Ibáñez</h3>
              <span class="bg-vim-purple text-vim-bg px-3 py-1 rounded text-sm">Completed</span>
            </div>
            <p class="text-vim-orange font-semibold mt-1">Lab Assistant</p>
            <p class="text-vim-fg mt-2">
              • Server maintenance and administration<br/>
              • Cluster creation and documentation<br/>
              • Internal network implementation and configuration
            </p>
            <div class="flex gap-2 mt-3 flex-wrap">
              <span class="text-vim-blue text-sm">Linux</span>
              <span class="text-vim-blue text-sm">Docker</span>
              <span class="text-vim-blue text-sm">Networks</span>
              <span class="text-vim-blue text-sm">Shell Script</span>
            </div>
            <p class="text-vim-comment text-sm mt-2">Aug 2023 - Dec 2024</p>
          </div>
        </div>

        <div class="mt-12 p-4 bg-vim-selection rounded border border-vim-border">
          <p class="text-vim-comment">" Building scalable solutions in agile environments "</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
