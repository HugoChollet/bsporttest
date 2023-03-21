import { padding } from "@mui/system";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type LinkCardProps = {
  title: string;
  link: string;
  description: string;
};

export const LinkCard = ({ title, link, description }: LinkCardProps) => {
  return (
    <a
      href={link}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        {title} <span>-&gt;</span>
      </h2>
      <p className={inter.className}>{description}</p>
    </a>
  );
};
