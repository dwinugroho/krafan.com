import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'

import { type ProjectCore } from '@/types'

import ProjectCard from '@/components/project-card'

const Projects = (props: { projects: ProjectCore[] }) => {
  return (
    <div className='my-16 flex flex-col'>
      <h2 className='mb-8 text-3xl font-bold'>Projects</h2>
      <div className='grid gap-8 md:grid-cols-2'>
        {props.projects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
      <div className='flex'>
        <Link
          href='/projects'
          className='group my-8 flex items-center gap-4 text-lg font-medium'
        >
          <span>All Projects</span>
          <IconArrowRight className='h-4 w-4 transition duration-200 group-hover:translate-x-1' />
        </Link>
      </div>
    </div>
  )
}

export default Projects
