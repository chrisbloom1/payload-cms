import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import React, { cache } from 'react'

import type { Page as PageType, Post } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import { getCachedDocument } from '@/utilities/getDocument'
import { getCachedRedirects } from '@/utilities/getRedirects'
import PageClient from './page.client'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = 'home' } = await paramsPromise
  const url = '/' + slug

  let page: PageType | null

  page = await queryPageBySlug({
    slug,
  })

  if (!page) {
    const redirects = await getCachedRedirects()()
    const redirectItem = redirects.find((r) => r.from === url)

    if (redirectItem) {
      if (redirectItem.to?.url) {
        redirect(redirectItem.to.url)
      }

      let redirectUrl: string | undefined

      if (typeof redirectItem.to?.reference?.value === 'string') {
        const collection = redirectItem.to?.reference?.relationTo
        const id = redirectItem.to?.reference?.value
        const document = (await getCachedDocument(collection, id)()) as PageType | Post
        redirectUrl = `${collection !== 'pages' ? `/${collection}` : ''}/${document?.slug}`
      } else if (typeof redirectItem.to?.reference?.value === 'object') {
        const collection = redirectItem.to?.reference?.relationTo
        redirectUrl = `${collection !== 'pages' ? `/${collection}` : ''}/${redirectItem.to?.reference?.value?.slug}`
      }

      if (redirectUrl) redirect(redirectUrl)
    }

    notFound()
  }

  const { hero, layout } = page

  return (
    <article className="pt-16 pb-24">
      <PageClient />

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
