import Breadcrumbs from '../components/Breadcrumbs'
import SignatureCollectionSection from '../components/SignatureCollectionSection'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'

function SignatureMenuPage() {
  usePageSeo({
    title: `Signature Collection | ${siteConfig.brandName}`,
    description:
      'Khám phá BrewBliss Signature Collection với các món nổi bật được tuyển chọn để đại diện cho vibe hiện đại, tinh gọn và premium của quán.',
    jsonLd: siteConfig.defaultJsonLd,
    pathname: '/menu/signature',
    image: siteConfig.seo.defaultImage,
  })

  return (
    <div className="page-shell">
      <SiteHeader />

      <Breadcrumbs
        items={[
          { label: 'Trang chủ', to: '/' },
          { label: 'Menu', to: '/menu' },
          { label: 'Signature Collection' },
        ]}
      />

      <SignatureCollectionSection showViewAll={false} headingLevel="h1" className="signature-collection-page-section" />

      <SiteFooter />
    </div>
  )
}

export default SignatureMenuPage
