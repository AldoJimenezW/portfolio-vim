import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Router } from 'vue-router'

interface Files {
  [key: string]: string
}

interface Routes {
  [key: string]: string
}

export const useVimStore = defineStore('vim', () => {
  const mode = ref<'NORMAL' | 'INSERT' | 'COMMAND'>('NORMAL')
  const command = ref<string>('')
  const currentFile = ref<string>('home.md')
  const showCommandLine = ref<boolean>(false)
  const mouseMode = ref<boolean>(false)
  const statusMessage = ref<string>('')

  const files = ref<Files>({
    'home.md': 'home',
    'projects.md': 'projects',
    'blog.txt': 'blog',
    'about.txt': 'about',
    'contact.txt': 'contact'
  })

  const routes: Routes = {
    home: '/',
    experience: '/experience',
    projects: '/projects',
    blog: '/blog',
    about: '/about',
    contact: '/contact',
    help: '/help'
  }

  const setMode = (newMode: 'NORMAL' | 'INSERT' | 'COMMAND'): void => {
    mode.value = newMode
    if (newMode !== 'COMMAND') {
      showCommandLine.value = false
      command.value = ''
    }
  }

  const enterCommandMode = (): void => {
    mode.value = 'COMMAND'
    showCommandLine.value = true
    command.value = ':'
  }

  const executeCommand = (router: Router): void => {
    const cmd = command.value.replace(':', '').trim()

    if (routes[cmd]) {
      router.push(routes[cmd])
      statusMessage.value = `Navegando a ${cmd}`
    } else if (cmd === 'q' || cmd === 'quit') {
      statusMessage.value = 'No se puede salir del portafolio ;)'
    } else if (cmd === 'w' || cmd === 'write') {
      statusMessage.value = 'Guardado exitoso'
    } else {
      statusMessage.value = `Comando no reconocido: ${cmd}`
    }

    setMode('NORMAL')
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
  }

  const toggleMouseMode = (): void => {
    mouseMode.value = !mouseMode.value
  }

  return {
    mode,
    command,
    currentFile,
    showCommandLine,
    mouseMode,
    statusMessage,
    files,
    routes,
    setMode,
    enterCommandMode,
    executeCommand,
    toggleMouseMode
  }
})
