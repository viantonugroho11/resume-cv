import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/foto-profil.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume | Muhammad Novianto Nugroho',
  description: "Muhammad Novianto Nugroho's resume and personal website.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  // Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'am Muhammad Novianto Nugroho`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Jakarta based <strong className="text-stone-100">Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Amartha Microfinance</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Bekasi, Java', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesia', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding, Badminton', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Gunadarma', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Amartha Microfinance, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'Golang',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Kotlin',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'PISPK',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'November 2022',
    location: 'University of Gunadarma',
    title: 'Bachelor of Information Systems',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2022 - Present',
    location: 'Amartha Microfinance, inc.',
    title: 'Jr. Software Engineer',
    content: (
      <p>
        Service Development for Neobank: I am involved in developing a neobank service that manages payment flows and
        finances for agents.
        <br />
        Internal Wallet Service Integration with Neobank: I am responsible for developing integration between internal
        wallet services and Neobank.
        <br />
        PPOB Transaction Flow Development: I was involved in developing PPOB (Payment Point Online Banking) transaction
        flows.
        <br />
        Service Maintenance for Amartha Agents: My duty is to perform maintenance on the services used by Amartha
        agents.
      </p>
    ),
  },
  {
    date: 'March 2022 - November 2022',
    location: 'Amartha Microfinance, inc.',
    title: 'Intern Software Engineer',
    content: (
      <p>
        API Service Documentation: I am responsible for comprehensively documenting all API services used.
        <br />
        Service Creation for Internal User Management: I play a role in developing services that enable the effective
        management of internal company users.
      </p>
    ),
  },
  {
    date: 'September 2021 - November 2022',
    location: 'Ministry of Health of the Republic of Indonesia',
    title: 'Intern Software Engineer',
    content: (
      <p>
        PISPK Service Development: I am responsible for developing the PISPK Service. This service is an application
        that has been used nationally and has been implemented in various health centers in Indonesia. My job is to make
        sure development runs smoothly and meets user needs.
        <br />
        Notification Service Development: Apart from that, I am also involved in the development of the Notification
        Service. This service aims to send notifications to users, manage notifications, and log related notifications.
        I am responsible for developing and ensuring optimal functionality of this service.
        <br />
        Data Engineer Development: I am also involved in the development of a Data Engineer, whose job is to carry out
        ETL (Extract, Transform, Load) processes for data used in dashboard applications. In this case, I am responsible
        for ensuring the data is available properly and can be accessed through the dashboard application.
        <br />
        Service Testing: As part of my work, I also test the services that have been developed. This aims to ensure
        optimal quality and performance of the services that have been made.
        <br />
        Application Documentation: In addition, I am also in charge of documenting the applications that have been
        developed. This documentation includes descriptions of the app's features, configurations, and usage guides.
        This documentation is important to make it easier for users to understand and use the application properly.PISPK
        Service Development: I am responsible for developing the PISPK Service. This service is an application that has
        been used nationally and has been implemented in various health centers in Indonesia. My job is to make sure
        development runs smoothly and meets user needs.
        <br />
        Notification Service Development: Apart from that, I am also involved in the development of the Notification
        Service. This service aims to send notifications to users, manage notifications, and log related notifications.
        I am responsible for developing and ensuring optimal functionality of this service.
        <br />
        Data Engineer Development: I am also involved in the development of a Data Engineer, whose job is to carry out
        ETL (Extract, Transform, Load) processes for data used in dashboard applications. In this case, I am responsible
        for ensuring the data is available properly and can be accessed through the dashboard application.
        <br />
        Service Testing: As part of my work, I also test the services that have been developed. This aims to ensure
        optimal quality and performance of the services that have been made.
        <br />
        Application Documentation: In addition, I am also in charge of documenting the applications that have been
        developed. This documentation includes descriptions of the app's features, configurations, and usage guides.
        This documentation is important to make it easier for users to understand and use the application properly.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'viantonugroho@gmail.com',
      href: 'mailto:viantonugroho@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@viantonugroho',
      href: 'https://www.instagram.com/viantonugroho',
    },
    {
      type: ContactType.Github,
      text: 'viantonugroho11',
      href: 'https://github.com/viantonugroho11',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/viantonugroho11'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/muhammad-novianto-nugroho-5993351b4'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/viantonugroho'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/'},
];
