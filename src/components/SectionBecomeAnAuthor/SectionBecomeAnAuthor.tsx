import React, { FC } from "react";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import Image, { StaticImageData } from "next/image";
import MyImage from "../MyImage";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string | StaticImageData;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = "/images/BecomeAnAuthorImg.png",
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center not-prose ${className}`}
    >
      <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
        <span className="text-xs uppercase tracking-wider font-medium text-neutral-400">
          Upgrade your tech skills
        </span>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-3">
          Become an author and share your great articles
        </h2>
        <span className="block mt-8 text-neutral-500 dark:text-neutral-400">
          Become an author. Read and share new perspectives on just about any technologies. Everyone’s
          welcomed. Send an email to blog@codinousar.com with your email, user name and your profile image
        </span>
        {/* <ButtonPrimary className="mt-8">Become an author</ButtonPrimary> */}
      </div>
      <div className="flex-grow">
        <MyImage
          alt="hero-image"
          sizes="(max-width: 768px) 100vw, 50vw"
          src={rightImg}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
