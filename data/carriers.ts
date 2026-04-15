export type Carrier = {
  slug: string
  name: string
  founded: number
  amBest: string
  states: number
  focus: ('MEDIGAP' | 'MA' | 'PART_D')[]
  notes: string
  strengths: string[]
  watchOuts: string[]
}

export const CARRIERS: Carrier[] = [
  { slug: 'aetna', name: 'Aetna Medicare', founded: 1853, amBest: 'A', states: 50, focus: ['MEDIGAP','MA','PART_D'], notes: 'A CVS Health company since 2018. One of the top three Medicare Advantage carriers by enrollment.', strengths: ['Large pharmacy network via CVS','Competitive MA plans with dental/vision','Household household-discount on Medigap'], watchOuts: ['Plan quality varies significantly by state','Some markets have narrower networks'] },
  { slug: 'humana', name: 'Humana', founded: 1961, amBest: 'A-', states: 50, focus: ['MA','PART_D','MEDIGAP'], notes: 'The #2 Medicare Advantage carrier by enrollment. Stronger in MA than Medigap.', strengths: ['Broad MA footprint','Integrated pharmacy (Humana Pharmacy)','Strong star ratings in several states'], watchOuts: ['Medigap availability varies','HMO networks can be restrictive'] },
  { slug: 'unitedhealthcare', name: 'UnitedHealthcare', founded: 1977, amBest: 'A', states: 50, focus: ['MA','MEDIGAP','PART_D'], notes: 'The largest Medicare Advantage carrier. AARP-branded Medigap is administered by UHC.', strengths: ['Widest MA plan availability','AARP Medigap with household and multi-insured discounts','Optum integrated provider assets'], watchOuts: ['Prior-auth rates higher than peers in some markets','Plan changes year to year'] },
  { slug: 'cigna', name: 'Cigna Healthcare', founded: 1792, amBest: 'A', states: 50, focus: ['MEDIGAP','PART_D','MA'], notes: 'Strong Medigap presence via Loyal American, American Retirement Life, and Cigna Health and Life.', strengths: ['Competitive Medigap pricing in many states','Express Scripts Part D access','Household discount'], watchOuts: ['Sold under multiple subsidiary names — compare carefully'] },
  { slug: 'mutual-of-omaha', name: 'Mutual of Omaha', founded: 1909, amBest: 'A+', states: 49, focus: ['MEDIGAP','PART_D'], notes: 'A top Medigap carrier with strong financial ratings and stable rate history.', strengths: ['Very strong A+ AM Best rating','Stable rate increases','Household discount'], watchOuts: ['Limited MA footprint','Underwriting outside of OEP is strict'] },
  { slug: 'anthem', name: 'Anthem / Elevance Health', founded: 1946, amBest: 'A', states: 14, focus: ['MEDIGAP','MA','PART_D'], notes: 'Blue Cross/Blue Shield licensee in 14 states; operates as Elevance Health at the parent level.', strengths: ['BCBS brand trust','Strong provider networks','Integrated dental/vision on MA'], watchOuts: ['Plan availability tied to BCBS licensing footprint'] },
  { slug: 'bcbs', name: 'Blue Cross Blue Shield (multi-plan)', founded: 1929, amBest: 'A', states: 50, focus: ['MEDIGAP','MA','PART_D'], notes: 'Federation of independent licensees. Quality varies significantly by state plan.', strengths: ['Deep provider networks','Long-standing brand trust','Often most accepted in rural areas'], watchOuts: ['Each BCBS plan is a separate company — rates and quality vary'] },
  { slug: 'kaiser-permanente', name: 'Kaiser Permanente Medicare', founded: 1945, amBest: 'A', states: 8, focus: ['MA'], notes: 'Integrated HMO available in 8 states plus DC. Consistently top-rated on CMS Star Ratings.', strengths: ['Consistent 4-5 star ratings','Integrated care delivery','Low premiums in many markets'], watchOuts: ['HMO only — you must use Kaiser providers','Limited geographic footprint'] },
  { slug: 'wellcare', name: 'Wellcare (Centene)', founded: 1985, amBest: 'A-', states: 50, focus: ['MA','PART_D'], notes: 'A Centene company. Large Part D presence and growing MA footprint.', strengths: ['Low-premium Part D plans','Dual-eligible SNP focus'], watchOuts: ['Customer service ratings lag category','Star ratings variable'] },
  { slug: 'molina', name: 'Molina Healthcare', founded: 1980, amBest: 'A-', states: 15, focus: ['MA'], notes: 'Focused on dual-eligible Special Needs Plans (D-SNPs).', strengths: ['Strong dual-eligible SNP design','Low or $0 premium plans'], watchOuts: ['Narrow footprint','Not competitive for non-SNP enrollees'] },
  { slug: 'aarp-uhc', name: 'AARP Medicare (UnitedHealthcare)', founded: 1977, amBest: 'A', states: 50, focus: ['MEDIGAP','PART_D'], notes: 'AARP-branded Medigap and Part D administered by UnitedHealthcare.', strengths: ['Household discount','Generally stable rates','Widely available'], watchOuts: ['Requires AARP membership','Attained-age rated — premiums rise with age'] },
  { slug: 'devoted-health', name: 'Devoted Health', founded: 2017, amBest: 'NR', states: 15, focus: ['MA'], notes: 'Tech-forward MA startup focused on member experience and digital tools.', strengths: ['High member satisfaction scores','Strong telehealth integration'], watchOuts: ['Newer company — shorter track record'] },
  { slug: 'clover-health', name: 'Clover Health', founded: 2014, amBest: 'NR', states: 8, focus: ['MA'], notes: 'PPO-focused MA plans in select markets.', strengths: ['PPO flexibility at competitive premiums','Clinical software platform'], watchOuts: ['Mixed star ratings','Geographic limits'] },
  { slug: 'cvs-silverscript', name: 'SilverScript (Aetna/CVS)', founded: 2006, amBest: 'A', states: 50, focus: ['PART_D'], notes: 'One of the largest Part D plans in the country.', strengths: ['Low-premium plan options','Broad pharmacy network'], watchOuts: ['Formulary changes annually — check your drugs each AEP'] },
  { slug: 'wellmark', name: 'Wellmark BCBS', founded: 1939, amBest: 'A', states: 2, focus: ['MEDIGAP','MA'], notes: 'BCBS licensee in Iowa and South Dakota.', strengths: ['Strong local provider networks'], watchOuts: ['Only available in IA and SD'] },
  { slug: 'highmark', name: 'Highmark', founded: 1996, amBest: 'A', states: 4, focus: ['MEDIGAP','MA','PART_D'], notes: 'BCBS licensee in Pennsylvania, Delaware, West Virginia, and New York.', strengths: ['Competitive Medigap pricing in PA','Broad provider network'], watchOuts: ['Limited to licensed states'] },
  { slug: 'state-farm', name: 'State Farm Medicare', founded: 1922, amBest: 'A++', states: 40, focus: ['MEDIGAP'], notes: 'Auto insurer’s Medigap line with strong financial ratings.', strengths: ['A++ AM Best rating','Local agent support'], watchOuts: ['Rates not always the lowest — compare'] },
  { slug: 'usaa', name: 'USAA Medigap (Humana)', founded: 1922, amBest: 'A', states: 50, focus: ['MEDIGAP'], notes: 'USAA-branded Medigap underwritten by Humana.', strengths: ['Military-family service focus','Competitive pricing'], watchOuts: ['Membership eligibility required (military/family)'] },
  { slug: 'gtl', name: 'Guarantee Trust Life (GTL)', founded: 1936, amBest: 'A-', states: 45, focus: ['MEDIGAP'], notes: 'Mid-size Medigap carrier known for dental/vision riders.', strengths: ['Ancillary product bundling'], watchOuts: ['Rate stability varies'] },
  { slug: 'accendo-cvs', name: 'Accendo (CVS/Aetna)', founded: 2020, amBest: 'A', states: 43, focus: ['MEDIGAP'], notes: 'CVS/Aetna’s value-priced Medigap brand.', strengths: ['Often the lowest Plan G premium in the market','Household discount'], watchOuts: ['Aggressive underwriting outside of OEP'] },
]

export function findCarrier(slug: string): Carrier | undefined {
  return CARRIERS.find((c) => c.slug === slug)
}
