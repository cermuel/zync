import { FaUsers } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import { PiDevicesBold } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FiBell, FiUploadCloud } from "react-icons/fi";

const features = [
  {
    icon: <FaUsers color="#737cde" size={30} />,
    title: "Real-time Collaboration",
    description:
      "Collaborate with your team live — see changes as they happen, share ideas instantly, and stay connected without the delays of back-and-forth emails.",
  },
  {
    icon: <GrTask color="#737cde" size={27} />,
    title: "Task & Project Management",
    description:
      "Break down complex projects into clear tasks, assign responsibilities, set deadlines, and track progress in one unified space.",
  },
  {
    icon: <PiDevicesBold color="#737cde" size={30} />,
    title: "Sync Across Devices",
    description:
      "Your work stays up to date no matter where you are. Zync automatically syncs your data across desktop, tablet, and mobile.",
  },
  {
    icon: <IoChatbubbleEllipsesOutline color="#737cde" size={28} />,
    title: "Integrated Chat & Messaging",
    description:
      "Keep conversations flowing within your projects. From quick questions to detailed discussions, Zync’s built-in chat helps your team communicate in context.",
  },
  {
    icon: <FiBell color="#737cde" size={28} />,
    title: "Notifications & Reminders",
    description:
      "Get notified when it matters. Zync keeps you updated with intelligent alerts and reminders that help you stay on top of tasks, deadlines, and conversations.",
  },
  {
    icon: <FiUploadCloud color="#737cde" size={28} />,
    title: "File Sharing & Uploads",
    description:
      "Share files, docs, and media effortlessly. Whether you're dropping a PDF, uploading a video, or adding assets to a task, Zync makes file handling a breeze.",
  },
];

export default features;
