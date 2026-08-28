// ============================================================
//  AWS CLOUD TREK — EDITABLE EVENT CONFIGURATION
//  Change anything here and it updates across the whole site.
// ============================================================

export const EVENT = {
  name: 'AWS CLOUD TREK',
  tagline: 'Build with Kiro & Deploy on AWS',
  date: '11–12 September',
  venue: 'TP Block, MLRIT',
  audience: '2nd & 3rd-year students',
  level: 'Beginner-friendly',
  focus: 'AI × Kiro × AWS',
  laptop: 'REQUIRED',
  registrationUrl: 'https://luma.com/8l7c68nm',
};

export const BRANDING = {
  scope: 'SCOPE — MLRIT',
  awsSbg: 'AWS Student Builder Group at MLRIT',
  scopeLogo: '/scope-club-logo.png',
  awsSbgLogo: '/aws-sbg-logo.png',
  awsLogo: '/aws-logo.png',
  awsSbgInstagram: 'https://www.instagram.com/awssbg_mlrit?igsi=MWlvdXpjcHY0dDA3MA==',
  scopeInstagram: 'https://www.instagram.com/mlrit_scope?igsi=ajljbHY3dDM1Y25k',
  awsSbgLinkedin: 'https://www.linkedin.com/company/awscc-mlrit/posts/?feedView=all',
  scopeLinkedin: 'https://www.linkedin.com/company/mlrit-scope/posts/?feedView=all',
};

export const CONTACT = {
  awsSbgInstagram: 'https://www.instagram.com/awssbg_mlrit?igsi=MWlvdXpjcHY0dDA3MA==',
  scopeInstagram: 'https://www.instagram.com/mlrit_scope?igsi=ajljbHY3dDM1Y25k',
  awsSbgLinkedin: 'https://www.linkedin.com/company/awscc-mlrit/posts/?feedView=all',
  scopeLinkedin: 'https://www.linkedin.com/company/mlrit-scope/posts/?feedView=all',
  email: 'scopeclub@mlrinstitutions.ac.in',
  phone1: '+91 70327 93341',
  phone2: '+91 83285 56430',
};

export type GalleryItem = {
  id: string;
  number: string;
  label: string;
  caption: string;
  src: string;
  alt: string;
  rotate: string;
};

// Gallery — 1:1 strict mapping to unique physical photograph files in public/gallery/
export const GALLERY: GalleryItem[] = [
  {
    id: 'gallery01',
    number: '01',
    label: 'FULL HOUSE',
    caption: 'AWS Cloud Trek presentation & hall view',
    src: '/gallery/last-trek-07-workshop.jpg',
    alt: 'Projector screen displaying AWS Cloud Trek presentation in packed classroom',
    rotate: '-rotate-2',
  },
  {
    id: 'gallery02',
    number: '02',
    label: 'THE SPEAKERS',
    caption: 'Keynote introduction & cloud architecture breakdown',
    src: '/gallery/last-trek-01-speaker.jpg',
    alt: 'Speaker presenting AWS Cloud Trek session with microphone',
    rotate: 'rotate-2',
  },
  {
    id: 'gallery03',
    number: '03',
    label: 'PRIZE & HONORS',
    caption: 'Felicitation and project recognition ceremony',
    src: '/gallery/last-trek-03-award.jpg',
    alt: 'Award presentation recognizing student builder at MLRIT',
    rotate: '-rotate-1',
  },
  {
    id: 'gallery04',
    number: '04',
    label: 'THE TEAM',
    caption: 'Mentors, organizers, and all student builders',
    src: '/gallery/last-trek-02-team.jpg',
    alt: 'Full participant and team group photo at MLRIT',
    rotate: 'rotate-2',
  },
  {
    id: 'gallery05',
    number: '05',
    label: 'HACK & COLLAB',
    caption: 'Student builders collaborating and building cloud setups',
    src: '/gallery/last-trek-06-mentor.jpg',
    alt: 'Four students collaborating with smiles over a laptop',
    rotate: '-rotate-2',
  },
  {
    id: 'gallery06',
    number: '06',
    label: 'CLOUD LAB',
    caption: 'Hands-on console setups and live deployment',
    src: '/gallery/last-trek-08-workspace.jpeg',
    alt: 'Students actively working on laptops during cloud workshop',
    rotate: 'rotate-2',
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ: FaqItem[] = [
  {
    question: 'Who Can Attend?',
    answer:
      'AWS Cloud Trek is designed primarily for 2nd and 3rd-year students and is beginner-friendly.',
  },
  {
    question: 'What Skills Do I Need?',
    answer:
      'The workshop is beginner-friendly and focuses on learning through hands-on development. Any specific prerequisites or preparation requirements will be communicated to participants in advance.',
  },
  {
    question: 'Is Coding Required?',
    answer:
      'The workshop involves building applications, working with code and deploying projects. You do not need to be an advanced developer — the workshop is designed to introduce these concepts step by step.',
  },
  {
    question: 'What Is Kiro?',
    answer:
      'Kiro is a development environment that helps developers build applications with AI-assisted workflows. The workshop introduces prompting, project context, code generation, debugging, testing and Kiro\'s spec-driven development approach.',
  },
  {
    question: 'What Will I Learn?',
    answer:
      'You will explore AI-assisted development, Kiro, application building, APIs, basic databases, Git & GitHub, cloud fundamentals, security basics and application deployment.',
  },
  {
    question: 'Will the Workshop Be Hands-On?',
    answer:
      'Yes. The workshop is designed around hands-on learning, taking participants through the journey from an application idea to a working and deployed application.',
  },
  {
    question: 'Will We Deploy an Application on AWS?',
    answer:
      'Yes. Application deployment on AWS is a core part of the workshop, taking you from a locally running application toward a live cloud application.',
  },
  {
    question: 'Do I Need a Laptop?',
    answer:
      'Yes. A laptop is required. The workshop includes hands-on development, testing, Git/GitHub work and deployment.',
  },
  {
    question: 'Will I Receive a Certificate?',
    answer:
      'Yes. Participants will receive certifications along with credentials related to Kiro and AWS deployment.',
  },
  {
    question: 'What Comes After the Workshop?',
    answer:
      'The workshop provides a foundation for exploring areas such as DevOps, serverless computing, containers, CI/CD, cloud security, cloud architecture and AI + cloud integration.',
  },
];
