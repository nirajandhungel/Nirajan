

const InfoCards: React.FC = () => {
  return (
    <div className="container mx-auto px-4 -mt-16 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfoCard 
          icon="fa-thumbs-up" 
          title="Satisfaction Guarantee" 
          description="Elevate online presence with website development expertise and 100% satisfaction."
        />
        <InfoCard 
          icon="fa-award" 
          title="Best Quality Work" 
          description="Excellence and innovation define our development solutions for modern businesses."
        />
        <InfoCard 
          icon="fa-wand-magic-sparkles" 
          title="Interactive Interface" 
          description="Create an engaging interface for an optimal user experience across all devices."
        />
      </div>
    </div>
  );
};

const InfoCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-xl border border-border group hover:bg-primary transition-all duration-500">
    <div className="w-16 h-16 bg-primary group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-lg shadow-primary/20">
      <i className={`fa-solid ${icon} text-white group-hover:text-primary text-3xl`}></i>
    </div>
    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{title}</h3>
    <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
      {description}
    </p>
  </div>
);

export default InfoCards;
