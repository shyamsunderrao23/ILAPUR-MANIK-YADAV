import React from 'react'
import { Scale } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative z-20 py-20 lg:py-28 bg-black text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 space-y-16 text-left">
        
        {/* Section Header */}
        <div className="space-y-4 w-full">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-sans-clean">
            <Scale className="w-4 h-4" />
            <span>Advocate Profile & Life Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-white font-sans tracking-tight leading-[1.18]">
            From the Soil of Ilapur to the <span className="text-amber-400">Halls of Justice</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            The inspiring life story, constitutional awakening, and public service of <strong>Dr. Ilapur Manik Yadav</strong>—advocate, scholar, youth leader, and agrarian champion.
          </p>
          <div className="w-20 h-1 bg-amber-400 rounded-full mt-3" />
        </div>

        {/* Narrative Flow: Pure Open Paragraphs Extended Full Width */}
        <div className="space-y-14 text-slate-300 text-base sm:text-[17px] leading-relaxed w-full">
          
          {/* Section 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans flex items-center gap-3">
              <span>🌅</span>
              <span>Humble Beginnings & An Identity Born from Soil</span>
            </h3>
            
            <div className="space-y-4 pt-1">
              <p>
                Dr. Ilapur Manik Yadav was born into a small, middle-class farming household in Ilapur Village, situated in the Ameenpur mandal of the Patancheru constituency, Telangana. From his earliest years, hardship walked beside him. While other children had uninterrupted childhoods, Manik divided his days between muddy crop fields and school notebooks, working alongside his family as an active farmer.
              </p>

              <p>
                His devotion to his birthplace ran so deep that he made a defining personal vow: he officially adopted his village’s name—Ilapur—as his permanent surname. No matter how far his education or career reached, the identity of his village would lead the way.
              </p>

              <p>
                Financially constrained, he pursued his schooling entirely in the Telugu medium up to Class 10. Despite having to balance grueling manual farm work with study hours under dim lights, his academic resilience showed: he graduated his 10th-grade board examinations with Distinction marks.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans flex items-center gap-3">
              <span>📚</span>
              <span>Stepping into the Unknown & Mentorship</span>
            </h3>

            <div className="space-y-4 pt-1">
              <p>
                Determined to shatter limits, Manik made a brave decision to transition straight into the English medium for his Intermediate education (11th and 12th grades). The language barrier was formidable, but through sheer perseverance, he mastered his coursework without ever abandoning his farming chores back home.
              </p>

              <p>
                During his college graduation, his consistency and discipline caught the eye of a close lecturer and mentor. Recognizing Manik's sharp intellect and urgent need for self-reliance, the mentor helped him secure his first professional position as a college lecturer, earning a modest monthly salary of ₹15,000. Stepping in front of a classroom transformed him, sharpening the stage confidence, clarity of thought, and persuasive speech that would later define his public career.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* Section 3 */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans flex items-center gap-3">
              <span>📈</span>
              <span>The Land Strategy & An Awakening</span>
            </h3>

            <div className="space-y-4 pt-1">
              <p>
                Rather than inflating his lifestyle with his ₹15,000 salary, Manik practiced strict financial discipline. He pooled and saved nearly every rupee until he had enough capital to purchase his very first 1-acre parcel of land in his native Ilapur.
              </p>

              <p>
                Understanding local agrarian value and future urban corridors, he systematically expanded this blueprint over time: acquiring land, cultivating and developing it, and strategically selling parcels to reinvest into larger holdings. This journey lifted his family out of debt and built strong financial security.
              </p>

              <p className="italic text-amber-200">
                Yet, as commercial wealth accumulated, an inner unrest began to trouble him: "How long will I just buy and sell land? How many days will my life just be about personal gain? What will my legacy be, and how can my village be truly remembered?"
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* Section 4 */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans flex items-center gap-3">
              <span>⚖️</span>
              <span>Rising as an Advocate (The Ambedkarite Fire)</span>
            </h3>

            <div className="space-y-4 pt-1">
              <p>
                To build a lasting legacy that could defend ordinary citizens, Manik turned to the ultimate inspiration of social justice and constitutional empowerment: Dr. B.R. Ambedkar. Guided by Babasaheb’s clarion call to "Educate, Agitate, Organise," Manik realized that the legal framework was the most potent weapon to shield the vulnerable and challenge systemic injustice.
              </p>

              <p>
                He pursued his law degree, successfully earning his LL.B., and continued an extraordinary academic journey that eventually culminated in an M.Tech, an LL.M., and a Ph.D.. After gaining critical insight working in corporate legal frameworks, he transitioned to independent litigation, establishing himself as a formidable High Court Advocate in Telangana. Today, he uses his legal platform to handle complex civil, land, and public disputes, standing firm against unlawful land grabs and administrative overreach.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* Section 5 */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans flex items-center gap-3">
              <span>🏛️</span>
              <span>Political Leadership in the BRS Party</span>
            </h3>

            <div className="space-y-4 pt-1">
              <p>
                Recognizing that systemic public change requires both constitutional advocacy and political will, Dr. Ilapur Manik Yadav formally stepped into mainstream politics as a prominent Youth Leader and key executive voice in the Bharat Rashtra Samithi (BRS).
              </p>

              <p>
                <strong className="text-white font-semibold">BRS Legal Cell Pillar:</strong> Leveraging his legal acumen, he serves as a leading force in the BRS Legal Cell, defending party cadres, fighting unlawful government actions in court, and challenging complex regional administrative policies such as Section 22A land restrictions.
              </p>

              <p>
                <strong className="text-white font-semibold">Mass Youth Mobilization:</strong> Operating across Patancheru, Ameenpur, and Beeramguda, he mobilizes thousands of rural youths for public rights, organizing rallies, farmer agitations (such as Rythu Bharosa protests), and regional party campaigns under senior BRS leadership.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* Section 6 */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans flex items-center gap-3">
              <span>🌾</span>
              <span>Ground-Level Development & Service in Ilapur</span>
            </h3>

            <div className="space-y-4 pt-1">
              <p>
                Dr. Ilapur Manik Yadav’s journey has come full circle. He has directed his resources, legal access, and political standing straight back into transforming Ilapur and surrounding rural pockets:
              </p>

              <p>
                <strong className="text-white font-semibold">Legal Awareness & Free Aid Clinics:</strong> Alongside the District Legal Services Authority (DLSA) and senior district judges, he regularly hosts institutional Legal Literacy Programs across Ilapur and Ameenpur, educating rural students and youth on constitutional rights, cybercrime, anti-ragging laws, and the POCSO Act.
              </p>

              <p>
                <strong className="text-white font-semibold">Protecting Agricultural Land:</strong> Using his legal background, he actively advises native farmers against predatory real estate encroachers, ensuring local families retain rightful ownership of their ancestral soil.
              </p>

              <p>
                <strong className="text-white font-semibold">Youth Health & Community Initiatives:</strong> He spearheads massive youth blood donation drives in Ilapur village and sponsors large-scale community kitchens (Annadhanam) during cultural celebrations across Ilapur, Kishtareddypet, Dayara, and Gandigudem.
              </p>

              <p>
                <strong className="text-white font-semibold">Civic Infrastructure Advocacy:</strong> He persistently lobbies municipal bodies and urban authorities for asphalt road connectivity, proper drainage networks, drinking water provisions, and primary school welfare for Ilapur.
              </p>

              <p className="pt-2 text-white font-medium">
                For Dr. Ilapur Manik Yadav, keeping his village's name as his surname is not a symbolic gesture—it is a living covenant that the soil which raised him will never be left behind.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
