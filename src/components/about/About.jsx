import "./About.css";

const defaultHighlights = [
  {
    title: "Shortcuts first",
    description:
      "Find the commands, snippets, and workflow tips developers need every day.",
  },
  {
    title: "Built for learning",
    description:
      "Move from beginner-friendly guidance to practical tools you can use right away.",
  },
  {
    title: "Made to save time",
    description:
      "Spend less time searching through tabs and more time building with confidence.",
  },
];

function About({
  eyebrow = "About Code4Flyer",
  title = "A focused space for developers who want to learn faster and work smarter.",
  description =
    "Code4Flyer is your fast-track hub for developers who want commands and shortcuts at their fingertips. " +
    "Discover essential Git commands, terminal tricks, VS Code shortcuts, programming snippets, and productivity hacks-all organized in one clean and easy-to-use platform. " +
    "Whether you're a beginner learning the basics or an experienced coder looking to save time, Code4Flyer helps you code smarter, faster, and more efficiently.",
  highlights = defaultHighlights,
}) {
  return (
    <section className="about-section">
      <div className="about-section__inner">
        <div className="about-section__copy">
          <p className="about-section__eyebrow">{eyebrow}</p>
          <h2 className="about-section__title">{title}</h2>
          <p className="about-section__description">{description}</p>
        </div>

        <div className="about-section__grid">
          {highlights.map((item) => (
            <article className="about-section__card" key={item.title}>
              <h3 className="about-section__card-title">{item.title}</h3>
              <p className="about-section__card-description">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
