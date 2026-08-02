'use client'

import { useState } from 'react'

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard API unavailable — silently no-op
    }
  }

  return (
    <div className="share-row">
      <span className="share-lbl">Share</span>
      <a
        className="share-btn"
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        X / Twitter
      </a>
      <a
        className="share-btn"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="share-btn"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <button type="button" className="share-btn" onClick={copyLink}>
        {copied ? 'Link Copied ✓' : 'Copy Link'}
      </button>
    </div>
  )
}
