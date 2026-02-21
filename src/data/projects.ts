import { Project } from "../../types";

export const projects: Project[] = [
    {
        title: 'Lingo Tech Solutions Website',
        description: 'Production website for a software development and IT consulting company. Designed and developed a high-performance, SEO-optimized, fully responsive platform showcasing services, case studies, and company portfolio.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO Optimization', 'Responsive Design'],
        githubLink: '', // keep empty if private
        demoLink: 'https://lingotechsolutions.com/',
        image: '/originals/projects/lingo-tech-solutions.png'
    },
    {
        title: 'Futsmandu ',
        description: 'A mobile app for Futsal enthusiasts with a Flutter frontend and a TypeScript Node.js backend, serving players, court owners, and admins.',
        technologies: ['Flutter', 'Dart', 'Provider', 'TypeScript', 'Node.js', 'Express'],
        githubLink: 'https://github.com/nirajandhungel/futsmandu-app',
        demoLink: '', // Add demo link if available
        image: '/originals/projects/futsmandu_logo.png',
    },
    {
        title: 'Expense Tracker',
        description: 'A full-stack expense tracker web app built with React.js, Node.js, and Tailwind CSS.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        githubLink: 'https://github.com/nirajandhungel/Expense-Tracker',
        demoLink: 'https://nirajan-exp-tracker.vercel.app/login',
        image: '/originals/projects/exp-track.png',
    },
    {
        title: 'Sahara Rentals',
        description: 'Java-based application for managing vehicle rentals having features like vehicle rentals, returns, and customer management.',
        technologies: ['Java', 'JavaFX', 'MySQL'],
        githubLink: 'https://github.com/nirajandhungel/Sahara-Rentals',
        demoLink: 'https://demo.com',
        image: '/originals/projects/vrs.jpeg',
    },
    {
        title: 'Taxi Booking System',
        description: 'A desktop-based Taxi Booking System, supporting role-based access for Admin, Driver, and Passenger',
        technologies: ['Python', 'Tkinter', 'CSS', 'Custom Tkinter'],
        githubLink: 'https://github.com/nirajandhungel/Taxi-Booking-System',
        demoLink: 'https://demo.com',
        image: '/originals/projects/taxi-booking.png',
    },


];
