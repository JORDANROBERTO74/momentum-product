import { linearBodyContent } from "@/lib/linear-body-content";

export function TestimonialsSection() {
  const { testimonials } = linearBodyContent;

  return (
    <section className="testimonials section-wrap">
      <div className="testimonial-grid">
        {testimonials.items.map((item) => (
          <article
            key={item.author}
            className={`testimonial-card ${item.variant}`}
          >
            <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
            <div className="testimonial-meta">
              <div>
                <div className="testimonial-author">{item.author}</div>
                <div className="testimonial-role">{item.role}</div>
              </div>
              <span className="testimonial-logo" aria-hidden>
                {item.company.slice(0, 1)}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="testimonial-footer">
        <p className="social-proof">
          Linear powers over <strong>40,000</strong> product teams. From ambitious
          startups to major enterprises.
        </p>
        <a href="#" className="customer-stories-cta">
          {testimonials.customerStoriesCta}
        </a>
      </div>
    </section>
  );
}
