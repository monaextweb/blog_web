import { useEffect } from 'react'

// Minimal dependency-free SEO helper: sets document title + meta description
// per page since this project intentionally avoids extra libraries.
export default function PageSEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
