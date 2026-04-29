const redirects = async () => {
  const internetExplorerRedirect = {
    destination: '/ie-incompatible.html',
    has: [
      {
        type: 'header',
        key: 'user-agent',
        value: '(.*Trident.*)', // all ie browsers
      },
    ],
    permanent: false,
    source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
  }

  // Live bloomnetwork.ai exposed /newsroom; both the bloom-web clone and the
  // merged site consolidate news under /blog. Keep the alias so external links
  // (e.g. company-page CTA, old emails) don't 404.
  const newsroomRedirect = {
    source: '/newsroom',
    destination: '/blog',
    permanent: true,
  }

  const redirects = [internetExplorerRedirect, newsroomRedirect]

  return redirects
}

export default redirects
