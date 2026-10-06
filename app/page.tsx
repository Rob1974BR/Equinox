'use client'

export default function Page() {
  const cleanPrototypeLabel = (frame: HTMLIFrameElement) => {
    const doc = frame.contentDocument
    if (!doc?.body) return

    const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT)
    let node = walker.nextNode()

    while (node) {
      if (node.nodeValue?.includes('Digital brochure prototype')) {
        node.nodeValue = node.nodeValue.replace(
          'Digital brochure prototype',
          'Digital brochure'
        )
      }
      node = walker.nextNode()
    }
  }

  return (
    <main className="brochure-shell">
      <h1 className="sr-only">Equinox Flowers Digital Collection 2026</h1>
      <iframe
        className="brochure-frame"
        title="Equinox Flowers Digital Collection 2026"
        src="/equinox-brochure.html"
        onLoad={(event) => cleanPrototypeLabel(event.currentTarget)}
      />
    </main>
  )
}
