// Tiny cross-component bridge so the Nav dropdowns (in the global layout) and the "Learn About X"
// buttons inside page sections can drive the LoanTabs client component's active tab without lifting
// state all the way up to the root layout. Mirrors the original static site's `showTab(id)` global.

export type LoanTabId = 'conventional' | 'fha' | 'va' | 'jumbo' | 'bankstmt' | 'dscr' | 'cashout' | 'calhfa'

export const SHOW_TAB_EVENT = 'mettkey:showTab'

export function requestShowTab(tab: LoanTabId) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent<LoanTabId>(SHOW_TAB_EVENT, { detail: tab }))
}
