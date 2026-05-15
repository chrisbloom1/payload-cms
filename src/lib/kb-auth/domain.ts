/**
 * Allowlist check by email domain. Configured via the
 * BLOOM_TEAM_EMAIL_DOMAINS env var (comma-separated, no @ prefix,
 * lowercased). Falsy / empty env var → nobody is allowed (closed).
 */
function allowedDomains(): string[] {
  return (process.env.BLOOM_TEAM_EMAIL_DOMAINS ?? '')
    .split(',')
    .map((d) => d.trim().toLowerCase())
    .filter(Boolean)
}

export function isTeamEmail(email: string): boolean {
  const normalized = email.trim().toLowerCase()
  const at = normalized.lastIndexOf('@')
  if (at < 0) return false
  const domain = normalized.slice(at + 1)
  return allowedDomains().includes(domain)
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}
