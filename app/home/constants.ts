import { deepClone } from "../lib/parse-resume-from-pdf/deep-clone";
import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "../lib/redux/resumeSlice";
import { Resume } from "../lib/redux/types";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Vũ Quang Nam",
    summary: "Lập trình viên phần mềm , vui tính , nhiệt huyết",
    email: "test@gmail.com",
    phone: "123-456-7890",
    location: "HYD,IND",
    url: "linkedin.com/in/yourusername",
  },
  workExperiences: [
    {
      company: "ABC Company",
      jobTitle: "Software Engineer",
      date: "May 2023 - Present",
      descriptions: [
        "Công ty hàng đầu về phát triển phần mềm , với nhiều năm trong lĩnh vực CNTT ",
        "Cung cấp các giải pháp về công nghệ , chuyển dổi số cho doanh nghiệp",
        "Cam kết phần mềm chất lượng dội ngũ nhân viên tư vấn nhiệt tình",
      ],
    },
    {
      company: "DEF Organization",
      jobTitle: "Software Engineer",
      date: "May 2022 - May 2023",
      descriptions: [
        "Công ty hàng đầu về phát triển phần mềm , với nhiều năm trong lĩnh vực CNTT ",
        "Cung cấp các giải pháp về công nghệ , chuyển dổi số cho doanh nghiệp",
        "Cam kết phần mềm chất lượng dội ngũ nhân viên tư vấn nhiệt tình",
      ],
    },
    {
      company: "XYZ Company",
      jobTitle: "Software Engineer",
      date: "May 2021 - May 2022",
      descriptions: [
        "Công ty hàng đầu về phát triển phần mềm , với nhiều năm trong lĩnh vực CNTT ",
        "Cung cấp các giải pháp về công nghệ , chuyển dổi số cho doanh nghiệp",
        "Cam kết phần mềm chất lượng dội ngũ nhân viên tư vấn nhiệt tình",
      ],
    },
  ],
  educations: [
    {
      school: "XYZ University",
      degree: "Chuyên ngành Công Nghệ Thông Tin",
      date: "Sep 2018 - Aug 2022",
      gpa: "4.0",
      descriptions: [
        "Công ty hàng đầu về phát triển phần mềm , với nhiều năm trong lĩnh vực CNTT ",
        "Cung cấp các giải pháp về công nghệ , chuyển dổi số cho doanh nghiệp",
        "Cam kết phần mềm chất lượng dội ngũ nhân viên tư vấn nhiệt tình",
      ],
    },
  ],
  projects: [
    {
      project: "Dự án",
      date: "Fall 2021",
      descriptions: [
        "Cung cấp các giải pháp về công nghệ , chuyển dổi số cho doanh nghiệp",
        "Cam kết phần mềm chất lượng dội ngũ nhân viên tư vấn nhiệt tình",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "Python", rating: 3 },
      { skill: "TypeScript", rating: 3 },
      { skill: "React", rating: 3 },
    ],
    descriptions: [
      "Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  custom: {
    descriptions: [],
  },
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
};
