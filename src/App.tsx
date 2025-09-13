import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Database, 
  Globe, 
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
  ChevronDown,
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
      const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
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
      link: "#",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Python Web Scraper",
      description: "Advanced web scraping tool built with Python for automated data collection and analysis from various web sources.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "BeautifulSoup", "Pandas", "SQL"],
      link: "#",
      category: "Data Analytics"
    },
    {
      id: 3,
      title: "Mobile App Concept",
      description: "UI/UX design and concept development for a mobile application targeting local business needs with modern interface design.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      link: "#",
      category: "Design"
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
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
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
              {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.toLowerCase()
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
                  {activeSection === item.toLowerCase() && (
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
                  {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item, index) => (
                    <motion.button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-left text-sm font-medium py-2 transition-colors ${
                        activeSection === item.toLowerCase()
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
      <section id="home" className="pt-20 pb-16 sm:pt-24 sm:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for opportunities
              </motion.div>
              
              <motion.h1 
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-300 ${
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
                className={`text-xl sm:text-2xl mt-4 mb-6 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
                variants={itemVariants}
              >
                Information Systems Student & Aspiring Data Scientist
              </motion.h2>
              
              <motion.p 
                className={`text-lg leading-relaxed mb-8 max-w-2xl transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
                variants={itemVariants}
              >
                Passionate about data analytics and web development with hands-on experience in full-stack development. 
                Currently pursuing my Bachelor's degree while building innovative solutions and exploring the world of data science.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => scrollToSection('portfolio')}
                  className="group px-8 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  onClick={() => window.open('https://drive.google.com/file/d/1vAomA8a8pZtk5ggSrUtqV3ByT8MhUnXq/view?usp=sharing', '_blank')}
                  className="group px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} />
                  Download Resume
                </motion.button>
              </motion.div>

              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-6 mt-8"
                variants={itemVariants}
              >
                <div className={`flex items-center gap-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <MapPin size={16} />
                  <span className="text-sm">Addis Ababa, Ethiopia</span>
                </div>
                <div className={`flex items-center gap-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <GraduationCap size={16} />
                  <span className="text-sm">AAU Student</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.img
                src="/profile.png"
                alt="Israel Seleshi - Professional headshot"
                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover object-center rounded-t-full"
                style={{
                  clipPath: "ellipse(50% 45% at 50% 50%)"
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} className={`transition-colors duration-300 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`} />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 sm:py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                About Me
              </h2>
              <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm an Information Systems student at Addis Ababa University with a passion for data analytics 
                and web development. With 2 months of internship experience at EthSwitch S.C., I've gained 
                valuable insights into the tech industry and developed strong technical skills.
              </p>
              <p className={`text-lg leading-relaxed mb-8 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                My expertise spans across data analysis, full-stack web development, and database management. 
                I'm fluent in both Amharic and English, with strong communication, problem-solving, and teamwork abilities. 
                I'm eager to pursue a career in data analytics or data science.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className={`text-center p-4 rounded-lg transition-colors duration-300 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.05, backgroundColor: isDarkMode ? "#065f46" : "#f0fdf4" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-green-500 mb-1">3.5/4.0</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Current GPA</div>
                </motion.div>
                <motion.div 
                  className={`text-center p-4 rounded-lg transition-colors duration-300 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.05, backgroundColor: isDarkMode ? "#065f46" : "#f0fdf4" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-green-500 mb-1">2026</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Expected Graduation</div>
                </motion.div>
              </div>

              <div className={`flex items-center gap-4 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <Mail size={16} />
                <span>israelseleshi09@gmail.com</span>
              </div>
              <div className={`flex items-center gap-4 mt-2 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <Phone size={16} />
                <span>+251-920-190-438</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Education Cards */}
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl transition-colors duration-300 ${
                    isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50'
                  }`}
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: isDarkMode ? "#065f46" : "#f0fdf4",
                    borderColor: isDarkMode ? "#10b981" : "#d1d5db"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-colors duration-300 ${
                      isDarkMode ? 'bg-green-900/30' : 'bg-green-100'
                    }`}>
                      <GraduationCap size={20} className="text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-1 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{edu.institution}</h3>
                      <p className="text-green-600 font-medium mb-2">{edu.degree}</p>
                      <div className={`flex items-center gap-4 text-sm mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={14} />
                          {edu.grade}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.modules.slice(0, 3).map((module, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 text-xs rounded-full border transition-colors duration-300 ${
                              isDarkMode 
                                ? 'bg-gray-600 text-gray-300 border-gray-500' 
                                : 'bg-white text-gray-600 border-gray-200'
                            }`}
                          >
                            {module}
                          </span>
                        ))}
                        {edu.modules.length > 3 && (
                          <span className={`px-2 py-1 text-xs rounded-full border transition-colors duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-600 text-gray-300 border-gray-500' 
                              : 'bg-white text-gray-600 border-gray-200'
                          }`}>
                            +{edu.modules.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Volunteering Experience */}
              <motion.div
                className={`p-6 rounded-xl transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50'
                }`}
                whileHover={{ 
                  scale: 1.02, 
                  backgroundColor: isDarkMode ? "#065f46" : "#f0fdf4",
                  borderColor: isDarkMode ? "#10b981" : "#d1d5db"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-colors duration-300 ${
                    isDarkMode ? 'bg-green-900/30' : 'bg-green-100'
                  }`}>
                    <Heart size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Academic Tutor</h3>
                    <p className="text-green-600 font-medium mb-2">Askal Charity Association</p>
                    <p className={`text-sm mb-3 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>June 2021 - August 2021</p>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Provided tutoring to 30+ students, achieving 20% average improvement in test scores 
                      through engaging lesson plans and mentorship.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-16 sm:py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
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
              Featured Projects
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A showcase of my recent work in web development, data analytics, and design projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full transition-colors duration-300 ${
                          isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                        whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-green-500 font-medium hover:text-green-600 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    View Project 
                    <ExternalLink size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                  </motion.a>
                </div>
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
              A comprehensive toolkit spanning programming, data analysis, and design.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <img 
                  src={skill.logo}
                  alt={skill.name}
                  className="w-6 h-6 flex-shrink-0"
                  onError={(e) => {
                    // Fallback to a generic tech icon if the specific logo fails
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310b981'%3E%3Cpath d='M12 2L2 7L12 12L22 7L12 2Z'/%3E%3Cpath d='M2 17L12 22L22 17'/%3E%3Cpath d='M2 12L12 17L22 12'/%3E%3C/svg%3E";
                  }}
                />
                <span className={`text-sm font-semibold transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 sm:py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Let's Work Together
            </h2>
            <p className={`text-lg transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ready to collaborate on your next project? Let's discuss your vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Get In Touch</h3>
              <div className="space-y-4">
                <motion.div 
                  className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-300 ${
                    isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    isDarkMode ? 'bg-green-900/30' : 'bg-green-50'
                  }`}>
                    <Mail size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Email</div>
                    <div className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>israelseleshi09@gmail.com</div>
                  </div>
                </motion.div>
                <motion.div 
                  className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-300 ${
                    isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    isDarkMode ? 'bg-green-900/30' : 'bg-green-50'
                  }`}>
                    <Phone size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Phone</div>
                    <div className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>+251-920-190-438</div>
                  </div>
                </motion.div>
                <motion.div 
                  className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-300 ${
                    isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    isDarkMode ? 'bg-green-900/30' : 'bg-green-50'
                  }`}>
                    <Linkedin size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>LinkedIn</div>
                    <div className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>israel-theodros-seleshi</div>
                  </div>
                </motion.div>
                <motion.div 
                  className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-300 ${
                    isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    isDarkMode ? 'bg-green-900/30' : 'bg-green-50'
                  }`}>
                    <MapPin size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className={`font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Location</div>
                    <div className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>Mozambique Street, Addis Ababa, Ethiopia</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-none duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Tell me about your project..."
                    whileFocus={{ scale: 1.02 }}
                  ></motion.textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-8 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-white border-gray-100'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`mb-4 sm:mb-0 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              &copy; {new Date().getFullYear()} Israel Seleshi. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.linkedin.com/in/israel-theodros-seleshi-7125b4222/" 
                className="text-gray-400 hover:text-[#0077b5] transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="mailto:israelseleshi09@gmail.com" 
                className="text-gray-400 hover:text-red-500 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;