// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update the website – no other code changes needed.
// ─────────────────────────────────────────────────────────────
export const profile = {
  name: 'Ekeh Precious Maro',
  tagline: 'Social Impact. Technology and Innovation. Programme Management.',
  portrait: null, // e.g. '/portrait.jpg' (put the approved photo in /public)
  email: '', // TODO: preferred professional email
  linkedin: '', // TODO: LinkedIn profile URL
  otherLinks: [], // e.g. [{ label: 'GitHub', href: 'https://…' }]
  launchYear: new Date().getFullYear(),
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Experience & Projects', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const heroIntro = [
  'I am driven by a clear purpose: to make education more accessible, expand opportunities for young people, strengthen organisations’ impact, and develop solutions that address real challenges in people’s lives.',
  'With a background in Mechatronics and Systems Engineering and experience spanning nonprofit leadership, programme management, partnerships, youth development, and technology-driven innovation, I bring together technical thinking and people-centred approaches to turn ideas into practical solutions and effective programmes.',
  'My work focuses on building stronger systems, creating opportunities for young people and underserved communities, and supporting solutions that can grow and deliver lasting impact.',
]

export const aboutPreview = [
  'My professional journey spans social impact, technology innovation, and programme management, with a focus on turning ideas into practical solutions that respond to real needs.',
  'My experience includes programme leadership and implementation, partnership development, youth-focused initiatives, and exploring how technology and innovation can address practical challenges.',
  'I am particularly interested in work that makes education more accessible, expands opportunities for young people, and strengthens the systems and organisations that support lasting change.',
]

export const pillars = [
  { icon: 'impact', title: 'Social Impact', text: 'I contribute to initiatives that expand opportunities for young people, strengthen communities, and promote inclusive development. My areas of interest include youth development, civic engagement, girls’ empowerment, and community-focused initiatives.' },
  { icon: 'tech', title: 'Technology & Innovation', text: 'I apply my engineering background and explore digital and technical solutions to practical challenges. My areas of interest include mechatronics, embedded systems, digital solutions, electronics, and clean energy solutions.' },
  { icon: 'programme', title: 'Programme Management', text: 'I support the planning, implementation, coordination, and delivery of programmes and projects.' },
]

export const journey = [
  'I am Ekeh Precious Maro, a Mechatronics and Systems Engineer working across social impact, technology, and programme management.',
  'My background in engineering shaped my interest in understanding problems, developing solutions, and exploring how systems and technology can improve the way people live and work.',
  'Over time, my professional experience has also grown through programme implementation, partnerships, youth development initiatives, organisational initiatives, and community-focused work. These experiences have strengthened my interest in connecting technical thinking with effective programme delivery and meaningful social change.',
  'I believe that ideas become more valuable when they respond to real needs, are implemented thoughtfully, and create opportunities that people can access and benefit from.',
]

export const drivers = [
  { title: 'Practical innovation', text: 'Exploring solutions that respond to real challenges and can be applied in meaningful ways.' },
  { title: 'People-centred development', text: 'Contributing to initiatives that expand opportunities for young people and underserved communities.' },
  { title: 'Effective implementation', text: 'Helping translate ideas and plans into organised activities, programmes, and tangible outputs.' },
  { title: 'Continuous learning', text: 'Developing my knowledge and skills across technology, programme management, and social innovation.' },
]

export const focusAreas = [
  'Social impact and youth development', 'Technology and engineering innovation', 'Programme planning and implementation',
  'Project development and coordination', 'Partnerships and organisational development', 'Digital skills and capacity development',
]

export const education = { degree: 'Mechatronics and Systems Engineering', school: 'Abubakar Tafawa Balewa University (ATBU), Nigeria', note: '' }

