import GithubIcon from './assets/social/GitHub.svg'
import LinkedinIcon from './assets/social/LinkedIn.svg'
import MediumIcon from './assets/social/Medium.svg'
import FacebookIcon from './assets/social/Facebook.svg'

const intro = {
    name: "Sushil Gupta",
    shortTitle: "A passionate Android & Web Developer",
    description: "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Java and some other cool libraries and frameworks.",
}

const whatIDo = {
    education: "B.E Computer Engineering",
    location: "Mumbai, Maharashtra, India",
    aboutTitle: "Crazy Full Stack Developer Who Wants to Explore Every Tech Stack",
    whatIDoDescription: "~  Develop highly interactive Front end / User Interfaces for your web and mobile applications <br></br>~  Progressive Web Applications ( PWA ) in normal and SPA Stacks <br></br>~  Integration of third party services such as Firebase/ AWS / Digital Ocean..",
}

const experiences = [
    {
        companyName: "GetBoarded Technologies Lda",
        location: "Portugal, Remote",
        logo: "https://media.licdn.com/dms/image/C4D0BAQFDXGNQT2FnVw/company-logo_200_200/0/1620050620599?e=1704326400&v=beta&t=TPRTwLcWmjZhyi6zenSk-Xs0e6qCO8R5xML2svrI5YQ",
        career: [
            {
                role: "Full Stack Engineer",
                duration: "4 Months",
                employmentType: "Full-Time",
                fromDate: "July 2023",
                toDate: "Present",
                description: [
                    "Enhancing core web conferencing products using Docker for efficient deployment and implementing horizontal scaling for increased demand.",
                    "Proficient in creating engaging user interfaces, leading a front-end revamp to improve cross-device user experiences.",
                    "Active contributor within cross-functional teams, excelling in agile processes, troubleshooting, and staying updated with emerging technologies.",
                ],
            },
        ],
    },
    {
        companyName: "Arbunize",
        location: "Delhi, Remote",
        logo: "https://seeklogo.com/images/A/arbunize-logo-9F8A140E58-seeklogo.com.png",
        career: [
            {
                role: "Full Stack Developer",
                duration: "1 Year",
                employmentType: "Part-Time",
                fromDate: "Aug 2022",
                toDate: "Jul 2023",
                description: [
                    "Design and re-develop public-facing platform (front-end + services) utilizing HTML, CSS, JavaScript, and React.js.",
                ],
            },
            {
                role: "Application Developer",
                duration: "6 Months",
                employmentType: "Internship",
                fromDate: "Feb 2022",
                toDate: "Jul 2022",
                description: [
                    "Proficiently managed user-reported issues, and conducted regression unit testing to ensure the platform’s optimal performance.",
                ],
            }
        ],
    },
    {
        companyName: "MissionEd",
        location: "Kolkata, Remote",
        logo: "https://media.licdn.com/dms/image/C4E0BAQFCG7lsaKE3OA/company-logo_200_200/0/1594900264723?e=2147483647&v=beta&t=Dye9t0L4Y6fs2cNB7T58Dox_87WqfWL3lIxk9SDjNiU",
        career: [
            {
                role: "ReactJS Web Developer",
                duration: "5 Months",
                employmentType: "Internship",
                fromDate: "Aug 2021",
                toDate: "Dec 2021",
                description: [
                    "Developed reusable components utilizing ReactJS while enhancing state management.",
                    "Built an admin panel for facilitating online tests and significantly improved test creation speed, achieving a 10x increase in efficiency. Acquired practical experience working with ReactJS, including Redux, Hooks, and Flux.",
                ],
            },
        ],
    },
]

const socialIcons = [
    {
        id: "github",
        name: "GitHub",
        color: "#333333",
        image: GithubIcon,
        link: "https://www.google.com/",
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        color: "#0072B1",
        image: LinkedinIcon,
        link: "https://www.google.com/",
    },
    {
        id: "medium",
        name: "Medium",
        color: "#000000",
        image: MediumIcon,
        link: "https://www.google.com/",
    },
    {
        id: "facebook",
        name: "Facebook",
        color: "#4267B2",
        image: FacebookIcon,
        link: "https://www.google.com/",
    },
]

const projects = [
    {
        name: "Portfolio",
        image: "https://res.cloudinary.com/ddktczzsr/image/upload/v1625035722/portfolio_pfs9ju.jpg",
        type: "Web Application",
        techStack: "ReactJS Firebase",
        sourceCode: "https://github.com/skgupta77159/",
        demoLink: "https://skgupta77159.github.io/",
        shortDescription: "My beautiful portfolio build using Reactjs and SASS",
    },
    {
        name: "MyCourses",
        image: "https://res.cloudinary.com/ddktczzsr/image/upload/v1625035722/MyCourses-banner_tspd4z.jpg",
        type: "Android App",
        techStack: "Java Firebase AndroidStudio",
        sourceCode: "https://github.com/skgupta77159/MyCourses-App",
        demoLink: "https://drive.google.com/file/d/1DQHAKzjwdxySw0hvn0UTYVFav9Db4n5B/view?usp=sharing",
        shortDescription: "Free programming video lectures App for Absolute Beginner student.",
    },
    {
        name: "TernaLogin",
        image: "https://res.cloudinary.com/ddktczzsr/image/upload/v1625035722/TernaLogin-banner_u7qp2t.jpg",
        type: "Android App",
        techStack: "Java Firebase AndroidStudio",
        sourceCode: "https://github.com/skgupta77159/TernaLogin",
        demoLink: "https://drive.google.com/file/d/1DQHAKzjwdxySw0hvn0UTYVFav9Db4n5B/view?usp=sharing",
        shortDescription: "TernaLogin is a Attendance system App which help faculty to take, manage and analyse student Attendance.",
    },
]

const certificates = [
    {
        title: "Linux",
        image: "https://res.cloudinary.com/ddktczzsr/image/upload/v1696431250/webp%20files/Sushil_KumarGupta-NDG_Linux_Essent-certificate_zzt5z9_lij0ru.webp",
    },
    {
        title: "AWS",
        image: "https://res.cloudinary.com/ddktczzsr/image/upload/v1696431250/webp%20files/Coursera_NVYJUA6PNKJ9_msco9s_jmxpyb.webp",
    },
    {
        title: "Google",
        image: "https://res.cloudinary.com/ddktczzsr/image/upload/v1696431250/webp%20files/javascript_hmeymr_zxuif3.webp",
    },
    {
        title: "tcs",
        image: "https://res.cloudinary.com/ddktczzsr/image/upload/v1696431250/webp%20files/tcs_w1wnno_pdmj8b.webp",
    },
]

export { intro, socialIcons, whatIDo, experiences, projects, certificates }