/**
 * Dynamic Experience Calculation Utility
 * Calculates total years and months of experience starting from career initiation.
 * Start date: August 2022 (Prosol Techline)
 */

export const CAREER_START_DATE = "2022-08-01";

export interface ExperienceStats {
  /** Total elapsed years as floating number (e.g., 3.6 or 4.1) */
  yearsDecimal: number;
  /** Full years count (e.g., 3 or 4) */
  fullYears: number;
  /** Number of remaining months in the current year (0 to 11) */
  remainingMonths: number;
  /** Formatted short string for hero metrics (e.g., "4+" or "3.5+") */
  displayYears: string;
  /** Formatted exact years string with one decimal if applicable (e.g. "3.5+" or "4+") */
  exactDisplayYears: string;
  /** Formatted sentence for section subtitles (e.g. "Over 4+ years of delivering high-quality UI/UX designs...") */
  subtitleText: string;
  /** Formatted sentence for about bio (e.g. "With over 4+ years of hands-on experience...") */
  aboutBioText: string;
  /** Formatted story intro (e.g. "Over the last 4+ years, I’ve specialized...") */
  storyBioText: string;
}

export function getExperienceStats(startDateStr: string = CAREER_START_DATE): ExperienceStats {
  const start = new Date(startDateStr);
  const now = new Date();

  // Calculate difference in months accurately
  let totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  // If current day is before start day of month, deduct 1 month
  if (now.getDate() < start.getDate()) {
    totalMonths = Math.max(0, totalMonths - 1);
  }

  const yearsDecimal = Math.max(0, totalMonths / 12);
  const fullYears = Math.floor(yearsDecimal);
  const remainingMonths = totalMonths % 12;

  // Format short display: e.g. if >= 6 months into the year, "3.5+" or full "4+"
  let displayYears: string;
  if (remainingMonths >= 6) {
    displayYears = `${fullYears}.5+`;
  } else if (fullYears > 0) {
    displayYears = `${fullYears}+`;
  } else {
    displayYears = `${Math.max(1, totalMonths)}m+`;
  }

  // Exact 1-decimal display if needed
  const exactYearsNum = Number(yearsDecimal.toFixed(1));
  const exactDisplayYears =
    exactYearsNum % 1 === 0 ? `${exactYearsNum}+` : `${exactYearsNum.toFixed(1)}+`;

  return {
    yearsDecimal,
    fullYears,
    remainingMonths,
    displayYears,
    exactDisplayYears,
    subtitleText: `Over ${displayYears} years of delivering high-quality UI/UX designs and collaborative frontend engineering.`,
    aboutBioText: `With over ${displayYears} years of hands-on experience across UI/UX design and frontend development, I specialize in crafting clean, high-impact interfaces in Figma and translating them into robust, responsive digital products.`,
    storyBioText: `Starting out in visual design, I found myself drawn to understanding how people perceive and navigate interfaces. Over the last ${displayYears} years, I’ve specialized in Figma, Design Systems, and frontend architectures to craft digital experiences that are intuitive, beautiful, and scalable.`,
  };
}
