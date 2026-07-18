/**
 * CENTRAL CONTENT FILE
 * ---------------------------------------------------------------------------
 * This is the single place to edit all copy on the site. Every string here
 * either came from a verifiable public source (cited in a comment) or is a
 * clearly-marked placeholder. Do NOT let placeholders leak into copy without
 * the PLACEHOLDER wrapper below — it renders a visible flag in dev builds
 * so we never accidentally ship a made-up fact to the client.
 *
 * Sources used so far (the live site itself could not be fetched directly —
 * network policy blocked sherrdev.com for this session):
 *  - Real screenshots of the live homepage sent by the client (2026-07-17) —
 *    anything cited "homepage screenshot" below is verbatim/confirmed.
 *  - Search-engine snippets referencing sherrdev.com pages (page titles/URLs
 *    are reliable; body copy summaries are NOT verbatim and are treated as
 *    placeholders, not fact) — still the only source for pages we haven't
 *    gotten screenshots of yet.
 *  - Third-party directories (ZoomInfo, RocketReach, Yelp) for
 *    address/phone, since confirmed exactly by the homepage screenshot too.
 *
 * TODO: replace every remaining PLACEHOLDER(...) with real copy/photos from
 * the client, page by page.
 * ---------------------------------------------------------------------------
 */

import stuartSherrPhoto from "../assets/team/stuart-sherr.jpeg";
import rogerSherrPhoto from "../assets/team/roger-sherr.jpeg";
import mikeKellyPhoto from "../assets/team/mike-kelly.jpeg";
import josephInwaldPhoto from "../assets/team/joseph-inwald.png";

/** Wraps text that has NOT been confirmed against the real site. */
export const PLACEHOLDER = (label: string) => `[PLACEHOLDER: ${label}]`;

export const siteMeta = {
  name: "Sherr Development",
  legalName: "Sherr Development Corporation",
  // Page <title> seen in search results: "Sherr – Construction • Development • Management"
  tagline: "Construction • Development • Management",
  // Confirmed verbatim from homepage screenshot footer ("FIND US")
  phone: "(248) 626-9099",
  address: {
    line1: "31300 Orchard Lake Rd, Suite 200",
    line2: "Farmington Hills, MI 48334",
  },
  email: PLACEHOLDER("contact email not yet confirmed"),
};

export type NavLink = {
  label: string;
  path: string;
  // The real, indexed URL on sherrdev.com this maps to, when known.
  sourceUrl?: string;
};

export type NavGroup = {
  label: string;
  items: NavLink[];
};

export type NavEntry = NavLink | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return "items" in entry;
}

/**
 * Header nav structure, per the client's explicit direction (2026-07-17):
 * Home / Company (dropdown) / Properties (dropdown) / Employment / Contact.
 * sourceUrl is set where we've confirmed a matching indexed page on
 * sherrdev.com; omitted for pages that are new additions (Blue Box
 * Management, Gallery) with no confirmed real-site equivalent yet.
 */
export const navItems: NavEntry[] = [
  { label: "Home", path: "/", sourceUrl: "https://sherrdev.com/" },
  {
    label: "Company",
    items: [
      { label: "Company History", path: "/company-history" },
      { label: "Company Profile", path: "/company-profile", sourceUrl: "https://sherrdev.com/company-profile/" },
      { label: "Team", path: "/team", sourceUrl: "https://sherrdev.com/ourteam/" },
      { label: "Blue Box Management", path: "/blue-box-management" },
      { label: "Sherr Joint Venture", path: "/joint-venture", sourceUrl: "https://sherrdev.com/sherr-joint-venture/" },
    ],
  },
  {
    label: "Properties",
    items: [
      { label: "Multifamily Housing", path: "/multifamily-housing", sourceUrl: "https://sherrdev.com/apartments/" },
      {
        label: "Single Family Homes and Attached Condos",
        path: "/single-family-homes",
        sourceUrl: "https://sherrdev.com/homes/",
      },
      {
        label: "Commercial Properties and Net Investments",
        path: "/commercial-properties",
        sourceUrl: "https://sherrdev.com/commercial-properties/",
      },
      { label: "Gallery", path: "/gallery" },
    ],
  },
  { label: "Employment", path: "/employment", sourceUrl: "https://sherrdev.com/employment/" },
  { label: "Contact", path: "/contact", sourceUrl: "https://sherrdev.com/contact/" },
];

