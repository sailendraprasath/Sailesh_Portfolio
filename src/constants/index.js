import project1 from "../assets/projects/project-1.png";
import Py_Project1 from "../assets/projects/Py_Project1.png";
import Py_Project2 from "../assets/projects/Py_Project2.png";
import Alphagnito from "../assets/Alphagnito.png";
import Cognifyz from "../assets/Cognifyz.png";
import Prodigy from "../assets/Prodigy.png";
export const HERO_CONTENT = ` A highly motivated, positive, hardworking and the ability to adapt quickly, work
 collaboratively in team settings, and contribute to achieving organizational goals.
 Excited to bring a proactive approach, a commitment to excellence, and a
 passion for continuous learning to a dynamic professional environment, and
 looking for a responsible role to improve my knowledge and take my assigned
 organization to the next level.`;
export const ABOUT_TEXT = `I’m a final year Computer Science & Business Systems student with a strong passion for Artificial Intelligence, Computer Vision (OpenCV), and Frontend Web Development. I enjoy building visually engaging and user-friendly web interfaces while also diving deep into the world of intelligent systems and automation.`;
export const EXPERIENCES = [
  {
    Img_png: Alphagnito,
    role: "Frontend Developer Intern(On-site)",
    company: "Alphagnito Technologies",
    description: ` Completed a 2-month Frontend Developer internship at Alphagnito
 Technologies, working on responsive UI components using React.js
 and modern web technologies.`,
    technologies: ["ReactJS", "CSS", "Bootstrap"],
  },
  {
    Img_png: Cognifyz,
    role: "Frontend Developer Intern(remote)",
    company: "Cognifyz Technologies",
    description: `Completed a 1-month Frontend Developer internship at Cognifyz
 Technologies, focused on creating user-friendly components and
 improving web design skills.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    Img_png: Prodigy,
    role: "Frontend Developer Intern(remote)",
    company: "Prodigy Technologies",
    description: ` Completed a 1-month Frontend Developer internship at Prodigy
 InfoTech, building responsive web interfaces with HTML, CSS, and
 JavaScript through 4 weekly tasks.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Attendance tracking system using face recognition opencv",
    image: Py_Project1,
    description:
      "Developed a contactless attendance system using OpenCV and face detection, automating attendance marking through computer vision for improved efficiency",
    technologies: ["OpenCV", "Python"],
  },
  {
    title: "Yellow Color Detection Using OpenCV",
    image: Py_Project2,
    description:
      " Built a real-time yellow object detection system using OpenCV and HSV color masking to identify yellow objects in images and video feeds",
    technologies: ["OpenCV", "Python"],
  },
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind CSS", "ReactJS"],
  },
];

export const CONTACT = {
  address: "115'Mela Kailasapuram Thathaneri Main Road Madurai 625018 ",
  phoneNo: "+91 9952860404 ",
  email: "sailendraprasath05@gmail.com",
};
