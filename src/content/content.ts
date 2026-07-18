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
  listings: { name: string; location: string; description: string[]; moreDescription?: string[] }[];
};

export const propertyCategories: PropertyCategory[] = [
  {
    slug: "multifamily-housing",
    title: "Multifamily Housing",
    // The real page (sherrdev.com/apartments/) has no intro copy — it goes
    // straight from the heading into the property listings below.
    intro: "",
    listings: [
      {
        name: "Maple Place Apartments",
        // "262 Units" in the heading vs. "232 units" in the intro paragraph
        // is not a typo — the Read More copy explains it: 232 original
        // garden-style units plus 30 new townhomes built later = 262 today.
        location: "262 Units, Southfield, MI",
        description: [
          "Maple Place was acquired out of foreclosure with a total of 232 units. The property was in a good location with proximity to major east-west and north-south expressways. The one, two, and three bedroom units were large with good closet space. While the location and floor plans were good, the property was in a state of decline from years of neglect by earlier ownership and mismanagement by a third-party foreclosure manager.",
        ],
        moreDescription: [
          "Within the first year of acquisition, a complete overhaul of all building exteriors was initiated. For each building, all rotten or warped siding was removed and replaced along with new trim and gutters. All buildings were repainted and new roofs were installed with 25-year shingles. A window replacement program was started on the first building with a plan to replace all windows within five years. Hallways and vestibules were repainted with new flooring as needed, and building entrance doors were also evaluated for replacement.",
          'At the entrance to the community and in the clubhouse, the capital improvement program continued. The entrance was completely repaved with new curbing, signage and landscaping. An electronic security gate system was installed with multiple cameras to promote safety and security. In the clubhouse, new bathrooms were installed and the clubhouse itself was redesigned and redecorated. The new furnishings and wall décor provided a fresh look and a more contemporary appearance. New technology was introduced which included check scanners, card machines for laundry, and a business station. All entrance and clubhouse improvements were designed to highlight "positive change" for existing residents and appeal to the progressive tastes and demands of new residents.',
          "Finally, in addition to the aforementioned improvements, 30 new townhome units were constructed on excess land to compliment the existing 232 garden-style units. The townhomes offered individual entry, washer and dryer, and full basements.",
          'Today, with a total of 262 units, Maple Place has been rebranded as the "go to" community in the area for its variety of floorplans, security system, and overall excellent management. Rents and operating income have increased substantially since acquisition, confirming the capital improvement decisions made by SDC.',
        ],
      },
      {
        name: "Corner Place Apartments",
        location: "211 Units, Southfield, MI",
        description: [
          'This property consists of 211 garden-style and townhouse units located at a busy intersection on the border of Beverly Hills and Birmingham. The property was acquired in 2015 from the family that originally constructed the project and owned it for thirty years thereafter. While the property was well managed and well maintained, the team at SDC identified a number of "game-changing" improvements that would uniquely distinguish the property and reposition the asset.',
        ],
        moreDescription: [
          "The capital improvement program continues today with funds budgeted annually for both upgrades to unit interiors and the restoration and maintenance of building exteriors. Landscaping too is an important part of our improvement program. With low turnover and annual increases in operating income, SDC has accomplished a significant repositioning of the asset while providing for a very attractive return on its investment.",
        ],
      },
      {
        name: "Pine Ridge Apartments",
        location: "120 Units, Southfield, MI",
        description: [
          "Pine Ridge was acquired out of foreclosure in 2012. At the time of acquisition, balconies were in disrepair, there was no formal leasing office and the buildings themselves were in a state of decline.",
          "Immediately after the acquisition, SDC engaged a capital improvement program to repair and replace all problem balconies, remove all warped and decaying T1-11 siding from the buildings, and replace and repaint all newly installed wood siding along with replacing gutters throughout.",
        ],
        moreDescription: [
          "As part of our initial improvement program, a new leasing office was created in one of the unoccupied units which included a separate interior office for the property manager and a visible canopy marking the leasing office entrance for tenants and visitors. Finally, in conjunction with a new leasing office, we added a new boulevard entrance sign, new entrance landscaping, and signage for reserved visitor parking.",
          "The property's performance improved substantially after improvements made by Sherr. The initial capital improvement program along with systematic improvements to unit interiors allowed Sherr to experience annual increases in rent along with high occupancy. In 2020, based on an unsolicited and extremely attractive offer received for the property, Sherr exited from its ownership position in Pine Ridge Apartments at a valuation multiple times its original investment.",
        ],
      },
      {
        name: "Biscayne Towers",
        location: "402 Units, North Miami, Florida",
        description: [
          "In 2013, SDC paid $6.9 million for a highly visible seven acre parcel of vacant land on Biscayne Boulevard. The property was not zoned for development but was in an excellent location near a new Whole Foods, Home Depot, Walgreens and other good commercial tenants.",
        ],
        moreDescription: [
          "SDC envisioned a new multifamily community on the property assuming the municipality would accept a multi-story work-force housing development to the area. Working with a highly qualified team of local engineers and a nationally recognized architectural firm, SDC obtained approval for a new multifamily development consisting of 402 units in nine stores, with an attached five story parking structure.",
          "In 2015, before construction had begun, SDC accepted an unsolicited offer from a Connecticut developer to sell the project for $16.3 million. With an excellent return generated from its investment, SDC continues to search in Florida for other multifamily opportunities.",
        ],
      },
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

export type SingleFamilyListing = {
  name: string;
  location: string;
  description: string[];
  jointVentureNote?: string;
};

/**
 * Confirmed verbatim from screenshots of sherrdev.com/homes/ (client-supplied,
 * 2026-07-18). Its own page/content shape rather than the generic
 * PropertyCategory template — the real page has two named sections (new/
 * current vs. past) and a non-project regional summary mixed into the
 * second, none of which the flat listings grid used elsewhere fits.
 * A couple of obvious typos on the live site ("shopps", "nestors") are kept
 * verbatim rather than silently corrected.
 */
export const singleFamilyHomes = {
  heading: "Single Family Homes and Attached Condos",
  newCommunities: {
    heading: "New and Current Communities",
    intro:
      "Sherr is currently entitling several new residential communities in highly desirable parts of southeast Michigan. These new communities will each have uniquely improved floor plans, attractive selections on elevation, and benefit from the many custom choices for interior materials and features that characterize every new residential community developed by Sherr.",
    listings: [
      {
        name: "Orion Ridge",
        location: "Duplex Residential Condominium Community in Orion, MI",
        description: [
          "Orion Ridge is located on the heavily traveled Baldwin Rd. corridor in one of the nicest suburban communities of southeast Michigan. The thirteen acre site, assembled with the purchase of four separate parcels, is designed with duplex ranch-style condominiums targeted toward empty nesters and young families. Maintenance free living, with lawn care and snow removal services performed for all residents, is part of the appeal of this new community. Additional features include the site's location itself which is walking distance to Walgreens, a local bank, other neighborhood shopps and a short drive to the famous Great Lakes Crossing Mall.",
        ],
      },
      {
        name: "Farmington Reserves",
        location: "19 Single Family Homes, Farmington Hills, MI",
        description: [
          "Farmington Reserves is located in one of the best school districts in Oakland County, and very close to the desirable attractions of downtown Farmington. With only 19 homes in a community where the demand for homes far exceeds supply, sales in this community at prices averaging in the $500s, are anticipated to be fast. Homes styles offered will include a ranch with approximately 1,800 square feet, and several colonial plans which range in size from 2,000 to 2,500 square feet. As typical of homes offered by Sherr, there will be many upgrades and options for interior materials and finishes, along with the ability to provide for modest custom requests.",
        ],
      },
      {
        name: "Residential Towers",
        location: "364 Condominium Units, Miami, FL",
        description: [
          "This exciting new residential development will consist of two residential towers with a total of 364 units, located on one of the most attractive parts of the intercoastal in Miami. Each tower will be 42 stories with structured parking for over 800 cars and an extensive amenity package. Views north along the intercoastal through Bal Harbor and south into downtown Miami, will be amazingly unobstructed. Along with attractive open floorplans featuring floor-to-ceiling windows, the development will have available 35 boat slips, which is rare in a development of this kind.",
          "Our development partner represents the largest development name in south Florida, who also has major developments around the world. This name recognition combined with the flag of a major name in the hospitality business, is certain to resonate with the target market of both international and domestic buyers. For Sherr, the Florida market is not new; however, to participate in this type of development with a team that is unmatched in experience and talent represents a truly unique opportunity that we are enthusiastic to pursue.",
        ],
      },
      {
        name: "Village of Clawson",
        location: "39 Single Family Homes, Clawson, MI",
        description: [
          "The Village of Clawson will provide an exciting opportunity for new home buyers in the highly desirable community of Clawson. With a total of 39 homes, this will be the largest new residential development in the city in many years. Homes will range in size from 1,800 square feet to 2,600 square feet, with prices expected to start in the $500s. The homes will feature fresh elevations, multiple selections for appliances, plumbing and lighting fixtures, and many options on flooring, cabinetry including several choices on stone and quartz countertops.",
        ],
        jointVentureNote: "This project is being developed and constructed as a joint venture between Robertson Homes and Sherr.",
      },
      {
        name: "Ann Arbor Woods",
        location: "35 Ranch-style homes, Ann Arbor, MI",
        description: [
          "This attractive community of ranch-style homes is targeted to appeal to move-up buyers and empty nestors seeking maintenance-free living on a single floor without the need to climb stairs. Many families in Ann Arbor have now experienced young ones moving out on their own leaving them with reduced space needs. The opportunity to purchase a new home, right sized with the master bedroom on the main floor, provides the perfect answer for these families who now seek to downsize. These new ranches will feature multiple choices for appliances, plumbing and electrical fixtures. Other options will be available for trim, door style, wood flooring, cabinetry and stone countertops. With a location that is walking distance to Buhr Park, and in close proximity to downtown Ann Arbor, this new residential community is certain to experience great interest and strong demand.",
        ],
        jointVentureNote: "This project is being developed and constructed as a joint venture between Robertson Homes and Sherr.",
      },
    ] satisfies SingleFamilyListing[],
  },
  pastCommunities: {
    heading: "Past Communities",
    listings: [
      {
        name: "Emerald Park",
        location: "44 Single Family Homes, Farmington Hills, MI",
        description: [
          "This 20 acre site is located on an infill parcel in the heart of one of the most attractive residential communities in Southeast, MI. The site was approved under the cluster option for single-family homes on 55 ft. lots. The home plans would range in size from a ranch with 1,680 sf to two-story colonials with up to 2,800 sf. Ultimately, prior to construction beginning, the site was purchased by Pulte Homes for its unique characteristics and extremely favorable demographics. While Sherr Development was not responsible for the construction and the sale of homes, the sale price of the property to Pulte provided a very attractive return on the investment made by Sherr.",
        ],
      },
      {
        name: "Lyndon Park",
        location: "39 Lot Single Family Community, Livonia, MI",
        description: [
          "Lyndon Park is a new 39-home residential community located in the highly acclaimed Livonia School District. While wet conditions and cold weather slowed initial development activity, ultimately the homes were constructed and sold in record time. The homes were targeted toward families seeking value and design, with features and amenities that include home offices, open kitchens, 9 ft first floor ceilings, stainless steel appliances, and many other selections for wide plank flooring, stone countertops and cabinetry. To offer the most up-to-date technology in our homes, other features included phone-controlled security systems and thermostats, and smart appliances.",
        ],
      },
      {
        name: "Newport Estates",
        location: "187 Lot Single Family Community, Newport, MI",
        description: [
          "This 187 lot community, which was constructed in three phases, is now sold out. The homes at Newport range in size from 1,500 sf to 2,100 sf and range in price from the mid-$100s to the low $200s. Designed to provide attractive new homes at affordable prices, Newport appealed well to both first-time home buyers and move-up home buyers.",
          "The site plan at Newport consists of 65 ft. lots with a centralized area for mail boxes and a play park. By clustering mail boxes in one area and creating a common park amenity, we have eliminated the street clutter from a multitude of mailbox styles and colors and tried to minimize the need for each homeowner to invest in backyard swing sets and play structures.",
          "Newport Estates is the most successful residential development in Monroe County. With a tax millage rate that is one of the lowest in southeast Michigan, and a location that benefits from being in the attractive Airport School District, the community continues to appeal to homebuyers seeking quality and affordability in their home buying decision.",
        ],
      },
      {
        name: "Cove Creek",
        location: "Single Family Homes and Condominiums, Taylor, MI",
        description: [
          "Cove Creek consists of two distinct residential communities on a single site: 23 single family homes on the north part of the property and 20 duplex condominiums on the south part. The site was designed such that the single family homes are separated from the condominiums by a creek and natural woodland that traverses the site. Each community has its own well defined entrance connected by perimeter landscaping which harmonizes and beautifies the overall appeal of the site. The site sold out quickly with both the homes and condominiums targeted toward move-up buyers and empty nesters.",
        ],
      },
      {
        name: "Whetherstone Condominiums",
        location: "White Lake Township, MI",
        description: [
          "Whetherstone consists of 111 attached condominiums in a series of two, three, four and five-unit buildings. The units themselves offer two different floorplans: a ranch with approximately 1,500 sq.ft. for those wishing to eliminate stairs; and a townhome with approximately 1,300 sq.ft. targeting younger individuals less concerned about having a staircase within the unit. The site is located in North Oakland County surrounded by lakes and within walking distance to neighborhood shops. With quality design and excellent construction, the site sold out within two years of opening at prices in the mid-to-high $100s.",
        ],
      },
      {
        name: "Auburn Park Condominiums",
        location: "Auburn Hills, MI",
        description: [
          "Designed by an award-winning architectural firm in Chicago, the 123 unit condominium community offered six different floor plans in a series six-unit buildings. With each floor plan targeting a distinctly different lifestyle, Auburn Park was able to appeal to a broad demographic of condominium buyers.",
          "Auburn Park opened for sales in early 2005 with prices starting in the mid-$100s. The community sold out quickly with final sales and construction completed within three years. Today Auburn Park is one of the most distinguished condominium communities in Auburn Hills with a landscaped entrance that commands strong appeal along the Baldwin Road corridor.",
        ],
      },
      {
        name: "Coachlight Condominiums",
        location: "Taylor, MI",
        description: [
          "Coachlight is a condominium community consisting of 102 units in a series of two, three and four-unit buildings. The ranch and townhome style floor plans were designed to appeal to empty nesters, single parents, divorcees and young professionals. With quality design and excellent construction, this site was sold out within two years of opening at prices in the high $100s. Today, Coachlight is one of the largest and most distinguished condominium communities in the City.",
        ],
      },
      {
        name: "Heatherwood and Woods of Pardee",
        location: "Taylor, MI",
        description: [
          "These two single family communities were each targeted to appeal to move-up homebuyers within the community. Heatherwood consists of 33 homes and Woods of Pardee consists of 42 homes. Both sites sold out quickly after opening at prices in the low $200s. Quality construction and strong architectural appeal distinguish both communities today within the move-up residential housing category of the City.",
        ],
      },
      {
        name: "Sunrise Oceanfront",
        location: "The Big Island, Hawaii",
        description: [
          "In 2006, from the assemblage of private property owned by four separate landowners, SDC purchased approximately 4 miles of oceanfront property on the island. The plan was to entitle the land for up to two thousand homes for sale on a part of the island that previously was relatively undeveloped.",
          "In 2008, prior to completion of the entitlement process, SDC received an unsolicited offer to purchase the property for three times the price that had been paid. SDC accepted the offer allowing for a substantial return on its initial investment.",
        ],
      },
      {
        name: "Mountain Ranch Estates",
        location: "Salt Lake City, Utah",
        description: [
          "In 2004, SDC along with a west coast partner, purchased a 40-acre site located on the side of the mountain outside of Salt Lake City. The land was entitled and developed for lot sales to buyers interested in building large estate-size homes on the mountain. The lots were sold in a systematic fashion shortly after development was completed generating a substantial return on investment for both SDC and our development partner.",
        ],
      },
      {
        name: "Sherwood Hills",
        location: "Grand Blanc, MI",
        description: [
          "Sherwood Hills consists of 102 single family homes just outside of the main commercial corridor of Grand Blanc. The site was developed in three separate phases to coordinate the timing of the investment in land development with home sales. Affordable pricing, excellent floorplans, and distinguished architecture are three of the primary features for the successful sellout at Sherwood Hills.",
        ],
      },
      {
        name: "Hunter's Point Condominiums",
        location: "Westland, MI",
        description: [
          "Hunter's Point consists of 114 attached condominiums in a series of two, four, and six-unit buildings. The ranch and townhome style floor plans were designed to appeal to singles, young couples, divorcees, and empty nesters. Hunter's point was developed on an infill site within walking distance of the major shopping district of the City. The site was constructed in two separate phases and sold out within three years after construction commenced.",
        ],
      },
      {
        name: "Glenwood Hills",
        location: "Walled Lake, MI",
        description: [
          "Glenwood Hills consists of 41 single family homes on a rolling and wooded site. The homes were targeted toward first-time homebuyers seeking to live in the excellent Walled Lake School District. The site sold out quickly with reservations for thirty percent of the homes having been taken immediately after the sales office opened.",
        ],
      },
      {
        name: "Knowland Estates",
        location: "Canton, MI",
        description: [
          "Great schools and a great location made Knowland Estates a very desirable single family community. The site consists of 75 homes on 70 ft. lots. The site was developed in a single phase with all homes sold within two years after opening the model sales office. A second phase with 14 homes was added at a later date with the purchase of a small parcel immediately adjacent to the site. This second phase, Knowland on the Court, was very successful with significant economies of scale from its proximity to Knowland Estates.",
        ],
      },
      {
        name: "Pittsfield Glens",
        location: "98 Single-family Homes and 56 Attached Condominiums, Pittsfield Township, MI",
        description: [
          "The land for Pittsfield Glens was purchased to create a unique residential community in the highly acclaimed Ann Arbor, MI School District. The community was designed with a combination of 98 single family home sites and 56 attached condominiums. While the site plan was difficult to approve in this municipality, ultimately the community was approved and the fully entitled site was sold to Pulte Homes. The price realized by SDC provided a timely and extraordinary return on its investment.",
        ],
      },
    ] satisfies SingleFamilyListing[],
    // Not a named project — a regional rollup paragraph the real page drops
    // into the middle of the Past Communities list. Called out separately
    // here so the page can render it as a note rather than a project card.
    regionalNote: {
      heading: "California Housing Activity",
      paragraphs: [
        "Sherr Development has developed residential land and constructed over one thousand homes in southern California. Working with a local builder, SDC was able to identify attractive residential sites outside of LA County and build multiple residential communities. The development activity in California spanned an approximate ten year period from 1998 to 2008. Each site consisted of 50 to 300 homes with prices and floorplans targeted toward first-time homebuyers. All land development activity has now been completed and all homes on developed lots have been constructed and sold. As SDC continues to hold several parcels of undeveloped land in southern California, development and construction activity may begin again as market conditions permit.",
      ],
    },
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
