export class Course {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.level = data.level;
    this.duration = data.duration;
    this.topics = data.topics || [];
    this.prerequisites = data.prerequisites || [];
    this.active = data.active;
    this.featured_image = data.featured_image;
    this.syllabus_url = data.syllabus_url;
  }

  static async getAll() {
    const mockCourses = [
      {
        id: 1,
        title: "Introduction to Astrophysics",
        description: "A comprehensive introduction to the fundamental concepts of astrophysics, covering stellar evolution, galaxy formation, and cosmology.",
        level: "Undergraduate",
        duration: "16 weeks",
        topics: [
          "Stellar Structure and Evolution",
          "Galaxy Formation and Evolution", 
          "Cosmology and the Big Bang",
          "Exoplanets and Astrobiology",
          "Observational Techniques"
        ],
        prerequisites: ["Physics I", "Physics II", "Calculus I", "Calculus II"],
        active: true,
        featured_image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=600&auto=format&fit=crop",
        syllabus_url: "/syllabi/intro-astrophysics.pdf"
      },
      {
        id: 2,
        title: "Observational Astronomy",
        description: "Hands-on course focusing on astronomical observation techniques, data reduction, and analysis methods used in modern astronomy.",
        level: "Advanced Undergraduate",
        duration: "12 weeks",
        topics: [
          "Telescope Design and Operation",
          "CCD Imaging and Photometry",
          "Spectroscopy Techniques",
          "Data Reduction Methods",
          "Statistical Analysis of Astronomical Data"
        ],
        prerequisites: ["Introduction to Astrophysics", "Statistics", "Computer Programming"],
        active: true,
        featured_image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=600&auto=format&fit=crop",
        syllabus_url: "/syllabi/observational-astronomy.pdf"
      },
      {
        id: 3,
        title: "Galaxy Structure and Evolution",
        description: "Advanced course examining the formation, structure, and evolution of galaxies throughout cosmic time.",
        level: "Graduate",
        duration: "14 weeks",
        topics: [
          "Galaxy Classification and Morphology",
          "Dark Matter and Galaxy Formation",
          "Stellar Populations and Chemical Evolution",
          "Galaxy Interactions and Mergers",
          "Active Galactic Nuclei"
        ],
        prerequisites: ["Advanced Astrophysics", "Observational Astronomy"],
        active: true,
        featured_image: "https://images.unsplash.com/photo-1544737151406-6e4b999de2a9?q=80&w=600&auto=format&fit=crop",
        syllabus_url: "/syllabi/galaxy-evolution.pdf"
      },
      {
        id: 4,
        title: "Astrophotography Workshop",
        description: "Practical workshop teaching the art and science of astrophotography, from equipment selection to advanced image processing.",
        level: "All Levels",
        duration: "8 weeks",
        topics: [
          "Camera and Telescope Selection",
          "Mount Setup and Polar Alignment",
          "Deep Sky Object Imaging",
          "Image Stacking and Processing",
          "Post-Processing Techniques"
        ],
        prerequisites: ["Basic Photography Knowledge"],
        active: true,
        featured_image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop",
        syllabus_url: "/syllabi/astrophotography-workshop.pdf"
      }
    ];

    return mockCourses.map(course => new Course(course));
  }

  static async getActive() {
    const courses = await this.getAll();
    return courses.filter(course => course.active);
  }

  static async findById(id) {
    const courses = await this.getAll();
    return courses.find(course => course.id === parseInt(id));
  }
}