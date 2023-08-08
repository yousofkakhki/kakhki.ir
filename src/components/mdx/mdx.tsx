'use client'

import { Alert, AlertDescription, AlertTitle, Kbd } from '@tszhong0411/ui'
import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Image, { ImageProps } from './image'
import ItemGrid from './item-grid'
import Link from './link'
import Pre from './pre'
import Tree from './tree'

type MdxProps = {
  code: string
}

const components: MDXComponents = {
  a: Link,
  Image: (props: ImageProps) => {
    const { alt, ...rest } = props

    return <Image rounded='rounded-lg' className='my-6' alt={alt} {...rest} />
  },
  pre: Pre,

  // Custom components
  Alert: (props) => <Alert {...props} />,
  AlertTitle: (props) => <AlertTitle {...props} />,
  AlertDescription: (props) => <AlertDescription {...props} />,
  ItemGrid,
  Tree,
  Kbd,
}

const Mdx = (props: MdxProps) => {
  const { code } = props
  const Component = useMDXComponent(code)

  return (
    <div className='prose w-full max-w-none dark:prose-invert'>
      <Component components={{ ...components }} />
    </div>
  )
}

export default Mdx
