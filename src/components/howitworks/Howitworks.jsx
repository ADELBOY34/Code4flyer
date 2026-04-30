import "./Howitworks.css";

const defaultTools = ["Pick a topic", "Read the tip", "Try it", "Build faster"];

const defaultSteps = [
  {
    number: "01",
    label: "Choose a coding topic",
  },
  {
    number: "02",
    label: "Practice with real shortcuts",
  },
  {
    number: "03",
    label: "Apply it in your workflow",
  },
];

function Howitworks({
  title = "How It Works",
  description = "Explore a topic, understand the shortcut, and apply it right away in real projects.",
  tools = defaultTools,
  steps = defaultSteps,
}) {
  return (
    <section className="how-it-works">
      <div className="how-it-works__content">
        <div className="how-it-works__copy">
          <h1 className="how-it-works__title">{title}</h1>
          <p className="how-it-works__description">{description}</p>

          <div
            className="how-it-works__actions"
            role="group"
            aria-label="How it works steps"
          >
            {tools.map((tool) => (
              <button
                key={tool}
                type="button"
                className="how-it-works__button"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="how-it-works__panel" aria-hidden="true">
          <div className="how-it-works__window">
            <div className="how-it-works__window-bar">
              <span />
              <span />
              <span />
            </div>

            <div className="how-it-works__window-body">
              <p className="how-it-works__eyebrow">How it works</p>
              <h2>Code4Flyer flow</h2>

              <div className="how-it-works__metrics">
                {steps.map((step) => (
                  <div className="how-it-works__metric" key={step.number}>
                    <strong>{step.number}</strong>
                    <span>{step.label}</span>
                  </div>
                ))}
              </div>

              <div className="how-it-works__snippet">
                <span>&lt;Howitworks /&gt;</span>
                <span>same css as hero section</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Howitworks;
