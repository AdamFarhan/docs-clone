export const TEMPLATES = [
  {
    id: "blank",
    label: "Untitled Document",
    imageUrl: "/template-previews/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software Proposal",
    imageUrl: "/template-previews/software-proposal.svg",
    initialContent: `
    <h1>Project Proposal</h1>
    <h2>Project Overview</h2>
    <p>Breif description of the proposed project proposal p</p>

    <h2>Scope of Work</h2>
    <p>Detailed breakdown of the deliverables and requirements.</p>
`,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/template-previews/project-proposal.svg",
    initialContent: `
    <h1>Software Proposal</h1>
    <p>Use this document to propose your software project.</p>
`,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/template-previews/business-letter.svg",
    initialContent: `
        <h1>Your Company Name</h1>
        <p>Your Name</p>
        <p>Your Title</p>
        <p>Your Company Address</p>
        <p>City, State, Zip Code</p>
        <p>Email: your.email@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Date: Month Day, Year</p>

        <h2>Recipient's Name</h2>
        <p>Recipient's Title</p>
        <p>Recipient's Company Name</p>
        <p>Recipient's Address</p>
        <p>City, State, Zip Code</p>

        <h3>Dear [Recipient's Name],</h3>

        <p>I am writing to [state the purpose of the letter, e.g., discuss a business proposal, follow up on a previous conversation, etc.].</p>

        <p>[Insert the main content of your letter here. Provide details, context, and any necessary information related to the purpose of the letter.]</p>

        <p>Thank you for your attention to this matter. I look forward to your response.</p>

        <h3>Sincerely,</h3>
        <p>Your Name</p>
        <p>Your Title</p>
        <p>Your Company Name</p>
`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/template-previews/resume.svg",
    initialContent: `
    <h1>Resume</h1>
    <h2>Contact Information</h2>
    <p>Name: [Your Name]</p>
    <p>Address: [Your Address]</p>
    <p>Phone: [Your Phone Number]</p>
    <p>Email: [Your Email]</p>

    <h2>Professional Summary</h2>
    <p>[A brief summary of your professional background and skills]</p>

    <h2>Work Experience</h2>
    <h3>[Job Title]</h3>
    <p>[Company Name], [Location]</p>
    <p>[Start Date] - [End Date]</p>
    <ul>
        <li>[Responsibility/Accomplishment]</li>
        <li>[Responsibility/Accomplishment]</li>
        <li>[Responsibility/Accomplishment]</li>
    </ul>

    <h3>[Job Title]</h3>
    <p>[Company Name], [Location]</p>
    <p>[Start Date] - [End Date]</p>
    <ul>
        <li>[Responsibility/Accomplishment]</li>
        <li>[Responsibility/Accomplishment]</li>
        <li>[Responsibility/Accomplishment]</li>
    </ul>

    <h2>Education</h2>
    <p>[Degree], [Major]</p>
    <p>[University Name], [Location]</p>
    <p>[Graduation Date]</p>

    <h2>Skills</h2>
    <ul>
        <li>[Skill 1]</li>
        <li>[Skill 2]</li>
        <li>[Skill 3]</li>
    </ul>

    <h2>Certifications</h2>
    <p>[Certification Name], [Issuing Organization]</p>
    <p>[Date]</p>
`,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/template-previews/cover-letter.svg",
    initialContent: `
            <h1>Cover Letter</h1>
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Email Address]</p>
            <p>[Phone Number]</p>
            <p>[Date]</p>

            <p>[Recipient's Name]</p>
            <p>[Recipient's Title]</p>
            <p>[Company's Name]</p>
            <p>[Company's Address]</p>
            <p>[City, State, ZIP Code]</p>

            <p>Dear [Recipient's Name],</p>

            <p>I am writing to express my interest in the [Job Title] position at [Company's Name] as advertised on [Where You Found the Job Posting]. With my background in [Your Field or Major], I am confident that I can contribute effectively to your team.</p>

            <p>In my previous role at [Your Previous Company], I [Describe a Key Achievement or Responsibility]. This experience has equipped me with [Relevant Skills or Knowledge], which I believe will be beneficial for the [Job Title] role at [Company's Name].</p>

            <p>I am particularly drawn to this opportunity at [Company's Name] because [Explain Why You Are Interested in the Company or Role]. I am excited about the prospect of bringing my unique skills to your team and contributing to [Company's Name]'s success.</p>

            <p>Thank you for considering my application. I look forward to the opportunity to discuss how my background, skills, and certifications will be an asset to your team. Please feel free to contact me at [Your Phone Number] or via email at [Your Email Address] to schedule an interview.</p>

            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/template-previews/letter.svg",
    initialContent: `
            <h1>Your Name</h1>
        <p>Your Address</p>
        <p>City, State, Zip Code</p>
        <p>Email: your.email@example.com</p>
        <p>Date: Month Day, Year</p>

        <h2>Recipient's Name</h2>
        <p>Recipient's Address</p>
        <p>City, State, Zip Code</p>

        <h3>Dear [Recipient's Name],</h3>

        <p>I hope this letter finds you well. I wanted to take a moment to catch up and share some thoughts with you.</p>

        <p>[Insert the main content of your letter here. You can write about recent events, ask about their well-being, or share news.]</p>

        <p>Looking forward to hearing from you soon!</p>

        <h3>Sincerely,</h3>
        <p>Your Name</p>
        `,
  },
];