export type TeamMember = {
  name: string;
  title: string;
  bio: string;
  photo: string;
};

/** Confirmed verbatim from a screenshot of sherrdev.com/ourteam/. */
export const teamHeading =
  "Our Team Of Professionals Have Been Developing, Building And Managing Real Estate Investments For More Than 90 Years";

/**
 * Confirmed verbatim from a screenshot of sherrdev.com/ourteam/. Note: an
 * earlier draft included a "Mary Ellen / Controller" entry sourced only
 * from a search-engine summary — she does not appear on the real team
 * page (4 members shown, ending at Joseph M. Inwald, before the footer),
 * so that entry has been removed rather than kept unconfirmed.
 */
export const team: TeamMember[] = [
  {
    name: "Stuart D. Sherr",
    title: "Co-President",
    bio: "Stuart manages the land acquisitions, planning, development, engineering, budgeting and administration of all contracts, leases, and legal matters. Responsibilities also include the preparation of feasibility studies and extensive site plan analysis for both commercial and residential properties. Finally, for new developments Stuart works with municipalities and community groups to balance the needs and objectives of each project in order to achieve site plan approval. Educated in business, finance, accounting, and law, Stuart Sherr's credentials include a Bachelor of Science in Economics, with majors in Accounting and Finance from The Wharton School, University of Pennsylvania, a Juris Doctor degree from Wayne State Law School, a Certified Public Accountant license, and a real estate broker license.",
    photo: stuartSherrPhoto,
  },
  {
    name: "Roger M. Sherr",
    title: "Co-President",
    bio: "Roger's responsibilities include evaluating the feasibility of new commercial and residential projects, analyzing multifamily properties for acquisition and/or repositioning, arranging debt and equity financing for projects, monitoring budgets, and conducting variance analysis for each project during development and operation. Roger Sherr is educated in business, finance, and law with credentials that include a Bachelor of Science in Economics, with majors in accounting and finance, from The Wharton School, University of Pennsylvania, and a Juris Doctor degree from the University of Michigan Law School.",
    photo: rogerSherrPhoto,
  },
  {
    name: "Mike Kelly",
    title: "Director of Operations and Capital Projects",
    bio: "Mike Kelly is our Director of Operations for our apartment communities and commercial properties. Mike develops and implements annual operating budgets, rental pricing strategies, expense control procedures, general operating procedures and capital improvement plans for our property management affiliate, Blue Box Management. He is also responsible for implementing and promoting software systems that improve operating efficiency. Providing supreme customer service for all tenants, residents and ownership groups is a top priority for Mike and his team. Mike has an extensive background in property management with degrees in Business Management, Finance and Economics from Northwood University.",
    photo: mikeKellyPhoto,
  },
  {
    name: "Joseph M. Inwald",
    title: "Risk Management & Insurance",
    bio: "Joseph Inwald handles risk management and insurance oversight functions at Sherr Development. He has extensive experience evaluating and serving the insurance needs of developers with portfolios of industrial, office, retail, and multifamily properties whose values exceed $1.5 billion. He also served as an officer at J&H, a NYSE listed Insurer. He is a CPCU and a member of RIMS. He is educated in business, insurance, and law with credentials including a Bachelor of Science degree from The Wharton School, University of Pennsylvania, and a Juris Doctor degree from the University of Michigan Law School.",
    photo: josephInwaldPhoto,
  },
];

export type Division = {
  name: string;
  /** Short tagline, confirmed verbatim from the homepage screenshot's three division cards. */
  summary: string;
  /** Longer copy, confirmed verbatim from the flip-side of each card on the live site. */
  description: string;
};

/**
 * Confirmed verbatim from the homepage screenshot's three cards (the site
 * shows these as tap-to-flip cards; we show both sides at once instead —
 * see the design note on the Home/CompanyProfile divisions section). Note:
 * Sherr Joint Ventures (SJV) is NOT one of these three homepage cards — it
 * has its own nav page (see `jointVenture` below).
 */
export const divisions: Division[] = [
  {
    name: "Sherr Development Corporation",
    summary: "Creating value in real estate",
    description:
      "A private real estate investment firm with a proven track record of creating value and generating attractive returns in real estate.",
  },
  {
    name: "Blue Box Management LLC",
    summary: "Managing for performance",
    description:
      "Adhering to the best management practices in the industry with a focus on maximizing asset performance.",
  },
  {
    name: "Sherr Capital LLC",
    // Source reads "Stength" (typo) — corrected to "Strength" here. Flagged
    // to the client; revert if they'd rather match the live site exactly.
    summary: "Providing financial strength to support real estate endeavors",
    description:
      "Making available the necessary capital and talent through the entire life cycle of real estate projects.",
  },
];

