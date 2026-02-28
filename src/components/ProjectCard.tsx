import { FC, ReactElement } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  url: string;
  description?: string;
  delay?: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, url, description, delay = 0 }): ReactElement => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="block group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-75 group-hover:opacity-100 transition duration-200 blur group-hover:blur-md animate-tilt"></div>
      <div className="relative px-7 py-6 bg-slate-900 rounded-xl leading-none flex items-center justify-between border border-slate-800 hover:border-slate-600 transition-all duration-300 transform group-hover:-translate-y-1">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-slate-400 text-sm group-hover:text-slate-300">
              {description}
            </p>
          )}
        </div>
        <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
      </div>
    </motion.a>
  );
};

export default ProjectCard;
