import church from "@/assets/project-church.jpg";
import schoolAdmin from "@/assets/project-school-admin.jpg";
import resultPortal from "@/assets/project-result-portal.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import business from "@/assets/project-business.jpg";
import schoolSite from "@/assets/project-school-site.jpg";

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  live: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "Zion Priesthood Gospel Centre",
    category: "Church Website",
    description:
      "A modern, responsive church website that features a clean and intuitive user interface, making it easy to explore the church's vision, ministries, leadership, services schedules, events, sermons, and contact information.",
    image: church,
    live: "https://zpgc.netlify.app",
    year: "2026",
  },
  {
    title: "Scalable Talent Nigeria",
    category: "Recruitment & Talent Solutions Website",
    description:
      "The website presents a clean, professional interface that showcases recuritment services, career development programs, talent sourcing, and workforce solutions in an engaging and user-friendly manner.",
    image: schoolAdmin,
    live: "https://scalabletalent.com",
    year: "2026",
  },
  {
    title: "Angelic Academy",
    category: "School Result Portal",
    description:
      "It enables students and parents to access examination results online while providing administrators and taechers with an efficient platform to upload, process, and manage academic records.",
    image: resultPortal,
    live: "https://angelicacademy.com.ng/school/signin.php",
    year: "2026",
  },
  {
    title: "The Burgundy Restaurant",
    category: "Restaurant Website",
    description:
      "It features a sophisticated, modern interface, the website showcases the restaurant's story, seasonal menus, reservations, private dining experinces, culinary philosophy, and contact information with visually rich layouts and intuitive navigation.",
    image: restaurant,
    live: "https://theburgundyrestaurant.com",
    year: "2026",
  },
  {
    title: "Scalable Hire Business",
    category: "Business Consulting & Talent Solutions Website",
    description:
      "The platform presents the company's services including outplacement support, succession planning, talent development, executive advisory, and Job Application as a Service (JAaaS) through a professional, intuitve, and engaing user experience.",
    image: business,
    live: "https://scalablehirebusiness.com",
    year: "2026",
  },
  {
    title: "Blue Tech Field Instrumentation Services Limited",
    category: "Instrumentation Serivice Website",
    description:
      "A Nigerian-owned company specializing in the supply, installation, maintenace, and calibration of electrical and instrumentation devices. With deep understanding of the oil and gas industry.",
    image: schoolSite,
    live: "https://bluetechfield.netlify.app",
    year: "2026",
  },
];