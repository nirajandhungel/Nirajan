import { Project } from "../../types";

export const projects: Project[] = [
    {
        title: 'Expense Tracker',
        description: 'A full-stack expense tracker web app built with React.js, Node.js, and Tailwind CSS.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        githubLink: 'https://github.com/nirajandhungel/Expense-Tracker',
        demoLink: 'https://nirajan-exp-tracker.vercel.app/login',
        image: '/projects/exp-track.png',
    },
    {
        title: 'Sahara Rentals',
        description: 'JavaFX-based application for managing vehicle rentals having features like vehicle rentals, returns, and customer management.',
        technologies: ['Java', 'JavaFX', 'MySQL'],
        githubLink: 'https://github.com/nirajandhungel/Sahara-Rentals',
        demoLink: 'https://demo.com',
        image: '/projects/vrs.jpeg',
    },
    {
        title: 'Taxi Booking System',
        description: 'A desktop-based Taxi Booking System, supporting role-based access for Admin, Driver, and Passenger',
        technologies: ['Python', 'Tkinter', 'CSS', 'Custom Tkinter'],
        githubLink: 'https://github.com/nirajandhungel/Taxi-Booking-System',
        demoLink: 'https://demo.com',
        image: '/projects/taxi-booking.png',
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio website showcasing my projects and skills.',
        technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        githubLink: 'https://github.com/nirajandhungel/portfolio',
        demoLink: 'https://nirajandhungel.com.np',
        image: '/projects/portfolio.png',
    },
];
