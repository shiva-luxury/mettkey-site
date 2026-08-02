'use client'

import { requestShowTab, LoanTabId } from '../lib/tabEvents'

export default function FooterTabLink({ tab, children }: { tab: LoanTabId; children: React.ReactNode }) {
  return (
    <a href="/#loans" onClick={() => requestShowTab(tab)}>
      {children}
    </a>
  )
}
