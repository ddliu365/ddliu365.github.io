export const content = {
    name: "Dongdong Liu",
    title: "Ph.D. in Robotics | Robotics Engineer at Apple",
    avatar: "/img/avatar.jpg",
    email: "ddliu@nyu.edu",
    phone: "(408) 205-2021",
    location: "Mountain View, CA",
    socials: {
        scholar: "https://scholar.google.com/citations?user=pfaSYhsAAAAJ&hl=en",
        github: "https://github.com/ddliu365",
        linkedin: "https://www.linkedin.com/in/dongdong-liu-367642128/",
        twitter: "https://twitter.com/ddliu365"
    },
    bio: [
        "I am a Ph.D. in Robotics with 3.5 years of industrial R&D experience at Apple. My expertise lies in **Whole-Body Control (WBC), MPC, and Sim-to-Real transfer** for high-DoF manipulators and humanoids.",
        "Currently, I spearhead the technical strategy for a scalable Robotic HIL Simulation System at Apple, enabling cross-functional scientific teams to engineer and validate novel health algorithms.",
        "Previously, I launched a new humanoid research line at NYU's Mechatronics, Controls, and Robotics Laboratory (MCRL) and founded the **NYU Legged Group**."
    ],
    skills: {
        robotics: ["ROS 1 & 2", "Bullet/MuJoCo", "Isaac Lab", "Motion Planning", "Reinforcement/Imitation Learning", "Whole-Body Control", "MPC"],
        programming: ["C/C++", "Python", "OpenCV", "Matlab", "Linux", "Unix", "C#"],
        mechatronics: ["System Design", "Embedded Systems", "Sensors & Actuators", "PCB Design"]
    },
    experience: [
        {
            company: "Apple",
            role: "Software Development Engineer",
            period: "08/2022 - Present",
            location: "Cupertino, CA",
            description: [
                "Spearheaded the technical strategy for a scalable Robotic HIL Simulation System, leading a team of Senior/Staff engineers to architect the infrastructure for sensor algorithm validation.",
                "Developed a customized QP optimization solver to map human motion to industrial robot.",
                "Implemented/Deployed a pipeline on robot physical system with real-time kernel for precise motion tracking across orgs.",
                "Built a robotics lab from the ground up, integrating 4 industrial robots and architecting the software infra for scalable R&D.",
                "Formulated rigorous motion signal validation/curation standards and led high-fidelity large-scale data collection efforts.",
                "Developed end-to-end automation pipelines for released 2023, 2024 & 2025 fitness & health features on watchOS, iOS."
            ]
        },
        {
            company: "New York University",
            role: "Research Assistant (NASA & NSF funded)",
            period: "01/2018 - 05/2022",
            location: "New York, NY",
            description: [
                "Launched a new humanoid research line from scratch in NYU MCRL. Founded and guided a 14-person multi-disciplinary robotics research group--NYU Legged Group.",
                "Applied and refined differential dynamic programming (DDP) algorithm on a humanoid robot for whole-body motion planning.",
                "Proposed and implemented a real-time embedded controller based on ROS using C++ for online whole-body motion balance control.",
                "Validated planner and controller in repetitious physical experiments (high speed landing, rollover, throwing)."
            ]
        },
        {
            company: "Nanyang Technological University",
            role: "Research Assistant",
            period: "07/2016 - 12/2017",
            location: "Singapore",
            description: [
                "Programmed 50,000+ lines of codes with C# for GUI interface and tested the program on site at UMC Semiconductor.",
                "Proposed a divide-and-conquer strategy creating an O(n log n) algorithm, reducing calculation time from 8 hours to 40 minutes.",
                "Increased hit rate from 55% to 100% for the inventory system, saving 15 senior engineers for maintenance."
            ]
        }
    ],
    news: [
        {
            date: "Current",
            text: "Working on Generalist Embodied Agent research at Apple, focusing on large-scale data collection and sim-to-real transfer."
        },
        {
            date: "Aug 2021",
            text: "Paper 'A Rollover Strategy for Wrist Damage Reduction in a Forward Falling Humanoid' accepted to IEEE ICMA."
        }
    ],
    projects: [
        {
            id: "aloha",
            title: "The Aloha Project",
            subtitle: "Low-Cost Teleoperation & Imitation Learning Infrastructure",
            description: "Full-stack imitation learning pipeline based on ACT/Diffusion Policy. (Content coming soon)",
            media: "/img/portfolio/aloha.jpg",
            tags: ["Imitation Learning", "Isaac Lab", "Sim-to-Real"],
            featured: true
        },
        {
            id: "vr-teleop",
            title: "VR Teleoperation with Quest & Exoskeleton",
            subtitle: "Immersive High-Frequency Teleoperation System",
            description: "Low-latency teleoperation system using WebRTC/UDP. (Content coming soon)",
            media: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=800", // Generic Placeholder
            tags: ["Teleoperation", "WebRTC", "Whole-Body Control"],
            featured: true
        },
        {
            id: "rollover",
            title: "Humanoid Rollover",
            subtitle: "Wrist Damage Reduction Strategy",
            description: "A Rollover Strategy for Wrist Damage Reduction in a Forward Falling Humanoid. DDP-based optimization for safe falling.",
            media: "/img/projects/rollover.gif",
            tags: ["Control", "Robotics", "DDP"],
            link: "https://nyu-legged-group.github.io/Rollover/"
        },
        {
            id: "double_throw",
            title: "Humanoid Double-Support Throw",
            subtitle: "Whole-Body Optimization",
            description: "Whole-Body Optimization of Long-Distance Throw for a Humanoid in Double Support.",
            media: "/img/portfolio/double_throw.gif",
            tags: ["Control", "Robotics", "WBC"],
            link: "https://nyu-legged-group.github.io/throw"
        },
        {
            id: "forecast",
            title: "Humanoid Forecast",
            subtitle: "Fall Prediction with LSTM",
            description: "Bidirectional LSTM-based Network for Fall Prediction in a Humanoid. Improved FPR and lead time for fall prediction.",
            media: "/img/projects/forecast.gif",
            tags: ["Learning", "Robotics", "LSTM"]
        },
        {
            id: "landing",
            title: "Humanoid Landing",
            subtitle: "DDP-based Optimization",
            description: "DDP-based Parachute Landing Optimization for a Humanoid.",
            media: "/img/portfolio/landing.gif",
            tags: ["Robotics", "Control", "DDP"]
        },
        {
            id: "snac",
            title: "SNAC",
            subtitle: "Navigation Benchmarking",
            description: "Simultaneous Navigation and Construction Benchmarking Environments.",
            media: "/img/projects/snac.jpg",
            tags: ["Learning", "Navigation"],
            link: "https://ai4ce.github.io/SNAC/"
        },
        {
            id: "6urs",
            title: "Reconfigurable Parallel Robot",
            subtitle: "Mechanism Design",
            description: "Designed a 6-URS parallel robot that can reconfigure into a walking platform. Replacing serial structures with parallel ones to achieve better stability and load capacity. Completed calculation of motor torque/speed and ADAMS simulations.",
            media: "/img/projects/6urs.png",
            tags: ["Robotics", "Mechanism Design", "ADAMS"],
            details: `
                ### Design and Development of Automatically Reconfigurable Parallel Walking Robot
                This project abandons the notion that the structure of the walking robot is mostly based on the serial structure. It presents the idea that a robot with parallel structure can get even better performance while realizing the walking function.
                
                Using 6-URS parallel structure as the basic structure of the walking robot, and serial structure as the basis for a reconfigurable robot, this project completes the calculation of the motor torque, speed, and selects appropriate motor types.
                
                **Key Achievements:**
                - Designed the Parallel and Reconfigurable Robot Device including mechanical and gait locomotion design.
                - Developed 6 degrees of freedom Parallel Robot and 5 degrees of freedom Serial Robot.
                - Simulated performances including kinematics and dynamics with ADAMS.
                
                **Mechanism Logic:**
                1. Lock one freedom of rotation joint in non-reconfigurable branch.
                2. Detach the sphere joint and free the reconfigurable branch.
                3. Adjust manipulator position to grab objects (e.g., minerals).
                4. Deposit object and re-engage sphere joint for walking mode.
            `
        },
        {
            id: "hydraulic_control",
            title: "Hydraulic Pressure Control",
            subtitle: "Fuzzy-PID Control",
            description: "Structural Design and Experiment with Fuzzy-PID Control for the Hydraulic Pressure Control System. Achieved 0.4 bar error stability.",
            media: "/img/projects/hydraulic_control.png",
            tags: ["Control", "Fuzzy-PID", "Hydraulics"],
            details: `
                ### Structural Design and Experiment with Fuzzy-PID Control
                This research is based on an industrial project aiming to design an on-land experimental device to monitor pressure environments in deep ocean. The target is to accurately control pressure in a closed chamber full of water using a hydraulic-power system.
                
                **Challenge:**
                The mathematical model of the chamber is difficult to construct, and the system is highly nonlinear. Traditional PID control suffers from high following errors in dynamic states and high overshoot.
                
                **Solution:**
                Proposed a controlling strategy with adjustable parameters in PID based on Fuzzy Logic (Fuzzy-PID).
                
                **Results:**
                - **Stable Condition**: Error limited to 0.4 bar.
                - **Dynamic Condition**: System follows control target curve without distortion; error limited to 2.5% FS (10-100bar).
                - **Comparison**: Fuzzy-PID decreases overshoot and settles faster compared to traditional PID.
                
                **Implementation:**
                - Designed mechanical device including pressure-transfer device (using rubber capsule to separate oil and water).
                - Built Electric System and Communication Schematic based on xPC target-host.
                - Developed GUI with C# and controller model with Matlab-Simulink.
            `
        },
        {
            id: "fruit_robot",
            title: "Fruit Picking Robot",
            subtitle: "Smart Robot Car",
            description: "Hardware Development and Programming of Smart Fruit Picking Robot Car. Implemented using MCS-51 microcontroller for car movement and manipulator control. Won 3rd prize in Smart-Car Contest.",
            media: "/img/projects/fruit_robot.jpeg",
            tags: ["Control", "Robotics", "System Design"],
            details: `
                ### Hardware Development and Programming of Smart Fruit Picking Robot Car
                Due to the complexity of fruit picking, automation is traditionally difficult. This project realizes automatic fruit picking, including manipulator design and control system implementation.
                
                **Key Features:**
                - **Controller**: Single chip MCS-51 used to control car movement and manipulators.
                - **Functions**: Dodge barriers, Follow traces, Pick an apple.
                - **Mechanical Design**: Car Body Design, Work Space Analysis, Robot Arm Design.
                - **Electrical Design**: Motor Driven Schematic, Circuit Design.
                
                This project involved full hardware assembly and low-level programming to coordinate the mobile base with the manipulation arm.
            `
        },
        {
            id: "sphere_joint",
            title: "Sphere Joint Mechanism",
            subtitle: "Hardware Development",
            description: "Hardware Development and Control of Novel Sphere Joint Mechanism.",
            media: "/img/projects/sphere_joint.jpg",
            tags: ["Robotics", "Hardware"]
        }
    ],
    publications: [
        {
            title: "Spatially covariant image registration with text prompts",
            authors: "Hang Zhang, Xiang Chen, Rongguang Wang, Renjiu Hu, Dongdong Liu, and Guangming Li",
            conference: "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)",
            year: "2024",
            status: "Published"
        },
        {
            title: "Whole-Body Optimization of Long-Distance Throw for a Humanoid in Double Support",
            authors: "Dongdong Liu, Yuhang Lin, Alexander Koldy, and Vikram Kapila",
            conference: "IEEE Robotics and Automation Letters (RA-L), Under Review",
            year: "2025"
        },
        {
            title: "Simulation-based Motion Planning for Single-Support Long-Distance Throw in a Humanoid",
            authors: "Dongdong Liu, Yuhang Lin, Jui-Yu Tseng, and Vikram Kapila",
            conference: "Manuscript in preparation",
            year: "2025"
        },
        {
            title: "A Rollover Strategy for Wrist Damage Reduction in a Forward Falling Humanoid",
            authors: "Dongdong Liu, Yuhang Lin, Vikram Kapila",
            conference: "IEEE International Conference on Mechatronics and Automation (ICMA)",
            year: "2021",
            links: {
                pdf: "https://ieeexplore.ieee.org/document/9512722",
                video: "https://www.youtube.com/watch?v=Vu0_0Rl1qzQ",
                project: "/project/rollover/"
            }
        },
        {
            title: "Bidirectional LSTM-based Network for Fall Prediction in a Humanoid",
            authors: "Dongdong Liu, Hoon Jeong, Aoxue Wei, and Vikram Kapila",
            conference: "IEEE-RAS International Symposium on Safety, Security, and Rescue Robotics (SSRR)",
            year: "2020",
            links: { pdf: "https://ieeexplore.ieee.org/document/9292620" }
        },
        {
            title: "DDP-based Parachute Landing Optimization for a Humanoid",
            authors: "Dongdong Liu, Yang Liu, Yifan Xing, Shramana Ghosh, and Vikram Kapila",
            conference: "IEEE-RAS International Symposium on Safety, Security, and Rescue Robotics (SSRR)",
            year: "2020",
            links: { pdf: "https://ieeexplore.ieee.org/document/9292623" }
        },
        {
            title: "Analyzing the Outcomes of A Robotics Workshop...",
            authors: "Abhidipta Mallik, Dongdong Liu, and Vikram Kapila",
            conference: "Education and Information Technologies",
            year: "2022"
        },
        {
            title: "Spatially Covariant Lesion Segmentation",
            authors: "Hang Zhang, Rongguang Wang, Jinwei Zhang, Dongdong Liu, Chao Li, and Jiahao Li",
            conference: "International Joint Conferences on Artificial Intelligence (IJCAI)",
            year: "2023"
        },
        {
            title: "MemWarp: Discontinuity Preserving Cardiac Registration...",
            authors: "Hang Zhang, Xiang Chen, Renjiu Hu, Dongdong Liu, et al.",
            conference: "MICCAI",
            year: "2024"
        }
    ],
    teaching: [
        {
            role: "Instructor",
            course: "NYU Tandon Robotics Summer Program",
            period: "2018, 2019"
        }
    ]
};
