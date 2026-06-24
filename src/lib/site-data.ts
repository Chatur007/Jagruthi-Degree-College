import galleryWhatsApp1 from "@/assets/WhatsApp Image 2026-06-05 at 7.04.34 PM.jpeg";
import galleryWhatsApp2 from "@/assets/WhatsApp Image 2026-06-05 at 7.04.34 PM (1).jpeg";
import galleryWhatsApp3 from "@/assets/WhatsApp Image 2026-06-05 at 7.04.34 PM (2).jpeg";
import galleryWhatsApp4 from "@/assets/WhatsApp Image 2026-06-05 at 7.04.35 PM.jpeg";

export const SITE = {
  name: "Jagruthi Degree College",
  short: "JDC",
  tagline: "Excellence in Education Since 1998",
  address: "Main Road, Bhalki, Bidar District, Karnataka 585328",
  phone: "+91 91130 35230",
  whatsapp: "+91 73531 07313",
  email: "jagruthicollegeblk@gmail.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15247.42!2d77.20!3d18.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBhalki!5e0!3m2!1sen!2sin!4v1700000000000",
};

export const QUICK_LINKS = [
  { name: "Karnataka SSP", url: "https://ssp.postmatric.karnataka.gov.in/", desc: "State Scholarship Portal" },
  { name: "KEA", url: "https://kea.kar.nic.in/", desc: "Karnataka Examination Authority" },
  { name: "NDLI", url: "https://ndl.iitkgp.ac.in/", desc: "National Digital Library of India" },
  { name: "SWAYAM", url: "https://swayam.gov.in/", desc: "Free Online Courses" },
  { name: "e-PG Pathshala", url: "https://epgp.inflibnet.ac.in/", desc: "Postgraduate Content" },
  { name: "NPTEL", url: "https://nptel.ac.in/", desc: "Tech-Enhanced Learning" },
  { name: "UGC", url: "https://www.ugc.gov.in/", desc: "University Grants Commission" },
  { name: "AICTE", url: "https://www.aicte-india.org/", desc: "Technical Education Council" },
  { name: "DigiLocker", url: "https://www.digilocker.gov.in/", desc: "Digital Documents" },
];

export type Department = {
  slug: string;
  name: string;
  short: string;
  image: string;
  description: string;
  overview: string;
  hod: { name: string; message: string };
  courses: string[];
  facilities: string[];
};

export const DEPARTMENTS: Department[] = [
  {
    slug: "commerce",
    name: "Department of Commerce",
    short: "Commerce",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    description: "Building future business leaders, accountants and entrepreneurs.",
    overview:
      "The Department of Commerce offers comprehensive programs in accounting, finance, taxation and business management with a strong focus on practical learning and industry exposure.",
    hod: {
      name: "Dr. Ramesh Kulkarni",
      message:
        "Our department aims to nurture commerce graduates who are industry-ready, ethical and entrepreneurial.",
    },
    courses: ["B.Com (General)"],
    facilities: ["Tally Lab", "Commerce Library", "Smart Classrooms", "Industry Visits"],
  },
  {
    slug: "arts",
    name: "Department of Arts",
    short: "Arts",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80",
    description: "Exploring history, literature, languages and the human experience.",
    overview:
      "The Arts faculty offers a rich blend of humanities and social sciences, fostering critical thinking, communication and cultural awareness.",
    hod: {
      name: "Prof. Sunita Patil",
      message: "Education in the arts is education for life — it shapes thinkers, leaders and citizens.",
    },
    courses: ["B.A"],
    facilities: ["Language Lab", "Reading Room", "Cultural Hall", "Debate Society"],
  },
  {
    slug: "botany",
    name: "Department of Botany",
    short: "Botany",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&q=80",
    description: "Unlocking the science of plants, ecology and sustainability.",
    overview:
      "The Botany department combines classroom learning with field excursions, herbarium work and modern plant-science laboratories.",
    hod: {
      name: "Dr. Anjali Deshmukh",
      message: "Plants sustain our planet. Studying botany is a step toward a greener, healthier future.",
    },
    courses: ["B.Sc CBZ"],
    facilities: ["Herbarium", "Botanical Garden", "Greenhouse", "Microscopy Lab"],
  },
  {
    slug: "zoology",
    name: "Department of Zoology",
    short: "Zoology",
    image: "https://plus.unsplash.com/premium_photo-1722054522045-debe05e966e9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8em9vbG9naXN0fGVufDB8fDB8fHww",
    description: "Studying animal life, biodiversity and biomedical sciences.",
    overview:
      "Zoology at VBC blends classical taxonomy with modern molecular biology, biotechnology and animal physiology.",
    hod: {
      name: "Dr. Vinay Joshi",
      message: "We inspire students to explore the diversity of life and contribute to conservation.",
    },
    courses: ["B.Sc PMC"],
    facilities: ["Dissection Lab", "Aquarium", "Museum", "Field Research Kit"],
  },
  {
    slug: "chemistry",
    name: "Department of Chemistry",
    short: "Chemistry",
    image: "https://images.unsplash.com/photo-1694230155228-cdde50083573?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlbWlzdHJ5JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D",
    description: "Where molecules meet imagination — organic, inorganic and physical.",
    overview:
      "Modern chemistry laboratories, instrumentation and research-led teaching prepare students for industry and academia alike.",
    hod: {
      name: "Dr. Pratima Hegde",
      message: "Chemistry is the central science — and we make sure our students master it with rigor and curiosity.",
    },
    courses: ["B.Sc PMCs"],
    facilities: ["Organic Lab", "Instrumentation Room", "Research Cell", "Safety Training"],
  },
  // {
  //   slug: "mathematics",
  //   name: "Department of Mathematics",
  //   short: "Mathematics",
  //   image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&q=80",
  //   description: "Pure and applied math, statistics, and computational thinking.",
  //   overview:
  //     "From abstract algebra to applied statistics, the Mathematics department trains analytical minds for academia, finance and tech.",
  //   hod: {
  //     name: "Prof. Suresh Iyer",
  //     message: "Mathematics is the language of the universe. We help students speak it fluently.",
  //   },
  //   courses: ["B.Sc. (Mathematics)", "M.Sc. (Mathematics)", "Statistics Certificate"],
  //   facilities: ["Math Resource Center", "Computational Lab", "Quiz Club", "Research Seminars"],
  // },
  // {
  //   slug: "physics",
  //   name: "Department of Physics",
  //   short: "Physics",
  //   image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=1200&q=80",
  //   description: "From classical mechanics to quantum and astrophysics.",
  //   overview:
  //     "The Physics department offers strong fundamentals supported by modern experimental labs and observational astronomy facilities.",
  //   hod: {
  //     name: "Dr. Karthik Rao",
  //     message: "Physics teaches us how the world works — and how to ask better questions about it.",
  //   },
  //   courses: ["B.Sc. (Physics)", "M.Sc. (Physics)", "Electronics Certificate"],
  //   facilities: ["Optics Lab", "Electronics Lab", "Astronomy Club", "Workshop"],
  // },
  // {
  //   slug: "computer-science",
  //   name: "Department of Computer Science",
  //   short: "Computer Science",
  //   image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
  //   description: "Programming, AI, data science and modern software engineering.",
  //   overview:
  //     "A future-focused curriculum covering programming, web, data, AI/ML and cloud — with hands-on projects and industry partnerships.",
  //   hod: {
  //     name: "Dr. Neha Kapoor",
  //     message: "We don't just teach code — we build problem-solvers ready for tomorrow's tech landscape.",
  //   },
  //   courses: ["B.C.A.", "B.Sc. (Computer Science)", "M.Sc. (Computer Science)", "Data Science Certificate"],
  //   facilities: ["Two Computer Labs", "AI/ML Lab", "Project Studio", "Coding Club"],
  // },
];

