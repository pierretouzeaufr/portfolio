import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Cloud, 
  Server, 
  GitBranch, 
  Award, 
  Mail, 
  Linkedin, 
  Github,
  Cpu,
  Code2,
  CheckCircle2,
  Clock,
  Briefcase,
  FolderGit2,
  FileText,
  Users,
  MessageCircle,
  Target,
  Lightbulb,
  Handshake,
  Download,
  MapPin
} from 'lucide-react';

// ============================================
// DONNÉES
// ============================================
const DATA = {
  personal: {
    name: "Pierre Touzeau",
    role: "Cloud DevOps Engineer - Ingénieur Backend",
    location: "Bordeaux, France",
    email: "pierre.touzeau@outlook.fr",
    linkedin: "linkedin.com/in/pierretouzeau",
    github: "github.com/pierretouzeaufr",
    availability: "Disponible",
    summary: "Passionné par le développement backend et les nouvelles technologies, je combine expertise DevOps et programmation pour créer des solutions cloud innovantes et scalables. Toujours à l'affût des techs de demain pour relever de nouveaux défis techniques."
  },

  experiences: [
    {
      id: 1,
      company: "Capgemini",
      role: "Ingénieur Backend / DevOps",
      period: "2024 - Aujourd'hui",
      duration: "En cours",
      location: "Bordeaux",
      description: "Pour un client grand compte leader dans la téléphonie, travail dans l'équipe Backend (N3) pour la création d'une solution de provisionnement et d'orchestration d'un cloud privé nouvelle génération (à terme + de 30 000 machines virtuelles, volumes, gestion des flux, load balancers, infrastructure ultra sécurisé, etc.). Développement de la solution en suivant les besoins clients, automatisation des process et périodes d'innovation.",
      achievements: [
        "Conception d'une solution backend from scratch",
        "Développement d'APIs REST",
        "Architecture cloud native sécurisée"
      ],
      skills: ["Kubernetes", "IA", "Docker", "Python", "GoLang", "Terraform (Provider)" , "Terraform (Client)", "GitLab CI", "Backend", "Cloud", "Agile"],
      current: true
    },
    {
      id: 2,
      company: "Capgemini",
      role: "Apprenti puis Ingénieur DevOps",
      period: "2022 - 2024",
      duration: "2 ans",
      location: "Bordeaux",
      description: "Pour un client grand compte, travail dans l'équipe Services (N2) pour automatiser le maximum de tâches d'automatisation pour un cloud privé de 20 000 machines virtuelles.",
      skills: ["PowerShell", "Bash", "Cloud", "Docker", "GitLab CI"],
      current: false
    },
    {
      id: 3,
      company: "Assystem",
      role: "Apprenti puis Technicien Informatique Industrielle",
      period: "2020 - 2022",
      duration: "2 ans",
      location: "Paris",
      description: "Dans le bureau d'étude des calculateurs de CNPE, travail sur la conception et la maintenance de banc de tests.",
      skills: ["Bash", "Électronique", "Automatismes", "Réseaux", "Systèmes"],
      current: false
    },
    {
      id: 4,
      company: "EDF",
      role: "Apprenti Informatique Industrielle & Électronique",
      period: "2018 - 2020",
      duration: "2 ans",
      location: "Centrale Nucléaire du Blayais",
      description: "Apprentissage en lien avec mon DUT dans le service automatisme d'un CNPE : maintenance de calculateurs et de cartes électroniques.",
      skills: ["Électronique", "Automatismes"],
      current: false
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 60 },
      { name: "GoLang", level: 45 },
      { name: "Bash", level: 80 },
      { name: "PowerShell", level: 95 },
    ],
    infrastructure: [
      { name: "Kubernetes - Partie Dev", level: 70 },
      { name: "Docker", level: 80 },
      { name: "Terraform", level: 90 },
      { name: "Ansible", level: 60 },
    ],
    cloud: [
      { name: "Google Cloud", level: 70 },
      { name: "GitLab CI", level: 90 },
      { name: "VMware", level: 60 },
      { name: "ELK Stack", level: 55 },
    ],
    soft: [
      { name: "Autonomie", icon: Target },
      { name: "Esprit d'équipe", icon: Users },
      { name: "Communication", icon: MessageCircle },
      { name: "Proactivité", icon: Lightbulb },
      { name: "Résolution de problèmes", icon: Handshake },
      { name: "Innovation", icon: Lightbulb },
    ]
  },

  certifications: [
    { 
      name: "Associate Cloud Engineer", 
      provider: "Google Cloud", 
      date: "Mai 2024",
      icon: Cloud,
      verified: true 
    }
  ],

  stats: {
    deployments: "10k+",
    terraformResources: "5k+",
    commits: "3k+",
    uptime: "99.9%"
  },

  pipeline: [
    { stage: "Apprenti DevOps", status: "passed", duration: "2 ans" },
    { stage: "Ingénieur DevOps", status: "passed", duration: "3 ans" },
    { stage: "Ingénieur Cloud DevOps / N3-Backend", status: "running", duration: "En cours" },
  ],

  // Simulated GitHub contributions data
  githubContributions: {
    totalContributions: 1247,
    currentStreak: 45,
    longestStreak: 89,
    thisYear: 423,
    lastYear: 824
  },

  projects: [
    {
      id: 1,
      name: "Cloud Manager",
      description: "API et logiciel backend pour le provisionnement et l'orchestration d'un cloud privé",
      tech: ["Kubernetes", "Docker", "Python", "MariaDB", "Redis", "RabbitMQ", "Go", "Terraform", "API REST"],
      stars: 0,
      forks: 0,
      status: "En cours",
      github: ""
    },
    {
      id: 2,
      name: "Provider 'maison'",
      description: "Création d'un provider terraform adapté à l'application du client, Création puis maintenance de celui-ci pour l'adapter aux API",
      tech: ["Go", "Terraform"],
      stars: 0,
      forks: 0,
      status: "En cours",
      github: ""
    },
    {
      id: 3,
      name: "Scripts de gestions des machines virtuelles dormantes",
      description: "Script de Detection, sauvegarde, suppression et communication des VM dormantes en se basant sur des métriques avancés fournis par la stack VMware",
      tech: ["VMware", "Vrops", "Powershell", "SMTP", "Gitlab-CI"],
      stars: 0,
      forks: 0,
      status: "Fini",
      github: ""
    },
    {
      id: 4,
      name: "Scripts de reporting général d'un cloud privé",
      description: "Génération quotidien à partir de scripts de l'ensemble des données des backend du client, de la stack VMware, des données clients, etc.",
      tech: ["Python", "Powershell", "Gitlab-CI", "Linux", "Windows"],
      stars: 0,
      forks: 0,
      status: "Fini",
      github: ""
    }
  ]
};

