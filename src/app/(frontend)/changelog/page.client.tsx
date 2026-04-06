'use client'

import React from 'react'
import { FileText } from 'lucide-react'

import { KBSidebar } from '@/components/KBSidebar'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ReleaseNote {
  id: number | string
  title?: string | null
  version?: string | null
  releaseDate?: string | null
  breakingChanges?: boolean | null
  features?: { feature?: string; id?: string }[]
}

export const ChangelogPageClient: React.FC<{ entries: ReleaseNote[] }> = ({ entries }) => {
  return (
    <div className="pt-8 pb-24">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Changelog</h1>
          <p className="text-sm text-muted-foreground">What shipped and when.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <KBSidebar />

          <div className="flex-1 min-w-0 max-w-3xl">
            {entries.length === 0 ? (
              <div className="flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
                <FileText className="h-10 w-10 opacity-40" />
                <p>No release notes published yet.</p>
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
      </div>
    </div>
  )
}
