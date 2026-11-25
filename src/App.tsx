import { projects } from './data/portfolio'

export default function App() {
  return (
    <main className="min-h-screen bg-night p-10 text-white">
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.title}>
            <span className="text-gold">{project.tag}</span> · {project.title}
          </li>
        ))}
      </ul>
    </main>
  )
}