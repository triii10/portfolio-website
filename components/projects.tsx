import { projectsData } from "@/lib/data";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {
  return (
    <section id="projects" className="mb-28 w-full max-w-3xl scroll-mt-28">
      <SectionHeading>Selected projects</SectionHeading>
      <div className="space-y-5">
        {projectsData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