/** Confirmed verbatim from the homepage's "PROJECT LOCATION MAP" graphic. */
export const projectLocations: string[] = ["California", "Florida", "Hawaii", "Michigan", "Oklahoma", "Utah"];

/** Confirmed verbatim from a screenshot of sherrdev.com/company-history/. */
export const companyHistory = {
  founderName: "I. William Sherr",
  missionHeading: "Our Mission, to Create Value for Investors, Follows Directly from the Early Mission of our Founder",
  paragraphs: [
    "I. William Sherr started SDC immediately after the sale of Frank's Nursery and Crafts, Inc., a highly successful 150 store garden center chain selling lawn, garden and craft merchandise.",
    "Mr. Sherr founded Frank's Nursery in the early 1950s. Starting from a single store on Detroit's east side, he grew Frank's into the nation's largest garden center and craft merchandise chain. Under Mr. Sherr's leadership, not only did Frank's achieve high single digit annual growth rates for same-store-sales but it also achieved annual compound growth rates for earnings and return on equity in excess of fifteen percent.",
    "Like his mission at Frank's, Mr. Sherr established a similar mission at SDC — to create value for investors in real estate while beautifying the neighborhood and contributing to the community.",
  ],
};

/** Confirmed verbatim from screenshots of sherrdev.com/company-profile/ (client-supplied, 2026-07-18). */
export const companyProfile = {
  heading: "Profile",
  subheading: "We Concentrate on Adding Value to Identified Properties",
  paragraphs: [
    'Sherr Development Corporation ("SDC") is engaged in homebuilding including the design and development of single family and multi-family residential communities, commercial shopping center development, and property management. Since 1985, we have developed and managed over one million sq. ft. of commercial property and have developed, constructed, and sold over two thousand single family homes and condominiums. Commercial property development has ranged from small neighborhood shopping centers to large big-box regional power centers. Single family homes and condominiums have been constructed and sold in communities designed and developed by SDC.',
    'Value creation is the primary criterion for each of our real estate investments. While everyone attempts to "buy low and sell high", we concentrate on identifying properties where we can create value either through building new residential communities in desirable areas or by repositioning an existing development with prudent upgrades. An example of repositioning is evidenced in our multifamily apartment portfolio. Our strategy is to purchase "C" properties with an average of 200 units, make targeted improvements that were not obvious or feasible by prior ownership, and convert them into "B" properties whereby rents and corresponding returns can be increased.',
    "To date, the risk-adjusted returns on projects undertaken by SDC have been exceptional. The internal rate of return on residential home building projects has averaged in excess of 100 percent; the internal rate of return on the repositioning of commercial and multifamily properties has averaged in excess of 50 percent. Creating value with new development and unlocking value from existing developments will continue to be the primary objective of the team at SDC.",
    "Geographically, SDC has focused on select markets within the United States. The primary areas have been in southeast Michigan and southern California; other areas of activity have included Utah, Hawaii, and Florida. With a proven ability to successfully invest and manage developments in different states, we will continue to explore new markets when opportunities are uncovered or presented.",
  ],
  valueCreated: {
    headline: "Over $600 Million in Transaction Value Created by SDC",
    // Amounts in millions, ordered high to low (matches the source graphic's slice order).
    breakdown: [
      { label: "Residential Home Sales", millions: 350 },
      { label: "Commercial", millions: 210 },
      { label: "Multifamily", millions: 46 },
      { label: "Other", millions: 10 },
    ],
  },
};

