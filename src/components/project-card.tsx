'use client'

import { type Project } from 'contentlayer/generated'
import Link from 'next/link'

import getIconByName from '@/utils/get-icon-by-name'

import Image from './mdx/image'

type ProjectCardProps = Project

const ProjectCard = (props: ProjectCardProps) => {
  const { _id, name, description, techstack, slug } = props

  const image = `/images/projects/${slug}/cover.png`

  return (
    <div className='w-full'>
      <Link
        key={_id}
        href={`/projects/${slug}`}
        className='group relative flex flex-col overflow-hidden rounded-lg border aspect-[40/21]'
      >
        <Image
          src={image}
          fill={true}
          sizes='100%'
          quality={50}
          alt={name}
          className='rounded-lg transition duration-700 ease-in-out group-hover:scale-110 w-full h-full object-cover relative'
        />
      </Link>
      <div className='z-20 mx-4 -mt-12 rounded-md border bg-background p-4 backdrop-blur-[8px]'>
        <div className='flex flex-col items-start'>
          <Link key={_id} href={`/projects/${slug}`}>
            <h2 className='text-xl font-bold text-foreground'>{name}</h2>
          </Link>
          <p className='mt-1 text-muted-foreground'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {[...techstack].splice(0, 3).map((t) => {
            const { label } = t

            const Icon = getIconByName(label)

            return (
              <div
                key={label}
                className='flex items-center justify-center gap-1 rounded-full border px-3 py-2'
              >
                <Icon strokeWidth={1.5} size={12} />
                <div className='text-[10px]'>{label}</div>
              </div>
            )
          })}
          {techstack.length - 3 > 0 && (
            <div className='flex items-center justify-center gap-1 rounded-full border px-4'>
              <div className='text-[10px]'>{techstack.length - 2} more</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
