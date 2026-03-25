import { type Stack } from '@/types/stack'

const stacks: Stack[] = [
  // Front-end
  { id: '1', name: 'React', level: 95, category: 'frontend', icon: 'Zap', color: 'cyan' },
  { id: '2', name: 'TypeScript', level: 90, category: 'frontend', icon: 'Code2', color: 'blue' },
  { id: '3', name: 'Tailwind CSS', level: 95, category: 'frontend', icon: 'Palette', color: 'cyan' },
  { id: '4', name: 'Next.js', level: 92, category: 'frontend', icon: 'Rocket', color: 'purple' },
  { id: '5', name: 'Vue.js', level: 80, category: 'frontend', icon: 'Triangle', color: 'green' },

  // Back-end
  { id: '6', name: 'Node.js', level: 88, category: 'backend', icon: 'Server', color: 'green' },
  { id: '7', name: 'Express.js', level: 85, category: 'backend', icon: 'Package', color: 'cyan' },
  { id: '8', name: 'Python', level: 82, category: 'backend', icon: 'Code', color: 'blue' },
  { id: '9', name: 'REST API', level: 93, category: 'backend', icon: 'Network', color: 'purple' },
  { id: '10', name: 'GraphQL', level: 75, category: 'backend', icon: 'GitBranch', color: 'cyan' },

  // Database
  { id: '11', name: 'PostgreSQL', level: 90, category: 'database', icon: 'Database', color: 'blue' },
  { id: '12', name: 'Oracle', level: 88, category: 'database', icon: 'HardDrive', color: 'purple' },
  { id: '13', name: 'MongoDB', level: 80, category: 'database', icon: 'Leaf', color: 'green' },
  { id: '14', name: 'Firebase', level: 85, category: 'database', icon: 'Flame', color: 'cyan' },

  // Tools
  { id: '15', name: 'Git', level: 92, category: 'tools', icon: 'GitBranch', color: 'cyan' },
  { id: '16', name: 'Docker', level: 80, category: 'tools', icon: 'Box', color: 'blue' },
  { id: '17', name: 'VS Code', level: 95, category: 'tools', icon: 'Code2', color: 'purple' },
  { id: '18', name: 'Linux', level: 85, category: 'tools', icon: 'Terminal', color: 'green' },
]

export async function GET() {
  // Simula um delay de 1 segundo para demonstrar carregamento
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return Response.json(stacks)
}
