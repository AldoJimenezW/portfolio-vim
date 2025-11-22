<template>
  <div class="flex h-full">
    <div class="line-numbers bg-vim-bg2 py-4 px-4 min-w-[60px] text-right">
      <div v-for="n in 50" :key="n" class="text-vim-comment leading-6 select-none">
        {{ n }}
      </div>
    </div>
    <div class="flex-1 overflow-auto p-8">
      <div class="space-y-6 max-w-4xl">
        <h1 class="text-vim-cyan text-2xl">// Contact</h1>
        <p class="text-vim-comment">/* Let's connect and build something great */</p>
        
        <div class="grid md:grid-cols-2 gap-8 mt-8">
          <div class="space-y-6">
            <div class="border-l-4 border-vim-purple pl-6">
              <h2 class="text-vim-purple text-xl mb-4">Get in Touch</h2>
              <p class="text-vim-fg mb-6">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project idea, need technical consultation, or just want to connect, 
                feel free to reach out!
              </p>
            </div>

            <div class="space-y-4">
              <h3 class="text-vim-cyan text-lg mb-3">Connect With Me</h3>
              
              <a href="mailto:aldo@jimenezwiehoff.lat" 
                 class="flex items-center gap-3 text-vim-blue hover:text-vim-cyan transition-colors">
                <span class="text-vim-green">→</span> aldo@jimenezwiehoff.lat
              </a>
              
              <a href="https://github.com/AldoJimenezW" 
                 target="_blank"
                 class="flex items-center gap-3 text-vim-blue hover:text-vim-cyan transition-colors">
                <span class="text-vim-green">→</span> GitHub: AldoJimenezW
              </a>
              
              <a href="https://www.linkedin.com/in/aldo-jimenez-wiehoff/" 
                 target="_blank"
                 class="flex items-center gap-3 text-vim-blue hover:text-vim-cyan transition-colors">
                <span class="text-vim-green">→</span> LinkedIn: aldo-jimenez-wiehoff
              </a>

              <div class="flex items-center gap-3 text-vim-fg">
                <span class="text-vim-green">→</span> Location: Chile
              </div>
            </div>
          </div>

          <div class="border border-vim-border rounded p-6 bg-vim-bg2">
            <h3 class="text-vim-cyan text-lg mb-4">Send a Message</h3>
            <form @submit.prevent="sendMessage" class="space-y-4">
              <div>
                <label class="text-vim-comment text-sm mb-1 block">const name =</label>
                <input 
                  type="text" 
                  v-model="form.name"
                  placeholder="Your name"
                  required
                  :disabled="isSubmitting"
                  class="w-full bg-vim-bg border border-vim-border rounded px-3 py-2 text-vim-fg focus:outline-none focus:border-vim-cyan disabled:opacity-50"
                />
              </div>

              <div>
                <label class="text-vim-comment text-sm mb-1 block">const email =</label>
                <input 
                  type="email"
                  v-model="form.email"
                  placeholder="your.email@example.com"
                  required
                  :disabled="isSubmitting"
                  class="w-full bg-vim-bg border border-vim-border rounded px-3 py-2 text-vim-fg focus:outline-none focus:border-vim-cyan disabled:opacity-50"
                />
              </div>

              <div>
                <label class="text-vim-comment text-sm mb-1 block">const message =</label>
                <textarea 
                  v-model="form.message"
                  placeholder="Your message here..."
                  rows="5"
                  required
                  :disabled="isSubmitting"
                  class="w-full bg-vim-bg border border-vim-border rounded px-3 py-2 text-vim-fg focus:outline-none focus:border-vim-cyan resize-none disabled:opacity-50"
                ></textarea>
              </div>

              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-vim-blue hover:bg-vim-cyan text-vim-bg font-bold py-2 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Sending...' : 'send_message()' }}
              </button>

              <p v-if="statusMsg" :class="statusMsgClass" class="text-sm text-center">
                {{ statusMsg }}
              </p>
            </form>
          </div>
        </div>

        <div class="mt-12 p-4 bg-vim-selection rounded border border-vim-border">
          <p class="text-vim-comment">" Available for freelance projects and full-time opportunities "</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Form {
  name: string
  email: string
  message: string
}

const form = ref<Form>({
  name: '',
  email: '',
  message: ''
})

const statusMsg = ref<string>('')
const isSubmitting = ref<boolean>(false)
const isSuccess = ref<boolean>(false)

const statusMsgClass = computed(() => {
  return isSuccess.value ? 'text-vim-green' : 'text-vim-red'
})

const sendMessage = async () => {
  isSubmitting.value = true
  statusMsg.value = ''

  try {
    const response = await fetch('https://formspree.io/f/xqajerll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      })
    })

    if (response.ok) {
      isSuccess.value = true
      statusMsg.value = '✓ Message sent successfully! I\'ll get back to you soon.'
      form.value = { name: '', email: '', message: '' }
      
      setTimeout(() => {
        statusMsg.value = ''
      }, 5000)
    } else {
      isSuccess.value = false
      statusMsg.value = '✗ Failed to send message. Please try again or email me directly.'
    }
  } catch (error) {
    isSuccess.value = false
    statusMsg.value = '✗ Network error. Please check your connection and try again.'
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
