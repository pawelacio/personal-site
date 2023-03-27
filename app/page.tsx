type TimeLineItemType = {
  year: string;
  description: string;
};

type SkillItemType = {
  category: string;
  skills: string[];
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
  { year: '2022', description: 'Become AWS Certified Cloud Practitioner' }
];

const skills: SkillItemType[] = [
  {
    category: 'Programming Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Web Development Frameworks',
    skills: ['React', 'Next.js']
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
    category: 'Testing Tools',
    skills: ['Jest', 'Enzyme']
  },
  {
    category: 'Other',
    skills: ['AWS']
  }
];

export default function Home() {
  return (
    <main>
      <section id="about" className="py-4">
        <h2 className="text-6xl font-bold py-4">Hello I'm Pawel!</h2>
        <p className="py-1">
          As a passionate frontend developer, I enjoy the art of coding and
          creating innovative new projects. I believe that the key to growth as
          a developer is to constantly seek out new challenges and develop a
          broad range of skills. That's why, in addition to my expertise in
          frontend development, I have also expanded my knowledge to include
          backend development.
        </p>
        <p className="py-1">
          When I'm not working, I like to explore new ideas in cloud-based
          solutions, honing my skills and staying up-to-date with the latest
          trends. Beyond tech, I also have a love for literature and video
          games, and I make it a priority to take time out of my busy schedule
          to enjoy these hobbies. Whether I'm immersed in a great book or
          outside exploring nature, I believe that finding balance between work
          and play is key to staying motivated and engaged in all areas of life.
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
                <div className="font-medium text-gray-400 pr-4">{category}</div>
                <div>{skills.join(', ')}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
