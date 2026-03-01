import type { Metadata } from 'next';
import { WorkBanner } from "../../components/work-banner";
import { ProcessStep } from "../../components/process-step";
import FAQ from "../../components/FAQ";
import { ContactCTA } from '@/components/contact-cta';

export const metadata: Metadata = {
  title: "Work Process | Nirajan Dhungel - Software Engineer",
  description: "Discover the agile development process of Nirajan Dhungel, a leading Software Engineer in Nepal. From requirement gathering to deployment, we ensure high-quality software solutions.",
  keywords: [
    'Software Development Process', 
    'Agile Methodology Nepal', 
    'Web Development Workflow', 
    'Nirajan Dhungel Work Process', 
    'IT Consulting Process',
    'Software Engineering Steps'
  ],
  alternates: {
    canonical: 'https://www.nirajandhungel.com.np/work',
  },

  openGraph: {
    title: "Proven Work Process | Nirajan Dhungel - Software Engineer",
    description: "See how we turn ideas into reality. Our structured software development lifecycle ensures transparency, quality, and timely delivery for your projects.",
    url: "https://www.nirajandhungel.com.np/work",
    type: "website",
    siteName: "Nirajan Dhungel",
    images: [
      {
        url: "/optimized/media/work/planning.svg",
        width: 1200,
        height: 630,
        alt: "Nirajan Dhungel Software Development Workflow",
      },
    ],
  },
  icons: {
    icon: '/optimized/favicon.webp', // Explicitly setting per page if needed, though layout covers it
    shortcut: '/optimized/favicon.webp',
  },
};

const workSteps = [
  {
    stepNumber: "01",
    title: "Requirement Gathering",
    description: "In this step, we generate a list of requirements from our clients. The requirement could be functional or technical. It acts as a basis on what the project is and generates information on how it could be tackled. Requirement gathering is the most important step in our workflow. Here, clients must co-ordinate with our team members on time with clear and effective information.",
    imageSrc: "/optimized/media/work/requirements-gathering.svg",
  },
  {
    stepNumber: "02",
    title: "Plan & Resources",
    description: "A plan and resources describe the strategic roadmap and assets allocated to achieve specific objectives. It entails outlining goals, timelines, budgets, and identifying the necessary tools, personnel, and materials to execute tasks effectively.",
    imageSrc: "/optimized/media/work/planning.svg",
  },
  {
    stepNumber: "03",
    title: "Design & Develop",
    description: "Design and develop refers to the comprehensive process of conceptualizing and creating digital products or solutions, encompassing both the visual aesthetics and underlying functionality, often involving collaboration between designers and developers.",
    imageSrc: "/optimized/media/work/design-and-development.svg",
  },
  {
    stepNumber: "04",
    title: "Quality Assurance",
    description: "This is the step in which mistakes and defects are identified and corrected to ensure better quality. For quality assurance, we ask feedback from our clients. If our work doesn't meet the specific quality as per the requirement, we construct a plan with our project team to fulfill the desired process. In general, our professional teams are here to develop, detect and inspect the output to deliver satisfactory outcomes to our clients.",
    imageSrc: "/optimized/media/work/quality-assurance.svg", // Reusing image for now as we have limited generations and it fits contextually (reviewing)
  },
  {
    stepNumber: "05",
    title: "Deployment",
    description: "Deployment is the process of releasing and installing software applications or updates onto servers, devices, or networks for end-user access, ensuring functionality, security, and performance in a live environment.",
    imageSrc: "/optimized/media/work/software-deployment.svg", // Reusing image (tech/server context)
  },
  {
    stepNumber: "06",
    title: "Support & Maintenance",
    description: "Support and maintenance encompass ongoing assistance and upkeep provided to ensure the smooth functioning, security, and reliability of systems, software, or services, including troubleshooting, updates, and user assistance as needed.",
    imageSrc: "/optimized/media/work/sodtware-maintainance.svg", // 
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
       {/* Global Organic Background - Blending Solutions Section Style */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] animate-float opacity-40 mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] animate-float-delayed opacity-30 mix-blend-screen" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow opacity-20" />
      </div>

      <div className="relative z-10">
        <WorkBanner />
        
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative">
               {/* Central dashed line for mobile structure if needed, or stick to component's internal handling */}
              <div className="space-y-0">
                 {workSteps.map((step, index) => (
                   <ProcessStep
                     key={step.stepNumber}
                     stepNumber={step.stepNumber}
                     title={step.title}
                     description={step.description}
                     imageSrc={step.imageSrc}
                     isEven={index % 2 !== 0}
                   />
                 ))}
              </div>
            </div>
          </div>
        </section>
  
        <FAQ />
        <ContactCTA />
      </div>
    </main>
  );
}
