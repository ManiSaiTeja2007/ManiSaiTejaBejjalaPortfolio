import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Code } from 'lucide-react';
import { getProjectById, getCategoryById } from '@/utils/projectsData';
import { ProjectCard } from '../common/Cards/ProjectCard';

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || '');
  const category = project ? getCategoryById(project.category) : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-brand mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary-brand hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-primary-brand hover:text-primary-brand/80 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-primary-brand to-secondary-brand text-white rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary-brand px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-xl opacity-90 max-w-3xl">
              {project.description}
            </p>
          </div>
        </motion.header>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Project Image */}
            <div className="bg-card rounded-xl overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto"
                onError={(e) => {
                  if (project.fallbackImage) {
                    e.currentTarget.src = project.fallbackImage;
                  }
                  e.currentTarget.classList.add('project-image-placeholder');
                }}
              />
            </div>

            {/* Project Details */}
            <div className="bg-card rounded-xl p-8">
              <h2 className="text-2xl font-bold text-primary-brand mb-6">Project Details</h2>
              
              <div className="prose dark:prose-invert max-w-none">
                <h3>Overview</h3>
                <p>{project.description}</p>
                
                <h3>Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3>Key Features</h3>
                <ul>
                  <li>Real-time data synchronization</li>
                  <li>Responsive design for all devices</li>
                  <li>Secure authentication system</li>
                  <li>Optimized performance</li>
                </ul>

                <h3>Code Example</h3>
                <div className="code-snippet-container">
                  <pre>
                    <code>
{`// Example code snippet
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Project Info Card */}
            <div className="bg-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary-brand mb-4">Project Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-slate-500" size={20} />
                  <div>
                    <div className="text-sm text-slate-500">Category</div>
                    <div className="font-medium">{category?.name || project.category}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Code className="text-slate-500" size={20} />
                  <div>
                    <div className="text-sm text-slate-500">Tech Stack</div>
                    <div className="font-medium">{project.technologies.length} technologies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Projects */}
            {category && category.projects.length > 1 && (
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary-brand mb-4">
                  More {category.name} Projects
                </h3>
                <div className="space-y-4">
                  {category.projects
                    .filter(p => p.id !== project.id)
                    .slice(0, 3)
                    .map((relatedProject) => (
                      <ProjectCard
                        key={relatedProject.id}
                        project={relatedProject}
                        showDescription={false}
                      />
                    ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};