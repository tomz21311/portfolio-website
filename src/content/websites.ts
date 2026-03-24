export const websitesIntro = {
  eyebrow: 'Websites and apps',
  title: "Websites I've Built",
  body: "I've built and launched dozens of websites and app with all different types of functionality, balancing the needs of users and organizations.",
}

export interface WebsiteProject {
  slug: string
  title: string
  description: string
  screenshot: string | null
  additionalScreenshots: string[]
  role: string
  tools: string[]
  liveUrl: string | null
  caseStudy: {
    overview: string
    challenge: string
    solution: string
    outcome: string
  }
}

export const websites: WebsiteProject[] = [
  {
    slug: 'greater-hartford-gives',
    title: 'Greater Hartford Gives Foundation',
    description: 'A new website and full brand relaunch for a 100-year-old organization.',
    screenshot: '/assets/screenshots/greater-hartford-gives.png',
    additionalScreenshots: [],
    role: 'Lead Designer & Developer',
    tools: ['Next.js', 'WordPress', 'CSS', 'Figma'],
    liveUrl: null,
    caseStudy: {
      overview:
        "To coincide with its 100th anniversary in 2025, the Hartford Foundation for Public Giving undertook a complete rebranding, including changing its name to Greater Hartford Gives Foundation. I was tasked with building a new website to align with the launch and serve as the primary reintroduction of the organization to the community.",
      challenge:
        "We weren't just building a new website from scratch; we also had to launch a brand that no one had ever seen, balancing the history and trust of a 100-year-old foundation with the energy and excitement of a new name. This had to be done quietly so as not to spoil the surprise of the brand launch. And we only had 11 months for the project, a shorter timeline than I would've chosen.",
      solution:
        "Because this project was so important to the entire organization, we aimed to be as inclusive as possible. I led a 10-person internal project team and created several opportunities for everyone across the foundation to provide input and feedback. We chose to work with a talented firm from Brooklyn that produced an incredible design and helped us think through site architecture. We also brought back a firm that worked on the branding campaign to help with copywriting, ensuring consistency between the two connected projects. We ended up pairing our modern design with a back-to-basics content approach, reminding visitors (or telling them for the first time) who the Foundation is and what we do. Importantly, we centered the service region using videos, images, and languages, to set an immediate sense of place and feeling of inclusion for visitors.",
      outcome:
        "It wasn't easy, but with a lot of coordination and some long days, we created a website that looked stunning, introduced the Foundation to a new audience, and made long-time stakeholders feel at home. We launched the new brand and website simultaneously at a live event with 1,200 attendees, an event that I also directed. It was an exciting and hectic night! The site has only been live for a few months, but so far the reaction has been extremely positive and we're seeing the analytics slowly trend upwards.",
    },
  },
  {
    slug: 'hartford-art-tour',
    title: 'Hartford Art Tour',
    description:
      'A digtal passport and multimedia storytelling app that highlights public art in Hartford, CT.',
    screenshot: '/assets/screenshots/hartford-art-tour.png',
    additionalScreenshots: [],
    role: 'Lead Designer & Developer',
    tools: ['React', 'Geolocation API', 'CSS', 'CMS'],
    liveUrl: null,
    caseStudy: {
      overview:
        'Hartford Art Tour is a digital passport and multimedia storytelling app that invites residents and visitors to discover public art across Hartford, Connecticut. Users check in at art locations, unlock stories about the artists and works, and track their progress through the tour.',
      challenge:
        'The project needed to balance accessibility, mobile-first usability, and rich storytelling — all while supporting a geolocation-based experience that worked reliably in an urban environment.',
      solution:
        'I designed and built the app with a focus on progressive enhancement: the experience works without geolocation enabled but rewards users who allow location access. Each artwork has its own multimedia story page featuring artist interviews, historical context, and imagery.',
      outcome:
        'The app launched as part of a broader public art initiative and drove measurable foot traffic to featured artworks, with strong engagement on the storytelling content.',
    },
  },
  {
    slug: 'nonprofit-consultant-directory',
    title: 'New England Nonprofit Consultant Directory',
    description:
      'A site for nonprofits to discover and hire consultants by specialty area, using a custom algorithm.',
    screenshot: '/assets/screenshots/nonprofit-consultant-directory.png',
    additionalScreenshots: [],
    role: 'Lead Designer & Developer',
    tools: ['WordPress', 'Custom PHP', 'JavaScript', 'CSS'],
    liveUrl: null,
    caseStudy: {
      overview:
        'A regional directory connecting nonprofits across New England with vetted consultants organized by specialty area. The platform uses a custom matching algorithm to surface the most relevant consultants for each organization\'s needs.',
      challenge:
        'Nonprofits often struggle to find specialized consultants with sector experience. Generic job boards and Google searches return too much noise. The challenge was to build a focused, trustworthy resource specifically for the nonprofit community.',
      solution:
        'I built a custom directory with a multi-faceted filtering system — by specialty, organization size, budget range, and geography. The matching algorithm weights consultant profiles based on relevance to the searcher\'s needs, surfacing the most appropriate matches first.',
      outcome:
        'The directory became a go-to resource for New England nonprofits seeking specialized expertise, with strong adoption from both organizations and consultants seeking to connect with mission-driven clients.',
    },
  },
  {
    slug: 'nonprofit-support-program',
    title: 'Nonprofit Support Program',
    description:
      'A website that quickly and intuitively connects local nonprofits to resources and supports.',
    screenshot: '/assets/screenshots/nonprofit-support-program.png',
    additionalScreenshots: [],
    role: 'Lead Designer & Developer',
    tools: ['WordPress', 'JavaScript', 'CSS', 'Airtable'],
    liveUrl: null,
    caseStudy: {
      overview:
        'A resource hub designed to help local nonprofits quickly find and access the support programs available to them — from capacity-building grants to technical assistance, training, and peer learning opportunities.',
      challenge:
        'The existing resource landscape was fragmented across multiple websites and documents. Nonprofits were missing out on support they were eligible for simply because the information was hard to find and navigate.',
      solution:
        'I designed a clean, searchable interface organized around nonprofit needs rather than funder categories. A guided intake flow helps organizations identify which resources apply to their situation, reducing friction and improving discovery.',
      outcome:
        'The site significantly improved resource uptake among local nonprofits and reduced the administrative burden on program staff who previously fielded many of these inquiries by phone or email.',
    },
  },
]
