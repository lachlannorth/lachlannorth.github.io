/* =====================================================================
   PORTFOLIO CONTENT. Edit this file to change projects and experience.

   Each project is one row in the Projects list (in the order below), and
   clicking it opens a pop-up with the details. To add a project, copy one
   { ... } block, give it a new id, and change the text. Pictures go in
   the images/ folder.

   Fields:
     id        short name used in links like index.html#id (lowercase, no spaces)
     title     project name
     year      when you did it (shown on the right of the row)
     status    optional, e.g. "In progress" (shows a tag next to the title)
     summary   one sentence shown in the list
     cover     small picture in the list; coverFit: "contain" shows the whole image (good for drawings)
     thumbText text shown instead of a picture when there's no cover
     facts     small label/value pairs at the top of the pop-up
     sections  { heading, text: [paragraphs], list: [bullet points] }
     images    { src, caption, photo: true for photos, small: true for logos }; the first one is shown large
     video     optional { src, caption }
     downloads optional { label, href }
     (category and lede aren't currently shown on the site)
   ===================================================================== */

const PROJECTS = [
  {
    id: "infraair",
    cover: "images/gbs-logo.png",
    coverFit: "contain",
    title: "InfraAir: Aircraft for Infrastructure Inspection",
    category: "Aerospace concept",
    year: "2026–2027",
    status: "In progress",
    summary: "My senior design project: designing an airborne inspection system for NASA's 2027 Gateways to Blue Skies competition.",
    facts: [
      { label: "Type", value: "Senior design project" },
      { label: "Competition", value: "NASA Gateways to Blue Skies 2027" },
      { label: "Team", value: "4 students" },
      { label: "Role", value: "Airframe structures, propulsion & CAD" },
      { label: "Status", value: "Preliminary Design Review complete" },
      { label: "Advisor", value: "Professor Roberts" }
    ],
    sections: [
      { heading: "Overview",
        text: ["For my senior design project, our four-person team is competing in NASA's 2027 Gateways to Blue Skies competition. The 2027 theme, InfraAir, challenges student teams to design airborne platforms that make inspecting land-based infrastructure safer, more reliable, and cheaper, with a concept that could realistically be deployed by 2035. On top of the NASA deliverables, Cal Poly's senior project requires a physical prototype, so we're also building a proof of concept."] },
      { heading: "The Challenge",
        text: ["Inspecting infrastructure like bridges, tunnels, and power lines often means closing lanes, bringing in heavy equipment, and putting inspectors at height or in tight spaces. The biggest cost usually isn't the inspection itself. It's getting people safely to the structure, which is exactly where an aircraft can help."] },
      { heading: "My Role",
        text: ["I'm responsible for the airframe structures and propulsion. I ran the stress and deflection hand calculations on the rotor arms and sized the rotors and motors against the lift and flight time the mission requires. I also modeled the arms, motors, rotors, and frame in CAD, which went into the team's full assembly."] },
      { heading: "Where We Are",
        text: ["We completed our Preliminary Design Review in October 2026 and are working toward our Critical Design Review. Our proposal and 2-minute concept video are due to NASA in February 2027, up to eight finalist teams are selected in March, and finalists present to NASA and industry judges at the Gateways to Blue Skies Forum in May."] },
      { heading: "What I'm Learning",
        text: ["On an aircraft, weight drives almost every decision. Every bit of weight saved in the structure is lift and battery the motors don't have to make up for, which is exactly why the airframe and propulsion have to be designed together instead of one after the other. The project has also pushed me to think past the hardware to regulations and safety, since those decide whether a concept could ever actually be used."] },
      { text: ["Since the competition is still running, I'm keeping our concept details private for now, but I'm happy to walk through the design in more depth in person."] }
    ],
    images: [
      { src: "images/gbs-logo.png", caption: "NASA Gateways to Blue Skies competition logo", small: true }
    ]
  },

  {
    id: "atv-drivetrain",
    title: "Electric ATV Drivetrain",
    category: "CAD & analysis",
    year: "Spring 2026",
    summary: "Led a four-person team designing an electric drivetrain that gets a 750 lb ATV and rider up a 15° hill at 10 mph.",
    cover: "images/atv-cad.png",
    coverFit: "contain",
    facts: [
      { label: "Course", value: "ME 329 Mechanical Systems Design" },
      { label: "Role", value: "Team lead (4 students)" },
      { label: "Tools", value: "SOLIDWORKS, Excel, hand calculations" }
    ],
    sections: [
      { heading: "Overview",
        text: ["The goal was a drivetrain that could push a 750 lb vehicle and rider up a 15° incline at 10 mph, using only parts you can actually buy. We started at the wheels, figured out the torque and speed they needed, and worked backwards through the chain, shafts, gears, and motor so that every component was sized around the same loads."] },
      { heading: "My Role",
        text: ["I led the team and kept everyone's calculations feeding into each other. On the technical side, I created the shaft and gear calculators the team used to size the gears, check them against AGMA bending and pitting stress, and design the shafts for fatigue. Once the hand calculations were done, I helped with motor selection, and I drew the detail drawings for both shafts."] },
      { heading: "Requirements & Motor Selection",
        text: ["A free-body diagram of the ATV on the incline gave a traction force of about 290 lbf at the tires. With a 12-inch wheel radius, that works out to roughly 3,480 lb-in of wheel torque, and 10 mph works out to about 140 rpm, for a power requirement of 7.73 hp. From there we selected an ME1004 brushed DC motor, which puts out 145 lb-in at 3,400 rpm, or 7.82 hp, just above what we needed."] },
      { heading: "Gear Train",
        text: ["Comparing the wheel torque to the motor torque gave a required ratio of 24:1. We split that into four spur gear stages of 2:1, 2:1, 3:1, and 2:1, using off-the-shelf 1144 carbon steel gears from McMaster-Carr. Assuming the vehicle runs 4 hours a day, 2 days a week for 5 years at 99% reliability, we ran the gears through my gear calculator to check them against AGMA bending and pitting stress. I set it up so you enter the torque, speed, gear sizes, pitch, and material, and it works through every AGMA factor to give the bending and contact safety factors for both gears, so trying a new gear size only meant changing a few cells. The contact ratio came out to 1.72, above the 1.2 minimum, and the lowest safety factor was 1.2 in bending on the second pair's pinion."] },
      { heading: "Shafts, Bearings & Chain",
        text: ["The gear forces set the loads on each shaft. Using the shaft calculator, we designed the shafts in 1018 and 1030 cold-drawn steel for infinite life with the modified Goodman criterion, accounting for stress concentrations at every fillet and keyway, and iterated on diameters until they both fit standard bearing bores and held up in fatigue. The calculator takes the shaft lengths, diameters, and gear forces, solves for the bearing reactions and bending moments along the shaft, and applies the Marin factors and stress concentrations at each fillet and keyway to give a fatigue safety factor at every critical section. The lowest fatigue safety factors were 2.54 on the first shaft and 1.66 on the second. Each shaft runs on a pair of matching deep-groove ball bearings, 6207s and 6204s, sized for 99% reliability with a 1.5 application factor for the impact loading an ATV sees. A #120 roller chain on 17-tooth sprockets carries power to the wheels."] },
      { heading: "Result",
        text: ["The final design turns the motor's 145 lb-in at 3,400 rpm into about 3,480 lb-in at 142 rpm at the wheel, with every calculated safety factor above 1. The gears, bearings, and shaft stock come to about $1,300 from standard suppliers. If we took it further, I'd cut down the number of gear stages, raise that lowest bending safety factor, add chain tensioning and guarding, and load test it to check efficiency, bearing temperature, and motor current."] },
      { heading: "What I Learned",
        text: ["Everything in a drivetrain is connected, since one change to the wheel torque ripples through every gear, shaft, and bearing. That's exactly why building the calculators early saved us so much time, since every iteration took minutes instead of redoing the hand calculations. Leading the team also taught me that the hard part isn't any single calculation. It's making sure everyone's numbers line up when they come back together."] }
    ],
    images: [
      { src: "images/atv-cad.png", caption: "Drivetrain assembly: motor, four-stage gear train, and chain output" },
      { src: "images/atv-gear-calculator.png", caption: "My AGMA gear calculator in Excel: inputs, bending and contact stresses, and safety factors for both gears in a pair" },
      { src: "images/atv-shaft-calculator.png", caption: "My shaft fatigue calculator in Excel: shaft geometry and gear loads, Marin factors, and stress concentrations at each fillet and keyway" },
      { src: "images/atv-shaft1.png", caption: "Shaft 1 detail drawing" },
      { src: "images/atv-shaft2.png", caption: "Shaft 2 detail drawing" }
    ],
    downloads: [
      { label: "Gear calculator (PDF)", href: "files/atv-gear-calculator.pdf" },
      { label: "Shaft 1 drawing (PDF)", href: "files/atv-shaft-1-drawing.pdf" },
      { label: "Shaft 2 drawing (PDF)", href: "files/atv-shaft-2-drawing.pdf" }
    ]
  },

  {
    id: "pvc-scooter",
    title: "PVC Scooter: Design, FEA & Testing",
    category: "CAD & analysis",
    year: "Winter 2026",
    summary: "A rideable PVC kart-style scooter our team designed, analyzed with FEA, built, and load tested.",
    cover: "images/scooter-build.jpg",
    facts: [
      { label: "Course", value: "ME 328 Design for Strength and Stiffness" },
      { label: "Role", value: "Team member (4 students)" },
      { label: "Tools", value: "SOLIDWORKS, SOLIDWORKS Simulation" }
    ],
    sections: [
      { heading: "Overview",
        text: ["Our team designed and built a kart-style scooter out of PVC, ridden by one person and pushed by a second. It had to be simple, cheap, and built from materials you can find at a hardware store, while still being strong and stiff enough to carry an adult rider. It also had to fit through a standard doorway, steer directly by hand or foot, and use structural materials for every load-bearing joint rather than 3D-printed parts."] },
      { heading: "My Role",
        text: ["I ran the SOLIDWORKS Simulation FEA and checked it against our hand calculations, which I helped a teammate work through, to find the highest-stress locations we needed to design around. Once the scooter was built, I put together the test setup and measured deflection on the finished frame, and when a joint failed during testing, I tracked down why."] },
      { heading: "Design & Analysis",
        text: ["We designed around a 155 lb rider with a 1.5 safety factor, which gave a design load of about 220 lb. Our first hand calculations treated the frame as simply supported beams to size the members and find where the stress would concentrate. We then built a beam model in SOLIDWORKS Simulation and ran three load cases: the rider's weight seated and standing, that weight combined with the push force at the rear bar, and an abuse case of rolling off a curb. The peak von Mises stress showed up at the four-way joint connecting the steering to the main frame, with the rear and front three-way joints next, though the rear truss spread those loads out. We also checked the wheels and the steel front axle against the design load."] },
      { heading: "Build & Testing",
        text: ["We machined the steering cross joint so it could rotate freely, drilled the fork for the front axle, mounted the swivel wheels on wood blocks, and glued the frame together from back to front. To test it, we loaded the seat and push bar and measured deflection at the joints the FEA had flagged. The measured deflections ran a bit higher than predicted, about 0.2 inches at the push bar compared to 0.065 inches from the FEA, which we traced to slightly different pipe sizes and a support truss we ended up removing during the build."] },
      { heading: "The Failure",
        text: ["The joint that actually failed wasn't one either analysis had flagged. The seat joint broke when the scooter was pulled instead of pushed. With the truss gone, the loads took a different path, and we had only glued the joints we expected to carry pushing loads. Once I traced it to those two causes, we added glue and reinforced the joints with duct tape, and after that it held up whether it was pushed or pulled."] },
      { heading: "What I Learned",
        text: ["An analysis is only as good as how closely it matches what actually gets built. Removing one truss during the build moved the weak point somewhere neither analysis had looked, which made me a lot more careful about keeping the model and the build in sync. If we built it again, I'd plan the joints and manufacturing details before running the FEA, move the seat forward relative to the handlebars, and use locking swivel wheels to control how much the scooter drifts."] }
    ],
    images: [
      { src: "images/scooter-build.jpg", caption: "Completed prototype", photo: true },
      { src: "images/scooter-fea.png", caption: "FEA: axial and bending stress under combined load" },
      { src: "images/scooter-cad.png", caption: "SOLIDWORKS frame model" },
      { src: "images/scooter-hand-calcs.jpg", caption: "Initial hand calculations for the weight load case, drawn by a teammate" }
    ]
  },

  {
    id: "bottling-station",
    title: "Bottling Station & Geneva Drive",
    category: "CAD & motion",
    year: "Winter 2025",
    summary: "A SOLIDWORKS bottling station that uses a Geneva drive to step a five-bottle turntable one station at a time.",
    cover: "images/bottling-assembly.png",
    coverFit: "contain",
    facts: [
      { label: "Course", value: "ME 251 Introduction to Detailed Design with Solid Modeling" },
      { label: "Type", value: "Individual" },
      { label: "Tools", value: "SOLIDWORKS assembly & motion study" }
    ],
    sections: [
      { heading: "Overview",
        text: ["I modeled a bottling station where a Geneva drive turns constant rotation into stop-and-go motion, stepping a five-bottle turntable 72° at a time. I built the assembly with mates that move like the real mechanism, ran a motion study to check the indexing and interference, and made the assembly and Geneva wheel drawings."] },
      { heading: "What I Learned",
        text: ["Getting the mates right is what makes a motion study worth anything. Once the model moves like the real mechanism, it's a simple way to catch timing problems before anything gets made."] }
    ],
    video: { src: "files/bottling-station-motion.mp4", caption: "SOLIDWORKS motion study of the indexing assembly" },
    images: [
      { src: "images/bottling-assembly.png", caption: "Assembly drawing" },
      { src: "images/geneva-wheel.png", caption: "Geneva wheel detail drawing" }
    ],
    downloads: [ { label: "Drawings (PDF)", href: "files/bottling-station-drawings.pdf" } ]
  },

  {
    id: "manufacturing",
    title: "Manufacturing, Casting & Welding",
    category: "Manufacturing",
    year: "2025",
    summary: "Hands-on machining, casting, and welding, including a custom casting I made using Mastercam.",
    cover: "images/mfg-engine.jpg",
    facts: [
      { label: "Courses", value: "Subtractive Manufacturing, Materials Joining (Welding), Casting" },
      { label: "Type", value: "Individual and team shop work" },
      { label: "Tools", value: "Mastercam, Haas mini mill, lathe, welding" }
    ],
    sections: [
      { heading: "Overview",
        text: ["Cal Poly's Learn by Doing approach meant a lot of my 2025 coursework happened in the shop rather than in front of a screen. Across subtractive manufacturing, materials joining, and casting, I got hands-on time on the mill and lathe, in the welding booth, and in the foundry."] },
      { heading: "In the Shop",
        text: ["The biggest machining project was the engine assembly. We manufactured a lot of its parts ourselves on a Haas mini mill, the lathe, and other machines, and took the time to get a quality finish on each one. I also machined the aluminum screwdriver shown here, with its engraved logo and set-screw bit holder. For casting, I used Mastercam to make a custom casting of my own, and the aluminum Mustang shown here came out of the casting lab as well. In the welding lab, I practiced joining steel plate."] },
      { heading: "What I Learned",
        text: ["Time in the shop changed how I design. I now think about how a part will be held, cut, and inspected while I'm still in CAD, since a tolerance that looks easy on a drawing can take hours on a machine. Seeing a finished part come out of the shop is still one of my favorite moments in any project."] }
    ],
    images: [
      { src: "images/mfg-engine.jpg", caption: "Engine assembly, with many of its parts machined in-house", photo: true },
      { src: "images/mfg-screwdriver.jpg", caption: "Machined screwdriver", photo: true },
      { src: "images/mfg-casting.jpg", caption: "Aluminum casting", photo: true },
      { src: "images/mfg-weld.jpg", caption: "Welded steel plate", photo: true }
    ]
  },

  {
    id: "shifter-fork",
    title: "Shifter Fork Assembly",
    category: "Drawings & GD&T",
    year: "Winter 2025",
    summary: "Part and assembly drawings for a three-piece aluminum shifter fork, toleranced with GD&T.",
    cover: "images/shifter-assembly.png",
    coverFit: "contain",
    facts: [
      { label: "Course", value: "ME 251 Introduction to Detailed Design with Solid Modeling" },
      { label: "Type", value: "Individual" },
      { label: "Tools", value: "SOLIDWORKS drawings" }
    ],
    sections: [
      { heading: "Overview",
        text: ["I drew a three-part 6061-T6 aluminum shifter fork, with a part drawing for each piece and an assembly drawing with weld callouts, tapped holes, and a bill of materials. Each part has a full datum scheme with position tolerances at MMC."] },
      { heading: "What I Learned",
        text: ["A drawing has to stand on its own, since the machinist can't ask you what you meant. I learned to pick datums based on how the part actually works and gets inspected, not simply whatever edge is convenient."] }
    ],
    images: [
      { src: "images/shifter-assembly.png", caption: "Assembly drawing with weld callouts and BOM" },
      { src: "images/shifter-parts.png", caption: "Part drawings: shaft body, upper fork, and lower fork" }
    ],
    downloads: [ { label: "Drawings (PDF)", href: "files/shifter-fork-drawings.pdf" } ]
  },

  {
    id: "eagle-project",
    title: "Eagle Scout Project: Flagpole Planter & Campus Improvements",
    category: "Leadership & build",
    year: "2022",
    summary: "A custom planter around my old K–8 school's flagpole, plus other campus improvements, for my Eagle Scout project.",
    cover: "images/eagle-planter-finished.jpg",
    facts: [
      { label: "Type", value: "Eagle Scout service project" },
      { label: "Role", value: "Sole project lead" },
      { label: "Service", value: "400 hours" }
    ],
    sections: [
      { heading: "Overview",
        text: ["For my Eagle Scout project, I went back to my old kindergarten through 8th grade school to fix up the area around the flagpole. The base of the pole was bare and worn, right in the middle of the courtyard. Altogether, the project came to 400 hours of community service."] },
      { heading: "Planning",
        text: ["I planned and ran the entire project myself, starting with working out what we'd build and when with the school. The main constraint was a sewer cleanout pipe right next to the flagpole, which maintenance staff need to be able to reach. That meant the planter couldn't simply be a box dropped over the base. It had to be laid out around the cleanout so it stayed accessible. Before we built anything, I marked the footprint out on site in chalk myself."] },
      { heading: "The Build",
        text: ["I organized and led a group of volunteers through the build. We built a wood planter box around the pole, stained it, and filled it with succulents and flowers. While we had the crew together, we also sanded and refinished the existing wooden planters around the campus."] },
      { heading: "Result",
        text: ["The bare pole base is now a finished planter that looks like it belongs in the courtyard, and maintenance can still get to the cleanout. The refinished planters around campus gave the school a cleaner, cared-for look overall."] },
      { heading: "What I Learned",
        text: ["Real projects come with constraints you can't move, like a sewer cleanout, and the design has to work around them. Leading volunteers also showed me that a work day only goes smoothly when the plan, tools, and materials are ready before anyone shows up. Looking back, it was my first real experience taking a project from a chalk outline to something finished."] }
    ],
    images: [
      { src: "images/eagle-planter-finished.jpg", caption: "Finished planter around the flagpole", photo: true },
      { src: "images/eagle-before.jpg", caption: "Before: the flagpole base", photo: true },
      { src: "images/eagle-layout.jpg", caption: "Chalk layout of the planter around the sewer cleanout", photo: true },
      { src: "images/eagle-volunteers.jpg", caption: "Volunteers sanding and refinishing existing planters", photo: true },
      { src: "images/eagle-planter-day.jpg", caption: "Completed planter with succulents and flowers", photo: true }
    ]
  }
];

