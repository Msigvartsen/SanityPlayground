const env = process.env.NODE_ENV || 'development'

export default function resolvePreviewUrl(document) {
  const baseUrl = env === 'development' ? 'https://localhost:44323' : 'https://sanity-kitchen-sink-web-26wmadvc.netlify.app'
  switch (document._type) {
    case 'route':
      if (!document.slug || !document.slug.current) {
        return baseUrl
      }
      return `${baseUrl}/${document.slug.current}`
    case 'post':
      return `${baseUrl}/posts/${document.slug.current}`
    case 'siteSettings':
      return baseUrl
    case 'page':
      if (document._id === 'frontpage' || document._id === 'drafts.frontpage') {
        return baseUrl
      }
      return null
    default:
      return null
  }
}