// Placeholders – replace with verified details (see "Information required before launch").
export const experience = [
  { placeholder: true, role: 'Role title', org: 'Organisation', period: 'Dates', text: 'Add a short, verified description of responsibilities and outcomes.' },
  { placeholder: true, role: 'Role title', org: 'Organisation', period: 'Dates', text: 'Add a short, verified description of responsibilities and outcomes.' },
]
export const projects = [
  { placeholder: true, title: 'Featured project', status: 'Status', text: 'A concise description of the project, your role, and verified outcomes.' },
  { placeholder: true, title: 'Featured project', status: 'Status', text: 'A concise description of the project, your role, and verified outcomes.' },
  { placeholder: true, title: 'Featured project', status: 'Status', text: 'A concise description of the project, your role, and verified outcomes.' },
]
export const achievements = [
  { placeholder: true, title: 'Fellowship, award or leadership role', text: 'Add a verified achievement with year and awarding body.' },
  { placeholder: true, title: 'Technical project or certification', text: 'Add a verified achievement with year and awarding body.' },
  { placeholder: true, title: 'Professional development', text: 'Add a verified achievement with year and awarding body.' },
]

export const servicesIntro = 'I support organisations, businesses, teams, and individuals working to turn ideas into practical programmes, projects, and solutions. Requests are assessed based on scope, required expertise, availability, timeline, and agreed terms.'

export const services = [
  { id: 'programme', icon: 'programme', title: 'Programme Development & Management', audience: 'NGOs, nonprofits, social enterprises, and organisations delivering projects or programmes.',
    text: 'I provide support for planning, organising, coordinating, and implementing programmes and projects. My approach focuses on helping teams structure activities, clarify deliverables, and move from plans to implementation.',
    items: ['Programme planning and implementation support', 'Project coordination and delivery', 'Activity planning and workplan development', 'Programme documentation and reporting support', 'Support with organising programme activities and deliverables'],
    note: 'Possible engagements: short-term assignments, defined project support, and programme coordination engagements.', cta: 'Apply for Programme Support' },
  { id: 'project', icon: 'project', title: 'Project Design & Proposal Support', audience: 'Emerging organisations, community initiatives, social enterprises, and individuals developing projects.',
    text: 'I help turn ideas into clearly structured projects by supporting concept development, project planning, proposal preparation, and the identification of relevant funding opportunities.',
    items: ['Project concept development', 'Proposal and application writing support', 'Project frameworks and activity planning', 'Opportunity research', 'Project objectives, outputs, and deliverable development'],
    note: 'Funding decisions remain the responsibility of the relevant funder. Proposal support does not guarantee funding.', cta: 'Apply for Project Support' },
  { id: 'technology', icon: 'tech', title: 'Technology & Digital Solutions', audience: 'Individuals, small organisations, startups, and early-stage ventures.',
    text: 'I support selected technology and digital projects by combining technical knowledge with practical problem solving. Each engagement is defined according to the project requirements and the technical services I can confidently deliver.',
    items: ['Basic website development and digital presence support', 'Digital tools for organising programmes and workflows', 'Technical project planning and prototyping support', 'Early-stage technology and innovation project assistance'],
    note: 'The scope, deliverables, and feasibility of each technical engagement must be agreed before work begins.', cta: 'Apply for Technology Support' },
  { id: 'training', icon: 'training', title: 'Training & Capacity Development', audience: 'Young people, schools, teams, community organisations, and early-career professionals.',
    text: 'I support learning and capacity development through practical, accessible sessions that introduce participants to relevant digital, technical, and programme delivery skills.',
    items: ['Digital skills and web development', 'Electronics and embedded systems', 'Project planning and programme delivery fundamentals', 'Youth-focused innovation and career sessions'],
    note: 'Training topics, format, duration, participant requirements, and materials will be agreed according to the needs of each engagement.', cta: 'Apply for Training' },
]

export const engagements = [
  { title: 'Paid services', text: 'Work delivered under agreed fees, scope, timelines, and terms.' },
  { title: 'Collaborations', text: 'Joint initiatives, partnerships, and projects where roles, responsibilities, and contributions are agreed.' },
  { title: 'Pro bono opportunities', text: 'Selected engagements offered without professional fees where there is a clear purpose, suitable scope, and mutual agreement. Pro bono work is subject to availability and selection and is not guaranteed for every request.' },
]

export const serviceOptions = ['Programme Development & Management', 'Project Design & Proposal Support', 'Technology & Digital Solutions', 'Training & Capacity Development', 'Other / Not Sure Yet']
export const engagementTypes = ['Paid service', 'Collaboration or partnership', 'Pro bono support', 'Open to discussing suitable options']
