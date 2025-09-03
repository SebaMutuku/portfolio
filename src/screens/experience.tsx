import React from "react";
import {Box, Card, CardContent, Container, Divider, Typography} from "@mui/material";
import Header from "src/components/header";
import {appColors} from "src/constants/constants";

interface ExperienceItem {
    company: string;
    title: string;
    period: string;
    location: string;
    responsibilities: string[];
    achievements?: string[];
}

interface ExperienceSectionProps {
    title: string;
    experiences: ExperienceItem[];
}

const SummarySection = () => {
    const startDate = new Date(2018, 4);
    const today = new Date();
    const experienceYears = ((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(0);

    return (
        <Card
            variant="outlined"
            sx={{
                marginBottom: 4,
                backgroundColor: appColors.card,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "12px",
            }}
        >
            <CardContent sx={{backgroundColor: appColors.primary}}>
                <Typography variant="h5" gutterBottom fontFamily="Josefin Sans" sx={{color: appColors.white}}>
                    Professional Summary
                </Typography>
                <Divider sx={{backgroundColor: appColors.white, marginBottom: 2}}/>
                <Typography variant="body1" fontFamily="Josefin Sans" paragraph sx={{color: appColors.white}}>
                    Senior Software Engineer with over {experienceYears} years of experience specializing in Android and Web Backend development. Proficient in multiple programming languages including Java, Kotlin, Scala, and Python. Experienced in backend frameworks and APIs such as Spring, Spring Boot, Spring Security, Spring Quarkus, and Ktor, with a strong focus on building scalable, secure microservices and web services using REST and SOAP protocols. Skilled in mobile development with expertise in React Native and Flutter for cross-platform Android and iOS apps, as well as native UI development using Jetpack Compose.
                </Typography>
                <Typography variant="body1" fontFamily="Josefin Sans" paragraph sx={{color: appColors.white}}>
                    Deep knowledge of DevOps practices, version control, and CI/CD pipelines, certified in GitHub Actions, and experienced with Git workflows including Microsoft Team Foundation Git. Hands-on experience with containerization and orchestration technologies such as Docker, Podman, Kubernetes, and OpenShift. Proficient in deploying and managing applications in cloud environments including Azure Cloud and AWS. Comfortable working in Linux environments, with strong skills in shell scripting, Linux commands, and deployment automation.
                </Typography>
                <Typography variant="body1" fontFamily="Josefin Sans" paragraph sx={{color: appColors.white}}>
                    This diverse technical background, combined with a passion for innovation and clean code, enables me to deliver efficient, maintainable, and high-quality software solutions across platforms.
                </Typography>
            </CardContent>
        </Card>
    );
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({title, experiences}) => (<Card
        variant="outlined"
        sx={{
            marginBottom: 4,
            backgroundColor: appColors.card,
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
    >
        <CardContent sx={{backgroundColor: appColors.white}}>
            <Typography variant="h5" gutterBottom fontFamily="Josefin Sans" sx={{color: appColors.primary}}>
                {title}
            </Typography>
            <Divider sx={{backgroundColor: appColors.primary, marginBottom: 2}}/>
            {experiences.map((exp, index) => (<Box key={index} sx={{marginBottom: 2}}>
                    <Typography variant="h6" sx={{color: appColors.primary}}>
                        {exp.company}
                    </Typography>
                    <Typography variant="body2" sx={{color: appColors.primary}}>
                        {exp.period} • {exp.location}
                    </Typography>
                    <Typography variant="body2" fontStyle="italic" gutterBottom sx={{color: appColors.primary}}>
                        {exp.title}
                    </Typography>
                    <Box component="ul" sx={{paddingLeft: 2}}>
                        {exp.responsibilities.map((item, i) => {
                            const isHeader = item.startsWith("Key Responsibilities:") || item.startsWith("Key Achievements:");
                            return isHeader ? (<Typography
                                    key={i}
                                    variant="body2"
                                    sx={{
                                        textDecoration: "underline",
                                        fontWeight: 600,
                                        marginTop: 1,
                                        marginLeft: "-1.5em",
                                        color: appColors.primary,
                                    }}
                                    component="div"
                                >
                                    {item}
                                </Typography>) : (<li key={i} style={{listStyle: "disc"}}>
                                    <Typography variant="body2" sx={{color: appColors.black}}>
                                        {item}
                                    </Typography>
                                </li>);
                        })}
                    </Box>
                </Box>))}
        </CardContent>
    </Card>);

const Experience: React.FC = () => {
    const experiences: ExperienceItem[] = [{
        company: "KCB Bank Kenya",
        title: "Senior Backend Engineer",
        period: "Aug 2024 – Present",
        location: "Kenya - Hybrid",
        responsibilities: ["Key Responsibilities:", "Design and Development: Leading the design and development of software solutions, including core banking systems, integrations, and other applications.", "Testing and Bug Fixing: Conducting unit and scenario testing, identifying and resolving bugs and defects in software applications, and ensuring high availability and resilience of production systems.", "Collaboration and Communication: Working with cross-functional teams, including product management, QA, and DevOps, and communicating technical concepts effectively to stakeholders.", "Technical Leadership: Mentoring and coaching junior engineers, and potentially leading technical initiatives within the team.", "System Handover: Working with technology operations and support teams to ensure smooth handover of system support skills and documentation, and collaborating on the formulation of OLA agreements.", "Risk Management: Specifying and ensuring application controls are incorporated during design to mitigate risk exposure.", "Continuous Improvement: Staying up-to-date with the latest software development practices and technologies, and contributing to continuous improvement initiatives.", "Test Strategy and Automation: Working with QA analysts to develop, maintain, and enhance the test automation framework and infrastructure.", "Requirement Analysis: Understanding and decomposing business and technical requirements into test scenarios and ensuring they are complete, precise, and testable."]
    }, {
        company: "Ona Kenya Limited",
        title: "Senior Software Engineer",
        period: "Nov 2021 – Aug 2024",
        location: "Kenya - Remote",
        responsibilities: ["Key Responsibilities:", "Troubleshoot software changes before and after releases to correct problems and enhance performance.", "Test and correct code to improve usability and user experience.", "Prepare and present technical documentation to management, clients, and project teams.", "Collaborate with internal business partners to gather requirements, build prototypes, and design scalable solutions.", "Design, develop, and deploy backend software to meet client needs.", "Develop and manage software testing and validation procedures.", "Utilize security, acceptance, and performance testing to identify and fix flaws.", "Participate in product roadmap activities to drive process and product improvement.", "Automate release pipelines on GitHub.", "Participate in client deployments on AWS and on-premise infrastructure.", "Key Achievements:", "Built testable mobile APKs and API backends for WHO ANC projects in Indonesia, Rwanda, Burundi, Nepal, and Brazil.", "Deployed backend servers and authentication gateways for clients.", "Resolved over 200 issues across WHO ANC and FHIR Core GitHub repositories.", "Co-developed a WHO ANC-compliant mobile application using FHIR standards.", "Reviewed numerous pull requests to maintain code quality and consistency.", "Created an automated solution to generate APKs and Docker images using GitHub Actions.", "Successfully completed and closed several roadmap initiatives."]
    }, {
        company: "KCB Bank Kenya PLC",
        title: "Application Developer",
        period: "Sep 2018 – Oct 2021",
        location: "Nairobi, Kenya",
        responsibilities: ["Key Responsibilities:", "Create solutions that communicate with T24 through OFS.", "Enhance existing T24 routines or develop new ones as per business requirements.", "Build B2C and C2B payment solutions tailored to customer needs.", "Design FTCOMs (charges templates) for fees and tax applications.", "Develop Teller, H2H transactions, and interface layers on T24.", "Modernize and enhance existing solutions for improved performance.", "Assist in identifying and resolving bugs in production environments.", "Key Achievements:", "Developed a functional checkbook ordering system for KCB branches in Tanzania, Rwanda, and Burundi.", "Successfully migrated all middleware banking applications for KCB Tanzania during the ICDC transition.", "Built B2C and C2B APIs for Vodacom, Tigo, and Airtel Tanzania integrations.", "Played a key role in the creation and rollout of KCB Kenya’s digital banking platform.", "Enhanced several legacy systems by fixing bugs, refactoring redundant code, and optimizing performance.", "Trained multiple production team members on effective use of logs, debugging techniques, and issue resolution procedures."]
    }, {
        company: "Simbatech",
        title: "Software Trainee",
        period: "Apr 2018 – Aug 2018",
        location: "Nairobi, Kenya",
        responsibilities: ["Key Responsibilities:", "Create APIs using SOAP and RESTful communication protocols.", "Administer Linux servers and manage relational databases.", "Maintain and support E-banking applications.", "Write ISO message-based Java code and develop JSF applications with backend server integration.", "Perform ETL (Extract, Transform, Load) data extraction operations.", "Assist in troubleshooting and resolving bugs in production applications.", "Key Achievements:", "Built a credit card processing solution for Victoria Bank Kenya.", "Optimized multiple legacy applications by identifying and fixing bugs, resulting in improved performance and stability."]
    }];

    return (<>
            <Header/>
            <Container sx={{paddingTop: 4, marginTop: '100px'}}>
                <Typography
                    variant="h4"
                    gutterBottom
                    textAlign="center"
                    fontFamily="Josefin Sans"
                    sx={{
                        color: appColors.primary, marginBottom: 4,
                    }}
                >
                    Professional Experience
                </Typography>
                <SummarySection/>
                <ExperienceSection title="Work History" experiences={experiences}/>
            </Container>
        </>);
};

export default Experience;
