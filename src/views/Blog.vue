<template>
  <div class="flex h-full">
    <div class="line-numbers bg-vim-bg2 py-4 px-4 min-w-[60px] text-right">
      <div v-for="n in 50" :key="n" class="text-vim-comment leading-6 select-none">
        {{ n }}
      </div>
    </div>
    <div class="flex-1 overflow-auto p-8">
      <div class="space-y-6">
        <h1 class="text-vim-cyan text-2xl">// Blog</h1>
        <p class="text-vim-comment">/* Thoughts and learnings from my development journey */</p>
        
        <div class="space-y-8 mt-8">
          <router-link 
            v-for="(post, index) in posts" 
            :key="post.id"
            :to="`/blog/${post.id}`"
            class="block border border-vim-border p-6 rounded hover:border-vim-cyan transition-colors cursor-pointer group"
          >
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-vim-fg text-xl group-hover:text-vim-cyan transition-colors">
                [{{ index + 1 }}] {{ post.title }}
              </h3>
              <span class="text-vim-comment text-sm">{{ post.date }}</span>
            </div>
            <p class="text-vim-fg mb-3">{{ post.excerpt }}</p>
            <div class="flex justify-between items-center">
              <div class="flex gap-2">
                <span 
                  v-for="tag in post.tags" 
                  :key="tag"
                  class="text-vim-orange text-sm"
                >
                  #{{ tag }}
                </span>
              </div>
              <span class="text-vim-cyan text-sm group-hover:text-vim-green transition-colors">
                Read more →
              </span>
            </div>
          </router-link>
        </div>

        <div class="mt-12 p-4 bg-vim-selection rounded border border-vim-border">
          <p class="text-vim-comment">" More posts coming soon! Stay tuned for updates on web development, Linux, and technology. "</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { blogPosts } from '../data/blogPosts'

const posts = blogPosts
</script>