/** Confirmed verbatim from screenshots of sherrdev.com/blue-box-management/ (client-supplied, 2026-07-18). */
export const blueBoxManagement = {
  heading: "Blue Box Management",
  subheading: "We Effectively Track and Analyze Each Property",
  paragraphs: [
    "Blue Box Management is a full-service property management company that specializes in 24-hour a day, seven days a week, management of both multifamily and commercial assets. Our seasoned professionals understand the value of earning and maintaining the trust of our residents, tenants, clients and vendors. This value is specifically evident in the long-term relationships we have with customers and suppliers as well as the superior performance of the properties we manage. With an experienced management team and an extensive track record of creating value in real estate, Blue Box takes over the daily stresses of managing real estate while offering our owners and investors the opportunity for enhanced returns.",
    "Blue Box Management systematically oversees the physical condition and financial operation of each property. We provide the same high quality services to all clients regardless of the size of the asset. Blue Box Management uses of the industry's leading software programs which allows for the most effective revenue and expense tracking along with corresponding data analytics. We pride ourselves on improving the performance of each property in all areas while providing clients with transparent, up-to-date reporting.",
  ],
  categories: [
    {
      title: "Multi-Family Property Management",
      items: [
        "Daily operations, resident relations, and full service maintenance",
        "Rent collection, tracking, and coordination of legal filings",
        "Vendor and Contractor Management – developing and maintaining contracts and relationships",
        "Human Resource Management – hiring, coaching, motivating and supervising personnel",
        "Time keeping and payroll services",
      ],
    },
    {
      title: "Leasing and Marketing",
      items: [
        "Customer Relationship Management using state of the art software",
        "Data driven, professional, and innovative rent pricing analyses, strategies, and consistent implementation",
        "Detailed marketing plans to attract new residents and tenants",
        "Strategic retention activities to reduce turnover",
        "Facilitation of tenanting commercial space using brokerage services",
      ],
    },
    {
      title: "Inspection, Maintenance and Value-Add Improvements",
      items: [
        "Overseeing local and state required inspections",
        "Repairs for general and emergency maintenance issues (24-hours/day)",
        "Preparing rental space for residential and commercial customers",
        "Weekly inspections of assets and move-in / move-out inspection reports",
        "Development and execution of value-add improvement plans and capital improvements",
      ],
    },
    {
      title: "Financial Management and Reporting",
      items: [
        "Competitively bidding and tracking of contracts",
        "Annual, or more frequent, budgeting for revenue and expenses",
        "Monthly operating statements with variance reporting",
        "Processing of invoices and CAM invoicing of tenants",
        "On staff Certified Public Accountants and liaisons with outside accounting services",
      ],
    },
    {
      title: "Management of Legal Services, Compliance, and Insurance",
      items: [
        "Address compliance with Federal, State, and municipal requirements",
        "Coordinating Legal services to manage all types of resident and tenant issues",
        "Coordinating efforts to gain municipal approvals",
        "Guide annual mortgage inspection compliance efforts",
        "Insurance coverage auditing and provision of program recommendations, (e.g., coverage, brokerage, and Insurers). Assist with addressing claims and loss control requirements",
      ],
    },
  ],
};

export const heroImage = {
  src: null as string | null,
  // Confirmed subject from homepage screenshot: a city skyline over water
  // (Detroit riverfront, GM Renaissance Center visible) — still need the
  // actual photo file from the client to use it here.
  alt: PLACEHOLDER("hero photo not yet supplied — send the real skyline photo file used on the homepage"),
};

/** Confirmed verbatim from the homepage hero banner (overlaid on the skyline photo). */
export const heroHeadline = "Identifying and Creating Value in Real Estate";

/** Confirmed verbatim from the homepage "A Full-Service Real Estate Company" section. */
export const homeIntroHeading = "A Full-Service Real Estate Company";
export const homeIntro =
  "Sherr Development is a residential and commercial development company focused on creating value in real estate. Our primary activities include land development, homebuilding, and the acquisition, development and management of multifamily and commercial properties. The team of professionals at Sherr Development is hands-on, hardworking and experienced. With a dedication to serving the needs of our customers, investors and the communities in which we operate, Sherr Development has demonstrated a 20-year track record of consistently identifying properties which provide outstanding risk-adjusted returns.";

export type PropertyCategory = {
  slug: string;
  title: string;
  intro: string;
  // Real property/project names go here once supplied — deliberately empty now.
  listings: { name: string; location: string }[];
};

export const propertyCategories: PropertyCategory[] = [
  {
    slug: "single-family-homes",
    title: "Single Family Homes and Attached Condos",
    intro: PLACEHOLDER("Homes page intro copy — verify against sherrdev.com/homes/"),
    listings: [],
  },
  {
    slug: "multifamily-housing",
    title: "Multifamily Housing",
    intro: PLACEHOLDER("Apartments page intro copy — verify against sherrdev.com/apartments/"),
    listings: [
      // Confirmed a real property page exists: sherrdev.com/mapletree-apartments/
      // Name only, no description yet — do not invent details.
    ],
  },
  {
    slug: "commercial-properties",
    title: "Commercial Properties and Net Investments",
    intro: PLACEHOLDER("Commercial Properties page intro copy — verify against sherrdev.com/commercial-properties/"),
    listings: [],
  },
];

