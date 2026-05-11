export const ROUTES = {
  home: '/',
  services: '/services',
  contact: '/contact',
} as const

export const LEGACY_PATHS: Record<string, string> = {
  '/index.html': ROUTES.home,
}

export const normalizePath = (path: string) => {
  if (!path) {
    return ROUTES.home
  }

  const raw = path.split('?')[0].split('#')[0]
  const withLeadingSlash = raw.startsWith('/') ? raw : `/${raw}`
  const withoutTrailingSlash =
    withLeadingSlash.length > 1 && withLeadingSlash.endsWith('/')
      ? withLeadingSlash.slice(0, -1)
      : withLeadingSlash

  return LEGACY_PATHS[withoutTrailingSlash] || withoutTrailingSlash
}
