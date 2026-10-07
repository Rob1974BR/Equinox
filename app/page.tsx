'use client'

export default function Page() {
  const updateBrochureContent = (frame: HTMLIFrameElement) => {
    const doc = frame.contentDocument
    if (!doc?.body) return

    // Keep the approved footer wording.
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

    const labels = Array.from(doc.querySelectorAll('.contact-label'))

    // Approved FOB Sales Agency - Kenya contact update.
    const fobLabel = labels.find(
      (el) =>
        el.textContent?.trim().toUpperCase() === 'FOB SALES AGENCY · KENYA'
    )

    const fobCard = fobLabel?.closest('.contact-card')
    if (fobCard) {
      fobCard.innerHTML = `
        <div class="contact-label">FOB SALES AGENCY · KENYA</div>
        <h3>Floragate Ltd</h3>
        <p style="font-style:normal">FOB sales and commercial support from Kenya.</p>
        <h4>Victoria Kungu</h4>
        <div style="color:#d8dae0;font-size:13px;line-height:1.7;font-weight:400">+025 728 210046</div>
        <a href="mailto:marketing@floragate.co.ke">marketing@floragate.co.ke</a>
      `
    }

    // Approved Holland Agency contact update.
    const hollandLabel = labels.find(
      (el) => el.textContent?.trim().toUpperCase() === 'HOLLAND AGENCY'
    )

    const hollandCard = hollandLabel?.closest('.contact-card')
    if (hollandCard) {
      hollandCard.innerHTML = `
        <div class="contact-label">HOLLAND AGENCY</div>
        <h3>Van der Deijl · The Netherlands</h3>
        <p>European sales, processing and distribution from Rijnsburg.</p>

        <div style="margin-top:16px">
          <h4 style="margin:0 0 6px">Jaap Snijer</h4>
          <div style="color:#d8dae0;font-size:13px;line-height:1.7">0031-6-15309923</div>
          <a href="mailto:sales@vanderdeijl.nl">sales@vanderdeijl.nl</a>
        </div>

        <div style="margin-top:16px">
          <h4 style="margin:0 0 6px">Rob Brussee</h4>
          <div style="color:#d8dae0;font-size:13px;line-height:1.7">0031-6-51610599</div>
          <a href="mailto:sales@vanderdeijl.nl">sales@vanderdeijl.nl</a>
        </div>
      `
    }
  }

  return (
    <main className="brochure-shell">
      <h1 className="sr-only">Equinox Flowers Digital Collection 2026</h1>
      <iframe
        className="brochure-frame"
        title="Equinox Flowers Digital Collection 2026"
        src="/equinox-brochure.html"
        onLoad={(event) => updateBrochureContent(event.currentTarget)}
      />
    </main>
  )
}
