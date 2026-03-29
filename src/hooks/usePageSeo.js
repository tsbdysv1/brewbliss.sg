import { useEffect } from 'react'
import { siteConfig } from '../data/site'

function ensureNamedMetaTag(attr, value) {
  let tag = document.querySelector(`meta[${attr}="${value}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, value)
    document.head.appendChild(tag)
  }

  return tag
}

function ensureLinkTag(rel) {
  let tag = document.querySelector(`link[rel="${rel}"]`)

  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }

  return tag
}

function ensureJsonLdTag() {
  let tag = document.querySelector('script[data-seo="json-ld"]')

  if (!tag) {
    tag = document.createElement('script')
    tag.type = 'application/ld+json'
    tag.setAttribute('data-seo', 'json-ld')
    document.head.appendChild(tag)
  }

  return tag
}

function buildCanonicalUrl(pathname = '/') {
  const normalizedPathname = pathname === '/' ? '' : pathname
  return `${siteConfig.siteUrl}${normalizedPathname}`
}

export function usePageSeo({ title, description, jsonLd, pathname = '/', image = siteConfig.seo.defaultImage }) {
  useEffect(() => {
    const resolvedTitle = title || siteConfig.seo.title
    const resolvedDescription = description || siteConfig.seo.description
    const canonicalUrl = buildCanonicalUrl(pathname)

    document.title = resolvedTitle

    ensureNamedMetaTag('name', 'description').setAttribute('content', resolvedDescription)
    ensureNamedMetaTag('property', 'og:title').setAttribute('content', resolvedTitle)
    ensureNamedMetaTag('property', 'og:description').setAttribute('content', resolvedDescription)
    ensureNamedMetaTag('property', 'og:type').setAttribute('content', pathname === '/' ? 'website' : 'article')
    ensureNamedMetaTag('property', 'og:url').setAttribute('content', canonicalUrl)
    ensureNamedMetaTag('property', 'og:image').setAttribute('content', image)
    ensureNamedMetaTag('name', 'twitter:card').setAttribute('content', 'summary_large_image')
    ensureNamedMetaTag('name', 'twitter:title').setAttribute('content', resolvedTitle)
    ensureNamedMetaTag('name', 'twitter:description').setAttribute('content', resolvedDescription)
    ensureNamedMetaTag('name', 'twitter:image').setAttribute('content', image)
    ensureLinkTag('canonical').setAttribute('href', canonicalUrl)
    ensureJsonLdTag().textContent = JSON.stringify(jsonLd || siteConfig.defaultJsonLd)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [description, image, jsonLd, pathname, title])
}
