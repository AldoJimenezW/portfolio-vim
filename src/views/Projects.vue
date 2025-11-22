<template>
  <div class="flex h-full">
    <div class="line-numbers bg-vim-bg2 py-4 px-4 min-w-[60px] text-right">
      <div v-for="n in 80" :key="n" class="text-vim-comment leading-6 select-none">
        {{ n }}
      </div>
    </div>
    <div class="flex-1 overflow-auto p-8">
      <div class="space-y-6">
        <h1 class="text-vim-cyan text-2xl">// Projects</h1>
        <p class="text-vim-comment">/* Personal projects and contributions */</p>
        
        <div class="space-y-8 mt-8">
          <!-- HyprLogo -->
          <div class="border-l-4 border-vim-green pl-6 py-4">
            <div class="flex justify-between items-start flex-wrap gap-2">
              <h3 class="text-vim-green text-xl">HyprLogo</h3>
              <span class="bg-vim-green text-vim-bg px-3 py-1 rounded text-sm">Open Source</span>
            </div>
            <p class="text-vim-fg mt-2">
              Fix for NetLogo 6.2.1 to run on modern Linux desktops using Wayland compositors (particularly Hyprland). 
              Solves black screen rendering issues and improves performance through properly configured environment variables.
            </p>
            <p class="text-vim-fg mt-2">
              • Easy installation across major Linux distributions<br/>
              • Fixes Java application rendering issues in Wayland<br/>
              • Proper desktop integration with application launcher<br/>
              • Educational environment ready
            </p>
            <div class="flex gap-2 mt-3 flex-wrap">
              <span class="text-vim-blue text-sm">Linux</span>
              <span class="text-vim-blue text-sm">Wayland</span>
              <span class="text-vim-blue text-sm">Hyprland</span>
              <span class="text-vim-blue text-sm">Shell Script</span>
              <span class="text-vim-blue text-sm">Java</span>
            </div>
            <div class="flex gap-4 mt-3">
              <a href="https://github.com/AldoJimenezW/HyprLogo" 
                 target="_blank"
                 class="text-vim-cyan hover:text-vim-green transition-colors text-sm">
                → View on GitHub
              </a>
            </div>
          </div>

          <!-- Kubernetes Cluster Guide -->
          <div class="border-l-4 border-vim-cyan pl-6 py-4">
            <div class="flex justify-between items-start flex-wrap gap-2">
              <h3 class="text-vim-cyan text-xl">Kubernetes Cluster Guide</h3>
              <span class="bg-vim-cyan text-vim-bg px-3 py-1 rounded text-sm">Documentation</span>
            </div>
            <p class="text-vim-fg mt-2">
              Comprehensive guide and automation scripts for setting up a Kubernetes cluster for educational purposes 
              at Universidad Adolfo Ibáñez. Includes detailed instructions, configuration files, and deployment examples.
            </p>
            <p class="text-vim-fg mt-2">
              • Automated cluster setup with custom scripts<br/>
              • Network configuration and static IP management<br/>
              • Master and worker node orchestration<br/>
              • Complete deployment examples (NGINX, services, scaling)
            </p>
            <div class="flex gap-2 mt-3 flex-wrap">
              <span class="text-vim-blue text-sm">Kubernetes</span>
              <span class="text-vim-blue text-sm">Docker</span>
              <span class="text-vim-blue text-sm">Linux</span>
              <span class="text-vim-blue text-sm">DevOps</span>
              <span class="text-vim-blue text-sm">Container Orchestration</span>
            </div>
            <div class="flex gap-4 mt-3">
              <a href="https://github.com/AldoJimenezW/cluster-kubernetes-guide" 
                 target="_blank"
                 class="text-vim-cyan hover:text-vim-green transition-colors text-sm">
                → View on GitHub
              </a>
            </div>
          </div>

          <!-- CONAF Photo Monitoring Platform -->
          <div class="border-l-4 border-vim-purple pl-6 py-4">
            <div class="flex justify-between items-start flex-wrap gap-2">
              <h3 class="text-vim-purple text-xl">CONAF Photo Monitoring Platform</h3>
              <span class="bg-vim-purple text-vim-bg px-3 py-1 rounded text-sm">University Project</span>
            </div>
            <p class="text-vim-fg mt-2">
              Web platform developed for CONAF (National Forestry Corporation of Chile) to manage and monitor 
              wildlife through photo capture systems. Enables efficient data collection, storage, and analysis 
              of forest biodiversity.
            </p>
            <p class="text-vim-fg mt-2">
              • Real-time photo monitoring system<br/>
              • Data management and storage infrastructure<br/>
              • Image analysis and classification tools<br/>
              • Collaborative platform for researchers
            </p>
            <div class="flex gap-2 mt-3 flex-wrap">
              <span class="text-vim-blue text-sm">Full Stack</span>
              <span class="text-vim-blue text-sm">Database Management</span>
              <span class="text-vim-blue text-sm">Image Processing</span>
              <span class="text-vim-blue text-sm">Web Development</span>
            </div>
            <p class="text-vim-comment text-sm mt-3">
              <span class="text-vim-yellow">🔒</span> Private Repository - University Project
            </p>
          </div>

          <!-- Adopets -->
          <div class="border-l-4 border-vim-yellow pl-6 py-4">
            <div class="flex justify-between items-start flex-wrap gap-2">
              <h3 class="text-vim-yellow text-xl">Adopets</h3>
              <span class="bg-vim-yellow text-vim-bg px-3 py-1 rounded text-sm">Web Application</span>
            </div>
            <p class="text-vim-fg mt-2">
              Matching platform that connects pets in need of adoption with potential adopters. 
              Uses intelligent algorithms to match animals with compatible humans based on lifestyle, 
              preferences, and pet characteristics.
            </p>
            <p class="text-vim-fg mt-2">
              • Smart matching algorithm between pets and adopters<br/>
              • User profiles and pet profiles management<br/>
              • Real-time messaging and notifications<br/>
              • Adoption process tracking and management
            </p>
            <div class="flex gap-2 mt-3 flex-wrap">
              <span class="text-vim-blue text-sm">Full Stack</span>
              <span class="text-vim-blue text-sm">Matching Algorithm</span>
              <span class="text-vim-blue text-sm">Real-time Features</span>
              <span class="text-vim-blue text-sm">User Experience</span>
            </div>
            <p class="text-vim-comment text-sm mt-3">
              <span class="text-vim-yellow">🔒</span> Private Repository
            </p>
          </div>
        </div>

        <div class="mt-12 p-4 bg-vim-selection rounded border border-vim-border">
          <p class="text-vim-comment">" More projects on GitHub: github.com/AldoJimenezW | Always building and learning "</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
