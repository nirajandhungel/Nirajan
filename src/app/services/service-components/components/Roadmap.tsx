

const steps = [
  { n: '01', title: 'Requirement Analysis', desc: 'We conduct a thorough analysis of your requirements to establish a solid foundation.' },
  { n: '02', title: 'Planning', desc: 'Detailed plans and customized strategies to ensure a secure roadmap to success.' },
  { n: '03', title: 'Design (UI/UX)', desc: 'Crafting interfaces aligned with your vision using the best technology.' },
  { n: '04', title: 'Development', desc: 'Implementing concepts with cutting-edge programming languages and standards.' },
  { n: '05', title: 'Testing & QA', desc: 'Ensuring reliability through rigorous System Testing for a seamless experience.' },
  { n: '06', title: 'Deployment', desc: 'Launching the website from prototype to fully-fledged live production.' },
  { n: '07', title: 'Maintenance', desc: 'Ongoing monitoring and support to ensure your website runs smoothly.' },
  { n: '08', title: 'Knowledge Transfer', desc: 'Training on website operations, troubleshooting, and data management.' }
];

const Roadmap: React.FC = () => {
  return (
    <section className="py-24 bg-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">Our Development <span className="text-primary">Roadmap</span></h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            A systematic approach to transform your ideas into a high-performance digital reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-white p-8 rounded-3xl border border-border group-hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-primary/30 z-10">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {/* Connector dots for desktop */}
              {idx % 4 !== 3 && idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                   <i className="fa-solid fa-chevron-right text-primary/20"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
