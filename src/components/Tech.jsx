import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="group rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition duration-200 hover:-translate-y-1 hover:border-yellow-400/50"
        >
          <div className="flex h-16 items-center justify-center rounded-xl bg-slate-950/70">
            <img src={technology.icon} alt={technology.name} className="h-10 w-10 object-contain" />
          </div>
          <div className="mt-3 text-center text-sm font-medium text-slate-200">{technology.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');