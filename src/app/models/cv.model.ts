export interface CV {
  name: string;
  description: string;
  photoUrl: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  education: {
    degree: string;
    institution: string;
    graduationDate: string;
  }[];
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string;
  }[];
  skills: string[];
  interests: string[];
  achievements: string[];
  languages: string[];
}
