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
 *  - Search-engine snippets referencing sherrdev.com pages (page titles/URLs
 *    are reliable; body copy summaries are NOT verbatim and are treated as
 *    placeholders, not fact)
 *  - Third-party directories (ZoomInfo, RocketReach, Yelp) for
 *    address/phone, cross-checked across multiple sources
 *
 * TODO: replace every PLACEHOLDER(...) with real copy/photos from the
 * client or from a direct site fetch once network access is available.
 * ---------------------------------------------------------------------------
 */

/** Wraps text that has NOT been confirmed against the real site. */
export const PLACEHOLDER = (label: string) => `[PLACEHOLDER: ${label}]`;

export const siteMeta = {
  name: "Sherr Development",
  legalName: "Sherr Development Corporation",
  // Page <title> seen in search results: "Sherr – Construction • Development • Management"
  tagline: "Construction • Development • Management",
  // Confirmed consistently across multiple third-party listings (ZoomInfo, Yelp, RocketReach)
  phone: "(248) 626-9099",
  address: {
    line1: "31300 Orchard Lake Rd, Suite 200",
    line2: "Farmington Hills, MI 48334",
  },
  email: PLACEHOLDER("contact email not yet confirmed"),
};

export type NavItem = {
  label: string;
  path: string;
  // The real, indexed URL on sherrdev.com this maps to, for reference.
  sourceUrl: string;
};

/**
 * Matches page URLs actually indexed under sherrdev.com (confirmed via
 * search, not fabricated). Grouping/order is our best guess and should be
 * checked against the real nav menu once we can see it.
 */
export const navItems: NavItem[] = [
  { label: "Home", path: "/", sourceUrl: "https://sherrdev.com/" },
  { label: "Company Profile", path: "/company-profile", sourceUrl: "https://sherrdev.com/company-profile/" },
  { label: "Our Team", path: "/team", sourceUrl: "https://sherrdev.com/ourteam/" },
  { label: "Homes", path: "/homes", sourceUrl: "https://sherrdev.com/homes/" },
  { label: "Apartments", path: "/apartments", sourceUrl: "https://sherrdev.com/apartments/" },
  { label: "Commercial Properties", path: "/commercial-properties", sourceUrl: "https://sherrdev.com/commercial-properties/" },
  { label: "Joint Venture", path: "/joint-venture", sourceUrl: "https://sherrdev.com/sherr-joint-venture/" },
  { label: "Contact", path: "/contact", sourceUrl: "https://sherrdev.com/contact/" },
];

export type TeamMember = {
  name: string;
  title: string;
  bio: string;
};

/**
 * Names/titles/credentials below appeared consistently in search summaries
 * of https://sherrdev.com/ourteam/ but are NOT verbatim page text — treat
 * as a strong draft that needs a side-by-side check against the live page.
 */
export const team: TeamMember[] = [
  {
    name: "Stuart D. Sherr",
    title: "Co-President",
    bio: PLACEHOLDER(
      "Draft only, verify wording: manages land acquisitions, planning, development, engineering, budgeting, and administration of contracts and leases. B.S. Economics, Wharton School (UPenn); J.D., Wayne State University Law School; CPA; licensed real estate broker."
    ),
  },
  {
    name: "Roger Sherr",
    title: "Co-President",
    bio: PLACEHOLDER(
      "Draft only, verify wording: evaluates feasibility of new commercial and residential projects, analyzes multifamily properties for acquisition and repositioning, arranges financing. B.S. Economics, Wharton School (UPenn); J.D., University of Michigan Law School."
    ),
  },
  {
    name: "Mike Kelly",
    title: "Director of Operations",
    bio: PLACEHOLDER(
      "Draft only, verify wording: oversees apartment communities and commercial properties for Blue Box Management, including budgets, rental pricing strategy, and capital improvement plans."
    ),
  },
  {
    name: "Mary Ellen",
    title: "Controller",
    bio: PLACEHOLDER(
      "Draft only, verify wording and full name: responsible for accounting, reporting, and compliance."
    ),
  },
  {
    name: "Joseph Inwald",
    title: PLACEHOLDER("exact title unconfirmed"),
    bio: PLACEHOLDER(
      "Draft only, verify wording: handles risk management and insurance oversight."
    ),
  },
];

