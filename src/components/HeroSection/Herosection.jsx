import "./Herosection.css";

const defaultTools = ["Git", "HTML", "CSS", "JavaScript", "React", "npm"];

function Herosection({
  title = "Code4Flyer",
  description = "Learn faster. Code smarter. Fly through every workflow.",
  tools = defaultTools,
}) {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <div className="hero-section__copy">
          <h1 className="hero-section__title">{title}</h1>
          <p className="hero-section__description">{description}</p>

          <div
            className="hero-section__actions"
            role="group"
            aria-label="Technology stack"
          >
            {tools.map((tool) => (
              <button key={tool} type="button" className="hero-section__button">
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="hero-section__panel" aria-hidden="true">
          <div className="hero-section__window">
            <div className="hero-section__window-bar">
              <span />
              <span />
              <span />
            </div>

            <div className="hero-section__window-body">
              <p className="hero-section__eyebrow">Responsive component</p>
              <h2>Code4Flyer</h2>

              <div className="hero-section__metrics">
                <div className="hero-section__metric">
                  <strong>01</strong>
                  <span>shortcuts</span>
                </div>

                <div className="hero-section__metric">
                  <strong>02</strong>
                  <span>Learn coding</span>
                </div>

                <div className="hero-section__metric">
                  <strong>03</strong>
                  <span>made by GoMyCode students</span>
                </div>
              </div>

              <div className="hero-section__snippet">
                <span>&lt;HeroSection /&gt;</span>
                <span>styled with your palette</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
