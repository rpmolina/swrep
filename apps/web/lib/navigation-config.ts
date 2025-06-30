import { Globe, Rocket, Car, Users, Film, Zap, ExternalLink, Github } from "lucide-react";

export const navigationConfig = {
  navMain: [
    {
      title: "Planets",
      url: "/planets",
      icon: Globe,
      description: "Explore the worlds of Star Wars",
      isActive: true,
      available: true,
    },
    {
      title: "Characters",
      url: "/people",
      icon: Users,
      description: "Know the heroes and villains",
      isActive: false,
      available: true,
    },
    {
      title: "Ships",
      url: "/starships",
      icon: Rocket,
      description: "Discover the spaceships",
      isActive: false,
      available: true,
    },
    {
      title: "Movies",
      url: "/films",
      icon: Film,
      description: "Movie information",
      isActive: false,
      available: true,
    },
  ],
  navSecondary: [
    {
      title: "SWAPI API",
      url: "https://swapi.info",
      icon: ExternalLink,
      description: "SWAPI API Docs",
    },
    {
      title: "repo",
      url: "https://github.com/rpmolina/swarep",
      icon: Github,
      description: "View on GitHub",
    },
  ],
};