const services = [
  ['01', 'Customs clearing', 'Helping your goods move through customs with clear, careful coordination.'],
  ['02', 'Import & export documentation', 'Supporting the documents that keep cross-border trade moving.'],
  ['03', 'Cargo handling', 'Practical coordination for cargo at every point in its journey.'],
  ['04', 'Transportation coordination', 'Connecting the right movement plan to your delivery needs.'],
  ['05', 'Cross-border & transit cargo', 'Reliable logistics support across Zambia, Southern and Eastern Africa.'],
  ['06', 'Warehousing & supply chain', 'Flexible solutions to support your wider logistics operation.'],
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">→</span>;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav wrap" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="TransitCore home">
            <span className="brand-mark"><i></i><i></i><i></i></span>
            <span>TRANSIT<span>CORE</span></span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About us</a>
            <a className="nav-cta" href="#contact">Get in touch <Arrow /></a>
          </div>
        </nav>
        <div className="hero-grid wrap">
          <div className="hero-copy">
            <p className="eyebrow light">Freight forwarding · Zambia & beyond</p>
            <h1>Moving trade<br /><em>with confidence.</em></h1>
            <p className="hero-text">TransitCore Freight & Logistics provides efficient, reliable, and cost-effective freight solutions for individuals, businesses, and organizations.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#contact">Talk to our team <Arrow /></a>
              <a className="text-link light" href="#services">Explore services <span>↓</span></a>
            </div>
          </div>
          <figure className="hero-photo">
            <img src="/images/freight-terminal-hero.png" alt="Blue freight truck and containers at a port terminal" />
            <figcaption><span>OUR REACH</span><strong>Zambia · Southern & Eastern Africa</strong></figcaption>
          </figure>
        </div>
        <div className="hero-footer wrap"><span>Customs clearance</span><span>Cross-border logistics</span><span>Supply chain support</span></div>
      </section>

      <section className="intro wrap" id="about">
        <p className="eyebrow">Who we are</p>
        <div className="intro-grid">
          <h2>Logistics that keeps your <em>business in motion.</em></h2>
          <div><p>We specialize in freight forwarding and logistics services that make complex movement simpler—from customs clearing and documentation to transport, transit cargo, and warehousing.</p><a className="text-link" href="#contact">Work with TransitCore <Arrow /></a></div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="wrap">
          <div className="section-head"><div><p className="eyebrow">What we do</p><h2>Built around the<br /><em>journey of your cargo.</em></h2></div><p>One dependable partner for the essential parts of your logistics operation.</p></div>
          <div className="service-grid">{services.map(([number, title, text]) => <article className="service" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Ask about ${title}`}><Arrow /></a></article>)}</div>
        </div>
      </section>

      <section className="promise wrap">
        <figure className="warehouse-photo"><img src="/images/warehouse-distribution.png" alt="Warehouse team coordinating cargo and distribution" /></figure>
        <div><p className="eyebrow">The TransitCore approach</p><h2>Clear coordination.<br /><em>Confident delivery.</em></h2></div>
        <p>From a single shipment to a broader supply-chain need, we bring a practical, responsive approach to every move.</p>
      </section>

      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div><p className="eyebrow light">Start a conversation</p><h2>Let&apos;s move<br /><em>forward together.</em></h2><p className="contact-copy">Tell us where your cargo needs to go. Our team is ready to discuss your logistics needs.</p></div>
          <div className="contact-card"><a className="email" href="mailto:transitcorefreight.logistics@gmail.com">transitcorefreight.<br />logistics@gmail.com <Arrow /></a><div className="leaders"><div><span>Managing Director</span><strong>Chabota Sydney Malambo</strong><a href="tel:+260973265973">+260 973 265 973</a></div><div><span>Operations Director</span><strong>Cephas Mwale</strong><a href="tel:+260974772765">+260 974 772 765</a></div></div></div>
        </div>
      </section>

      <footer className="footer wrap"><a className="brand dark" href="#home"><span className="brand-mark"><i></i><i></i><i></i></span><span>TRANSIT<span>CORE</span></span></a><span>Freight & Logistics</span><span>© {new Date().getFullYear()} TransitCore</span></footer>
    </main>
  );
}
