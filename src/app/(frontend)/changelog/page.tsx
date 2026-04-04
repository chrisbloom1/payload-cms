import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function ChangelogPage() {
  const payload = await getPayload({ config: configPromise })

  const releaseNotes = await payload.find({
    collection: 'release-notes',
    depth: 0,
    limit: 50,
    sort: '-releaseDate',
    overrideAccess: false,
  })

  const entries = releaseNotes.docs || []

  return (
    <div className="pt-8 pb-24">
      <div className="container max-w-3xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Changelog</h1>
          <p className="text-sm text-muted-foreground">What shipped and when.</p>
        </div>

        {entries.length === 0 ? (
          <div className="text-muted-foreground py-12 text-center">
            No release notes published yet.
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {entries.map((entry) => {
              const date = entry.releaseDate
                ? new Date(entry.releaseDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : null

              const features = (entry.features || []) as { feature?: string; id?: string }[]

              return (
                <Card key={entry.id}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-1">
                      <Badge variant="secondary" className="font-mono text-xs">
                        v{entry.version}
                      </Badge>
                      {entry.breakingChanges && (
                        <Badge variant="destructive" className="text-xs">
                          Breaking Changes
                        </Badge>
                      )}
                      {date && (
                        <span className="text-xs text-muted-foreground">{date}</span>
                      )}
                    </div>
                    <CardTitle className="text-lg font-bold">{entry.title}</CardTitle>
                  </CardHeader>
                  {features.length > 0 && (
                    <CardContent>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {features.map((f, i) => (
                          <li key={f.id || i}>{f.feature}</li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Changelog',
    description: 'Latest updates, fixes, and new features on the Bloom platform.',
  }
}
