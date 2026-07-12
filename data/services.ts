import { IconType } from "react-icons";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";

export type Service = {
  icon: IconType;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: FiCast,
    title: "Business Strategy",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: FiLayers,
    title: "Website Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: FiUsers,
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: FiMonitor,
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: FiUsers,
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: FiMonitor,
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];