// ============================================
// COMPOSANTS GITHUB CONTRIBUTIONS
// ============================================

// NOTE: Pour des contributions GitHub EN TEMPS RÉEL, il faut:
// 1. Utiliser l'API GitHub GraphQL avec un Personal Access Token
// 2. Ou utiliser une API tierce comme github-contributions-api
// 3. Ou scraper (déconseillé, risque de blocage)
// 
// Exemple d'implémentation avec fetch:
// const fetchContributions = async () => {
//   const response = await fetch('https://api.github.com/graphql', {
//     method: 'POST',
//     headers: { 
//       'Authorization': 'Bearer YOUR_GITHUB_TOKEN',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       query: `query { user(login: "pierretouzeaufr") { contributionsCollection { contributionCalendar { weeks { contributionDays { contributionCount } } } } } }`
//     })
//   });
//   return response.json();
// };

// ============================================
// COMPOSANTS PROJETS
// ============================================

const ProjectsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {DATA.projects.map((project, idx) => (
      <motion.a
        key={project.id}
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        className="card card-hover p-5 block"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-[#1f75cb]" />
            <h3 className="font-semibold text-[#1d1d1f]">{project.name}</h3>
          </div>
          <span className={`badge text-xs ${
            project.status === 'En cours' 
              ? 'badge-warning' 
              : 'badge-success'
          }`}>
            {project.status}
          </span>
        </div>
        
        <p className="text-sm text-[#5e5e5e] mb-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-1">
          {project.tech.map(tech => (
            <span key={tech} className="badge badge-default text-xs">{tech}</span>
          ))}
        </div>
      </motion.a>
    ))}
  </div>
);

