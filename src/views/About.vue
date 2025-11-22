<template>
  <div class="flex h-full">
    <div class="line-numbers bg-vim-bg2 py-4 px-4 min-w-[60px] text-right">
      <div v-for="n in 50" :key="n" class="text-vim-comment leading-6 select-none">
        {{ n }}
      </div>
    </div>
    <div class="flex-1 overflow-auto p-8">
      <div class="space-y-6">
        <h1 class="text-vim-cyan text-2xl">// About Me</h1>
        <p class="text-vim-comment">/* Computer Engineer passionate about technology */</p>

        <div class="mt-8 space-y-6">
          <div class="border-l-4 border-vim-purple pl-6">
            <pre class="text-vim-fg text-sm"><span class="text-vim-purple">const</span> <span class="text-vim-cyan">developer</span> = {
  <span class="text-vim-red">name</span>: <span class="text-vim-yellow">"Aldo Jimenez Wiehoff"</span>,
  <span class="text-vim-red">role</span>: <span class="text-vim-yellow">"Computer Engineer | Full Stack Developer"</span>,
  <span class="text-vim-red">location</span>: <span class="text-vim-yellow">"Chile"</span>,
  <span class="text-vim-red">experience</span>: <span class="text-vim-yellow">"2+ years"</span>,
  <span class="text-vim-red">education</span>: <span class="text-vim-yellow">"Computer Engineering - Universidad Adolfo Ibáñez"</span>,
}</pre>
          </div>

          <div class="bg-vim-selection p-6 rounded border border-vim-border">
            <p class="text-vim-fg leading-relaxed">
              I'm a Computer Engineer with a solid foundation in full stack development and growing experience
              in emerging technologies like blockchain and Web3. Throughout my internships and professional
              experience, I've worked on both frontend and backend, managing relational databases and building
              scalable APIs.
            </p>
            <p class="text-vim-fg leading-relaxed mt-4">
              My goal is to consolidate myself as a Software Developer in agile environments, contributing with
              best practices in architecture, code quality, and a problem-solving oriented mindset.
            </p>
          </div>

          <div class="mt-8">
            <h2 class="text-vim-blue text-xl mb-4">Technical Skills</h2>

            <div class="space-y-4">
              <div>
                <h3 class="text-vim-cyan mb-2">Languages & Frameworks</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">JavaScript</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">TypeScript</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Python</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">C</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Next.js</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Angular</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">React</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Express.js</span>
                </div>
              </div>

              <div>
                <h3 class="text-vim-cyan mb-2">Technologies & Tools</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Git</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Docker</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Linux</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Shell Script</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Databases</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">MongoDB</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">REST APIs</span>
                </div>
              </div>

              <div>
                <h3 class="text-vim-cyan mb-2">Specialized Areas</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Web3</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Blockchain</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Smart Contracts</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Networks</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">SEO</span>
                </div>
              </div>

              <div>
                <h3 class="text-vim-cyan mb-2">Methodologies</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">Agile</span>
                  <span class="bg-vim-selection px-3 py-1 rounded text-vim-fg">SCRUM</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h2 class="text-vim-green text-xl mb-4">Certifications</h2>
            <div class="space-y-2">
              <div class="flex gap-4">
                <span class="text-vim-green">✓</span>
                <span class="text-vim-fg">SEO: Search Engine Optimization</span>
              </div>
              <div class="flex gap-4">
                <span class="text-vim-green">✓</span>
                <span class="text-vim-fg">Enterprise Design Thinking Practitioner</span>
              </div>
            </div>
          </div>

          <div class="mt-8 p-4 bg-vim-selection rounded border border-vim-border">
            <p class="text-vim-comment">" Always learning, always building. Let's create something amazing together! "</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
