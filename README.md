# Light Them Foundation

Static website for Light Them Foundation, focused on education support in Burera District, Rwanda.

## Included SEO and indexing files

- `robots.txt` for crawler access and sitemap discovery.
- `sitemap.xml` for the main public pages.
- Page-level canonical, Open Graph, Twitter, and robots metadata.
- Correct favicon and manifest links under `Assets/images/`.

## Assets

The site icons and manifest live in `Assets/images/`:

- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `site.webmanifest`

## Deployment note

The sitemap, robots file, canonical tags, and structured data currently use `https://lightthemfoundation.org/` as the site base URL. If your public domain is different, update that one base URL in those files and in the page head tags.