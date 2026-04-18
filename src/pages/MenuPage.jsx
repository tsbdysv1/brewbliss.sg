import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import MenuCatalogSection from '../components/MenuCatalogSection'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { getSignatureCollectionItems, menuCategories } from '../data/menu'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'

const menuSectionOrder = ['espresso-bar', 'vietnamese-coffee', 'brew-bar', 'hand-drip', 'matcha', 'tea', 'other-drinks', 'juice', 'pastries']

const sectionTitleMap = {
  'espresso-bar': 'Espresso Bar',
  'vietnamese-coffee': 'Vietnamese Coffee Bar',
  'brew-bar': 'Brew Bar',
  'hand-drip': 'Hand Drip',
  matcha: 'Matcha',
  tea: 'Tea',
  'other-drinks': 'Other Drinks',
  juice: 'Juice',
  pastries: 'Pastry',
}

function MenuPage() {
  const location = useLocation()
  const [highlightedSectionId, setHighlightedSectionId] = useState('')

  const visibleCategories = useMemo(
    () =>
      menuSectionOrder
        .map((slug) => menuCategories.find((category) => category.slug === slug))
        .filter(Boolean)
        .map((category) => ({
          ...category,
          items: category.items.map((item) => ({
            ...item,
            categorySlug: category.slug,
            categoryName: category.name,
          })),
        })),
    [],
  )

  const signatureItems = getSignatureCollectionItems()

  const validSectionIds = useMemo(() => new Set([...menuSectionOrder, 'signature-collection']), [])

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (!hash || !validSectionIds.has(hash)) return

    const target = document.getElementById(hash)
    if (!target) return

    const headerOffset = window.innerWidth <= 720 ? 124 : 136
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth',
    })

    setHighlightedSectionId(hash)
  }, [location.key, location.hash, validSectionIds])

  usePageSeo({
    title: `Menu | ${siteConfig.brandName}`,
    description:
      'Xem menu đầy đủ của BrewBliss Coffee với coffee, matcha, trà trái cây, pastry và các món nổi bật ngay trên một trang riêng.',
    jsonLd: siteConfig.defaultJsonLd,
    pathname: '/menu',
    image: siteConfig.seo.defaultImage,
  })

  return (
    <div className="page-shell">
      <SiteHeader />

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Menu' }]} />

      <main className="menu-page-content" aria-label="BrewBliss menu catalog">
        {visibleCategories.map((category) => (
          <MenuCatalogSection
            key={category.slug}
            sectionId={category.slug}
            title={sectionTitleMap[category.slug] ?? category.name}
            items={category.items}
            isHighlighted={highlightedSectionId === category.slug}
          />
        ))}

        <MenuCatalogSection
          sectionId="signature-collection"
          title="BrewBliss Signature Collection"
          items={signatureItems}
          isHighlighted={highlightedSectionId === 'signature-collection'}
        />
      </main>

      <SiteFooter />
    </div>
  )
}

export default MenuPage
