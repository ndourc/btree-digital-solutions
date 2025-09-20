import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export function ProjectCard({ title, description, imageUrl, imageAlt }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative">
        <ImageWithFallback
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        <button className="text-blue-600 hover:text-blue-700 transition-colors">
          View Project Details →
        </button>
      </div>
    </div>
  );
}