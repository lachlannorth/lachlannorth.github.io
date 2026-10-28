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
    summary: "Senior design project: a two-drone bridge inspection system for NASA's 2027 Gateways to Blue Skies competition.",
    lede: "Our Cal Poly senior design team is developing a two-pass bridge inspection system built around two separate unmanned aircraft for NASA's 2027 Gateways to Blue Skies competition.",
    facts: [
      { label: "Type", value: "Senior design project" },
      { label: "Competition", value: "NASA Gateways to Blue Skies 2027" },
      { label: "Role", value: "Airframe structures & propulsion sizing" },
      { label: "Status", value: "Preliminary Design Review complete" },
      { label: "Advisor", value: "Professor Roberts" }
    ],
    sections: [
      { heading: "Overview",
        text: ["Cal Poly senior design project, September 2026 – present. NASA's 2027 Gateways to Blue Skies competition challenges student teams to design airborne platforms that make inspecting bridges, tunnels, power grids and other land-based infrastructure safer, more reliable and less costly. Bridge inspection today often means lane closures, snooper trucks and inspectors working at height.",
               "Our concept is a two-pass bridge inspection system using two separate unmanned aircraft: a large survey drone carrying LiDAR, an RGB camera and ground-penetrating radar, and three smaller contact drones carrying contact sensing heads."] },
      { heading: "My Contribution",
        list: [
          "Ran the structural analysis for the airframes, including stress and deflection calculations.",
          "Sized the rotors and motors against the lift and endurance the mission requires.",
          "Contributed to the team's Preliminary Design Review, now complete."
        ] },
      { heading: "Competition Timeline",
        list: [
          "February 2027: 5–7-page systems-level proposal and 2-minute concept video due.",
          "March 2027: up to eight finalist teams selected.",
          "May 2027: finalists present a final paper, infographic and talk to NASA and industry judges at the Gateways to Blue Skies Forum."
        ] },
      { heading: "What I'm Learning",
        list: [
          "In aircraft, weight drives everything: every gram the structure saves is lift and endurance the propulsion system doesn't have to provide, so the airframe and propulsion sizing have to be iterated together.",
          "Designing two different aircraft for one mission means thinking at the systems level: what each vehicle must carry, how they work together, and how the inspection data reaches the engineers who use it.",
          "The competition pushes past the hardware to technology readiness, regulations, training and cost, which is what decides whether a concept could actually be adopted."
        ] }
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
    summary: "Motor selection, a 24:1 four-stage gear reduction, fatigue-rated shafts, bearings and chain drive for an electric ATV climbing a 15° grade.",
    cover: "images/atv-cad.png",
    coverFit: "contain",
    lede: "Design of a complete electric drivetrain able to drive a 750 lbf vehicle and rider up a 15° incline at 10 mph, built entirely from standard purchasable components.",
    facts: [
      { label: "Course", value: "ME 329 Mechanical Systems Design" },
      { label: "Role", value: "Team lead (4 students)" },
      { label: "Tools", value: "SolidWorks, Excel, hand calculations" },
      { label: "Output", value: "3,480 lb-in at 141.7 rpm" }
    ],
    sections: [
      { heading: "Overview",
        text: ["Cal Poly ME 329 Mechanical Systems Design · Team design project, Spring 2026. Starting from the vehicle requirements (750 lbf total weight, a 15° incline and a 10 mph target speed), we used a free body diagram to find the traction force, wheel torque and wheel speed the drivetrain had to deliver, then worked backwards from the wheel to the motor so every component was sized around the same loads."] },
      { heading: "My Contribution",
        list: [
          "Team lead: led the four-person team through the design, from the vehicle requirements to the final component selection.",
          "Selected the motor by working from the vehicle loading analysis to the required wheel torque, speed and power.",
          "Set the gear ratios for the 24:1 four-stage reduction from a free-body analysis of the vehicle on the incline, and verified every gear pair against AGMA bending and pitting stress.",
          "Built the shaft and gear calculators the team used to size gears and check shaft fatigue safety factors.",
          "Designed the shafts for infinite fatigue life in 1018 and 1030 cold-drawn steel, and selected the bearings and chain drive from standard purchasable components.",
          "Drew the detail drawings for both shafts, including keyseats, fillets and runout tolerances."
        ] },
      { heading: "Design & Analysis",
        list: [
          "Motor: an ME1004 brushed DC motor delivering 145 lb-in at 3,400 rpm (7.82 hp), just above the 7.73 hp requirement.",
          "Gear train: four spur gear stages (2:1, 2:1, 3:1, 2:1) for a 24:1 overall reduction, with bending and pitting factors of safety checked for every pair and a contact ratio of 1.72.",
          "Shafts: stepped shafts designed for infinite fatigue life using the modified Goodman criterion, with stress concentrations at fillets and keyways (lowest safety factor 1.66).",
          "Bearings: deep-groove ball bearings (6207 and 6204) selected for 99% reliability with an application factor of 1.5 for impact loading.",
          "Output: a #120 roller chain with 17-tooth sprockets on a 10 in center distance."
        ] },
      { heading: "Result",
        text: ["The final design takes the motor from 3,400 rpm and 145 lb-in to about 141.7 rpm and 3,480 lb-in at the wheel, with every calculated safety factor above 1. Gears, bearings and shaft stock came to about $1,300 from standard suppliers.",
               "Recommended improvements include reducing the number of gear stages, raising the lowest gear bending safety factor of 1.2, adding chain tensioning and guarding, and load testing to verify efficiency, bearing temperature and motor current."] },
      { heading: "What I Learned",
        list: [
          "How requirements cascade through a drivetrain: one change to the wheel torque or speed ripples through the motor, every gear stage, the shafts and the bearings.",
          "Why reusable calculators matter. Building them made it fast to iterate on gear sizes and shaft diameters and kept the whole team's numbers consistent.",
          "Shaft and bearing design are linked: shaft diameters had to fit standard bearing bores while still giving enough fatigue strength for infinite life.",
          "Leading a team means splitting the work so each person's calculations feed the next, and checking that the pieces fit together before the deadline."
        ] }
    ],
    images: [
      { src: "images/atv-cad.png", caption: "Drivetrain assembly: motor, four-stage gear train and chain output" },
      { src: "images/atv-shaft1.png", caption: "Shaft 1 detail drawing" },
      { src: "images/atv-shaft2.png", caption: "Shaft 2 detail drawing" }
    ],
    downloads: [
      { label: "Shaft 1 drawing (PDF)", href: "files/atv-shaft-1-drawing.pdf" },
      { label: "Shaft 2 drawing (PDF)", href: "files/atv-shaft-2-drawing.pdf" }
    ]
  },

  {
    id: "pvc-scooter",
    title: "PVC Scooter: Design, FEA & Testing",
    category: "CAD & analysis",
    year: "Winter 2026",
    summary: "A team-built PVC kart scooter sized for a 220 lb design load, analyzed by hand and with FEA, then built and deflection-tested.",
    cover: "images/scooter-build.jpg",
    lede: "A lightweight, low-cost kart-style scooter built mostly from PVC, taken from load cases and hand calculations through FEA to a working prototype and physical testing.",
    facts: [
      { label: "Course", value: "ME 328 Design for Strength and Stiffness" },
      { label: "Role", value: "Team member (4 students)" },
      { label: "Tools", value: "SolidWorks, SolidWorks Simulation" },
      { label: "Design load", value: "~220 lb (1.5 safety factor)" }
    ],
    sections: [
      { heading: "Overview",
        text: ["Cal Poly ME 328 Design for Strength and Stiffness · Team design project, Winter 2026. Design a scooter that is simple, affordable and buildable from readily available materials, carries an adult rider pushed from behind, fits through a standard doorway, and steers directly by hand or foot. All load-bearing joints had to use structural materials, not 3D-printed parts."] },
      { heading: "My Contribution",
        list: [
          "Designed and built a rideable PVC-frame vehicle to a 220 lb design load, evaluating three load cases including a curb-impact abuse case.",
          "Ran SolidWorks Simulation FEA against hand calculations to locate the peak von Mises stress at the four-way steering joint, along with other high-stress locations to design around.",
          "Built the test setup and measured deflection on the finished frame.",
          "Troubleshot a joint failure at a location neither analysis had flagged, traced it to a support truss removed during fabrication and adhesive applied for only one load direction, and corrected the assembly."
        ] },
      { heading: "Design & Analysis",
        list: [
          "Applied a 1.5 safety factor to a 155 lb rider for a design load of about 220 lb.",
          "Used hand calculations with simplified beam models to size members and find critical regions.",
          "Ran SolidWorks FEA for three load cases: rider weight (seated and standing), combined rider weight and push force, and a curb-drop impact case.",
          "Identified the four-way joint connecting the steering to the main frame as the most highly stressed region."
        ] },
      { heading: "Result",
        text: ["We machined the steering cross-joint for free rotation, mounted the swivel wheels on wood blocks, and bonded the frame with PVC cement. Measured deflections under known loads were slightly larger than FEA predicted (0.2 in versus 0.065 in at the push bar). We traced the difference to a support truss removed during the build and to slightly different pipe sizes.",
               "During initial testing, the seat joint failed when the scooter was pulled rather than pushed, because only the joints expected to carry pushing loads had been glued. We reinforced the joints and the scooter ran reliably afterwards."] },
      { heading: "What I Learned",
        list: [
          "Keep the analysis model in step with the build: removing the truss changed the load paths in ways the FEA never saw.",
          "Joints are usually the weak point. Bonded PVC connections, not the pipe itself, decided how the frame behaved, and a joint we never analyzed was the one that failed.",
          "Design for every load case, including misuse: the scooter failed when pulled instead of pushed, a case we hadn't designed the joints for.",
          "Planning manufacturing details (joints, wheel mounts and seating) early makes the simulation a much closer match to the finished prototype."
        ] }
    ],
    images: [
      { src: "images/scooter-build.jpg", caption: "Completed prototype", photo: true },
      { src: "images/scooter-fea.png", caption: "FEA: axial and bending stress under combined load" },
      { src: "images/scooter-cad.png", caption: "SolidWorks frame model" },
      { src: "images/scooter-hand-calcs.jpg", caption: "Initial hand calculations: weight load case" }
    ]
  },

  {
    id: "bottling-station",
    title: "Bottling Station & Geneva Drive",
    category: "CAD & motion",
    year: "Winter 2025",
    summary: "A five-station indexing turntable driven by a Geneva mechanism, modeled in SolidWorks with a motion study and drawings.",
    cover: "images/bottling-assembly.png",
    coverFit: "contain",
    lede: "A SolidWorks assembly of a bottling station in which a Geneva drive turns continuous rotation into precise intermittent indexing of a five-position turntable.",
    facts: [
      { label: "Course", value: "ME 251, Cal Poly" },
      { label: "Type", value: "Individual" },
      { label: "Tools", value: "SolidWorks assembly & motion study" },
      { label: "Indexing", value: "5 stations × 72°" }
    ],
    sections: [
      { heading: "Overview",
        text: ["Cal Poly ME 251 · Individual project, Winter 2025. A Geneva mechanism converts the constant rotation of a drive wheel into stop-and-go motion: each turn of the drive pin advances the slotted wheel exactly one position, then locks it in place while the station works. Here, the five-slot Geneva wheel indexes a turntable carrying five bottles at 72° intervals."] },
      { heading: "My Contribution",
        list: [
          "Modeled the parts and assembled them with mates that reproduce the real mechanism's motion.",
          "Ran a motion study to verify the indexing and check for interference.",
          "Produced an assembly drawing (top, front and pictorial views) and a fully dimensioned detail drawing of the Geneva wheel."
        ] },
      { heading: "What I Learned",
        list: [
          "How a Geneva drive turns continuous rotation into precise, repeatable indexing, and why the slot count sets the index angle (five slots, 72°).",
          "Building an assembly with mates that mirror the real mechanism makes the motion study meaningful: if the model moves correctly, the design intent is captured.",
          "A motion study is a quick, cheap way to catch timing and interference problems before anything is built."
        ] }
    ],
    video: { src: "files/bottling-station-motion.mp4", caption: "SolidWorks motion study of the indexing assembly" },
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
    summary: "Hands-on shop work: a custom casting programmed in Mastercam, plus milling, lathe work and welding.",
    cover: "images/mfg-engine.jpg",
    lede: "Parts I made in Cal Poly's manufacturing courses, where I used Mastercam to produce a custom casting and became comfortable on the mill, the lathe and the welding bench.",
    facts: [
      { label: "Courses", value: "Subtractive Manufacturing, Materials Joining (Welding), Casting" },
      { label: "Type", value: "Individual" },
      { label: "Tools", value: "Mastercam, mill, lathe, welding" }
    ],
    sections: [
      { heading: "Overview",
        text: ["Cal Poly manufacturing courses · Individual work, 2025. Taking a part from raw stock to a finished piece teaches things CAD alone can't: why tight tolerances cost time, how a part is held while it's machined, and what each process can realistically achieve."] },
      { heading: "What I Made",
        list: [
          "Custom casting: a casting of my own, produced using Mastercam.",
          "Engine assembly: a cast housing with turned aluminum and brass components and a flywheel, assembled on a wood base.",
          "Screwdriver: a machined aluminum handle with an engraved logo and a set-screw bit holder.",
          "Casting: an aluminum Mustang head poured from a pattern.",
          "Welding: joints on steel plate."
        ] },
      { heading: "What I Learned",
        list: [
          "Using Mastercam showed me how a CAD model becomes toolpaths, and how tool choice, cut order and setup decide whether a part can actually be made.",
          "Working on the mill and lathe made tolerances real: every extra decimal place on a drawing means more time, more care and more inspection.",
          "Casting and welding taught me to design for the process, for example how a part is filled, cooled, fixtured and joined, rather than expecting the process to fit the design.",
          "Hands-on shop experience makes me a better designer, because I now think about how a part will be held, cut and checked while I'm still in CAD."
        ] }
    ],
    images: [
      { src: "images/mfg-engine.jpg", caption: "Engine assembly", photo: true },
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
    summary: "Part and assembly drawings with datum schemes, positional tolerances at MMC, weld callouts and tapped features.",
    cover: "images/shifter-assembly.png",
    coverFit: "contain",
    lede: "A three-part aluminum shifter fork documented through production-style part and assembly drawings using geometric dimensioning and tolerancing.",
    facts: [
      { label: "Course", value: "ME 251, Cal Poly" },
      { label: "Type", value: "Individual" },
      { label: "Tools", value: "SolidWorks drawings" },
      { label: "Material", value: "6061-T6 aluminum" }
    ],
    sections: [
      { heading: "Overview",
        text: ["Cal Poly ME 251 · Individual project, Winter 2025. The assembly consists of a circular base, an upper fork and a lower fork. The drawings define how each part is made and how the parts come together, so a machinist could produce and inspect them without asking questions."] },
      { heading: "Design & Analysis",
        list: [
          "A datum reference frame (A, B, C) tied to the functional surfaces of each part.",
          "Position tolerances at maximum material condition for holes and slots, plus profile and parallelism controls.",
          "Section and detail views to show internal geometry clearly.",
          "An assembly drawing with a bill of materials, fillet weld symbols, and 1/4-20 tapped holes."
        ] },
      { heading: "What I Learned",
        list: [
          "Datums should come from how a part functions and is inspected, not just from convenient edges.",
          "Tolerancing at maximum material condition gives the manufacturer bonus tolerance while still guaranteeing that the parts assemble.",
          "A drawing is a contract: every dimension and callout has to be unambiguous, because the machinist and inspector can't ask the designer what they meant."
        ] }
    ],
    images: [
      { src: "images/shifter-assembly.png", caption: "Assembly drawing with weld callouts and BOM" },
      { src: "images/shifter-parts.png", caption: "Part drawings: shaft body, upper fork and lower fork" }
    ],
    downloads: [ { label: "Drawings (PDF)", href: "files/shifter-fork-drawings.pdf" } ]
  },

  {
    id: "eagle-project",
    title: "Eagle Scout Project: Flagpole Planter & Campus Improvements",
    category: "Leadership & build",
    year: "2022",
    summary: "Planned and led the build of a custom planter box around my former K–8 school's flagpole, designed to keep a sewer cleanout accessible, plus other campus improvements.",
    cover: "images/eagle-planter-finished.jpg",
    facts: [
      { label: "Type", value: "Eagle Scout service project, 2022" },
      { label: "Role", value: "Project leader" },
      { label: "Service", value: "400 hours of community service" },
      { label: "Partner", value: "My former K–8 school" }
    ],
    sections: [
      { heading: "Overview",
        text: ["For my Eagle Scout project, I worked with my former kindergarten through 8th grade school to improve a worn area of the campus around the flagpole. The main piece was a quality planter box built around the flagpole base. It also had to keep a sewer cleanout pipe beside the pole accessible for maintenance. Alongside the planter, we completed other beautification work around the school, including sanding and refinishing existing wooden planters."] },
      { heading: "My Contribution",
        list: [
          "Coordinated with the school to agree on the scope, the design and the schedule for the work.",
          "Laid out the planter footprint on site around the flagpole and the sewer cleanout.",
          "Planned the materials and work days, and led a team of volunteers through the build and the finishing work.",
          "Saw the project through from the first site visit to the finished, planted box."
        ] },
      { heading: "Result",
        text: ["The finished planter is a solid, stained wood box filled with succulents and flowers. It turned a bare concrete pole base into a feature of the courtyard while still leaving maintenance access to the cleanout. The refinished planters around the campus gave the school a cleaner, cared-for look."] },
      { heading: "What I Learned",
        list: [
          "Real projects come with existing constraints: designing around the sewer cleanout meant the planter had to work for the maintenance staff, not just look good.",
          "Coordinating with a client (here, the school) means agreeing on expectations early and keeping them informed as plans change.",
          "Leading volunteers takes preparation: having tools, materials and clear tasks ready makes a work day productive and safe.",
          "Taking a project from a chalk outline to a finished build gave me a real appreciation for planning, measuring twice and finishing work properly."
        ] }
    ],
    images: [
      { src: "images/eagle-planter-finished.jpg", caption: "Finished planter around the flagpole", photo: true },
      { src: "images/eagle-before.jpg", caption: "Before: the flagpole base", photo: true },
      { src: "images/eagle-layout.jpg", caption: "Chalk layout of the planter footprint around the sewer cleanout", photo: true },
      { src: "images/eagle-volunteers.jpg", caption: "Volunteers sanding and refinishing existing planters", photo: true },
      { src: "images/eagle-planter-day.jpg", caption: "Completed planter, planted with succulents", photo: true }
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
