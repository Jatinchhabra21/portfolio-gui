const { REACT_APP_RESUME_DRIVE_ID } = process.env;
export const resume = {
    name: 'Jatin Chhabra',
    email: 'cjatin2822@gmail.com',
    Phone: '+919027310299',
    address: 'New Delhi, India',
    resumeDriveLinkCode:
        REACT_APP_RESUME_DRIVE_ID,
    dob: {
        month: 'November',
        year: '2001',
        date: 21,
    },
    links: {
        github: 'https://github.com/jatinchhabra21',
        facebook: '',
        linkedIn: 'https://www.linkedin.com/in/jatinchhabra21',
        instagram: '',
    },
    headline: 'Dotnet Developer',
    jobName: 'Dotnet Developer',
    bio: 'I\'m a passionate .NET developer with experience in designing and developing scalable, high-performance REST APIs. With a strong foundation in Git and version control, I thrive in collaborative environments where clean, maintainable code is a priority.',
    //description must be less than or equal to 100 characters
    education: [
        {
            year: '2019 - 2023',
            name: "B.Tech Computer Science",
            affiliation: 'Lovely Professional University',
            description:
                '',
        },
    ],
    //description must be less than or equal to 100 characters
    experience: [
        {
            year: '2024 - Present',
            name: 'HashedIn By Deloitte',
            affiliation: 'IT Company',
            description: ''
        },
        {
            year: '2022 - 2024',
            name: 'MAQ Software',
            affiliation: 'IT Company',
            description: '',
        },
    ],
    skills: {
        primary: [
            {
                name: '.NET Core',
                score: 90
            },
            {
                name: 'C#',
                score: 90
            },
            {
                name: 'Microsoft Azure',
                score: 80
            },
            {
                name: 'ASP.NET Web API',
                score: 90
            },
            {
                name: 'SQL Server',
                score: 80,
            },
            {
                name: 'Git',
                score: 90
            }

        ],
        secondary: [
            {
                name: 'ReactJS',
                score: 70,
            },
            {
                name: 'Javascript',
                score: 70,
            },
            {
                name: 'HTML5 & CSS3',
                score: 80,
            },
            {
                name: 'Redux',
                score: 70,
            },
            {
                name: 'Rust',
                score: 60
            }
        ],
    },
    platforms: [
        'Visual Studio',
        'Visual Studio Code',
        'Git',
        'GitHub',
        'Azure DevOps',
        'Vim',
        'Neovim',
        'Arch Linux'
    ],
    projects: [
        {
            name: 'EmbedFAST',
            link: 'https://maqsoftware.com/embedFAST.html',
        },
        {
            name: 'Kafka Broker Implementation in Rust',
            link: 'https://github.com/Jatinchhabra21/codecrafters-kafka-rust',
        },
        {
            name: 'Terminartor',
            link: 'https://github.com/Jatinchhabra21/terminartor',
        },
        {
            name: 'Quizzical',
            link: 'https://legendary-stardust-005cad.netlify.app/',
        },
    ],
    //hireMeHeader example: "I'm <span>open</span> to work!", use span for focusing texts
    hireMeHeader: "I'm <span>open</span> to work!",
};
