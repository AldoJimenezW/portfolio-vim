<template>
  <div class="flex h-full">
    <div class="line-numbers bg-vim-bg2 py-4 px-4 min-w-[60px] text-right">
      <div v-for="n in 100" :key="n" class="text-vim-comment leading-6 select-none">
        {{ n }}
      </div>
    </div>
    <div class="flex-1 overflow-auto p-8">
      <div class="max-w-4xl mx-auto space-y-6">
        <!-- Back Button -->
        <router-link 
          to="/blog"
          class="inline-flex items-center gap-2 text-vim-cyan hover:text-vim-green transition-colors"
        >
          <span>←</span> Back to Blog
        </router-link>

        <div v-if="post">
          <!-- Post Header -->
          <div class="mb-8">
            <h1 class="text-vim-cyan text-3xl font-bold mb-2">{{ post.title }}</h1>
            <div class="flex gap-4 text-vim-comment text-sm">
              <span>{{ post.date }}</span>
              <span>•</span>
              <span>{{ post.readTime }} min read</span>
            </div>
            <div class="flex gap-2 mt-3">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="text-vim-orange text-sm"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Post Content -->
          <div class="prose prose-invert max-w-none">
            <div v-html="post.content" class="text-vim-fg leading-relaxed space-y-4"></div>
          </div>
        </div>

        <div v-else class="text-center text-vim-comment py-12">
          Post not found
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { blogPosts } from '../data/blogPosts'

const route = useRoute()
const post = ref<any>(null)

onMounted(() => {
  const postId = route.params.id as string
  post.value = blogPosts.find(p => p.id === postId)
})
</script>
