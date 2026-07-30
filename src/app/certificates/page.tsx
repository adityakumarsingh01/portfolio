"use client";
import { motion } from "framer-motion";
import { Award, ShieldCheck, ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

const certificates = [
  { title: "SEO Graphic", issuer: "HubSpot Academy", date: "Feb' 26", image: "/certificates/SEO.png", verificationLink: "https://app-na2.hubspot.com/academy/achievements/rgqfcfj5/en/1/aditya-kumar-singh/seo" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Coursera", date: "Sep' 25", image: "/certificates/The Bits and Bytes of Computer Networking.jpg", verificationLink: "https://www.coursera.org/account/accomplishments/verify/JMDOW9TS8MHI?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
  { title: "Programming in Java", issuer: "IamNeo", date: "May' 25", image: "/certificates/Java Programming.jpg", verificationLink: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BiSEqCklnCqZXPHc4fbazMcrmaZSGnAqE%3D" },
  { title: "Object Oriented Programming", issuer: "IamNeo", date: "Dec' 24", image: "/certificates/Object Oriented Programming.jpg", verificationLink: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BgMPewXc2sUmv9JUiHxjo68tPCwzkuEks%3D" },
  { title: "Data Structures and Algorithms", issuer: "IamNeo", date: "Dec' 24", image: "/certificates/Data Structures and Algorithm.jpg", verificationLink: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2FCAzRPMLRAo8q5Yq9QdXddQD8JfqQf9GY%3D" },
  { title: "Computer Programming", issuer: "IamNeo", date: "May' 24", image: "/certificates/C Programming.jpg", verificationLink: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2B6zm4hZ6SX83lEA2V3jtzVXMAs9QXRqM8%3D" },
  { title: "Tricky English Grammar", issuer: "Coursera", date: "May' 24", image: "/certificates/Tricky English Grammer.jpg", verificationLink: "https://www.coursera.org/account/accomplishments/verify/8GVJCRNM9J3A" },
  { title: "Software Development Processes and Methodologies", issuer: "Coursera", date: "Feb' 24", image: "/certificates/Software Development Processes and Methodologies.jpg", verificationLink: "https://www.coursera.org/account/accomplishments/verify/8WK7UZ2FX5K9" },
  { title: "Data Visualization", issuer: "CareerNinja", date: "Jan' 24", image: "/certificates/Data Visualization.jpg", verificationLink: "https://www.linkedin.com/posts/aditya-kumar-singh-990377291_dataviz-certified-lpu-activity-7158426167459422209-bknK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEa2H7wB3GZS-pnk6rWTCs78bg-tTWNujUk" },
  { title: "Introduction to Data Analytics", issuer: "CareerNinja", date: "Jan' 24", image: "/certificates/Introduction to Data Analytics.jpg", verificationLink: "https://www.linkedin.com/posts/aditya-kumar-singh-990377291_dataanalytics-certified-lpu-activity-7158416251092959232-5aXE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEa2H7wB3GZS-pnk6rWTCs78bg-tTWNujUk" },
  { title: "Introduction to R Programming", issuer: "CareerNinja", date: "Nov' 23", image: "/certificates/Introduction to R Programming.jpeg", verificationLink: "https://www.linkedin.com/posts/aditya-kumar-singh-990377291_lpu-lovelyprofessionaluniversity-activity-7135948002157899776-1JRf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEa2H7wB3GZS-pnk6rWTCs78bg-tTWNujUk" },
  { title: "Responsive Web Design", issuer: "freecodecamp", date: "Nov' 23", image: "/certificates/Responsive Web Design.jpg", verificationLink: "https://www.freecodecamp.org/certification/adityakumarsingh01/responsive-web-design" },
  { title: "Introduction to Python Advanced", issuer: "CareerNinja", date: "Nov' 23", image: "/certificates/Introduction to Python Advanced.jpeg", verificationLink: "https://www.linkedin.com/posts/aditya-kumar-singh-990377291_lpu-lovelyprofessionaluniversity-activity-7135614477026177024-gl7v?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEa2H7wB3GZS-pnk6rWTCs78bg-tTWNujUk" },
  { title: "Public Speaking with Canva", issuer: "Coursera", date: "Nov' 23", image: "/certificates/Public Speaking with Canva.jpg", verificationLink: "https://www.coursera.org/account/accomplishments/verify/6X3FANUPDHVK" },
  { title: "Spoken English Course", issuer: "LearnVern", date: "Nov' 23", image: "/certificates/Spoken English Course.jpg", verificationLink: "https://www.learnvern.com/certificate?candidate_id=CAN_3115763&certificate_id=CAN_31157636549673" }
];

const hackathons = [
  {
    title: "Build-a-Thon Hackathon",
    issuer: "Board Infinity",
    date: "Apr' 24",
    desc: "Collaborated with a team to solve real-world problems, enhancing my problem-solving, teamwork, and analytical skills.",
    image: "/certificates/Build a Thon.jpg",
    verificationLink: "https://www.linkedin.com/posts/aditya-kumar-singh-990377291_buildathon-hackathon-boardinfinity-activity-7185956221630255104-h4uq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEa2H7wB3GZS-pnk6rWTCs78bg-tTWNujUk"
  },
  {
    title: "Hack Quest – 24-Hour CTF Challenge",
    issuer: "Lovely Professional University & upGrad Campus",
    date: "Apr' 24",
    desc: "Gained hands-on experience in critical thinking, time management, and competitive problem-solving under pressure.",
    image: "/certificates/Hack Quest.jpg",
    verificationLink: "https://certificate.givemycertificate.com/c/3a7d6c2b-8c6f-44d7-ae12-df6f76d31557"
  }
];

export default function CertificatesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12" style={{ fontFamily: 'Cambria, serif' }}>
      <div className="mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white capitalize tracking-wider"
          style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}
        >
          Certifications & <span className="text-purple-600 dark:text-purple-400">Awards</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl"
        >  Continuous learning and competitive problem solving.
        </motion.p>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
          <Award className="text-purple-500" /> Professional Certificates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: idx * 0.05 }}
            >
              <SpotlightCard className="h-full relative overflow-hidden group border border-black/5 dark:border-white/5 hover:border-purple-500/30 transition-colors">
                <a href={cert.verificationLink} target="_blank" rel="noreferrer" className="absolute inset-0 z-20">
                  <span className="sr-only">Verify {cert.title}</span>
                </a>

                {cert.image && (
                  <div className="absolute inset-0 z-0">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover blur-[1px] opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/50 dark:from-black/95 dark:via-black/80 dark:to-black/50"></div>
                  </div>
                )}

                <div className="p-6 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm text-gray-900 dark:text-white group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-sm border border-black/5 dark:border-white/10">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    {cert.date && (
                      <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-white/60 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-sm whitespace-nowrap">
                        {cert.date}
                      </span>
                    )}
                  </div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>{cert.title}</h4>
                  <p className="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-auto flex items-center gap-2">
                    {cert.issuer}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
          <Award className="text-yellow-500" /> Extra-Curricular Activities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathons.map((hack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 + (idx * 0.1) }}
            >
              <SpotlightCard className="h-full relative overflow-hidden group border border-black/5 dark:border-white/5 hover:border-yellow-500/30 transition-colors">
                <a href={hack.verificationLink} target="_blank" rel="noreferrer" className="absolute inset-0 z-20">
                  <span className="sr-only">Verify {hack.title}</span>
                </a>
                {hack.image && (
                  <div className="absolute inset-0 z-0">
                    <img src={hack.image} alt={hack.title} className="w-full h-full object-cover blur-[1px] opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/50 dark:from-black/95 dark:via-black/80 dark:to-black/50"></div>
                  </div>
                )}
                <div className="p-6 md:p-8 flex flex-col justify-between h-full relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-mono text-yellow-600 dark:text-yellow-400 uppercase tracking-widest block mb-3 drop-shadow-sm">{hack.issuer}</span>
                    {hack.date && (
                      <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-white/60 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-sm whitespace-nowrap">
                        {hack.date}
                      </span>
                    )}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white drop-shadow-sm tracking-wider mb-6" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>{hack.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-8 font-medium drop-shadow-sm">{hack.desc}</p>
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500 transition-colors -rotate-45 group-hover:rotate-0 duration-300 shadow-sm mt-auto">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
