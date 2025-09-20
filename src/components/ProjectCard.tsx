import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export function ProjectCard({ title, description, imageUrl, imageAlt }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-video relative overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        <button className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
          View Project Details →
        </button>
      </div>
    </div>
  );
}