/**
 * Confirmed verbatim from screenshots of sherrdev.com/sherr-joint-venture/
 * (client-supplied, 2026-07-18). Has its own page/layout rather than the
 * generic PropertyCategoryPage template — it's an editorial page (mission +
 * named scenarios), not a property listing grid.
 */
export const jointVenture = {
  heading: "Joint Venture",
  whoWeAre: {
    heading: "Who We Are",
    paragraphs: [
      'Sherr Joint Ventures ("SJV") is a division of Sherr Development Corporation which offers capital and assistance to third parties in real estate ventures. Under SJV, the professionals at SDC can analyze the budget and marketing strategy for your project, help with changes and recommendations, and provide the necessary capital and talent to complete the project.',
    ],
    leadIn: "The primary types of scenarios in which the SJV structure works, are as follows:",
  },
  scenarios: [
    {
      title: "Land Development",
      text: "The owner(s) of vacant land would like to participate in the development of the property but do not have the capital. Under SJV, ownership can partner with us and we bring the capital and expertise for development of the residential, multifamily, or commercial project.",
    },
    {
      title: "Project Completion",
      text: "A real estate project has been started but additional capital is required. The project may be over budget or simply needing additional marketing talent or capital for upgrades or completion. In either case, the SJV structure brings the capital and expertise to partner with existing ownership and ensure that the project is successful. In many instances, SJV can help the initial owners avoid a forced sale.",
    },
    {
      title: "Estate Planning",
      text: "When ownership would like to sell, but tax consequences make a conventional sale too costly, SJV can help to restructure the financing and recapitalize the property such that: (1) distributable funds can be made immediately available to ownership; (2) the project can receive the capital it may need for further improvements or upgrades; and (3) tax consequences can be either eliminated or significantly improved. SJV can also assist in situations where ownership of a property consists of several partners which have different tax consequences upon a sale. Under this scenario, not all partners may have the same motivation to sell. SJV can restructure the partnership and achieve an effective sale for some partners and provide a tax-free distribution to others with continued ownership participation. The restructuring of course will depend on the facts and circumstances of each situation.",
    },
  ],
  mission: {
    heading: "Our Mission",
    paragraphs: [
      "Under SJV our mission is simple: to ensure that a real estate project is successful for ownership. By investing in a project and having a stake in its success, we make certain that our interests and existing ownership interests are aligned. Not all projects are suited or qualify for SJV involvement; however, when the joint venture makes sense and we are involved, we can make sure the project will overcome road blocks that often get in the way.",
      "The professionals at SDC are trained in law, accounting, finance, land development and construction. Over the past thirty years, the company has successfully developed land for and constructed thousands of residential homes, major shopping centers and multifamily communities. With an educated and experienced professional staff combined with a strong capital position, we would welcome the opportunity to evaluate a joint venture real estate project with you.",
    ],
  },
};

export const galleryIntro = PLACEHOLDER(
  "Gallery page — no real project photos supplied yet. Send photos and we'll build this out."
);

/**
 * Confirmed verbatim from the homepage screenshot's footer nav row:
 * "Home | Company | Contact | Employment". This is a condensed subset —
 * the fuller header nav structure (with Company/Properties dropdowns) is
 * in `navItems` above, per the client's explicit direction.
 */
export const footerNavItems: NavLink[] = [
  { label: "Home", path: "/", sourceUrl: "https://sherrdev.com/" },
  { label: "Company", path: "/company-profile", sourceUrl: "https://sherrdev.com/company-profile/" },
  { label: "Contact", path: "/contact", sourceUrl: "https://sherrdev.com/contact/" },
  { label: "Employment", path: "/employment", sourceUrl: "https://sherrdev.com/employment/" },
];

export const testimonials: { quote: string; attribution: string }[] = [
  // Intentionally empty: no testimonials found. Do not invent any.
];

export const pricing: { label: string; detail: string }[] = [
  // Intentionally empty: this is a real estate developer, not a priced
  // service menu. Leave empty unless the client says otherwise.
];
