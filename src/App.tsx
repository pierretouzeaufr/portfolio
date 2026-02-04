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
// DONNÉES / DATA
// ============================================

const LABELS = {
  fr: {
    overview: "Vue d'ensemble",
    experience: "Expérience",
    skills: "Compétences",
    projects: "Projets",
    cv: "CV PDF",
    contact: "Contact",
    download: "Télécharger en PDF",
    current: "En cours",
    verified: "Vérifié",
    technical_skills: "Compétences Techniques",
    soft_skills: "Soft Skills",
    certifications: "Certifications",
    pipeline: "Pipeline CI/CD",
    running: "En cours",
    languages: "Langages",
    infrastructure: "Infrastructure",
    cloud_tools: "Cloud & Outils",
    profile: "Profil",
    print_version: "CV - Version Imprimable"
  },
  en: {
    overview: "Overview",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    cv: "CV PDF",
    contact: "Contact",
    download: "Download PDF",
    current: "Current",
    verified: "Verified",
    technical_skills: "Technical Skills",
    soft_skills: "Soft Skills",
    certifications: "Certifications",
    pipeline: "CI/CD Pipeline",
    running: "Running",
    languages: "Languages",
    infrastructure: "Infrastructure",
    cloud_tools: "Cloud & Tools",
    profile: "Profile",
    print_version: "CV - Printable Version"
  }
};

const DATA_FR = {
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
      description: "Pour un client grand compte leader dans la téléphonie, travail dans l'équipe Backend (N3) pour la création d'une solution de provisionnement et d'orchestration d'un cloud privé nouvelle génération (à terme + de 30 000 machines virtuelles, volumes, gestion des flux, load balancers, infrastructure ultra sécurisée, etc.). Développement de la solution en suivant les besoins clients, automatisation des process et périodes d'innovation.",
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
      description: "Pour un client grand compte, travail dans l'équipe Services (N2) pour automatiser un maximum de tâches sur un cloud privé de 20 000 machines virtuelles.",
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
      description: "Dans le bureau d'études des calculateurs de CNPE, travail sur la conception et la maintenance de bancs de tests.",
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
      description: "Apprentissage en lien avec mon DUT dans le service automatismes d'un CNPE : maintenance de calculateurs et de cartes électroniques.",
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
      name: "Scripts de gestion des machines virtuelles dormantes",
      description: "Script de détection, sauvegarde, suppression et communication des VM dormantes en se basant sur des métriques avancées fournies par la stack VMware",
      tech: ["VMware", "Vrops", "Powershell", "SMTP", "Gitlab-CI"],
      stars: 0,
      forks: 0,
      status: "Fini",
      github: ""
    },
    {
      id: 4,
      name: "Scripts de reporting général d'un cloud privé",
      description: "Génération quotidienne à partir de scripts de l'ensemble des données des backends du client, de la stack VMware, des données clients, etc.",
      tech: ["Python", "Powershell", "Gitlab-CI", "Linux", "Windows"],
      stars: 0,
      forks: 0,
      status: "Fini",
      github: ""
    }
  ]
};

