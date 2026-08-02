'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BLOG_POSTS, BLOG_CATEGORIES, BlogCategory } from '../../lib/blog'

export default function BlogGrid() {
  const [filter, setFilter] = useState<BlogCategory | 'All'>('All')
  const posts = [...BLOG_POSTS]
    .reverse()
    .filter((p) => filter === 'All' || p.category === filter)

  return (
    <>
      <div className="blog-filters">
        <button className={`blog-filter${filter === 'All' ? ' active' : ''}`} onClick={() => setFilter('All')}>All</button>
        {BLOG_CATEGORIES.map((c) => (
          <button key={c} className={`blog-filter${filter === c ? ' active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
        ))}
      </div>
      <div className="blog-grid">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <span className="art-cat">{post.category.toUpperCase()}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span className="blog-date">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}
