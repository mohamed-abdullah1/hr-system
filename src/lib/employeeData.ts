import { v4 as uuidv4 } from "uuid";
interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface EmergencyContact {
  name: string;
  relationship: string;
  phoneNumber: string;
}

interface Salary {
  amount: number;
  currency: string;
  effectiveDate: Date;
}

interface PerformanceReview {
  date: Date;
  score: number;
  comments: string;
  reviewer: string;
}

export interface EmployeeInterface {
  // Personal Information
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: Date;
  gender: "Male" | "Female" | "Non-binary" | "Other";
  maritalStatus: "Single" | "Married" | "Divorced" | "Widowed";
  nationality: string;

  // Contact Information
  email: string;
  phoneNumber: string;
  address: Address;
  // emergencyContact: EmergencyContact;

  // // Employment Details
  // employeeId: string;
  // startDate: Date;
  // endDate?: Date;
  // department: string;
  // position: string;
  // manager?: string; // Could be another employee's id
  // employmentStatus: "Full-time" | "Part-time" | "Contract" | "Intern";
  // workLocation: "On-site" | "Remote" | "Hybrid";

  // // Payroll Information
  // salary: Salary;
  // bankAccountNumber: string;
  // taxId: string;

  // // Skills and Qualifications
  // education: string[];
  // skills: string[];
  // certifications: string[];
  // languages: string[];

  // // Performance and Development
  // performanceReviews: PerformanceReview[];
  // trainingCompleted: string[];
  // goalsAndObjectives: string[];

  // // Leave and Attendance
  availableLeaveBalance: number;
  // sickLeaveBalance: number;
  // attendanceRecord: {
  //   date: Date;
  //   status: "Present" | "Absent" | "Half-day" | "On Leave";
  // }[];

  // // Benefits
  // healthInsurancePlan?: string;
  // retirementPlanDetails?: string;
  // otherBenefits?: string[];

  // // Documents
  // documents: { type: string; url: string; uploadDate: Date }[];

  // // Misc
  // notes?: string;
  // customFields?: Record<string, any>; // For any additional company-specific fields
}

export const generateEmployees = (count: number): EmployeeInterface[] => {
  const departments = [
    "Engineering",
    "Marketing",
    "Sales",
    "Human Resources",
    "Finance",
  ];
  const positions = [
    "Manager",
    "Senior Developer",
    "Junior Developer",
    "Designer",
    "Analyst",
    "Coordinator",
  ];
  const skills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "SQL",
    "GraphQL",
    "AWS",
    "Docker",
    "Kubernetes",
  ];
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: uuidv4(),
    firstName: `FirstName${i + 1}`,
    lastName: `LastName${i + 1}`,
    dateOfBirth: new Date(
      1970 + Math.floor(Math.random() * 30),
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    ),
    gender: ["Male", "Female", "Non-binary", "Other"][
      Math.floor(Math.random() * 4)
    ] as "Male" | "Female" | "Non-binary" | "Other",
    maritalStatus: ["Single", "Married", "Divorced", "Widowed"][
      Math.floor(Math.random() * 4)
    ] as "Single" | "Married" | "Divorced" | "Widowed",
    nationality: "American",
    email: `employee${i + 1}@example.com`,
    phoneNumber: `+1 (555) ${String(
      Math.floor(Math.random() * 900) + 100
    ).padStart(3, "0")}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
    address: {
      street: `${Math.floor(Math.random() * 1000) + 1} Main St`,
      city: "Anytown",
      state: "CA",
      country: "USA",
      postalCode: String(Math.floor(Math.random() * 90000) + 10000),
    },
    // emergencyContact: {
    //   name: `EmergencyContact${i + 1}`,
    //   relationship: ["Spouse", "Parent", "Sibling", "Friend"][
    //     Math.floor(Math.random() * 4)
    //   ],
    //   phoneNumber: `+1 (555) ${String(
    //     Math.floor(Math.random() * 900) + 100
    //   ).padStart(3, "0")}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
    // },
    // employeeId: `EMP${String(i + 1).padStart(3, "0")}`,
    // startDate: new Date(
    //   2015 + Math.floor(Math.random() * 8),
    //   Math.floor(Math.random() * 12),
    //   Math.floor(Math.random() * 28) + 1
    // ),
    // department: departments[Math.floor(Math.random() * departments.length)],
    // position: positions[Math.floor(Math.random() * positions.length)],
    // employmentStatus: ["Full-time", "Part-time", "Contract", "Intern"][
    //   Math.floor(Math.random() * 4)
    // ] as "Full-time" | "Part-time" | "Contract" | "Intern",
    // workLocation: ["On-site", "Remote", "Hybrid"][
    //   Math.floor(Math.random() * 3)
    // ] as "On-site" | "Remote" | "Hybrid",
    // salary: {
    //   amount: Math.floor(Math.random() * 100000) + 30000,
    //   currency: "USD",
    //   effectiveDate: new Date(2022, 0, 1),
    // },
    // bankAccountNumber: String(
    //   Math.floor(Math.random() * 9000000000) + 1000000000
    // ),
    // taxId: `${String(Math.floor(Math.random() * 900) + 100)}-${String(
    //   Math.floor(Math.random() * 90) + 10
    // )}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
    // education: [
    //   `Bachelor of Science in ${
    //     ["Computer Science", "Business", "Engineering"][
    //       Math.floor(Math.random() * 3)
    //     ]
    //   }`,
    // ],
    // skills: Array.from(
    //   { length: Math.floor(Math.random() * 5) + 1 },
    //   () => skills[Math.floor(Math.random() * skills.length)]
    // ),
    // certifications: [
    //   `Certified ${
    //     ["Project Manager", "Scrum Master", "AWS Developer"][
    //       Math.floor(Math.random() * 3)
    //     ]
    //   }`,
    // ],
    // languages: Array.from(
    //   { length: Math.floor(Math.random() * 3) + 1 },
    //   () => languages[Math.floor(Math.random() * languages.length)]
    // ),
    // performanceReviews: [
    //   {
    //     date: new Date(2022, 11, 31),
    //     score: Number((Math.random() * 2 + 3).toFixed(1)),
    //     comments: "Meets expectations",
    //     reviewer: "Manager Name",
    //   },
    // ],
    // trainingCompleted: ["Onboarding", "Security Awareness"],
    // goalsAndObjectives: ["Improve skills", "Contribute to team success"],
    availableLeaveBalance: Math.floor(Math.random() * 1000) + 5,
    // sickLeaveBalance: Math.floor(Math.random() * 5) + 1,
    // attendanceRecord: [
    //   {
    //     date: new Date(),
    //     status: "Present" as "Present" | "Absent" | "Half-day" | "On Leave",
    //   },
    // ],
    // healthInsurancePlan: "Standard Health Plan",
    // retirementPlanDetails: "401(k) with 4% company match",
    // documents: [
    //   {
    //     type: "Resume",
    //     url: `https://example.com/resume${i + 1}`,
    //     uploadDate: new Date(2022, 0, 1),
    //   },
    // ],
    // notes: "Employee is doing well in their role",
  }));
};

const employeesArray: EmployeeInterface[] = generateEmployees(20);

console.log(JSON.stringify(employeesArray, null, 2));
