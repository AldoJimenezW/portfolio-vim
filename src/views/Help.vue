<template>
  <div class="flex h-full">
    <div class="line-numbers bg-vim-bg2 py-4 px-4 min-w-[60px] text-right">
      <div v-for="n in 60" :key="n" class="text-vim-comment leading-6 select-none">
        {{ n }}
      </div>
    </div>
    <div class="flex-1 overflow-auto p-8">
      <div class="space-y-6">
        <h1 class="text-vim-cyan text-2xl">// Help</h1>
        <p class="text-vim-comment">/* Navigation commands and shortcuts */</p>
        
        <div class="mt-8 space-y-8">
          <div>
            <h2 class="text-vim-green text-xl mb-4">Command Mode</h2>
            <div class="space-y-2">
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">:</span>
                <span class="text-vim-fg">Enter command mode</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">:home</span>
                <span class="text-vim-fg">Navigate to home page</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">:projects</span>
                <span class="text-vim-fg">View my projects</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">:blog</span>
                <span class="text-vim-fg">Read my blog posts</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">:about</span>
                <span class="text-vim-fg">Learn more about me</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">:contact</span>
                <span class="text-vim-fg">Get in touch</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">:help</span>
                <span class="text-vim-fg">Show this help page</span>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-vim-green text-xl mb-4">Vim Navigation Keys</h2>
            <div class="space-y-2">
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">h / ←</span>
                <span class="text-vim-fg">Scroll left</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">j / ↓</span>
                <span class="text-vim-fg">Scroll down</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">k / ↑</span>
                <span class="text-vim-fg">Scroll up</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">l / →</span>
                <span class="text-vim-fg">Scroll right</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">g</span>
                <span class="text-vim-fg">Go to top of page</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">G (Shift+g)</span>
                <span class="text-vim-fg">Go to bottom of page</span>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-vim-green text-xl mb-4">Other Keys</h2>
            <div class="space-y-2">
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">Esc</span>
                <span class="text-vim-fg">Exit command mode</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">Enter</span>
                <span class="text-vim-fg">Execute command</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">i</span>
                <span class="text-vim-fg">Toggle mouse mode</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">?</span>
                <span class="text-vim-fg">Open help (this page)</span>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-vim-green text-xl mb-4">Vim Commands (Classic)</h2>
            <div class="space-y-2">
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">:w</span>
                <span class="text-vim-fg">Save (write)</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">:q</span>
                <span class="text-vim-fg">Quit (just kidding, you can't leave!)</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-cyan min-w-[150px]">:wq</span>
                <span class="text-vim-fg">Save and quit</span>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-vim-green text-xl mb-4">Mode Indicator</h2>
            <div class="space-y-2">
              <div class="flex gap-4">
                <span class="bg-vim-blue text-vim-bg px-3 py-1 rounded font-bold">NORMAL</span>
                <span class="text-vim-fg">Default mode for navigation</span>
              </div>
              <div class="flex gap-4">
                <span class="bg-vim-green text-vim-bg px-3 py-1 rounded font-bold">COMMAND</span>
                <span class="text-vim-fg">Active when typing commands</span>
              </div>
            </div>
          </div>

          <div class="mt-12 p-6 bg-vim-selection rounded border border-vim-border">
            <h3 class="text-vim-yellow text-lg mb-3">💡 Pro Tips</h3>
            <ul class="space-y-2 text-vim-fg">
              <li>• Type <span class="text-vim-cyan">:</span> followed by a page name to navigate quickly</li>
              <li>• Use <span class="text-vim-cyan">hjkl</span> keys for Vim-style navigation</li>
              <li>• Press <span class="text-vim-cyan">g</span> to jump to top, <span class="text-vim-cyan">G</span> to jump to bottom</li>
              <li>• Use the mouse mode button (top right) if you prefer clicking</li>
              <li>• All standard navigation also works with the menu at the top</li>
              <li>• Commands are case-insensitive</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
