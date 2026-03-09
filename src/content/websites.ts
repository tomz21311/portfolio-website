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
        'A complete digital overhaul for Greater Hartford Gives Foundation, a century-old philanthropic organization. The project included a full brand relaunch alongside a new website designed to connect donors, nonprofits, and the broader community.',
      challenge:
        'The organization needed a modernized digital presence that honored its long history while signaling a forward-looking mission. The existing site was outdated and did not reflect the scale or impact of the foundation\'s work.',
      solution:
        'I led the design and development of a new website built around clear user journeys for donors, nonprofits, and community members. The brand system was rebuilt from the ground up — new typography, color system, and visual language — then applied consistently across all digital touchpoints.',
      outcome:
        'The relaunched site significantly improved engagement metrics and gave the organization a digital presence that matched the ambition of its work.',
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
