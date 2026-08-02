// Shared lead-capture webhook — used by the ebook form, newsletter signup, and exit-intent
// popup. Ported verbatim from the static site's inline <script> (do not change the URL or
// the field-tagging conventions below; downstream Zapier steps key off of them).

export const ZAP = 'https://hooks.zapier.com/hooks/catch/26677674/46tti15/'

export function zap(d: Record<string, string>) {
  return fetch(ZAP, { method: 'POST', body: JSON.stringify(d) }).catch(() => {})
}