export const NOTICES = [
  { date: "2026-06-10", category: "Admissions", title: "UG Admissions 2026-27 now open — Apply by July 15" },
  { date: "2026-06-08", category: "Examination", title: "Even semester results published on the student portal" },
  { date: "2026-06-05", category: "Events", title: "Annual Sports Meet scheduled for August 12–14" },
  { date: "2026-06-02", category: "Circular", title: "Revised academic calendar 2026-27 released" },
  { date: "2026-05-28", category: "Events", title: "National workshop on AI & Education — June 25" },
  { date: "2026-05-22", category: "Admissions", title: "PG entrance test schedule announced" },
];

export const GALLERY = [
  // { src: galleryWhatsApp1, category: "Campus", title: "Campus Moment" },
  // { src: galleryWhatsApp2, category: "Events", title: "WhatsApp Photo 1" },
  // { src: galleryWhatsApp3, category: "Events", title: "WhatsApp Photo 2" },
  // { src: galleryWhatsApp4, category: "Campus", title: "WhatsApp Photo 3" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/Shri-L-G-Gupta-President.webp", category: "Events", title: "Tech Fest" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/Shri-Dinesh-Gunderao-Minister.webp", category: "Cultural Activities", title: "Annual Day" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/Shri-H-C-Mahadevappa.webp", category: "Cultural Activities", title: "Dance Performance" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/Dr-B-R-Ambedkar1-1.webp", category: "Sports", title: "Cricket Tournament" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/Dr-B-R-Ambedkar-2.webp", category: "Sports", title: "Basketball Court" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/drdo-2.webp", category: "Classrooms", title: "Interactive Classroom" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/Scientists-at-DRDO-2.webp", category: "Library", title: "Library Reading Area" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0028-1.jpg", category: "Classrooms", title: "Computer Lab" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0024-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0025-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0022-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0023-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0017-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0015-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0012-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0011-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/students-standing-1-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0007-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0009-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/students2-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0004-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0005-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0001-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0002-1.jpg", category: "Library", title: "Digital Library" },
  { src: "https://pgibhalki.com/wp-content/uploads/2025/05/IMG-20250529-WA0003-1.jpg", category: "Library", title: "Digital Library" },
];

export const GALLERY_CATEGORIES = [
  "All",
  "Campus",
  "Classrooms",
  "Library",
  "Events",
  "Cultural Activities",
  "Sports",
] as const;

export const GALLERY_PREVIEW = GALLERY.slice(0, 4);

export type FeeStructure = {
  course: string;
  fee: number;
};

export const FEE_STRUCTURE: FeeStructure[] = [
  { course: "B.A", fee: 12000 },
  { course: "B.Com (General)", fee: 12000 },
  { course: "B.Sc (CBZ)", fee: 12000 },
  { course: "B.Sc (PCM)", fee: 14000 },
  { course: "B.Sc (PMCs)", fee: 16000 },
];

export const COURSES = [
  "B.Com (General)",
  "B.A",
  "B.Sc (CBZ)",
  "B.Sc (PCM)",
  "B.Sc (PMCs)",
];
