import { useEffect, useState, ReactNode } from 'react';
import { motion } from 'motion/react';
import { Github, Code, Cpu, Trophy, Zap, AlertTriangle, CheckCircle } from 'lucide-react';
import VantaBackground from './components/VantaBackground';
import ProjectCard from './components/ProjectCard';

// Placeholder for Vanta if it fails to load
const FallbackBackground = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen w-full bg-slate-900 text-white relative overflow-x-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-80"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

export default function App() {
  const [vantaLoaded, setVantaLoaded] = useState(false);

  useEffect(() => {
    // Simple check to see if we can render the Vanta component
    // In a real app, we might want more robust error handling
    setVantaLoaded(true);
  }, []);

  const projects = [
    { title: "疯狂8点 (Crazy 8s)", url: "https://jackcrazyeight-axzb.vercel.app/" },
    { title: "星际战争 (Star Wars)", url: "https://jack-starwar.vercel.app/" },
    { title: "数块消除 (Number Block)", url: "https://jacksumgame.vercel.app/" },
    { title: "防御游戏 (Defense)", url: "https://jack-defense.vercel.app/" },
  ];

  const takeaways = [
    "熟练使用 AI Studio 做游戏项目",
    "熟练使用 GitHub 将代码上传到仓库",
    "通过 Vercel 部署 GitHub 项目到服务器",
    "使用 Open Claw 创建股票助手机器人"
  ];

  const BackgroundComponent = vantaLoaded ? VantaBackground : FallbackBackground;

  return (
    <BackgroundComponent>
      <div className="container mx-auto px-4 py-12 max-w-5xl text-slate-100 font-sans">
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-16 space-y-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          >
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              alt="Jack Avatar" 
              className="w-full h-full rounded-full bg-slate-800 object-cover border-4 border-slate-900"
            />
          </motion.div>
          
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] animate-glitch"
            >
              Jack's AI Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 font-mono"
            >
              前哨AI冬令营展示集
            </motion.p>
          </div>
        </header>

        {/* Intro Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
            <Zap className="w-6 h-6" /> 个人简介
          </h2>
          <p className="text-lg leading-relaxed text-slate-300">
            各位老师、同学们，大家好！我是 <span className="font-bold text-white">Jack</span>，今年12岁。
            在“前哨AI冬令营”的学习中，我完成了多个AI实践项目，积累了丰富的动手经验与创新思考。
          </p>
        </motion.section>

        {/* Projects Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            项目展示
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                url={project.url}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Highlights & Reflections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Favorites */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/80 rounded-2xl p-6 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-purple-400">
              <Trophy className="w-6 h-6" /> 我的最爱 & 最佳项目
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400 mb-1">最喜欢的项目</p>
                <a href="https://jackcrazyeight-axzb.vercel.app/" target="_blank" className="text-lg font-semibold text-white hover:text-purple-400 transition-colors flex items-center gap-2">
                  疯狂8点 (Crazy 8s) <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">做的最好的项目</p>
                <a href="https://jackcrazyeight-axzb.vercel.app/" target="_blank" className="text-lg font-semibold text-white hover:text-purple-400 transition-colors flex items-center gap-2">
                  疯狂8点 (Crazy 8s) <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/80 rounded-2xl p-6 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.15)]"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-400">
              <AlertTriangle className="w-6 h-6" /> 遇到的挑战
            </h3>
            <div className="space-y-4">
              <div className="bg-red-950/30 p-4 rounded-lg border border-red-900/50">
                <p className="font-semibold text-red-200 mb-2">问题：</p>
                <p className="text-slate-300 text-sm">Lark 导入 JSON 文件时，提示格式不正确。</p>
              </div>
              <div className="bg-green-950/30 p-4 rounded-lg border border-green-900/50">
                <p className="font-semibold text-green-200 mb-2">解决方案：</p>
                <p className="text-slate-300 text-sm">
                  通过仔细阅读 2026 要点文档，发现我用的 Lark 文档是国际版。改成国内版本后导入 JSON 正常。
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Takeaways */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-cyan-400 relative z-10">
            <Cpu className="w-8 h-8" /> 最大的收获
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {takeaways.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors">
                <div className="mt-1 bg-cyan-500/20 p-2 rounded-lg text-cyan-400">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-slate-200 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <footer className="mt-20 text-center text-slate-500 text-sm pb-8">
          <p>© 2026 Jack's AI Showcase. Built with React & Tailwind CSS.</p>
        </footer>

      </div>
    </BackgroundComponent>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}
