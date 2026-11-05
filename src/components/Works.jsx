import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} className="w-full max-w-[360px]">
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/20">
        <div className="relative h-[230px] overflow-hidden rounded-2xl">
          <img src={image} alt={name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex justify-end p-3">
            <button
              type="button"
              onClick={() => window.open(source_code_link, '_blank', 'noopener,noreferrer')}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 transition hover:scale-105"
              aria-label={`Open ${name} project`}
            >
              <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] leading-6 text-slate-300">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-slate-300"
        >
          These projects highlight how I approach systems thinking, product delivery, and platform engineering in real-world scenarios.
          Each one focuses on business value, maintainability, and measurable outcomes.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');