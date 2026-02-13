export const content = {
    name: "Dongdong Liu",
    title: "Ph.D. in Humanoid Robotics | Robotics Expert at Apple",
    avatar: "/img/avatar.jpg",
    email: "ddliu@nyu.edu",
    phone: "(408) 205-2021",
    location: "Mountain View, CA",
    socials: {
        scholar: "https://scholar.google.com/citations?user=pfaSYhsAAAAJ&hl=en",
        github: "https://github.com/ddliu365",
        linkedin: "https://www.linkedin.com/in/dongdong-liu-367642128/"
    },
    lastUpdated: "February 2026",
    bio: [
        "I am a Ph.D. in Humanoid Robotics from **[New York University](https://www.nyu.edu)** with 3.5 years of industrial R&D experience at **[Apple](https://www.apple.com)**. My expertise lies in **Whole-Body Control (WBC), MPC, and Sim-to-Real transfer** for high-DoF manipulators and humanoids.",
        "Currently, I spearhead the technical strategy for a scalable Robotic HIL Simulation System at Apple, enabling cross-functional scientific teams to engineer and validate novel health algorithms.",
        "Previously, I launched a new humanoid research line at NYU's **[Mechatronics, Controls, and Robotics Laboratory (MCRL)](https://mechatronics.engineering.nyu.edu)** and founded the **[NYU Legged Group](https://nyu-legged-group.github.io/people/)**."
    ],
    skills: {
        robotics: ["ROS 1 & 2", "Bullet/MuJoCo", "Isaac Lab", "Motion Planning", "Reinforcement/Imitation Learning", "Whole-Body Control", "MPC"],
        programming: ["C/C++", "Python", "OpenCV", "Matlab", "Linux", "Unix", "C#"],
        mechatronics: ["System Design", "Embedded Systems", "Sensors & Actuators", "PCB Design"]
    },
    experience: [
        {
            company: "Apple",
            role: "Robotics Engineer",
            period: "08/2022 - Present",
            location: "Cupertino, CA",
            description: [
                "Spearheaded the technical strategy for a scalable Robotic HIL Simulation System.",
                "Developed a customized QP optimization solver to map human motion to industrial robots.",
                "Implemented and deployed a pipeline on physical robot systems with a real-time kernel for precise motion tracking.",
                "Built a robotics lab from the ground up, integrating four industrial robots and architecting the software infrastructure for scalable R&D.",
                "Formulated rigorous motion signal validation and curation standards, leading high-fidelity large-scale data collection efforts.",
                "Developed end-to-end automation pipelines for features released in 2023, 2024, and 2025 across watchOS and iOS."
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
                "Programmed 50,000+ lines of code with C# for GUI interfaces and tested the program on-site at UMC Semiconductor.",
                "Proposed a divide-and-conquer strategy, creating an O(n log n) algorithm that reduced calculation time from 8 hours to 40 minutes.",
                "Increased the hit rate from 55% to 100% for the inventory system, saving 15 senior engineers' time for maintenance."
            ]
        }
    ],
    education: [
        {
            university: "Yanshan University",
            degree: "B.E.",
            year: "2013"
        },
        {
            university: "Zhejiang University",
            degree: "M.S.",
            year: "2016"
        },
        {
            university: "New York University",
            degree: "Ph.D.",
            year: "2022"
        }
    ],
    news: [
        {
            date: "Current",
            text: "Currently spearheading the technical strategy for a scalable Robotic HIL Simulation System at Apple for sensor algorithm validation."
        },
        {
            date: "May 2022",
            text: "Successfully defended dissertation and obtained Ph.D. in Robotics from New York University."
        },
        {
            date: "Aug 2021",
            text: "Paper 'A Rollover Strategy for Wrist Damage Reduction in a Forward Falling Humanoid' was a Best Paper Award Finalist at IEEE ICMA."
        }
    ],
    projects: [
        {
            id: "aloha",
            title: "Aloha Repro Project",
            subtitle: "Low-Cost Teleoperation & Imitation Learning Infrastructure",
            description: "Full-stack imitation learning pipeline based on ACT/Diffusion Policy. Deployed and validated on physical hardware.",
            media: "/img/portfolio/aloha.jpg",
            tags: ["Imitation Learning", "Isaac Lab", "Sim-to-Real"],
            featured: true
        },
        {
            id: "vr-teleop",
            title: "VR Teleoperation with Quest & Exoskeleton",
            subtitle: "Immersive High-Frequency Teleoperation System",
            description: "Low-latency teleoperation system using WebRTC/UDP for humanoid robots.",
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
            video: "/video/snac.mp4",
            link: "https://ai4ce.github.io/SNAC/"
        },
        {
            id: "6urs",
            title: "Reconfigurable Parallel Robot",
            subtitle: "Mechanism Design",
            description: "Designed a 6-URS parallel robot that can reconfigure into a walking platform. Replacing serial structures with parallel ones to achieve better stability and load capacity. Completed calculation of motor torque/speed and ADAMS simulations.",
            media: "/img/projects/6urs.png",
            tags: ["Robotics", "Mechanism Design", "ADAMS"],
            video: "/video/parallel_robot.mp4",
            details: `
                ### Design and Development of Automatically Reconfigurable Parallel Walking Robot
                This project abandons the notion that the structure of walking robots is mostly based on serial structures. It presents the idea that a robot with a parallel structure can achieve even better performance while realizing walking functions.
                
                Using a 6-URS parallel structure as the basic architecture of the walking robot, and a serial structure as the basis for a reconfigurable robot, this project completes the calculations for motor torque and speed and selects appropriate motor types.
                
                **Key Achievements:**
                - Designed the parallel and reconfigurable robot device, including mechanical design and gait locomotion.
                - Developed a 6-degree-of-freedom parallel robot and a 5-degree-of-freedom serial robot.
                - Simulated performance, including kinematics and dynamics, using ADAMS.
                
                **Mechanism Logic:**
                1. Lock one rotational degree of freedom in the non-reconfigurable branch.
                2. Detach the spherical joint and free the reconfigurable branch.
                3. Adjust the manipulator's position to grab objects (e.g., minerals).
                4. Deposit the object and re-engage the spherical joint for walking mode.
            `
        },
        {
            id: "hydraulic_control",
            title: "Hydraulic Pressure Control",
            subtitle: "Fuzzy PID Control",
            description: "Structural Design and Experiment with Fuzzy PID Control for the Hydraulic Pressure Control System. Achieved 0.4 bar error stability.",
            media: "/img/projects/hydraulic_control.png",
            tags: ["Control", "Fuzzy PID", "Hydraulics"],
            details: `
                ### Structural Design and Experiment with Fuzzy PID Control
                This research is based on an industrial project aiming to design an on-land experimental device to monitor pressure environments in the deep ocean. The target is to accurately control pressure in a closed chamber full of water using a hydraulic-power system.
                
                **Challenge:**
                The mathematical model of the chamber is difficult to construct, and the system is highly nonlinear. Traditional PID control suffers from high following errors in dynamic states and high overshoot.
                
                **Solution:**
                Proposed a controlling strategy with adjustable parameters in PID based on Fuzzy Logic (Fuzzy PID).
                
                **Results:**
                - **Stable Condition**: Error limited to 0.4 bar.
                - **Dynamic Condition**: System follows control target curves without distortion; error limited to 2.5% FS (10-100 bar).
                - **Comparison**: Fuzzy PID decreases overshoot and settles faster compared to traditional PID.
                
                **Implementation:**
                - Designed mechanical devices, including a pressure-transfer device (using a rubber capsule to separate oil and water).
                - Built the electrical system and communication schematic based on an xPC target-host.
                - Developed a GUI with C# and a controller model with Matlab-Simulink.
            `
        },
    ],
    publications: [
        {
            title: "Whole-Body Optimization of Long-Distance Throw for a Humanoid in Double Support",
            authors: "Dongdong Liu, Yuhang Lin, Alexander Koldy, and Vikram Kapila",
            conference: "IEEE Robotics and Automation Letters (RA-L), Under Review",
            year: "2026",
            links: {}
        },
        {
            title: "Simulation-based Motion Planning for Single-Support Long-Distance Throw in a Humanoid",
            authors: "Dongdong Liu, Yuhang Lin, Jui-Yu Tseng, and Vikram Kapila",
            conference: "Manuscript in preparation",
            year: "2026",
            links: {}
        },
        {
            title: "Spatially covariant image registration with text prompts",
            authors: "Hang Zhang, Xiang Chen, Rongguang Wang, Renjiu Hu, Dongdong Liu, and Guangming Li",
            conference: "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)",
            year: "2024",
            links: {
                pdf: "https://arxiv.org/abs/2311.15607",
                code: "https://github.com/tinymilky/textSCF"
            }
        },
        {
            title: "MemWarp: Discontinuity Preserving Cardiac Registration...",
            authors: "Hang Zhang, Xiang Chen, Renjiu Hu, Dongdong Liu, et al.",
            conference: "MICCAI",
            year: "2024",
            links: {
                pdf: "https://papers.miccai.org/miccai-2024/paper/1764_paper.pdf",
                doi: "https://doi.org/10.1007/978-3-031-72384-1_63",
                code: "https://github.com/tinymilky/Mem-Warp"
            }
        },
        {
            title: "Spatially Covariant Lesion Segmentation",
            authors: "Hang Zhang, Rongguang Wang, Jinwei Zhang, Dongdong Liu, Chao Li, and Jiahao Li",
            conference: "International Joint Conferences on Artificial Intelligence (IJCAI)",
            year: "2023",
            links: {
                pdf: "https://arxiv.org/abs/2301.07895",
                doi: "https://doi.org/10.24963/ijcai.2023/190"
            }
        },
        {
            title: "Analyzing the Outcomes of A Robotics Workshop...",
            authors: "Abhidipta Mallik, Dongdong Liu, and Vikram Kapila",
            conference: "Education and Information Technologies",
            year: "2022",
            links: {
                pdf: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9709379/"
            }
        },
        {
            title: "A Rollover Strategy for Wrist Damage Reduction in a Forward Falling Humanoid",
            authors: "Dongdong Liu, Yuhang Lin, Vikram Kapila",
            conference: "IEEE International Conference on Mechatronics and Automation (ICMA)",
            year: "2021",
            links: {
                pdf: "https://ieeexplore.ieee.org/document/9512722"
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
        }
    ],
    honors: [
        "National Science Foundation (NSF) PhD Scholarship, New York University",
        "National Scholarship, Ministry of Education of China",
        "International “Internet+” Innovation and Entrepreneurship Competition, Gold, Ministry of Education of China",
        "IEEE Int. Conf. on Mechatronics and Automation (ICMA) Best Paper Award Finalist, IEEE"
    ],
    reviewer: [
        { name: "IEEE Transactions on Cognitive and Developmental Systems", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7274989" },
        { name: "International Journal of Humanoid Robotics", url: "https://www.worldscientific.com/worldscinet/ijhr" },
        { name: "Conference on Neural Information Processing Systems (NeurIPS)", url: "https://neurips.cc/" },
        { name: "IEEE/ASME Transactions on Mechatronics", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=3516" },
        { name: "Journal of Mechanisms and Robotics", url: "https://asmedigitalcollection.asme.org/mechanismsrobotics" },
        { name: "The IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)", url: "https://www.ieee-iros.org/" },
        { name: "IEEE Robotics and Automation Letters (RA-L)", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7083534" }
    ],
    teaching: [
        {
            role: "Instructor",
            course: "NYU Tandon Robotics Summer Program",
            period: "2018, 2019"
        }
    ]
};