/* About section: each string is one paragraph. */
const ABOUT = [
  "Hi! I'm Lachlan North, a mechanical engineering major at California Polytechnic State University, San Luis Obispo.",
  "Throughout my time in engineering, I've enjoyed every portion of a project, from early ideation through to the point where a design stops being a drawing and becomes something you can pick up. Manufacturing, project engineering, design, quality, and test work all interest me, whether in hardware, medical devices, or building systems. I enjoy problem solving and working in group environments, and I'm always looking to keep learning and expand my skillset. Through Cal Poly's Learn by Doing philosophy, I've had experience machining, welding, casting, and running the analysis to bring concepts from ideation to prototype.",
  "Outside of engineering you'll find me outside. I love backpacking, hiking, swimming, playing basketball, and friendly competition. I'm always up for experiencing new things and traveling, and I spent a semester studying abroad in Madrid.",
  "I'm currently open to work, so feel free to reach out."
];

/* Education, coursework and software (from my résumé). */
const EDUCATION = {
  school: "California Polytechnic State University, San Luis Obispo",
  degrees: [
    { name: "B.S. Mechanical Engineering", date: "June 2027" },
    { name: "M.S. Engineering Management (Blended Program)", date: "Expected June 2028" },
    { name: "Study Abroad: Universidad Rey Juan Carlos, Madrid, Spain", date: "Fall 2025" }
  ],
  honors: "GPA 3.672 · Dean's List (8) and President's List",
  completed: ["Statics", "Dynamics", "Mechanics of Materials", "Materials Engineering", "Thermodynamics", "Heat Transfer", "Fluid Mechanics", "Subtractive Manufacturing", "Materials Joining (Welding)", "Casting"],
  inProgress: ["Vibrations and System Modeling", "Mechanical Controls and Implementation", "Energy Conversion", "Senior Design Project"],
  software: ["SOLIDWORKS", "SOLIDWORKS Simulation", "Autodesk Fusion", "Mastercam", "GD&T", "MATLAB", "Python", "Microsoft Office"]
};

/* Leadership & activities. Delete this list (keep "const ACTIVITIES = [];") to hide the section. */
const ACTIVITIES = [
  { name: "NGCP Design Team", detail: "Design team member on an autonomous casualty-retrieval device", date: "2026 – Present" },
  { name: "Boy Scouts of America: Eagle Scout", detail: "400-hour community service Eagle project; troop leadership roles", date: "2016 – 2023" },
  { name: "Cal Poly Club Swim", detail: "Train multiple times weekly and compete in collegiate club meets", date: "2025 – Present" },
  { name: "Varsity Water Polo and Swim: Team Captain", detail: "Captained both teams and led each to a league title", date: "2022 – 2023" }
];

const LINKEDIN = "https://www.linkedin.com/in/lachlan-north-96b2ba246";
