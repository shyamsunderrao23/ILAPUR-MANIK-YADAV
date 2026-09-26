import React, { useState } from 'react'
import { FileText, Scale, Sparkles, ChevronDown, ChevronUp, ArrowUpRight, Bookmark, CheckCircle2 } from 'lucide-react'

export const InsightsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id))
  }

  const legalArticles = [
    {
      id: 'article-1',
      title: 'Deconstructing the New Criminal Laws: Key Shifts from CrPC to BNSS, BNS & BSA',
      subtitle: 'A practitioner’s critical analysis on forensic electronic evidence and altered bail provisions.',
      date: 'September 2026',
      readTime: '6 min read',
      tag: 'Criminal Jurisprudence',
      summary: 'Comprehensive analysis of Bharatiya Nagarik Suraksha Sanhita (BNSS) and Bharatiya Sakshya Adhiniyam (BSA) with focus on mandatory forensic video recording during search and seizure, electronic record certificates under Section 63 BSA, and staggered police remand provisions under Section 187 BNSS.',
      fullContent: [
        'The transition from the Indian Penal Code (IPC), Code of Criminal Procedure (CrPC), and Indian Evidence Act (IEA) to the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA) marks a profound structural overhaul of Indian criminal trial practice and defense litigation.',
        '1. Mandatory Audio-Video Recording: Under BNSS, search, seizure, recovery memos, and witness examination mandatorily require digital videography without chain-of-custody disruption. Failure by investigating officers to record these proceedings now furnishes immediate grounds for bail and quashing.',
        '2. Electronic Record Admissibility: Section 63 of BSA replaces and expands Section 65B of the Evidence Act, formulating strict electronic certificate formats for server and cloud-stored metadata, hash validation (SHA-256), and mobile phone extractions.',
        '3. Police Custody Duration: Section 187 BNSS introduces clarifications regarding remand staggering across the initial 40 or 60 days period of investigation, altering conventional strategies around early statutory bail applications.',
        '4. Trial in Absentia: For proclaimed offenders absconding from jurisdiction, trials can now proceed to verdict in absentia after due proclamation under Section 356 BNSS, requiring proactive High Court revisionary challenges.'
      ],
      keyPoints: [
        'Electronic evidence must satisfy Section 63 BSA certificate standards at the time of charge-sheet filing.',
        'Digital recording of search & seizure prevents suppression of procedural irregularities and fabrications.',
        'Anticipatory bail applications under Section 482 BNSS must address updated trial calendar norms.',
        'Section 187 BNSS staggered remand requires timely judicial oversight petitions in High Court.'
      ]
    },
    {
      id: 'article-2',
      title: 'Constitutional Remedies under Article 226: Checking Administrative & Statutory Excess',
      subtitle: 'Strategic invocation of High Court Extraordinary Writ Jurisdiction against state overreach.',
      date: 'August 2026',
      readTime: '8 min read',
      tag: 'Constitutional Law',
      summary: 'Examining the contours of High Court writ powers under Articles 226 & 227 against statutory arbitrariness, revenue attachments, illegal municipal demolitions, arbitrary blacklisting, and administrative executive overreach.',
      fullContent: [
        'Article 226 of the Constitution of India confers extraordinary prerogative powers upon High Courts to issue writs in the nature of Mandamus, Certiorari, Prohibition, Quo Warranto, and Habeas Corpus for the enforcement of fundamental rights and for any other purpose.',
        'Unlike Article 32 of the Supreme Court, Article 226 extends beyond fundamental rights violations to any "other purpose", providing immediate injunctive relief against illegal state action, unauthorized municipal demolitions, arbitrary government tender cancellations, and unilateral bank account freezing.',
        'The doctrine of alternative remedy is a self-imposed rule of discretion rather than an absolute jurisdictional bar. High Courts consistently entertain writ petitions where principles of natural justice (audi alteram partem) have been violated, where the statutory authority acted without jurisdiction, or where the constitutionality of a legislative provision is challenged.',
        'In corporate and real estate matters, strategic writ filing accompanied by urgent interlocutory stay prayers protects ongoing investments from administrative overreach before irreparable injury occurs.'
      ],
      keyPoints: [
        'Writ of Certiorari lies for quashing quasi-judicial orders passed in breach of natural justice or jurisdictional excess.',
        'Maintainability remains intact despite alternative statutory appeals in cases of fundamental rights violation or ultra vires actions.',
        'Interim stay applications require demonstrated irreparable injury, prima facie merit, and balance of convenience.',
        'Article 227 supervisory jurisdiction allows High Courts to correct patent errors of law committed by subordinate tribunals.'
      ]
    },
    {
      id: 'article-3',
      title: 'Digital Forensics & Cloud Discovery in High Court Commercial & Cyber Litigation',
      subtitle: 'Navigating hash value verification, server access logs, and electronic trail discovery.',
      date: 'July 2026',
      readTime: '7 min read',
      tag: 'Cyber Jurisprudence',
      summary: 'Technical and legal guidelines for proving the authenticity of encrypted communications, server access logs, cloud databases, and digital trails before appellate tribunals, commercial benches, and cyber crime divisions.',
      fullContent: [
        'In an increasingly digitized corporate ecosystem, commercial arbitrations and white-collar criminal prosecutions hinge upon digital audit trails. Proving authenticity requires strict adherence to cryptographic hash validation (SHA-256) and ISO forensic image acquisition.',
        'The intersection of Cyber Jurisprudence, Information Technology Act (Section 66 to 79), and Commercial Courts Act mandates that parties produce authentic metadata alongside plain text exports.',
        'High Courts have consistently dismissed uncorroborated screenshots and printouts where source device forensics, device control logs, and metadata hashing were omitted by investigating officers or opposite counsel.',
        'Cross-examination of forensic laboratory experts demands comprehensive technical understanding of memory dumps, cloud token lifecycles, and IP packet tracing.'
      ],
      keyPoints: [
        'Raw server logs require forensic image acquisition to defeat spoliation and tampering defenses.',
        'Section 65B/63 certificates must be executed by the system administrator possessing lawful operational control.',
        'Cross-examination of digital forensics experts requires technical precision regarding cryptographic hash integrity.',
        'Cloud storage discovery orders under Order XI CPC must specify exact metadata parameters to avoid fishing inquiries.'
      ]
    },
    {
      id: 'article-4',
      title: 'Bail Jurisprudence & Liberty in Economic Offenses: P. Chidambaram to Satender Antil',
      subtitle: 'Balancing constitutional liberty under Article 21 with investigating agency custodial powers.',
      date: 'June 2026',
      readTime: '9 min read',
      tag: 'Bail Jurisprudence',
      summary: 'In-depth analysis on securing anticipatory and regular bail in high-stakes PMLA, SFIO, and GST evasion cases, demonstrating that economic magnitude alone cannot justify indefinite pre-trial incarceration.',
      fullContent: [
        'The jurisprudence of personal liberty enshrined in Article 21 guarantees that pre-trial custody cannot be converted into punishment. The Supreme Court in Satender Kumar Antil v. CBI and P. Chidambaram v. CBI established rigorous benchmarks for bail adjudication.',
        'In economic offenses, investigating agencies routinely seek extended judicial remand under the guise of "ongoing complex probe". However, when primary accounting records, electronic drives, and company ledgers are already impounded, custodial interrogation ceases to have legal justification.',
        'The defense must systematically satisfy the Triple Test: establishing zero flight risk through family and business roots, impossibility of tampering with seized records, and absence of witness coercion.',
        'Demonstrating medical urgency, parity with co-accused, and prolonged delay in trial commencement constitute foundational pillars for High Court bail relief.'
      ],
      keyPoints: [
        'Gravity of the alleged offence cannot be the sole consideration when all documentary evidence is in state custody.',
        'Bail is the constitutional rule, jail is the exception — applicable even in economic and financial investigations.',
        'Strict conditions such as passport deposit and scheduled reporting satisfy judicial requirements without compromising liberty.',
        'Section 436A CrPC / Section 479 BNSS provides mandatory statutory bail upon completion of half the maximum sentence period.'
      ]
    }
  ]

  const caseUpdates = [
    {
      id: 'case-1',
      title: 'Anticipatory Bail Parameters in Economic & Multi-Jurisdiction Corporate Offenses',
      citation: '2026 LiveLaw (HC) 412',
      court: 'High Court of Judicature',
      date: 'September 2026',
      tag: 'Landmark Precedent',
      summary: 'High Court reiterates that custodial interrogation is not a punitive measure; economic gravity alone cannot override fundamental liberty under Article 21 where documentary evidence has been impounded and cooperation is demonstrated.',
      fullContent: [
        'In this landmark ruling, the Division Bench reiterated that pre-trial custody in economic offenses must satisfy the "Triple Test" (Flight risk, tampering of evidence, and witness intimidation).',
        'The Bench observed that where all primary documents, bank statements, and accounting ledgers have already been impounded by the investigating agency, routine denial of anticipatory bail constitutes a violation of personal liberty.',
        'The High Court granted pre-arrest protection with stringent conditions including passport surrender and scheduled investigative appearances.',
        'The judgment firmly curtailed arbitrary arrests under omnibus corporate complaints, protecting company directors from wrongful harassment.'
      ],
      keyPoints: [
        'Custodial interrogation cannot be claimed as an automatic right by prosecution without specific overt necessity.',
        'Documentary offences rarely justify prolonged pre-trial incarceration once books of account are seized.',
        'Bail condition compliance must be strictly monitored without imposing impossible surety terms.',
        'Protects directors and founders from frivolous arrest threats in civil commercial disputes.'
      ]
    },
    {
      id: 'case-2',
      title: 'Quashing of FIR & Malicious Prosecutions under Section 482 CrPC / BNSS',
      citation: '2026 (2) ALT (Crl.) 189',
      court: 'High Court Bench',
      date: 'August 2026',
      tag: 'Criminal Revision',
      summary: 'High Court quashes criminal proceedings arising out of purely civil contractual transactions, reiterating State of Haryana v. Bhajan Lal guidelines against weaponizing the criminal process for debt recovery.',
      fullContent: [
        'The High Court exercised its inherent powers to quash an FIR registered under Sections 406 and 420, holding that commercial breach of contract cannot be colored into criminal breach of trust without demonstrating fraudulent intention at the inception.',
        'The Court emphasized that using the criminal justice machinery as an arm-twisting instrument for civil recovery constitutes an abuse of the judicial process.',
        'All consequential proceedings and charge sheets pending before the Magistrate were set aside.',
        'The ruling serves as a vital shield for commercial enterprises facing coercive criminal complaints from disgruntled contractual parties.'
      ],
      keyPoints: [
        'Breach of contractual terms does not per se attract Section 420 cheating charges.',
        'Inherent High Court jurisdiction exists to prevent harassment through civil dispute criminalization.',
        'FIRs lacking specific allegations of fraudulent inducement at the inception are liable to be quashed.',
        'Magistrates cannot mechanically issue process without evaluating civil nature of underlying agreements.'
      ]
    },
    {
      id: 'case-3',
      title: 'Scope of Section 34 Patent Illegality in Commercial Arbitration Awards',
      citation: '2026 (4) ALD 305',
      court: 'Commercial Appellate Division',
      date: 'July 2026',
      tag: 'Commercial Arbitration',
      summary: 'The Commercial Appellate Court held that arbitral awards cannot be set aside merely on an alternative interpretation of contractual clauses unless the view taken by the arbitral tribunal is perverse.',
      fullContent: [
        'In an application challenging an EPC contractual award, the High Court clarified the high threshold for establishing "patent illegality" under Section 34(2A) of the Arbitration & Conciliation Act.',
        'The Court affirmed that the Arbitral Tribunal is the ultimate master of the quantity and quality of evidence, and courts exercising supervisory jurisdiction cannot sit as courts of appeal.',
        'The petition was dismissed, upholding the multi-crore arbitral award in favor of the infrastructure claimant.',
        'Reaffirms India’s pro-arbitration judicial enforcement policy and minimal court interference doctrine.'
      ],
      keyPoints: [
        'Courts will not reappraise evidence or substitute interpretation of commercial contracts.',
        'Patent illegality must go to the root of the matter and cannot be a mere error of law.',
        'Expedited enforcement of commercial arbitration awards reinforces investor certainty.',
        'Section 34 petitions filed without jurisdictional patent illegality are subject to heavy costs.'
      ]
    },
    {
      id: 'case-4',
      title: 'Admissibility of Digital Communications & Hash Integrity in High Court Trials',
      citation: '2026 (1) SCC 520 / 2026 ALT 88',
      court: 'High Court Division Bench',
      date: 'June 2026',
      tag: 'Digital Evidence',
      summary: 'High Court holds that WhatsApp message screenshots without mandatory Section 63 BSA / 65B Evidence Act certificate are completely inadmissible and cannot form the sole basis of indictment.',
      fullContent: [
        'In a significant trial ruling, the High Court set aside an order framing charges based exclusively on printed WhatsApp screenshots that lacked forensic validation and contemporaneous device certificates.',
        'The Bench ruled that ease of digital spoofing and image alteration requires strict compliance with Arjun Panditrao Khotkar principles.',
        'The prosecution was directed to produce original recording devices or certified forensic image extractions from an accredited government cyber laboratory.'
      ],
      keyPoints: [
        'Secondary digital records cannot be introduced without contemporaneous statutory certificates.',
        'Printed screenshots without hash metadata fail basic evidentiary thresholds.',
        'Protects accused persons against manufactured or cherry-picked digital extractions.'
      ]
    }
  ]

  const legalTerms = [
    {
      id: 'term-1',
      title: 'Prerogative Writs (Mandamus, Certiorari, Habeas Corpus, Quo Warranto, Prohibition)',
      subtitle: 'Extraordinary constitutional remedies under Article 226 of the Constitution of India',
      tag: 'Constitutional Glossary',
      summary: 'Prerogative judicial orders issued by High Courts commanding public authorities to perform statutory duties, quashing illegal administrative orders, prohibiting statutory excess, or securing immediate bodily liberty.',
      fullContent: [
        '• Mandamus: "We Command" — A judicial command issued to any government agency, municipal corporation, or statutory body to perform a mandatory public duty prescribed by law where it has failed or refused to act.',
        '• Certiorari: "To be certified" — An order by which a superior court quashes orders of lower tribunals or quasi-judicial bodies passed without jurisdiction, in excess of jurisdiction, or in flagrant breach of natural justice.',
        '• Habeas Corpus: "To have the body" — Securing immediate production and release of an individual unlawfully detained by state police or private persons.',
        '• Quo Warranto: Challenging the legal authority and qualifications of an individual holding a substantive public office.',
        '• Prohibition: An order preventing a lower court or tribunal from proceeding further in a matter outside its legal competence.'
      ],
      keyPoints: [
        'Mandamus lies only when there is a legally enforceable right and corresponding public duty.',
        'Certiorari remedies jurisdictional errors apparent on the face of the record.',
        'Habeas Corpus carries the highest judicial urgency and can be moved without procedural delay.',
        'Writs can be moved against statutory bodies, universities, municipal bodies, and state departments.'
      ]
    },
    {
      id: 'term-2',
      title: 'Inherent Powers of the High Court (§482 CrPC / §528 BNSS)',
      subtitle: 'Plenary judicial power to prevent abuse of process and secure ends of justice',
      tag: 'Criminal Procedure',
      summary: 'The statutory embodiment of the High Court’s plenary power to intervene at any stage of criminal proceedings to quash frivolous FIRs, prevent procedural harassment, and secure justice.',
      fullContent: [
        'Section 482 CrPC (now Section 528 BNSS) preserves the inherent authority of High Courts to pass necessary orders to give effect to any order under the Code, or to prevent abuse of the process of any court, or otherwise to secure the ends of justice.',
        'This extraordinary jurisdiction is invoked for quashing frivolous FIRs, setting aside non-speaking summoning orders, and compounding matrimonial or commercial disputes settled amicably between parties.',
        'The Supreme Court in State of Haryana v. Bhajan Lal outlined seven illustrative categories where High Courts must quash criminal proceedings, including where allegations even if taken at face value do not constitute an offence.'
      ],
      keyPoints: [
        'Powers under §482/§528 are exercised ex debito justitiae (in the interest of real justice).',
        'Not constrained by technical procedural provisions where obvious injustice is apparent.',
        'Prevents misuse of criminal law for settling private vendettas or civil recovery.',
        'Allows quashing of chargesheets even before formal trial framing.'
      ]
    },
    {
      id: 'term-3',
      title: 'The Triple Test in Regular & Anticipatory Bail',
      subtitle: 'Universal judicial criteria for pre-trial liberty under Article 21',
      tag: 'Bail Jurisprudence',
      summary: 'The foundational three-prong test applied by courts when evaluating bail: 1) Flight Risk, 2) Tampering of Evidence, and 3) Witness Influence.',
      fullContent: [
        'The Supreme Court established that when considering bail, the court must evaluate three critical factors known as the "Triple Test":',
        '1. Flight Risk: Whether the accused is likely to abscond from the jurisdiction of the court.',
        '2. Evidence Tampering: Whether the accused is in a position to destroy documentary or digital records.',
        '3. Witness Influence: Whether the accused possesses the power or inclination to intimidate witnesses.',
        'If the prosecution fails to establish any of these three risks, pre-trial incarceration is deemed unconstitutional under Article 21.'
      ],
      keyPoints: [
        'Gravity of the offence alone is insufficient if the Triple Test is satisfied.',
        'Bail is the rule, jail is the exception — a sacred constitutional dictum.',
        'Appropriate conditions (passport deposit, periodic reporting) mitigate flight risk.',
        'Pre-arrest anticipatory bail under Section 482 BNSS protects reputation against malicious arrest.'
      ]
    },
    {
      id: 'term-4',
      title: 'Section 65B IEA / Section 63 BSA Certificate',
      subtitle: 'Mandatory authentication of electronic and digital evidence in court',
      tag: 'Evidence Law',
      summary: 'The mandatory statutory certificate without which electronic printouts, emails, WhatsApp messages, server logs, and CCTV footage are inadmissible in Indian courts.',
      fullContent: [
        'Under the law of evidence, secondary electronic records (printouts, optical discs, hard drives, USB backups) cannot be admitted as evidence without a contemporaneous certificate.',
        'The certificate must identify the electronic record, describe the manner of production, describe the device particulars, and be signed by a person occupying a responsible official position in relation to the device operation.',
        'The Supreme Court in Arjun Panditrao Khotkar settled that electronic certificates cannot be bypassed when secondary electronic copies are produced in trial.'
      ],
      keyPoints: [
        'Arjun Panditrao Khotkar judgment made certificate mandatory for all secondary electronic evidence.',
        'Original device (phone, server) does not require a certificate if produced directly in court.',
        'Lack of certificate cannot be cured at the appellate stage if timely objection was raised.',
        'Crucial defense tool for excluding unauthorized or manipulated digital evidence.'
      ]
    },
    {
      id: 'term-5',
      title: 'Interim Injunctions & Status Quo (Order XXXIX Rules 1 & 2 CPC)',
      subtitle: 'Preventing alienation and preserving disputed property during litigation',
      tag: 'Civil Litigation',
      summary: 'Judicial protection restraining opposite parties from alienating property, creating third-party rights, or changing the physical nature of disputed lands during pendency of a civil suit.',
      fullContent: [
        'Order 39 Rules 1 and 2 of the Code of Civil Procedure (CPC) empowers civil and commercial courts to grant temporary injunctions to preserve the subject matter of the dispute.',
        'To secure an injunction, three condition precedents must coexist: 1) Prima facie case in favor of the plaintiff, 2) Balance of convenience tilting toward granting relief, and 3) Irreparable loss that cannot be compensated in monetary damages.',
        'Status quo orders ensure that neither party alters the physical possession or revenue records of the land until final adjudication.'
      ],
      keyPoints: [
        'Protects against unauthorized construction, encroachment, or sudden sale deeds.',
        'Violation of injunction orders invites penal attachment and civil prison under Order 39 Rule 2A.',
        'Caveat petitions under Section 148A CPC ensure prior hearing before ex-parte injunctions.'
      ]
    }
  ]

  return (
    <section id="insights" className="py-20 lg:py-28 bg-black text-white w-full overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full space-y-20">
        
        {/* Main Section Header */}
        <div className="space-y-4 text-left w-full">
          <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase font-sans-clean">
            Advocate Dr. Ilapur Manik Yadav &nbsp;|&nbsp; Knowledge Hub
          </p>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-sans tracking-tight">
            Legal Insights & Analysis.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg w-full font-normal leading-relaxed pt-1">
            Authoritative constitutional analysis, landmark High Court judgment updates, and practical legal explainers authored by Dr. Ilapur Manik Yadav.
          </p>

          <div className="w-full h-[1.5px] bg-neutral-800 mt-6" />
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 1: LEGAL ARTICLES (FULL WIDTH OPEN LIST) */}
        {/* ========================================================================= */}
        <div className="space-y-10 text-left w-full">
          
          {/* Highlighted Pillar 01 Heading */}
          <div className="space-y-2 border-b border-neutral-800 pb-5">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-md bg-amber-400 text-black font-black text-xs sm:text-sm tracking-[0.25em] uppercase font-sans-clean shadow-md">
                PILLAR 01
              </span>
              <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight pt-1">
              Legal Articles & Research Papers
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              In-depth research papers on constitutional remedies, criminal procedure reforms, and digital evidence.
            </p>
          </div>

          {/* Sequential List of Articles (Full Width) */}
          <div className="space-y-12 w-full">
            {legalArticles.map((article) => {
              const isExpanded = expandedId === article.id
              return (
                <div key={article.id} className="space-y-3.5 w-full">
                  
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-amber-400 font-semibold rounded uppercase tracking-wider text-[11px]">
                      {article.tag}
                    </span>
                    <span className="text-neutral-400">
                      {article.date} &nbsp;•&nbsp; {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-sans leading-snug w-full">
                    {article.title}
                  </h4>

                  {/* Subtitle if present */}
                  {article.subtitle && (
                    <p className="text-sm sm:text-base font-medium text-amber-300/90 font-sans w-full">
                      {article.subtitle}
                    </p>
                  )}

                  {/* Summary */}
                  <p className="text-slate-300 text-sm sm:text-base md:text-[17px] leading-relaxed w-full">
                    {article.summary}
                  </p>

                  {/* Expandable Deep Dive */}
                  {isExpanded && (
                    <div className="pt-4 space-y-6 border-l-2 border-amber-400/40 pl-6 my-4 w-full animate-in fade-in duration-200">
                      <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed w-full">
                        {article.fullContent.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      {/* Key Takeaways */}
                      <div className="space-y-3 pt-2 w-full">
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                          <Bookmark className="w-4 h-4" />
                          Key Legal Takeaways
                        </span>
                        <ul className="space-y-2.5 pt-1 w-full">
                          {article.keyPoints.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm md:text-[15px] text-slate-200 w-full">
                              <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                              <span className="w-full">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Read More / Read Less Trigger */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleExpand(article.id)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer uppercase tracking-wider"
                    >
                      {isExpanded ? (
                        <>
                          Collapse Analysis <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Read Full Article <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Clean Pillar Divider */}
          <div className="w-full h-[1.5px] bg-neutral-800 pt-6" />

        </div>

        {/* ========================================================================= */}
        {/* PILLAR 2: JUDGMENTS & CASE UPDATES (FULL WIDTH OPEN LIST) */}
        {/* ========================================================================= */}
        <div className="space-y-10 text-left w-full">
          
          {/* Highlighted Pillar 02 Heading */}
          <div className="space-y-2 border-b border-neutral-800 pb-5">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-md bg-amber-400 text-black font-black text-xs sm:text-sm tracking-[0.25em] uppercase font-sans-clean shadow-md">
                PILLAR 02
              </span>
              <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight pt-1">
              Judgments & Case Updates
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Curated analysis of landmark High Court rulings, anticipatory bail precedents, and quashing decrees.
            </p>
          </div>

          {/* Sequential List of Judgments (Full Width) */}
          <div className="space-y-12 w-full">
            {caseUpdates.map((c) => {
              const isExpanded = expandedId === c.id
              return (
                <div key={c.id} className="space-y-3.5 w-full">
                  
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-amber-400 font-semibold rounded uppercase tracking-wider text-[11px]">
                      {c.tag}
                    </span>
                    <span className="font-mono text-amber-300/90 font-medium text-xs sm:text-sm">
                      {c.citation} &nbsp;•&nbsp; {c.court}
                    </span>
                    <span className="text-neutral-400">
                      &nbsp;•&nbsp; {c.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-sans leading-snug w-full">
                    {c.title}
                  </h4>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm sm:text-base md:text-[17px] leading-relaxed w-full">
                    {c.summary}
                  </p>

                  {/* Expandable Deep Dive */}
                  {isExpanded && (
                    <div className="pt-4 space-y-6 border-l-2 border-amber-400/40 pl-6 my-4 w-full animate-in fade-in duration-200">
                      <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed w-full">
                        {c.fullContent.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      {/* Key Takeaways */}
                      <div className="space-y-3 pt-2 w-full">
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                          <Bookmark className="w-4 h-4" />
                          Precedent Summary & Ruling Notes
                        </span>
                        <ul className="space-y-2.5 pt-1 w-full">
                          {c.keyPoints.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm md:text-[15px] text-slate-200 w-full">
                              <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                              <span className="w-full">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Read More / Read Less Trigger */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleExpand(c.id)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer uppercase tracking-wider"
                    >
                      {isExpanded ? (
                        <>
                          Collapse Precedent Notes <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Read Case Ruling Notes <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Clean Pillar Divider */}
          <div className="w-full h-[1.5px] bg-neutral-800 pt-6" />

        </div>

        {/* ========================================================================= */}
        {/* PILLAR 3: LEGAL TERMS / EXPLAINERS (FULL WIDTH OPEN LIST) */}
        {/* ========================================================================= */}
        <div className="space-y-10 text-left w-full">
          
          {/* Highlighted Pillar 03 Heading */}
          <div className="space-y-2 border-b border-neutral-800 pb-5">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-md bg-amber-400 text-black font-black text-xs sm:text-sm tracking-[0.25em] uppercase font-sans-clean shadow-md">
                PILLAR 03
              </span>
              <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight pt-1">
              Legal Terms & Practical Explainers
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Simplified statutory concepts, court procedures, and procedural glossaries for clients and enterprises.
            </p>
          </div>

          {/* Sequential List of Terms (Full Width) */}
          <div className="space-y-12 w-full">
            {legalTerms.map((term) => {
              const isExpanded = expandedId === term.id
              return (
                <div key={term.id} className="space-y-3.5 w-full">
                  
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-amber-400 font-semibold rounded uppercase tracking-wider text-[11px]">
                      {term.tag}
                    </span>
                    {term.subtitle && (
                      <span className="text-neutral-400 text-xs sm:text-sm">
                        {term.subtitle}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-sans leading-snug w-full">
                    {term.title}
                  </h4>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm sm:text-base md:text-[17px] leading-relaxed w-full">
                    {term.summary}
                  </p>

                  {/* Expandable Deep Dive */}
                  {isExpanded && (
                    <div className="pt-4 space-y-6 border-l-2 border-amber-400/40 pl-6 my-4 w-full animate-in fade-in duration-200">
                      <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed w-full">
                        {term.fullContent.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      {/* Key Takeaways */}
                      <div className="space-y-3 pt-2 w-full">
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                          <Bookmark className="w-4 h-4" />
                          Practical Application & Court Practice
                        </span>
                        <ul className="space-y-2.5 pt-1 w-full">
                          {term.keyPoints.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm md:text-[15px] text-slate-200 w-full">
                              <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                              <span className="w-full">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Read More / Read Less Trigger */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleExpand(term.id)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer uppercase tracking-wider"
                    >
                      {isExpanded ? (
                        <>
                          Collapse Explainer <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Read Detailed Breakdown <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Clean Pillar Divider */}
          <div className="w-full h-[1.5px] bg-neutral-800 pt-6" />

        </div>

        {/* Section Bottom CTA */}
        <div className="pt-4 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full">
          <div className="space-y-1 text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white font-sans">
              Require Legal Representation or Specific Case Opinion?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Schedule a confidential consultation with Advocate Dr. Ilapur Manik Yadav.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-white hover:bg-slate-200 text-slate-950 font-sans-clean text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-colors inline-flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            Request Consultation
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

    </section>
  )
}
