import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { automations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { RobotCanvas } from "./canvas";

const AutomationCard = ({ automation }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: automation.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={automation.icon}
            alt={automation.title}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{automation.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {automation.platform}
        </p>
      </div>

      <p className='mt-4 text-white-100 text-[14px] tracking-wider'>
        {automation.description}
      </p>

      {automation.tools && automation.tools.length > 0 && (
        <div className='mt-4 flex flex-wrap gap-2'>
          {automation.tools.map((tool, index) => (
            <span
              key={`tool-${index}`}
              className='text-[12px] bg-tertiary py-1 px-2 rounded-md text-white'
            >
              {tool}
            </span>
          ))}
        </div>
      )}

      {automation.achievements && automation.achievements.length > 0 && (
        <ul className='mt-4 list-disc ml-5 space-y-1'>
          {automation.achievements.map((achievement, index) => (
            <li
              key={`achievement-${index}`}
              className='text-white-100 text-[13px] pl-1 tracking-wider'
            >
              {achievement}
            </li>
          ))}
        </ul>
      )}
    </VerticalTimelineElement>
  );
};

const Automation = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Intelligent Solutions
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          AI & Automation.
        </h2>
      </motion.div>

      {/* Robot Scene */}
      <div className="relative w-full h-[60vh] mt-10">
        <RobotCanvas />
      </div>

      <div className='mt-10 flex flex-col'>
        <VerticalTimeline>
          {automations.map((automation, index) => (
            <AutomationCard
              key={`automation-${index}`}
              automation={automation}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Automation, "automation");
