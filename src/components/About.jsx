import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, stats } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn('right', 'spring', 0.2 * index, 0.7)}
    className="w-full rounded-[24px] border border-white/10 bg-slate-900/60 p-[1px] shadow-lg shadow-slate-950/30"
  >
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-[23px] bg-slate-900/90 px-8 py-6 text-center">
      <img src={icon} alt={title} className="mb-5 h-14 w-14 object-contain" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-slate-300"
      >
        I’m a software engineer who enjoys turning complicated business requirements into reliable digital experiences.
        From Java and React applications to AWS-powered platform work, I focus on building systems that are scalable,
        maintainable, and useful to real users.
      </motion.p>

      <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');