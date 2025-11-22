export interface BlogPost {
  id: string
  title: string
  date: string
  readTime: number
  excerpt: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'vim-style-portfolio',
    title: 'Building My Vim-Style Portfolio',
    date: '2025-11-21',
    readTime: 5,
    excerpt: 'How I built a unique portfolio inspired by Vim/Neovim aesthetics using modern web technologies.',
    tags: ['Vue', 'TypeScript', 'Web Development', 'Portfolio'],
    content: `
      <h2 class="text-vim-green text-2xl mb-4">Introduction</h2>
      <p>When I set out to create my portfolio, I wanted something that would reflect my passion for terminal-based workflows and my love for Vim. This portfolio is the result of that vision—a web-based experience that mimics the look and feel of a Neovim editor.</p>

      <h2 class="text-vim-green text-2xl mb-4 mt-8">The Concept</h2>
      <p>As a developer who spends most of the day in the terminal, I wanted my portfolio to feel like home. The idea was simple: create a portfolio that looks and behaves like a code editor, specifically inspired by Neovim with the Catppuccin theme.</p>
      
      <p class="mt-4">Key design decisions included:</p>
      <ul class="list-disc list-inside mt-2 space-y-2 text-vim-fg">
        <li>Line numbers on the left side of each page</li>
        <li>Vim-style navigation with hjkl keys</li>
        <li>Command mode activated with ':' key</li>
        <li>Status bar showing current mode and file information</li>
        <li>Dark color scheme inspired by Catppuccin theme</li>
      </ul>

      <h2 class="text-vim-green text-2xl mb-4 mt-8">Technology Stack</h2>
      
      <h3 class="text-vim-cyan text-xl mb-3 mt-6">Frontend Framework: Vue 3</h3>
      <p>I chose Vue 3 with the Composition API for its simplicity and reactivity system. The framework's flexibility allowed me to create a smooth, interactive experience without unnecessary complexity.</p>

      <h3 class="text-vim-cyan text-xl mb-3 mt-6">TypeScript</h3>
      <p>TypeScript was essential for maintaining code quality and catching errors early. The type safety it provides made refactoring and adding new features much more confident and less error-prone.</p>

      <h3 class="text-vim-cyan text-xl mb-3 mt-6">State Management: Pinia</h3>
      <p>Pinia handles the application state, managing things like the current Vim mode (NORMAL/COMMAND), command history, and navigation state. Its lightweight nature and excellent TypeScript support made it the perfect choice.</p>

      <h3 class="text-vim-cyan text-xl mb-3 mt-6">Routing: Vue Router</h3>
      <p>Vue Router powers the navigation between different sections. It seamlessly integrates with both the Vim commands (like :projects) and traditional navigation.</p>

      <h3 class="text-vim-cyan text-xl mb-3 mt-6">Styling: Tailwind CSS</h3>
      <p>Tailwind CSS allowed me to quickly prototype and iterate on the design. I created a custom color palette inspired by the Catppuccin theme, with colors for the background, foreground, and accent colors that give the portfolio its distinctive look.</p>

      <h3 class="text-vim-cyan text-xl mb-3 mt-6">Build Tool: Vite</h3>
      <p>Vite provides lightning-fast hot module replacement during development and optimized production builds. The development experience is incredibly smooth.</p>

      <h2 class="text-vim-green text-2xl mb-4 mt-8">Key Features</h2>

      <h3 class="text-vim-cyan text-xl mb-3 mt-6">Vim Keybindings</h3>
      <p>The portfolio responds to standard Vim navigation keys:</p>
      <ul class="list-disc list-inside mt-2 space-y-2 text-vim-fg">
        <li><span class="text-vim-cyan">h/j/k/l</span> - Navigate left/down/up/right</li>
        <li><span class="text-vim-cyan">g</span> - Jump to top</li>
        <li><span class="text-vim-cyan">G</span> - Jump to bottom</li>
        <li><span class="text-vim-cyan">:</span> - Enter command mode</li>
        <li><span class="text-vim-cyan">i</span> - Toggle mouse mode</li>
      </ul>

      <h3 class="text-vim-cyan text-xl mb-3 mt-6">Command System</h3>
      <p>Just like in Vim, you can type commands to navigate. Press ':' to enter command mode, then type commands like:</p>
      <ul class="list-disc list-inside mt-2 space-y-2 text-vim-fg">
        <li><span class="text-vim-cyan">:home</span> - Go to home page</li>
        <li><span class="text-vim-cyan">:projects</span> - View projects</li>
        <li><span class="text-vim-cyan">:experience</span> - View work experience</li>
        <li><span class="text-vim-cyan">:contact</span> - Contact page</li>
      </ul>

      <h3 class="text-vim-cyan text-xl mb-3 mt-6">Dual Navigation</h3>
      <p>For those who prefer traditional navigation, there's a top navigation bar and a mouse mode toggle. This ensures the portfolio is accessible to everyone, not just Vim enthusiasts.</p>

      <h2 class="text-vim-green text-2xl mb-4 mt-8">Technical Challenges</h2>

      <h3 class="text-vim-cyan text-xl mb-3 mt-6">Keyboard Event Handling</h3>
      <p>Implementing Vim-style navigation required careful keyboard event handling. I had to ensure that key presses only triggered navigation when not in an input field or command mode.</p>

      <h3 class="text-vim-cyan text-xl mb-3 mt-6">Scroll Management</h3>
      <p>Getting smooth scrolling with keyboard navigation took some iteration. The final solution uses a combination of scrollTop/scrollLeft manipulation and smooth CSS transitions.</p>

      <h3 class="text-vim-cyan text-xl mb-3 mt-6">Responsive Design</h3>
      <p>Making a terminal-inspired design responsive was interesting. The line numbers, command bar, and status bar all needed to adapt gracefully to different screen sizes.</p>

      <h2 class="text-vim-green text-2xl mb-4 mt-8">Performance Optimizations</h2>
      <p>To ensure the portfolio loads quickly and runs smoothly:</p>
      <ul class="list-disc list-inside mt-2 space-y-2 text-vim-fg">
        <li>Lazy loading for route components</li>
        <li>Optimized font loading with Google Fonts</li>
        <li>Minimal JavaScript bundle size</li>
        <li>CSS optimizations with Tailwind's purge feature</li>
      </ul>

      <h2 class="text-vim-green text-2xl mb-4 mt-8">Future Enhancements</h2>
      <p>I have several ideas for future improvements:</p>
      <ul class="list-disc list-inside mt-2 space-y-2 text-vim-fg">
        <li>More Vim commands and motions (w, b, e for word navigation)</li>
        <li>Visual mode for selecting text</li>
        <li>Tab system for switching between sections</li>
        <li>Theme switcher for different color schemes</li>
        <li>Search functionality with '/' like in Vim</li>
      </ul>

      <h2 class="text-vim-green text-2xl mb-4 mt-8">Conclusion</h2>
      <p>Building this portfolio was an excellent exercise in combining my passion for Vim with modern web development. It showcases not just my projects and skills, but also my approach to creating unique, user-centric experiences.</p>
      
      <p class="mt-4">The source code is available on my GitHub, and I'm always open to feedback and contributions. If you're a fellow Vim enthusiast or just curious about the implementation, feel free to reach out!</p>

      <div class="mt-8 p-4 bg-vim-selection rounded border border-vim-border">
        <p class="text-vim-comment italic">" Thank you for reading! Type :contact to get in touch or check out my other projects. "</p>
      </div>
    `
  }
]
