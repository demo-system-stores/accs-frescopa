export function normalizeAemAssetUrl(src) {
  if (!src) return src;

  const imageUrl = new URL(src, window.location.href);
  const assetPrefix = /^\/adobe\/assets\/urn(?::|%3a)aaid(?::|%3a)aem(?::|%3a)/i;
  if (!imageUrl.hostname.endsWith('.adobeaemcloud.com')
    || !assetPrefix.test(imageUrl.pathname)) {
    return src;
  }

  imageUrl.protocol = 'https:';
  imageUrl.pathname = imageUrl.pathname.replace(assetPrefix, '/adobe/assets/urn:aaid:aem:');
  return imageUrl.href;
}
