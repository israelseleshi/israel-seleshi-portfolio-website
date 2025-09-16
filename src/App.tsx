import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  GraduationCap,
  Award,
  Users,
  MapPin,
  Phone,
  Calendar,
  BookOpen,
  Briefcase,
  Heart,
  Palette,
  Monitor,
  Server,
  Smartphone,
  Brain,
  Target,
  Star,
  Download,
  ArrowRight,
  Sun,
  Moon
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'learning-experience', 'portfolio', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const projects = [
    {
      id: 1,
      title: "Nano Computing ICT Solutions Website",
      description: "Full-stack website development handling both front-end and back-end to create a comprehensive digital presence for an ICT solutions company.",
      image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "JavaScript", "CSS"],
      link: "https://nanocomputingict.netlify.app",
      github: "https://github.com/israelseleshi/nanocomputingict-",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Yummy Food Review",
      description: "A food review platform for restaurants in Addis Ababa, Ethiopia, enabling user authentication, restaurant discovery with search/filters, star-based reviews, and comprehensive dashboards for owners and admins.",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Cloudinary", "Framer Motion"],
      link: "https://yummy-eatery.netlify.app",
      github: "https://github.com/israelseleshi/yummy-eatery",
      category: "Web Development"
    },
    {
      id: 3,
      title: "United Global Services - Visa & Immigration Platform",
      description: "A comprehensive, platform for visa and immigration services. Built with modern web technologies and designed for enterprise-grade user experience with real-time messaging, and secure document management.",
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Cloudinary", "Framer Motion"],
      link: "https://ugsdesk.netlify.app",
      github: "https://github.com/israelseleshi/UGS-website",
      category: "Web Development"
    }
  ];

  const skills = [
    // Programming Languages
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Programming" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Programming" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Programming" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", category: "Frontend" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", category: "Backend" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", category: "Frontend" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Programming" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "Tools" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "Design" },
    { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", category: "Design" }
  ];

  const education = [
    {
      institution: "Addis Ababa University",
      degree: "Bachelor of Science in Information Science",
      period: "Feb 2023 - July 2026",
      grade: "Predicted Grade: 3.5/4.0",
      modules: ["Database Systems", "Data Structures & Algorithms", "Network Fundamentals", "System Analysis & Design", "Web Application Development"]
    },
    {
      institution: "Saint Joseph High School",
      degree: "High School Diploma",
      period: "Sept 2019 - June 2022",
      grade: "Excellent Performance",
      modules: ["Mathematics (A)", "Biology (A)", "English (A)", "Information Technology (A)", "Physics (B)", "Chemistry (B)"]
    },
    {
      institution: "Intern at EthSwitch S.C.",
      degree: "Gaining hands-on experience in a professional tech environment, working on real-world problems and collaborating with experienced engineers.",
      period: "Present",
      grade: "",
      modules: []
    },
    {
      institution: "ALX Data Science Course",
      degree: "Enrolled in a rigorous, project-based data science program covering Python, SQL, statistics, and machine learning fundamentals.",
      period: "Ongoing",
      grade: "",
      modules: []
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${isDarkMode ? 'rgba(16, 185, 129, 0.5)' : 'rgba(16, 185, 129, 0.3)'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 backdrop-blur-md border-b z-50 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-900/90 border-gray-800' 
            : 'bg-white/90 border-gray-100'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className={`text-xl font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Israel Seleshi
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Learning & Experience', 'Portfolio', 'Skills', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item === 'Learning & Experience' ? 'learning-experience' : item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === (item === 'Learning & Experience' ? 'learning-experience' : item.toLowerCase())
                      ? 'text-green-500'
                      : isDarkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {item}
                  {activeSection === (item === 'Learning & Experience' ? 'learning-experience' : item.toLowerCase()) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
              
              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDarkMode 
                    ? 'hover:bg-gray-800 text-gray-300 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Navigation & Theme Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDarkMode 
                    ? 'hover:bg-gray-800 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              
              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDarkMode 
                    ? 'hover:bg-gray-800 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
                whileTap={{ scale: 0.95 }}
              >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className={`md:hidden py-4 border-t transition-colors duration-300 ${
                  isDarkMode ? 'border-gray-800' : 'border-gray-100'
                }`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-3">
                  {['Home', 'About', 'Learning & Experience', 'Portfolio', 'Skills', 'Contact'].map((item, index) => (
                    <motion.button
                      key={item}
                      onClick={() => scrollToSection(item === 'Learning & Experience' ? 'learning-experience' : item.toLowerCase())}
                      className={`text-left text-sm font-medium py-2 transition-colors ${
                        activeSection === (item === 'Learning & Experience' ? 'learning-experience' : item.toLowerCase())
                          ? 'text-green-500'
                          : isDarkMode 
                            ? 'text-gray-300 hover:text-white' 
                            : 'text-gray-600 hover:text-gray-900'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <motion.div
                variants={itemVariants}
                className={`inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 ${
                  isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-700'
                }`}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for opportunities
              </motion.div>
              
              <motion.h1 
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-300 mb-3 sm:mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
                variants={itemVariants}
              >
                Hi, I'm{' '}
                <motion.span 
                  className="text-green-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Israel
                </motion.span>
              </motion.h1>
              
              <motion.h2 
                className={`text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
                variants={itemVariants}
              >
                Information Systems Student & Aspiring Data Scientist
              </motion.h2>
              
              <motion.p 
                className={`text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
                variants={itemVariants}
              >
                Passionate about <span className="text-green-500">data analytics</span> and <span className="text-green-500">web development</span> with <span className="border-b-2 border-green-500">hands-on experience</span> in <span className="text-green-500">full-stack development</span>. 
                Currently pursuing my Bachelor's degree while <span className="border-b-2 border-green-500">building</span> <span className="text-green-500">innovative solutions</span> and <span className="border-b-2 border-green-500">exploring the world of data science</span>.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => scrollToSection('portfolio')}
                  className="group px-6 py-3 sm:px-8 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2 relative text-sm sm:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative">
                    View My Work
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  onClick={() => window.open('https://drive.google.com/file/d/1vAomA8a8pZtk5ggSrUtqV3ByT8MhUnXq/view?usp=sharing', '_blank')}
                  className={`group px-6 py-3 sm:px-8 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 relative text-sm sm:text-base ${
                    isDarkMode 
                      ? 'border border-gray-600 text-gray-200 hover:border-gray-500 hover:bg-gray-700 hover:text-white' 
                      : 'border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} />
                  <span className="relative">
                    Download Resume
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </motion.button>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
                variants={itemVariants}
              >
                <div className={`flex items-center gap-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <MapPin size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Addis Ababa, Ethiopia</span>
                </div>
                <div className={`flex items-center gap-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <img src="/aauLogo.png" alt="Addis Ababa University Logo" className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">AAU Student</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex-shrink-0 order-1 lg:order-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.img
                src="/profile.png"
                alt="Israel Seleshi - Professional headshot"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain object-center rounded-full mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-12 sm:py-16 lg:py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About Me
            </h2>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4 sm:space-y-6">
              <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm an <strong className="font-bold text-green-500">Information Systems Student</strong> at Addis Ababa University with a passion for <span className="font-bold text-green-500">data analytics</span> 
                and <span className="font-bold text-green-500">web development</span>. With <span className="border-b-2 border-green-500">hands-on experience</span> at EthSwitch S.C., I've gained 
                valuable insights into the tech industry and developed strong technical skills.
              </p>
              
              <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                My expertise spans across <span className="font-bold text-green-500">data analytics</span>, <span className="font-bold text-green-500">full-stack development</span>, and database management. 
                I'm fluent in both Amharic and English, with strong communication, problem-solving, and teamwork abilities. 
                I'm eager to pursue a career as an <strong className="font-bold text-green-500">Aspiring Data Scientist</strong>.
              </p>
            </div>

            {/* Contact Info */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                isDarkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-green-500 flex-shrink-0 sm:w-5 sm:h-5" />
                  <span className={`font-medium text-sm sm:text-base transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>israelseleshi09@gmail.com</span>
                </div>
              </div>
              <div className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                isDarkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-green-500 flex-shrink-0 sm:w-5 sm:h-5" />
                  <span className={`font-medium text-sm sm:text-base transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>+251-920-190-438</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learning & Experience Section */}
      <section id="learning-experience" className={`py-12 sm:py-16 lg:py-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Background Image */}
        <div 
          className="absolute opacity-5 sm:opacity-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/roadmap.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            top: '80px',
            left: '0',
            right: '0',
            bottom: '0'
          }}
        ></div>
        
        {/* Gradient Overlay for Premium Feel */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800/90 via-gray-800/95 to-gray-900/90' 
            : 'bg-gradient-to-br from-white/90 via-white/95 to-gray-50/90'
        }`}></div>
        
        {/* Content Overlay */}
        <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-700'
              }`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My Journey
            </motion.div>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 transition-colors duration-300 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-white via-gray-100 to-green-400 bg-clip-text text-transparent' 
                : 'from-gray-900 via-gray-800 to-green-600 bg-clip-text text-transparent'
            }`}>
              Learning & Experience
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A timeline of my educational journey and professional growth
            </p>
          </motion.div>
          
          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Timeline Line - Hidden on Mobile */}
            <div className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full ${
              isDarkMode 
                ? 'bg-gradient-to-b from-green-400 via-blue-500 to-purple-600' 
                : 'bg-gradient-to-b from-green-500 via-blue-600 to-purple-700'
            }`}></div>
            
            {/* Mobile Timeline Line - Visible only on Mobile */}
            <div className={`lg:hidden absolute left-6 top-0 w-0.5 h-full ${
              isDarkMode 
                ? 'bg-gradient-to-b from-green-400 via-blue-500 to-purple-600' 
                : 'bg-gradient-to-b from-green-500 via-blue-600 to-purple-700'
            }`}></div>
            
            {/* Timeline Items - Chronologically Descending */}
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {/* EthSwitch Internship - Present */}
              <motion.div 
                className="relative flex items-center lg:justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-4 border-white shadow-2xl z-20">
                  <div className="absolute inset-1 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Timeline Dot - Mobile */}
                <div className="lg:hidden absolute left-6 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-3 border-white shadow-xl z-20">
                  <div className="absolute inset-0.5 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Content Card - Mobile: Full Width, Desktop: Left Side */}
                <div className="w-full lg:w-5/12 ml-16 lg:ml-0 lg:pr-12">
                  <motion.div 
                    className={`p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl transition-all duration-500 backdrop-blur-sm border-2 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30 hover:border-purple-400/50' 
                        : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-purple-200/50 hover:border-purple-300/70'
                    }`}
                    whileHover={{ scale: 1.03, y: -8, rotateY: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/eth-switch-Logo.png" alt="EthSwitch S.C." className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                      <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">Present</span>
                    </div>
                    <h3 className={`font-bold text-lg sm:text-xl lg:text-2xl mb-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Intern at EthSwitch S.C.</h3>
                    <p className="text-green-600 font-semibold mb-3 text-sm sm:text-base">Software Development Intern</p>
                    <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Gaining hands-on experience in a professional tech environment, working on real-world problems and collaborating with experienced engineers.
                    </p>
                  </motion.div>
                </div>
                
                {/* Empty space for right side - Desktop only */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>

              {/* ALX Data Science Course - Ongoing */}
              <motion.div 
                className="relative flex items-center lg:justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-4 border-white shadow-2xl z-20">
                  <div className="absolute inset-1 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Timeline Dot - Mobile */}
                <div className="lg:hidden absolute left-6 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-3 border-white shadow-xl z-20">
                  <div className="absolute inset-0.5 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Empty space for left side - Desktop only */}
                <div className="hidden lg:block w-5/12"></div>
                
                {/* Content Card - Mobile: Full Width, Desktop: Right Side */}
                <div className="w-full lg:w-5/12 ml-16 lg:ml-0 lg:pl-12">
                  <motion.div 
                    className={`p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl transition-all duration-500 backdrop-blur-sm border-2 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-green-500/30 hover:border-green-400/50' 
                        : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-green-200/50 hover:border-green-300/70'
                    }`}
                    whileHover={{ scale: 1.03, y: -8, rotateY: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/alxLog.png" alt="ALX" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                      <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">Ongoing</span>
                    </div>
                    <h3 className={`font-bold text-lg sm:text-xl lg:text-2xl mb-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>ALX Data Science Course</h3>
                    <p className="text-green-600 font-semibold mb-3 text-sm sm:text-base">Data Science Program</p>
                    <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Enrolled in a rigorous, project-based data science program covering Python, SQL, statistics, & machine learning fundamentals.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Addis Ababa University - 2023-2026 */}
              <motion.div 
                className="relative flex items-center lg:justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-2xl z-20">
                  <div className="absolute inset-1 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Timeline Dot - Mobile */}
                <div className="lg:hidden absolute left-6 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-3 border-white shadow-xl z-20">
                  <div className="absolute inset-0.5 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Content Card - Mobile: Full Width, Desktop: Left Side */}
                <div className="w-full lg:w-5/12 ml-16 lg:ml-0 lg:pr-12">
                  <motion.div 
                    className={`p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl transition-all duration-500 backdrop-blur-sm border-2 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-blue-500/30 hover:border-blue-400/50' 
                        : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-blue-200/50 hover:border-blue-300/70'
                    }`}
                    whileHover={{ scale: 1.03, y: -8, rotateY: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/aauLogo.png" alt="Addis Ababa University" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">2023 - 2026</span>
                    </div>
                    <h3 className={`font-bold text-lg sm:text-xl lg:text-2xl mb-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Addis Ababa University</h3>
                    <p className="text-green-600 font-semibold mb-3 text-sm sm:text-base">Bachelor of Science in Information Science</p>
                    <p className={`text-sm sm:text-base mb-4 leading-relaxed transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Current GPA: 3.5/4.0 - Studying Database Systems, Data Structures & Algorithms, and Web Development.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1.5 text-xs sm:text-sm rounded-full font-medium transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-700/70 text-gray-300 border border-gray-600' : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}>Database Systems</span>
                      <span className={`px-3 py-1.5 text-xs sm:text-sm rounded-full font-medium transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-700/70 text-gray-300 border border-gray-600' : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}>Data Structures</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Empty space for right side - Desktop only */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>

              {/* Saint Joseph High School - 2019-2022 */}
              <motion.div 
                className="relative flex items-center lg:justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-4 border-white shadow-2xl z-20">
                  <div className="absolute inset-1 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Timeline Dot - Mobile */}
                <div className="lg:hidden absolute left-6 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-3 border-white shadow-xl z-20">
                  <div className="absolute inset-0.5 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Empty space for left side - Desktop only */}
                <div className="hidden lg:block w-5/12"></div>
                
                {/* Content Card - Mobile: Full Width, Desktop: Right Side */}
                <div className="w-full lg:w-5/12 ml-16 lg:ml-0 lg:pl-12">
                  <motion.div 
                    className={`p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl transition-all duration-500 backdrop-blur-sm border-2 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-orange-500/30 hover:border-orange-400/50' 
                        : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-orange-200/50 hover:border-orange-300/70'
                    }`}
                    whileHover={{ scale: 1.03, y: -8, rotateY: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/stJospeghSchoolLogo.png" alt="Saint Joseph High School" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                      <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">2019 - 2022</span>
                    </div>
                    <h3 className={`font-bold text-lg sm:text-xl lg:text-2xl mb-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Saint Joseph High School</h3>
                    <p className="text-green-600 font-semibold mb-3 text-sm sm:text-base">High School Diploma</p>
                    <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Excellent Performance with strong foundation in Mathematics, Biology, and Information Technology.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Academic Tutor Experience - 2021 */}
              <motion.div 
                className="relative flex items-center lg:justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-4 border-white shadow-2xl z-20">
                  <div className="absolute inset-1 bg-pink-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Timeline Dot - Mobile */}
                <div className="lg:hidden absolute left-6 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-3 border-white shadow-xl z-20">
                  <div className="absolute inset-0.5 bg-pink-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Content Card - Mobile: Full Width, Desktop: Left Side */}
                <div className="w-full lg:w-5/12 ml-16 lg:ml-0 lg:pr-12">
                  <motion.div 
                    className={`p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl transition-all duration-500 backdrop-blur-sm border-2 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-pink-500/30 hover:border-pink-400/50' 
                        : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-pink-200/50 hover:border-pink-300/70'
                    }`}
                    whileHover={{ scale: 1.03, y: -8, rotateY: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/askal_Logo.png" alt="Askal Charity Association" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                      <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">2021</span>
                    </div>
                    <h3 className={`font-bold text-lg sm:text-xl lg:text-2xl mb-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Academic Tutor</h3>
                    <p className="text-green-600 font-semibold mb-3 text-sm sm:text-base">Askal Charity Association</p>
                    <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Provided tutoring to 30+ students, achieving 20% average improvement in test scores through engaging lesson plans and mentorship.
                    </p>
                  </motion.div>
                </div>
                
                {/* Empty space for right side - Desktop only */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-12 sm:py-16 lg:py-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        {/* Gradient Background */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-700'
              }`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My Work
            </motion.div>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 transition-colors duration-300 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-white via-gray-100 to-green-400 bg-clip-text text-transparent' 
                : 'from-gray-900 via-gray-800 to-green-600 bg-clip-text text-transparent'
            }`}>
              Featured Projects
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`} style={{ userSelect: 'text', pointerEvents: 'auto' }}>
              A showcase of my recent work in <span className="font-bold">web development</span>, <span className="font-bold">data analytics</span>, and design projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group rounded-2xl overflow-hidden backdrop-blur-sm border-2 transition-all duration-500 cursor-pointer ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-gray-700/50 hover:border-green-500/50 hover:bg-gray-700/80' 
                    : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200/50 hover:border-green-400/50 hover:bg-white/90'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-video overflow-hidden relative rounded-t-2xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-4 right-4">
                      <motion.span 
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
                          isDarkMode ? 'bg-green-900/80 text-green-300' : 'bg-green-100/90 text-green-700'
                        }`}
                        initial={{ scale: 0, rotate: -10 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      >
                        {project.category}
                      </motion.span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-green-500 transition-colors line-clamp-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`} style={{ userSelect: 'text', pointerEvents: 'auto' }}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 text-sm sm:text-base leading-relaxed transition-colors duration-300 line-clamp-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`} style={{ userSelect: 'text', pointerEvents: 'auto' }}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className={`px-2 sm:px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-gray-700/50 text-gray-300 hover:bg-green-900/30 hover:text-green-400' 
                            : 'bg-gray-100/50 text-gray-700 hover:bg-green-100/50 hover:text-green-600'
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        style={{ userSelect: 'text', pointerEvents: 'auto' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={`px-2 sm:px-3 py-1 text-xs rounded-full ${
                        isDarkMode ? 'bg-gray-700/50 text-gray-400' : 'bg-gray-100/50 text-gray-500'
                      }`}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Project Link */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-semibold text-sm sm:text-base transition-all duration-300 group/link ${
                      isDarkMode 
                        ? 'text-green-400 hover:text-green-300' 
                        : 'text-green-600 hover:text-green-700'
                    }`}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative">
                      View Project
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                    <motion.div
                      whileHover={{ rotate: 45, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink size={16} />
                    </motion.div>
                  </motion.a>
                </div>
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none ${
                  isDarkMode ? 'bg-green-400' : 'bg-green-500'
                }`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 sm:py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Skills & Expertise
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A <span className="font-bold">comprehensive toolkit</span> spanning <span className="font-bold">programming</span>, <span className="font-bold">data analysis</span>, and <span className="font-bold">design</span>.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-green-50'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.img 
                  src={skill.logo}
                  alt={skill.name}
                  className="w-6 h-6 flex-shrink-0"
                  onError={(e) => {
                    // Fallback to a generic tech icon if the specific logo fails
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310b981'%3E%3Cpath d='M12 2L2 7L12 12L22 7L12 2Z'/%3E%3Cpath d='M2 17L12 22L22 17'/%3E%3Cpath d='M2 12L12 17L22 12'/%3E%3C/svg%3E";
                  }}
                  whileHover={{ rotate: 10 }}
                />
                <motion.span 
                  className={`text-sm font-semibold transition-colors duration-300 group-hover:text-green-500 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-12 sm:py-16 lg:py-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        {/* Gradient Background */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-700'
              }`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get In Touch
            </motion.div>
            <motion.h2 
              className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 transition-colors duration-300 bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-white via-gray-100 to-green-400 bg-clip-text text-transparent' 
                  : 'from-gray-900 via-gray-800 to-green-600 bg-clip-text text-transparent'
              }`}
            >
              Let's Work Together
            </motion.h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ready to collaborate on your next <span className="font-bold">innovative solution</span>? Let's discuss your vision.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className={`text-lg sm:text-xl font-bold mb-6 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Contact Information</h3>
                <div className="space-y-4 sm:space-y-6">
                  <motion.div 
                    className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/50'
                    }`}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        isDarkMode ? 'bg-green-900/30 group-hover:bg-green-800/40' : 'bg-green-50 group-hover:bg-green-100'
                      }`}
                      whileHover={{ rotate: 10 }}
                    >
                      <Mail size={20} className="text-green-600 group-hover:text-green-500" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Email</div>
                      <a 
                        href="mailto:israelseleshi09@gmail.com" 
                        className={`text-xs sm:text-sm transition-colors duration-300 hover:text-green-500 break-all ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        israelseleshi09@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  <motion.div 
                    className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/50'
                    }`}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        isDarkMode ? 'bg-green-900/30 group-hover:bg-green-800/40' : 'bg-green-50 group-hover:bg-green-100'
                      }`}
                      whileHover={{ rotate: 10 }}
                    >
                      <Phone size={20} className="text-green-600 group-hover:text-green-500" />
                    </motion.div>
                    <div className="flex-1">
                      <div className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Phone</div>
                      <a 
                        href="tel:+251920190438" 
                        className={`text-xs sm:text-sm transition-colors duration-300 hover:text-green-500 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        +251-920-190-438
                      </a>
                    </div>
                  </motion.div>
                  <motion.div 
                    className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/50'
                    }`}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        isDarkMode ? 'bg-green-900/30 group-hover:bg-green-800/40' : 'bg-green-50 group-hover:bg-green-100'
                      }`}
                      whileHover={{ rotate: 10 }}
                    >
                      <Linkedin size={20} className="text-green-600 group-hover:text-green-500" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>LinkedIn</div>
                      <a 
                        href="https://linkedin.com/in/israel-theodros-seleshi" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`text-xs sm:text-sm transition-colors duration-300 hover:text-green-500 break-all ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        israel-theodros-seleshi
                      </a>
                    </div>
                  </motion.div>
                  <motion.div 
                    className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                      isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/50'
                    }`}
                    whileHover={{ x: 8, scale: 1.02 }}
                  >
                    <motion.div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        isDarkMode ? 'bg-green-900/30 group-hover:bg-green-800/40' : 'bg-green-50 group-hover:bg-green-100'
                      }`}
                      whileHover={{ rotate: 10 }}
                    >
                      <MapPin size={20} className="text-green-600 group-hover:text-green-500" />
                    </motion.div>
                    <div className="flex-1">
                      <div className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>Location</div>
                      <div className={`text-xs sm:text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>Mozambique Street, Addis Ababa, Ethiopia</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className={`text-lg sm:text-xl font-bold mb-6 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Send Message</h3>
                <form className="space-y-4 sm:space-y-6">
                  <div className="relative">
                    <motion.input
                      type="text"
                      id="name"
                      className={`w-full px-4 pt-6 pb-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 peer ${
                        isDarkMode 
                          ? 'bg-gray-800/50 border-gray-600/50 text-white focus:bg-gray-800' 
                          : 'bg-white/50 border-gray-300/50 text-gray-900 focus:bg-white'
                      }`}
                      placeholder=" "
                      whileFocus={{ scale: 1.02 }}
                    />
                    <label 
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-green-500 top-2 text-xs font-medium ${
                        isDarkMode ? 'text-gray-400 peer-placeholder-shown:text-gray-400' : 'text-gray-600 peer-placeholder-shown:text-gray-500'
                      }`}
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <motion.input
                      type="email"
                      id="email"
                      className={`w-full px-4 pt-6 pb-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 peer ${
                        isDarkMode 
                          ? 'bg-gray-800/50 border-gray-600/50 text-white focus:bg-gray-800' 
                          : 'bg-white/50 border-gray-300/50 text-gray-900 focus:bg-white'
                      }`}
                      placeholder=" "
                      whileFocus={{ scale: 1.02 }}
                    />
                    <label 
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-green-500 top-2 text-xs font-medium ${
                        isDarkMode ? 'text-gray-400 peer-placeholder-shown:text-gray-400' : 'text-gray-600 peer-placeholder-shown:text-gray-500'
                      }`}
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <motion.input
                      type="text"
                      id="subject"
                      className={`w-full px-4 pt-6 pb-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 peer ${
                        isDarkMode 
                          ? 'bg-gray-800/50 border-gray-600/50 text-white focus:bg-gray-800' 
                          : 'bg-white/50 border-gray-300/50 text-gray-900 focus:bg-white'
                      }`}
                      placeholder=" "
                      whileFocus={{ scale: 1.02 }}
                    />
                    <label 
                      htmlFor="subject"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-green-500 top-2 text-xs font-medium ${
                        isDarkMode ? 'text-gray-400 peer-placeholder-shown:text-gray-400' : 'text-gray-600 peer-placeholder-shown:text-gray-500'
                      }`}
                    >
                      Subject
                    </label>
                  </div>
                  <div className="relative">
                    <motion.textarea
                      id="message"
                      rows={4}
                      className={`w-full px-4 pt-6 pb-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-none duration-300 peer ${
                        isDarkMode 
                          ? 'bg-gray-800/50 border-gray-600/50 text-white focus:bg-gray-800' 
                          : 'bg-white/50 border-gray-300/50 text-gray-900 focus:bg-white'
                      }`}
                      placeholder=" "
                      whileFocus={{ scale: 1.02 }}
                    ></motion.textarea>
                    <label 
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-green-500 top-2 text-xs font-medium ${
                        isDarkMode ? 'text-gray-400 peer-placeholder-shown:text-gray-400' : 'text-gray-600 peer-placeholder-shown:text-gray-500'
                      }`}
                    >
                      Your Message
                    </label>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className={`w-full px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden group ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400' 
                        : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <motion.div
                        className="w-4 h-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.div>
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
          
          {/* Call to Action */}
          <motion.div
            className="text-center mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className={`text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Prefer a quick call? <a href="tel:+251920190438" className="text-green-500 hover:text-green-400 font-medium transition-colors">+251-920-190-438</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-white border-gray-100'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className={`text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © {new Date().getFullYear()} Israel Seleshi. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a 
                href="https://linkedin.com/in/israel-theodros-seleshi" 
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 hover:scale-110 ${
                  isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://github.com/israelseleshi" 
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 hover:scale-110 ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="mailto:israelseleshi09@gmail.com" 
                className={`transition-colors duration-300 hover:scale-110 ${
                  isDarkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'
                }`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;