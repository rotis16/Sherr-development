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
 * has its own nav page (see propertyCategories "joint-venture" below),
 * still unconfirmed pending a screenshot of that page.
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

export const companyHistory = {
  founderName: "I. William Sherr",
  blurb: PLACEHOLDER(
    "Draft only, verify wording and dates: founded Sherr Development Corporation following the sale of Frank's Nursery & Crafts, Inc. Needs confirmation from the Company Profile / Company History page — not yet screenshotted."
  ),
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
  {
    slug: "joint-venture",
    title: "Sherr Joint Venture",
    intro: PLACEHOLDER(
      "Draft only, verify wording: Sherr Joint Ventures (SJV) offers capital and assistance to third parties in real estate ventures — budget/marketing strategy analysis, plus capital and talent to complete projects."
    ),
    listings: [],
  },
];

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