// ============================================
// COMPOSANT PDF - VERSION COMPACTE
// ============================================

const PDFView = () => (
  <div className="max-w-3xl mx-auto bg-white">
    {/* Header PDF */}
    <div className="border-b-2 border-[#1d1d1f] pb-4 mb-4">
      <h1 className="text-2xl font-bold text-[#1d1d1f]">{DATA.personal.name}</h1>
      <p className="text-[#5e5e5e]">{DATA.personal.role}</p>
      <div className="flex flex-wrap gap-3 text-sm text-[#5e5e5e] mt-2">
        <span>{DATA.personal.location}</span>
        <span>•</span>
        <span>{DATA.personal.email}</span>
        <span>•</span>
        <span>{DATA.personal.github}</span>
      </div>
    </div>

    {/* Summary */}
    <div className="mb-4">
      <h2 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-2 border-b border-[#e5e5e5]">Profil</h2>
      <p className="text-sm text-[#5e5e5e]">{DATA.personal.summary}</p>
    </div>

    {/* Experience */}
    <div className="mb-4">
      <h2 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-2 border-b border-[#e5e5e5]">Expérience</h2>
      <div className="space-y-3">
        {DATA.experiences.map(job => (
          <div key={job.id}>
            <div className="flex justify-between items-start">
              <div>
                <span className="font-semibold text-[#1d1d1f]">{job.role}</span>
                <span className="text-[#5e5e5e]"> — {job.company}</span>
              </div>
              <span className="text-sm text-[#5e5e5e]">{job.period}</span>
            </div>
            <p className="text-sm text-[#5e5e5e] mt-1">{job.description}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {job.skills.map(skill => (
                <span key={skill} className="text-xs text-[#1f75cb]">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Skills */}
    <div className="mb-4">
      <h2 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-2 border-b border-[#e5e5e5]">Compétences</h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
        <div>
          <span className="font-medium text-[#1d1d1f]">Languages: </span>
          <span className="text-[#5e5e5e]">{DATA.skills.languages.map(s => s.name).join(', ')}</span>
        </div>
        <div>
          <span className="font-medium text-[#1d1d1f]">Infrastructure: </span>
          <span className="text-[#5e5e5e]">{DATA.skills.infrastructure.map(s => s.name).join(', ')}</span>
        </div>
        <div>
          <span className="font-medium text-[#1d1d1f]">Cloud & Tools: </span>
          <span className="text-[#5e5e5e]">{DATA.skills.cloud.map(s => s.name).join(', ')}</span>
        </div>
        <div>
          <span className="font-medium text-[#1d1d1f]">Soft Skills: </span>
          <span className="text-[#5e5e5e]">{DATA.skills.soft.map(s => s.name).join(', ')}</span>
        </div>
      </div>
    </div>

    {/* Certifications */}
    <div className="mb-4">
      <h2 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-2 border-b border-[#e5e5e5]">Certifications</h2>
      <div className="text-sm">
        {DATA.certifications.map(cert => (
          <div key={cert.name}>
            <span className="font-medium text-[#1d1d1f]">{cert.name}</span>
            <span className="text-[#5e5e5e]"> — {cert.provider}, {cert.date}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Projects */}
    <div className="mb-4">
      <h2 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-2 border-b border-[#e5e5e5]">Projets</h2>
      <div className="space-y-1 text-sm">
        {DATA.projects.slice(0, 3).map(project => (
          <div key={project.id}>
            <span className="font-medium text-[#1d1d1f]">{project.name}</span>
            <span className="text-[#5e5e5e]"> — {project.description}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Print Button */}
    <div className="mt-6 pt-4 border-t border-[#e5e5e5] text-center no-print">
      <button 
        onClick={() => window.print()}
        className="btn-primary"
      >
        <Download className="w-4 h-4" />
        Télécharger en PDF
      </button>
    </div>
  </div>
);

// ============================================
// AUTRES COMPOSANTS
// ============================================

const Sidebar = ({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (s: string) => void }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: Terminal },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projets', icon: FolderGit2 },
    { id: 'cv', label: 'CV PDF', icon: FileText },
  ];

  return (
    <div className="w-72 hidden lg:block">
      <div className="sticky top-8">
        {/* Profile Card - Style LinkedIn */}
        <div className="card overflow-hidden mb-4">
          {/* Banner */}
          <div className="h-20 bg-gradient-to-r from-[#7c3aed] via-[#ec4899] via-[#fc6d26] to-[#fbbf24]" />
          
          {/* Profile Content */}
          <div className="px-4 pb-4">
            {/* Avatar */}
            <div className="relative -mt-10 mb-3">
              <div className="w-20 h-20 rounded-full border-4 border-white bg-gradient-to-br from-[#4c1d95] via-[#6d28d9] to-[#a78bfa] flex items-center justify-center text-white text-2xl font-bold shadow-md">
                PT
              </div>
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#108548] border-2 border-white rounded-full" title="Disponible" />
            </div>
            
            {/* Name & Role */}
            <h2 className="font-bold text-[#1d1d1f] text-lg">{DATA.personal.name}</h2>
            <p className="text-sm text-[#5e5e5e] mb-2">{DATA.personal.role}</p>
            
            {/* Location */}
            <div className="flex items-center gap-1 text-xs text-[#5e5e5e] mb-3">
              <MapPin className="w-3 h-3" />
              {DATA.personal.location}
            </div>
            
            {/* Social Links */}
            <div className="flex gap-2">
              <a 
                href={`https://${DATA.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#0a66c2] text-white text-xs font-medium rounded-lg hover:bg-[#0958a8] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a 
                href={`https://${DATA.personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#1d1d1f] text-white text-xs font-medium rounded-lg hover:bg-[#333] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-6 pt-6 border-t border-[#e5e5e5]">
          <div className="text-xs text-[#8e8e93] text-center">
            © {new Date().getFullYear()} Pierre Touzeau
            <br />
            <span className="text-[10px]">Built with React + TypeScript + Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-8"
  >
    <div className="card card-hover p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1d1d1f] mb-1">{DATA.personal.name}</h1>
          <p className="text-[#5e5e5e] flex items-center gap-2">
            <Cloud className="w-4 h-4 text-[#1f75cb]" />
            {DATA.personal.role}
          </p>
          <p className="text-sm text-[#5e5e5e] mt-2 max-w-xl">{DATA.personal.summary}</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${DATA.personal.email}`} className="btn-primary">
            <Mail className="w-4 h-4" />
            Contact
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const PipelineStatus = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="card card-hover p-6 mb-6"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="section-title">
        <GitBranch className="w-5 h-5 text-[#fc6d26]" />
        CI/CD Pipeline
      </div>
      <span className="badge badge-primary flex items-center gap-1">
        <Clock className="w-3 h-3" />
        Running
      </span>
    </div>
    
    <div className="flex items-center">
      {DATA.pipeline.map((stage, idx) => (
        <div key={stage.stage} className="flex items-center flex-1">
          {/* Stage */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
              stage.status === 'passed' 
                ? 'bg-[#108548]/10 text-[#108548]' 
                : stage.status === 'running'
                ? 'bg-[#1f75cb]/10 text-[#1f75cb] animate-pulse'
                : 'bg-[#f0f0f0] text-[#5e5e5e]'
            }`}>
              {stage.status === 'passed' ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : stage.status === 'running' ? (
                <Clock className="w-5 h-5" />
              ) : (
                <div className="w-2 h-2 rounded-full bg-current" />
              )}
            </div>
            <div className="text-xs font-medium text-[#1d1d1f] leading-tight max-w-[100px]">{stage.stage}</div>
            <div className="text-xs text-[#5e5e5e]">{stage.duration}</div>
          </div>
          
          {/* Connector */}
          {idx < DATA.pipeline.length - 1 && (
            <div className="flex-1 h-0.5 mx-2 bg-[#e5e5e5] relative">
              <div 
                className="absolute inset-y-0 left-0 bg-[#108548] transition-all duration-500"
                style={{ width: stage.status === 'passed' ? '100%' : '0%' }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  </motion.div>
);

const ExperienceCard = ({ job, index }: { job: typeof DATA.experiences[0], index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="card card-hover p-5 mb-4"
  >
    <div className="flex items-start justify-between mb-3">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-[#1d1d1f]">{job.role}</h3>
          {job.current && <span className="badge badge-success text-xs">Current</span>}
        </div>
        <div className="text-sm text-[#1f75cb] font-medium">{job.company}</div>
      </div>
      <div className="text-right">
        <div className="text-sm text-[#5e5e5e]">{job.period}</div>
        <div className="text-xs text-[#8e8e93]">{job.location}</div>
      </div>
    </div>
    
    <p className="text-sm text-[#5e5e5e] mb-3">{job.description}</p>
    
    {job.achievements && (
      <ul className="space-y-1 mb-3">
        {job.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#5e5e5e]">
            <CheckCircle2 className="w-4 h-4 text-[#108548] mt-0.5 flex-shrink-0" />
            {achievement}
          </li>
        ))}
      </ul>
    )}
    
    <div className="flex flex-wrap gap-1.5">
      {job.skills.map(skill => (
        <span key={skill} className="badge badge-default">{skill}</span>
      ))}
    </div>
  </motion.div>
);

const SkillBar = ({ name, level, color = "blue" }: { name: string, level: number, color?: "blue" | "orange" | "green" }) => {
  const colors = {
    blue: "bg-[#1f75cb]",
    orange: "bg-[#fc6d26]",
    green: "bg-[#108548]"
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-[#1d1d1f] font-medium">{name}</span>
        <span className="text-[#5e5e5e]">{level}%</span>
      </div>
      <div className="progress-track">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`progress-fill ${colors[color]}`}
        />
      </div>
    </div>
  );
};

const TechnicalSkills = () => (
  <div className="card card-hover p-6 mb-6">
    <div className="section-title mb-6">
      <Code2 className="w-5 h-5 text-[#1f75cb]" />
      Technical Skills
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Code2 className="w-4 h-4 text-[#1f75cb]" />
          <h3 className="font-medium text-[#1d1d1f]">Languages</h3>
        </div>
        {DATA.skills.languages.map(skill => (
          <SkillBar key={skill.name} {...skill} color="blue" />
        ))}
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Server className="w-4 h-4 text-[#fc6d26]" />
          <h3 className="font-medium text-[#1d1d1f]">Infrastructure</h3>
        </div>
        {DATA.skills.infrastructure.map(skill => (
          <SkillBar key={skill.name} {...skill} color="orange" />
        ))}
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Cloud className="w-4 h-4 text-[#108548]" />
          <h3 className="font-medium text-[#1d1d1f]">Cloud & Tools</h3>
        </div>
        {DATA.skills.cloud.map(skill => (
          <SkillBar key={skill.name} {...skill} color="green" />
        ))}
      </div>
    </div>
  </div>
);

const SoftSkills = () => (
  <div className="card card-hover p-6">
    <div className="section-title mb-6">
      <Handshake className="w-5 h-5 text-[#6b4fbb]" />
      Soft Skills
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {DATA.skills.soft.map((skill, idx) => {
        const colors = ['bg-[#1f75cb]', 'bg-[#fc6d26]', 'bg-[#108548]', 'bg-[#6b4fbb]', 'bg-[#e91e63]'];
        return (
          <div key={skill.name} className="mb-2">
            <div className="text-sm mb-1.5 text-[#1d1d1f] font-medium">{skill.name}</div>
            <div className="progress-track">
              <div className={`h-2 rounded-full ${colors[idx % 5]}`} style={{ width: '100%' }} />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const SkillsSection = () => (
  <div>
    <TechnicalSkills />
    <SoftSkills />
  </div>
);

const CertificationsSection = () => (
  <div className="card card-hover p-6">
    <div className="section-title mb-4">
      <Award className="w-5 h-5 text-[#fc6d26]" />
      Certifications
    </div>
    
    {DATA.certifications.map((cert, idx) => (
      <div key={idx} className="flex items-start gap-4 p-4 bg-[#f5f5f7] rounded-lg">
        <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
          <cert.icon className="w-6 h-6 text-[#1f75cb]" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#1d1d1f]">{cert.name}</span>
            {cert.verified && (
              <span className="badge badge-success text-xs">Verified</span>
            )}
          </div>
          <div className="text-sm text-[#5e5e5e]">{cert.provider}</div>
          <div className="text-xs text-[#8e8e93] mt-1">{cert.date}</div>
        </div>
      </div>
    ))}
  </div>
);

const TerminalWidget = () => (
  <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg">
    <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d]">
      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
      <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
      <span className="ml-2 text-xs text-[#666]">pierre@portfolio ~ zsh</span>
    </div>
    <div className="p-4 font-mono text-sm">
      <div className="text-[#7ee787]">➜ cat profile.json</div>
      <pre className="text-[#d4d4d4] mt-2 overflow-x-auto">
{`{
  "name": "${DATA.personal.name}",
  "role": "${DATA.personal.role}",
  "status": "${DATA.personal.availability.toLowerCase().replace(/\s/g, '_')}",
  "skills": [
    "k8s",
    "python",
    "go", 
    "terraform",
    "gitlab-ci"
  ]
}`}
      </pre>
      <div className="text-[#7ee787] mt-2">➜ <span className="animate-pulse">_</span></div>
    </div>
  </div>
);

// ============================================
// APP PRINCIPAL
// ============================================
function App() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .card { box-shadow: none !important; border: 1px solid #e5e5e5; }
          body { background: white; }
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <div className="flex-1">
            {activeSection !== 'cv' && <Header />}
            
            {/* Mobile nav - En haut sur mobile */}
            <div className="lg:hidden mb-6 flex justify-center gap-2 flex-wrap no-print">
              {['overview', 'experience', 'skills', 'projects', 'cv'].map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-3 py-1.5 rounded-lg text-xs capitalize ${
                    activeSection === section 
                      ? 'bg-[#1f75cb] text-white' 
                      : 'bg-white text-[#5e5e5e]'
                  }`}
                >
                  {section === 'cv' ? 'CV PDF' : section}
                </button>
              ))}
            </div>
            
            {activeSection === 'overview' && (
              <>
                <PipelineStatus />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  <TerminalWidget />
                  <CertificationsSection />
                </div>
              </>
            )}
            
            {activeSection === 'experience' && (
              <div>
                <h2 className="section-title mb-6">
                  <Briefcase className="w-5 h-5 text-[#1f75cb]" />
                  Experience
                </h2>
                {DATA.experiences.map((job, idx) => (
                  <ExperienceCard key={job.id} job={job} index={idx} />
                ))}
              </div>
            )}
            
            {activeSection === 'skills' && (
              <div>
                <h2 className="section-title mb-6">
                  <Cpu className="w-5 h-5 text-[#fc6d26]" />
                  Skills
                </h2>
                <SkillsSection />
              </div>
            )}

            {activeSection === 'projects' && (
              <div>
                <h2 className="section-title mb-6">
                  <FolderGit2 className="w-5 h-5 text-[#1f75cb]" />
                  Projets
                </h2>
                <ProjectsSection />
              </div>
            )}
            
            {activeSection === 'cv' && (
              <div className="no-print">
                <h2 className="section-title mb-6">
                  <FileText className="w-5 h-5 text-[#1d1d1f]" />
                  CV - Version Imprimable
                </h2>
              </div>
            )}

            {/* PDF View - Always rendered but styled differently when active */}
            <div className={`card p-8 ${activeSection !== 'cv' ? 'hidden' : ''}`}>
              <PDFView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
