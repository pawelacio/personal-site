import Image from 'next/image';
import Link from 'next/link';
import HighlightedText from '@/components/HighlightedText';

export const metadata = {
  title: 'Senior Fullstack Engineer | Pawel Kaczmarek',
  description:
    'Senior Fullstack Engineer specializing in React, Next.js, Node.js, and AWS serverless solutions.',
  openGraph: {
    title: 'Senior Fullstack Engineer | Pawel Kaczmarek',
    description:
      'Senior Fullstack Engineer specializing in React, Next.js, Node.js, and AWS serverless solutions.',
    url: 'https://pawelkaczmarek.pl',
    images: [{ url: 'https://pawelkaczmarek.pl/me-sqr2.JPG' }]
  }
};

type TimeLineItemType = {
  year: string;
  description: string;
};

type SkillItemType = {
  category: string;
  skills: string[];
};

type Project = {
  name: string;
  description: string;
  url?: string;
  technologies?: string[];
};

const timeline: TimeLineItemType[] = [
  {
    year: '2014',
    description: 'Started first-class degree at Poznan University of Technology'
  },
  { year: '2017', description: 'Interned at Forcom company' },
  {
    year: '2018',
    description:
      'Completed first-class degree at Poznan University of Technology and started second-class degree in Data Processing Technologies Specialization'
  },
  {
    year: '2018',
    description: 'Began first job as Junior Web Developer at Crafton company'
  },
  { year: '2020', description: 'Joined Cleeng as Frontend Developer' },
  { year: '2022', description: 'Become AWS Certified Cloud Practitioner' },
  {
    year: '2023',
    description: 'Become AWS Certified Solutions Architect - Associate'
  },
  {
    year: '2024',
    description: 'Promoted to Senior Fullstack Engineer at Cleeng'
  }
];

const skills: SkillItemType[] = [
  {
    category: 'Programming Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js']
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js']
  },
  {
    category: 'Backend & Serverless',
    skills: [
      'AWS Lambda',
      'Amazon API Gateway',
      'Amazon DynamoDB',
      'Amazon SQS',
      'Serverless Framework',
      'SST'
    ]
  },
  {
    category: 'Cloud',
    skills: [
      'AWS (Certified Cloud Practitioner, Solutions Architect Associate)'
    ]
  },
  {
    category: 'Design Tools',
    skills: ['Figma', 'Adobe XD']
  },
  {
    category: 'Version Control',
    skills: ['Git']
  },
  {
    category: 'Testing',
    skills: ['Jest', 'Enzyme']
  }
];

const projects: Project[] = [
  {
    name: 'Hosted Customer Flows',
    description:
      'Suite of embeddable subscription widgets (Auth, Checkout, Account Management) that publishers integrate into their websites via a single script tag. Widgets are served from a Next.js app running on AWS ECS behind CloudFront CDN, with cross-domain iframe communication handled by a Vite-built embed script. Infrastructure managed with Terraform across multiple environments, deployed via GitHub Actions with per-PR preview URLs.',
    url: 'https://developers.cleeng.com/docs/implementing-hosted-customer-flows',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'AWS ECS',
      'CloudFront',
      'Terraform',
      'Docker',
      'Vite'
    ]
  },
  {
    name: 'mediastore-sdk',
    description:
      'Component library for building a seamless checkout and account management process with Cleeng solution',
    url: 'https://github.com/Cleeng/mediastore-sdk',
    technologies: ['React', 'TypeScript', 'styled-components']
  }
];

export default function Home() {
  return (
    <main>
      <section id="about" className="pb-4">
        <div className="flex flex-row items-center pb-4">
          <Image
            src="/me-sqr2.JPG"
            alt="Me Myself and I"
            width={100}
            height={100}
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          />
          <h2 className="text-3xl font-bold pl-4 md:text-4xl">
            Hello I'm Pawel!
          </h2>
        </div>
        <p className="py-1">
          As a passionate{' '}
          <HighlightedText>Senior Fullstack Engineer</HighlightedText>, I enjoy
          the art of coding and building reliable, scalable products. I believe
          that the key to growth as a developer is to constantly seek out new
          challenges and develop a broad range of skills. Over the years I've
          grown from frontend expertise into{' '}
          <HighlightedText>backend development</HighlightedText> and{' '}
          <HighlightedText>cloud architecture</HighlightedText> — working with
          serverless solutions on AWS to build fast, cost-efficient APIs.
        </p>
        <p className="py-1">
          When I'm not working, I like to explore new ideas in{' '}
          <HighlightedText>cloud-based solutions</HighlightedText>, honing my
          skills and staying up-to-date with the latest trends. Beyond tech, I
          also have a love for literature and video games, and I make it a
          priority to take time out of my busy schedule to enjoy these hobbies.
          Whether I'm immersed in a great book or outside exploring nature, I
          believe that finding balance between work and play is key to staying
          motivated and engaged in all areas of life.
        </p>
      </section>
      <section id="timeline" className="py-4">
        <h2 className="text-xl font-bold pb-4">Timeline</h2>
        <ul>
          {timeline.map(({ year, description }) => (
            <li key={year} className="py-2">
              <div className="flex flex-row flex-nowrap">
                <div className="font-medium text-gray-400 pr-4">{year}</div>
                <div>{description}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section id="skills" className="py-4">
        <h2 className="text-xl font-bold pb-4">Skills</h2>
        <ul>
          {skills.map(({ category, skills }) => (
            <li key={category} className="py-2">
              <div className="flex flex-row flex-nowrap">
                <div className="font-medium text-gray-400 pr-4 basis-1/2 md:basis-1/3">
                  {category}
                </div>
                <div className="basis-1/2 md:basis-2/3">
                  {skills.join(', ')}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section id="projects" className="py-4">
        <h2 className="text-xl font-bold pb-4">Projects</h2>
        <ul>
          {projects.map(({ name, description, technologies, url }) => (
            <li key={name} className="py-2">
              <div className="flex flex-row flex-nowrap">
                <div className="font-medium text-gray-400 pr-4 basis-1/3">
                  {url ? (
                    <Link
                      href={url}
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {name}
                    </Link>
                  ) : (
                    <>{name}</>
                  )}
                </div>
                <div className="basis-2/3">
                  <div className="">{description}</div>
                  {technologies && (
                    <div className="mt-2 font-medium">
                      <span className="">Technology used:</span>{' '}
                      <span className="">{technologies.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