const DATA_EN = {
  personal: {
    name: "Pierre Touzeau",
    role: "Cloud DevOps Engineer - Backend Engineer",
    location: "Bordeaux, France",
    email: "pierre.touzeau@outlook.fr",
    linkedin: "linkedin.com/in/pierretouzeau",
    github: "github.com/pierretouzeaufr",
    availability: "Available",
    summary: "Passionate about backend development and new technologies, I combine DevOps expertise and programming to create innovative and scalable cloud solutions. Always on the lookout for tomorrow's tech to take on new technical challenges."
  },

  experiences: [
    {
      id: 1,
      company: "Capgemini",
      role: "Backend / DevOps Engineer",
      period: "2024 - Today",
      duration: "Ongoing",
      location: "Bordeaux",
      description: "For a major telecommunications client, working in the Backend team (L3) to create a provisioning and orchestration solution for a next-gen private cloud (eventually +30k VMs, volumes, flow management, load balancers, ultra-secure infrastructure, etc.). Developing the solution following client needs, process automation, and innovation periods.",
      achievements: [
        "Conception of a backend solution from scratch",
        "REST API Development",
        "Secure cloud-native architecture"
      ],
      skills: ["Kubernetes", "AI", "Docker", "Python", "GoLang", "Terraform (Provider)" , "Terraform (Client)", "GitLab CI", "Backend", "Cloud", "Agile"],
      current: true
    },
    {
      id: 2,
      company: "Capgemini",
      role: "Apprentice then DevOps Engineer",
      period: "2022 - 2024",
      duration: "2 years",
      location: "Bordeaux",
      description: "For a major client, working in the Services team (L2) to automate as many tasks as possible on a private cloud of 20,000 virtual machines.",
      skills: ["PowerShell", "Bash", "Cloud", "Docker", "GitLab CI"],
      current: false
    },
    {
      id: 3,
      company: "Assystem",
      role: "Apprentice then Industrial IT Technician",
      period: "2020 - 2022",
      duration: "2 years",
      location: "Paris",
      description: "In the design bureau for CNPE calculators, working on the design and maintenance of test benches.",
      skills: ["Bash", "Electronics", "Automation", "Networks", "Systems"],
      current: false
    },
    {
      id: 4,
      company: "EDF",
      role: "Apprentice Industrial IT & Electronics",
      period: "2018 - 2020",
      duration: "2 years",
      location: "Blayais Nuclear Power Plant",
      description: "Apprenticeship linked to my DUT in the automation department of a CNPE: maintenance of calculators and electronic cards.",
      skills: ["Electronics", "Automation"],
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
      { name: "Kubernetes - Dev Part", level: 70 },
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
      { name: "Autonomy", icon: Target },
      { name: "Team Spirit", icon: Users },
      { name: "Communication", icon: MessageCircle },
      { name: "Proactivity", icon: Lightbulb },
      { name: "Problem Solving", icon: Handshake },
      { name: "Innovation", icon: Lightbulb },
    ]
  },

  certifications: [
    {
      name: "Associate Cloud Engineer",
      provider: "Google Cloud",
      date: "May 2024",
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
    { stage: "Apprentice DevOps", status: "passed", duration: "2 years" },
    { stage: "DevOps Engineer", status: "passed", duration: "3 years" },
    { stage: "Cloud DevOps Eng. / L3-Backend", status: "running", duration: "Ongoing" },
  ],

  projects: [
    {
      id: 1,
      name: "Cloud Manager",
      description: "API and backend software for private cloud provisioning and orchestration",
      tech: ["Kubernetes", "Docker", "Python", "MariaDB", "Redis", "RabbitMQ", "Go", "Terraform", "REST API"],
      stars: 0,
      forks: 0,
      status: "Ongoing",
      github: ""
    },
    {
      id: 2,
      name: "Homemade Provider",
      description: "Creation of a terraform provider adapted to the client's application, creation then maintenance of it to adapt to APIs",
      tech: ["Go", "Terraform"],
      stars: 0,
      forks: 0,
      status: "Ongoing",
      github: ""
    },
    {
      id: 3,
      name: "Dormant VM Management Scripts",
      description: "Script for detection, backup, deletion and communication of dormant VMs based on advanced metrics provided by the VMware stack",
      tech: ["VMware", "Vrops", "Powershell", "SMTP", "Gitlab-CI"],
      stars: 0,
      forks: 0,
      status: "Finished",
      github: ""
    },
    {
      id: 4,
      name: "General Private Cloud Reporting Scripts",
      description: "Daily generation from scripts of all client backend data, VMware stack, client data, etc.",
      tech: ["Python", "Powershell", "Gitlab-CI", "Linux", "Windows"],
      stars: 0,
      forks: 0,
      status: "Finished",
      github: ""
    }
  ]
};

// ============================================
// COMPOSANTS PROJETS
// ============================================

const ProjectsSection = ({ data }: { data: typeof DATA_FR }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {data.projects.map((project, idx) => (
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
            project.status === 'En cours' || project.status === 'Ongoing'
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

const PDFView = ({ data, labels }: { data: typeof DATA_FR, labels: typeof LABELS['fr'] }) => (
  <div className="max-w-3xl mx-auto bg-white">
    {/* Header PDF */}
    <div className="border-b-2 border-[#1d1d1f] pb-4 mb-4">
      <h1 className="text-2xl font-bold text-[#1d1d1f]">{data.personal.name}</h1>
      <p className="text-[#5e5e5e]">{data.personal.role}</p>
      <div className="flex flex-wrap gap-3 text-sm text-[#5e5e5e] mt-2">
        <span>{data.personal.location}</span>
        <span>•</span>
        <span>{data.personal.email}</span>
        <span>•</span>
        <span>{data.personal.github}</span>
      </div>
    </div>

    {/* Summary */}
    <div className="mb-4">
      <h2 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-2 border-b border-[#e5e5e5]">{labels.profile}</h2>
      <p className="text-sm text-[#5e5e5e]">{data.personal.summary}</p>
    </div>

    {/* Experience */}
    <div className="mb-4">
      <h2 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-2 border-b border-[#e5e5e5]">{labels.experience}</h2>
      <div className="space-y-3">
        {data.experiences.map(job => (
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
      <h2 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-2 border-b border-[#e5e5e5]">{labels.skills}</h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
        <div>
          <span className="font-medium text-[#1d1d1f]">{labels.languages}: </span>
          <span className="text-[#5e5e5e]">{data.skills.languages.map(s => s.name).join(', ')}</span>
        </div>
        <div>
          <span className="font-medium text-[#1d1d1f]">{labels.infrastructure}: </span>
          <span className="text-[#5e5e5e]">{data.skills.infrastructure.map(s => s.name).join(', ')}</span>
        </div>
        <div>
          <span className="font-medium text-[#1d1d1f]">{labels.cloud_tools}: </span>
          <span className="text-[#5e5e5e]">{data.skills.cloud.map(s => s.name).join(', ')}</span>
        </div>
        <div>
          <span className="font-medium text-[#1d1d1f]">{labels.soft_skills}: </span>
          <span className="text-[#5e5e5e]">{data.skills.soft.map(s => s.name).join(', ')}</span>
        </div>
      </div>
    </div>

    {/* Certifications */}
    <div className="mb-4">
      <h2 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-2 border-b border-[#e5e5e5]">{labels.certifications}</h2>
      <div className="text-sm">
        {data.certifications.map(cert => (
          <div key={cert.name}>
            <span className="font-medium text-[#1d1d1f]">{cert.name}</span>
            <span className="text-[#5e5e5e]"> — {cert.provider}, {cert.date}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Projects */}
    <div className="mb-4">
      <h2 className="text-sm font-bold text-[#1d1d1f] uppercase tracking-wider mb-2 border-b border-[#e5e5e5]">{labels.projects}</h2>
      <div className="space-y-1 text-sm">
        {data.projects.slice(0, 3).map(project => (
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
        {labels.download}
      </button>
    </div>
  </div>
);

// ============================================
// AUTRES COMPOSANTS
// ============================================

const Sidebar = ({
  activeSection,
  setActiveSection,
  data,
  labels,
  lang,
  toggleLang
}: {
  activeSection: string,
  setActiveSection: (s: string) => void,
  data: typeof DATA_FR,
  labels: typeof LABELS['fr'],
  lang: 'fr' | 'en',
  toggleLang: () => void
}) => {
  const navItems = [
    { id: 'overview', label: labels.overview, icon: Terminal },
    { id: 'experience', label: labels.experience, icon: Briefcase },
    { id: 'skills', label: labels.skills, icon: Cpu },
    { id: 'projects', label: labels.projects, icon: FolderGit2 },
    { id: 'cv', label: labels.cv, icon: FileText },
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
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#108548] border-2 border-white rounded-full" title={data.personal.availability} />
            </div>
            
            {/* Name & Role */}
            <h2 className="font-bold text-[#1d1d1f] text-lg">{data.personal.name}</h2>
            <p className="text-sm text-[#5e5e5e] mb-2">{data.personal.role}</p>
            
            {/* Location */}
            <div className="flex items-center gap-1 text-xs text-[#5e5e5e] mb-3">
              <MapPin className="w-3 h-3" />
              {data.personal.location}
            </div>
            
            {/* Social Links */}
            <div className="flex gap-2">
              <a 
                href={`https://${data.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#0a66c2] text-white text-xs font-medium rounded-lg hover:bg-[#0958a8] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a 
                href={`https://${data.personal.github}`}
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

          <button
            onClick={toggleLang}
            className="w-full nav-item text-[#5e5e5e] hover:bg-gray-100 mt-2"
          >
            <span className="w-4 h-4 flex items-center justify-center font-bold text-xs">
              {lang === 'fr' ? 'EN' : 'FR'}
            </span>
            {lang === 'fr' ? 'Switch to English' : 'Passer en français'}
          </button>
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

const Header = ({
  data,
  labels
}: {
  data: typeof DATA_FR,
  labels: typeof LABELS['fr']
}) => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-8"
  >
    <div className="card card-hover p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1d1d1f] mb-1">{data.personal.name}</h1>
          <p className="text-[#5e5e5e] flex items-center gap-2">
            <Cloud className="w-4 h-4 text-[#1f75cb]" />
            {data.personal.role}
          </p>
          <p className="text-sm text-[#5e5e5e] mt-2 max-w-xl">{data.personal.summary}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <a href={`mailto:${data.personal.email}`} className="btn-primary">
            <Mail className="w-4 h-4" />
            {labels.contact}
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const PipelineStatus = ({ data, labels }: { data: typeof DATA_FR, labels: typeof LABELS['fr'] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="card card-hover p-6 mb-6"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="section-title">
        <GitBranch className="w-5 h-5 text-[#fc6d26]" />
        {labels.pipeline}
      </div>
      <span className="badge badge-primary flex items-center gap-1">
        <Clock className="w-3 h-3" />
        {labels.running}
      </span>
    </div>
    
    <div className="flex items-center">
      {data.pipeline.map((stage, idx) => (
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
          {idx < data.pipeline.length - 1 && (
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

const ExperienceCard = ({ job, index, labels }: { job: typeof DATA_FR.experiences[0], index: number, labels: typeof LABELS['fr'] }) => (
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
          {job.current && <span className="badge badge-success text-xs">{labels.current}</span>}
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

const TechnicalSkills = ({ data, labels }: { data: typeof DATA_FR, labels: typeof LABELS['fr'] }) => (
  <div className="card card-hover p-6 mb-6">
    <div className="section-title mb-6">
      <Code2 className="w-5 h-5 text-[#1f75cb]" />
      {labels.technical_skills}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Code2 className="w-4 h-4 text-[#1f75cb]" />
          <h3 className="font-medium text-[#1d1d1f]">{labels.languages}</h3>
        </div>
        {data.skills.languages.map(skill => (
          <SkillBar key={skill.name} {...skill} color="blue" />
        ))}
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Server className="w-4 h-4 text-[#fc6d26]" />
          <h3 className="font-medium text-[#1d1d1f]">{labels.infrastructure}</h3>
        </div>
        {data.skills.infrastructure.map(skill => (
          <SkillBar key={skill.name} {...skill} color="orange" />
        ))}
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Cloud className="w-4 h-4 text-[#108548]" />
          <h3 className="font-medium text-[#1d1d1f]">{labels.cloud_tools}</h3>
        </div>
        {data.skills.cloud.map(skill => (
          <SkillBar key={skill.name} {...skill} color="green" />
        ))}
      </div>
    </div>
  </div>
);

const SoftSkills = ({ data, labels }: { data: typeof DATA_FR, labels: typeof LABELS['fr'] }) => (
  <div className="card card-hover p-6">
    <div className="section-title mb-6">
      <Handshake className="w-5 h-5 text-[#6b4fbb]" />
      {labels.soft_skills}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.skills.soft.map((skill, idx) => {
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

const SkillsSection = ({ data, labels }: { data: typeof DATA_FR, labels: typeof LABELS['fr'] }) => (
  <div>
    <TechnicalSkills data={data} labels={labels} />
    <SoftSkills data={data} labels={labels} />
  </div>
);

const CertificationsSection = ({ data, labels }: { data: typeof DATA_FR, labels: typeof LABELS['fr'] }) => (
  <div className="card card-hover p-6">
    <div className="section-title mb-4">
      <Award className="w-5 h-5 text-[#fc6d26]" />
      {labels.certifications}
    </div>
    
    {data.certifications.map((cert, idx) => (
      <div key={idx} className="flex items-start gap-4 p-4 bg-[#f5f5f7] rounded-lg">
        <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
          <cert.icon className="w-6 h-6 text-[#1f75cb]" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#1d1d1f]">{cert.name}</span>
            {cert.verified && (
              <span className="badge badge-success text-xs">{labels.verified}</span>
            )}
          </div>
          <div className="text-sm text-[#5e5e5e]">{cert.provider}</div>
          <div className="text-xs text-[#8e8e93] mt-1">{cert.date}</div>
        </div>
      </div>
    ))}
  </div>
);

const TerminalWidget = ({ data }: { data: typeof DATA_FR }) => (
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
  "name": "${data.personal.name}",
  "role": "${data.personal.role}",
  "status": "${data.personal.availability.toLowerCase().replace(/\s/g, '_')}",
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
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const toggleLang = () => setLang(l => l === 'fr' ? 'en' : 'fr');

  const data = lang === 'fr' ? DATA_FR : DATA_EN;
  const labels = LABELS[lang];

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
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            data={data}
            labels={labels}
            lang={lang}
            toggleLang={toggleLang}
          />
          
          <div className="flex-1">
            {activeSection !== 'cv' && (
              <Header
                data={data}
                labels={labels}
              />
            )}
            
            {/* Mobile nav - En haut sur mobile */}
            <div className="lg:hidden mb-6 flex flex-col gap-4 no-print">
              <div className="flex justify-center gap-2 flex-wrap">
                {['overview', 'experience', 'skills', 'projects', 'cv'].map(sectionId => {
                   // Note: 'cv' maps to 'cv' in LABELS which is "CV PDF"
                   // We need to map sectionId to correct label
                   let label = '';
                   switch(sectionId) {
                     case 'overview': label = labels.overview; break;
                     case 'experience': label = labels.experience; break;
                     case 'skills': label = labels.skills; break;
                     case 'projects': label = labels.projects; break;
                     case 'cv': label = labels.cv; break;
                   }

                   return (
                    <button
                      key={sectionId}
                      onClick={() => setActiveSection(sectionId)}
                      className={`px-3 py-1.5 rounded-lg text-xs capitalize ${
                        activeSection === sectionId
                          ? 'bg-[#1f75cb] text-white'
                          : 'bg-white text-[#5e5e5e]'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {activeSection === 'overview' && (
              <>
                <PipelineStatus data={data} labels={labels} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  <TerminalWidget data={data} />
                  <CertificationsSection data={data} labels={labels} />
                </div>
              </>
            )}
            
            {activeSection === 'experience' && (
              <div>
                <h2 className="section-title mb-6">
                  <Briefcase className="w-5 h-5 text-[#1f75cb]" />
                  {labels.experience}
                </h2>
                {data.experiences.map((job, idx) => (
                  <ExperienceCard key={job.id} job={job} index={idx} labels={labels} />
                ))}
              </div>
            )}
            
            {activeSection === 'skills' && (
              <div>
                <h2 className="section-title mb-6">
                  <Cpu className="w-5 h-5 text-[#fc6d26]" />
                  {labels.skills}
                </h2>
                <SkillsSection data={data} labels={labels} />
              </div>
            )}

            {activeSection === 'projects' && (
              <div>
                <h2 className="section-title mb-6">
                  <FolderGit2 className="w-5 h-5 text-[#1f75cb]" />
                  {labels.projects}
                </h2>
                <ProjectsSection data={data} />
              </div>
            )}
            
            {activeSection === 'cv' && (
              <div className="no-print">
                <h2 className="section-title mb-6">
                  <FileText className="w-5 h-5 text-[#1d1d1f]" />
                  {labels.print_version}
                </h2>
              </div>
            )}

            {/* PDF View - Always rendered but styled differently when active */}
            <div className={`card p-8 ${activeSection !== 'cv' ? 'hidden' : ''}`}>
              <PDFView data={data} labels={labels} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
