import Article from "../../components/article"
import banner from '../../assets/Banner Linkedin.jpg'
import ReactMarkdown from 'react-markdown';
import '../../App.css'

const AboutMe = () => {
  return (
    <Article title="My challenges" urlCover={banner}>
      <span className='post-markdown-container'>
        <ReactMarkdown>
          {"I'm a Senior Full Stack Engineer, currently based in Limerick, Ireland, but my engineering journey started in Brazil. For the past six years, I've been obsessed with one main goal: translating complex business bottlenecks into scalable, reliable software. \n\nFor me, coding isn't just about writing syntax, it's about creating real-world impact. During my time at BTG Pactual, the largest investment bank in Latin America, I architected a digital onboarding process that took a manual, two-day process and reduced it to just two hours. That's the kind of measurable difference I love to bring to a team. \n\nTechnically, I'm fluent across the full stack. Whether I'm building backend microservices in Java or C# .NET, tuning complex SQL databases, or creating responsive interfaces with React, I focus on writing clean, secure, and maintainable code. \n\nRecently, I made the decision to relocate to Ireland. I wanted to challenge myself, immerse myself in the European tech market, and push my boundaries. Today, alongside my core development work, I'm actively leveraging hands-on practice integrating AI tools into my daily workflows to write better, faster code. \n\nTake a look around my portfolio to see some of the projects I've built and the technologies I use. If you're looking for an engineer who understands financial systems, high-volume scale, and the importance of a great team culture, let's connect."}
        </ReactMarkdown>
      </span>
    </Article>
  )
}

export default AboutMe