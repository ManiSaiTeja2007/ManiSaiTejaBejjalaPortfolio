import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { ProjectCard } from '../common/Cards/ProjectCard';
import { projectCategories, getAllProjects } from '@/utils/projectsData';
import { useProjectFilter } from '@/hooks/useProjectFilter';
import { Link } from 'react-router-dom';

export const AllProjectsPage = () => {
  const allProjects = getAllProjects();
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    categories,
    filteredProjects,
  } = useProjectFilter(allProjects);

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-primary-brand mb-4">
            All My Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Explore {allProjects.length}+ projects across different technologies
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-slate-500" />
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                Filter by Technology
              </h2>
            </div>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-card rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-brand focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const categoryData = projectCategories.find(cat => cat.id === category);
              const isActive = selectedCategory === category;
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                    isActive
                      ? 'bg-primary-brand text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                  }`}
                >
                  {category === 'all' ? 'All' : categoryData?.name || category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
              No projects found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        ) : (
          <div className="space-y-12">
            {/* Group by category if showing all */}
            {selectedCategory === 'all' ? (
              projectCategories
                .filter(category => 
                  category.projects.some(project => 
                    filteredProjects.some(p => p.id === project.id)
                  )
                )
                .map((category) => {
                  const categoryProjects = filteredProjects.filter(
                    project => project.category === category.id
                  );

                  if (categoryProjects.length === 0) return null;

                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <h3 className={`text-2xl font-semibold ${category.color}`}>
                        {category.name}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoryProjects.map((project, index) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <ProjectCard project={project} />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-primary-brand hover:text-primary-brand/80 transition-colors duration-300"
          >
            <span>← Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};