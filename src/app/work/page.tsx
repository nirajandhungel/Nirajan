import type { Metadata } from 'next';
import { WorkBanner } from "../../components/work-banner";
import { ProcessStep } from "../../components/process-step";
import { CTASection } from "../../components/cta-section";
import WhatsAppButton from "../../components/whatsapp-button";

export const metadata: Metadata = {
  title: "Work Process of IT Company in Nepal | Nirajan Dhungel",
  description: "Ever wondered how an IT company works? We create an IT strategy that works efficiently together with your business model. Learn More about our working steps!",
  openGraph: {
    title: "Work Process of IT Company in Nepal | Nirajan Dhungel",
    description: "Ever wondered how an IT company works? We create an IT strategy that works efficiently together with your business model. Learn More about our working steps!",
    url: "https://nirajandhungel.com.np/work",
    type: "website",
    images: [
      {
        url: "/media/work_process_banner.png",
        width: 1200,
        height: 630,
        alt: "Work Process of Nirajan Dhungel",
      },
    ],
  },
};

const workSteps = [
  {
    stepNumber: "01",
    title: "Requirement Gathering",
    description: "In this step, we generate a list of requirements from our clients. The requirement could be functional or technical. It acts as a basis on what the project is and generates information on how it could be tackled. Requirement gathering is the most important step in our workflow. Here, clients must co-ordinate with our team members on time with clear and effective information.",
    imageSrc: "/media/meeting_illustration.png",
  },
  {
    stepNumber: "02",
    title: "Plan & Resources",
    description: "A plan and resources describe the strategic roadmap and assets allocated to achieve specific objectives. It entails outlining goals, timelines, budgets, and identifying the necessary tools, personnel, and materials to execute tasks effectively.",
    imageSrc: "/media/plan_resources_illustration.png",
  },
  {
    stepNumber: "03",
    title: "Design & Develop",
    description: "Design and develop refers to the comprehensive process of conceptualizing and creating digital products or solutions, encompassing both the visual aesthetics and underlying functionality, often involving collaboration between designers and developers.",
    imageSrc: "/media/design_develop_illustration.png",
  },
  {
    stepNumber: "04",
    title: "Quality Assurance",
    description: "This is the step in which mistakes and defects are identified and corrected to ensure better quality. For quality assurance, we ask feedback from our clients. If our work doesn't meet the specific quality as per the requirement, we construct a plan with our project team to fulfill the desired process. In general, our professional teams are here to develop, detect and inspect the output to deliver satisfactory outcomes to our clients.",
    imageSrc: "/media/meeting_illustration.png", // Reusing image for now as we have limited generations and it fits contextually (reviewing)
  },
  {
    stepNumber: "05",
    title: "Deployment",
    description: "Deployment is the process of releasing and installing software applications or updates onto servers, devices, or networks for end-user access, ensuring functionality, security, and performance in a live environment.",
    imageSrc: "/media/plan_resources_illustration.png", // Reusing image (tech/server context)
  },
  {
    stepNumber: "06",
    title: "Support & Maintenance",
    description: "Support and maintenance encompass ongoing assistance and upkeep provided to ensure the smooth functioning, security, and reliability of systems, software, or services, including troubleshooting, updates, and user assistance as needed.",
    imageSrc: "/media/design_develop_illustration.png", // Reusing image (dev ops context)
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <WorkBanner />
      
      <section className="relative py-20 overflow-hidden bg-white dark:bg-slate-950/50">
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

      <CTASection />
      <WhatsAppButton />
    </main>
  );
}