export type Division = {
  name: string;
  summary: string;
};

export const divisions: Division[] = [
  {
    name: "Blue Box Management",
    summary: PLACEHOLDER(
      "Draft only, verify wording: full-service property management company handling 24/7 management of multifamily and commercial assets."
    ),
  },
  {
    name: "Sherr Joint Ventures (SJV)",
    summary: PLACEHOLDER(
      "Draft only, verify wording: offers capital and assistance to third parties in real estate ventures, including budget/marketing analysis and access to capital and talent."
    ),
  },
  {
    name: "Sherr Capital",
    summary: PLACEHOLDER("Draft only, financial arm supporting projects — description unconfirmed."),
  },
];

export const companyHistory = {
  founderName: "I. William Sherr",
  blurb: PLACEHOLDER(
    "Draft only, verify wording and dates: founded Sherr Development Corporation following the sale of Frank's Nursery & Crafts, Inc. Company has operated in real estate development, homebuilding, and multifamily/commercial acquisition and management since. Track record and year-founded figures found in research were inconsistent (references to both a 1985 founding and a company history spanning several decades) — needs confirmation from the client or the live site before publishing any specific numbers."
  ),
};

export const heroImage = {
  src: null as string | null,
  alt: PLACEHOLDER("hero photo not yet supplied — send a real project photo"),
};

export const homeIntro = PLACEHOLDER(
  "homepage intro paragraph — pull real wording from sherrdev.com or the client"
);

export type HomeCard = { label: string; to: string; desc: string };

/** Labels match real nav/page names; one-line descriptions are drafts, not sourced copy. */
export const homeCards: HomeCard[] = [
  { label: "Homes", to: "/homes", desc: PLACEHOLDER("one-line description of the Homes page — verify against site") },
  { label: "Apartments", to: "/apartments", desc: PLACEHOLDER("one-line description of the Apartments page — verify against site") },
  {
    label: "Commercial Properties",
    to: "/commercial-properties",
    desc: PLACEHOLDER("one-line description of the Commercial Properties page — verify against site"),
  },
];

export type PropertyCategory = {
  slug: string;
  title: string;
  intro: string;
  // Real property/project names go here once supplied — deliberately empty now.
  listings: { name: string; location: string }[];
};

export const propertyCategories: PropertyCategory[] = [
  {
    slug: "homes",
    title: "Homes",
    intro: PLACEHOLDER("Homes page intro copy — verify against sherrdev.com/homes/"),
    listings: [],
  },
  {
    slug: "apartments",
    title: "Apartments",
    intro: PLACEHOLDER("Apartments page intro copy — verify against sherrdev.com/apartments/"),
    listings: [
      // Confirmed a real property page exists: sherrdev.com/mapletree-apartments/
      // Name only, no description yet — do not invent details.
    ],
  },
  {
    slug: "commercial-properties",
    title: "Commercial Properties",
    intro: PLACEHOLDER("Commercial Properties page intro copy — verify against sherrdev.com/commercial-properties/"),
    listings: [],
  },
  {
    slug: "joint-venture",
    title: "Joint Venture",
    intro: PLACEHOLDER(
      "Draft only, verify wording: Sherr Joint Ventures (SJV) offers capital and assistance to third parties in real estate ventures — budget/marketing strategy analysis, plus capital and talent to complete projects."
    ),
    listings: [],
  },
];

export const testimonials: { quote: string; attribution: string }[] = [
  // Intentionally empty: no testimonials found. Do not invent any.
];

export const pricing: { label: string; detail: string }[] = [
  // Intentionally empty: this is a real estate developer, not a priced
  // service menu. Leave empty unless the client says otherwise.
];
