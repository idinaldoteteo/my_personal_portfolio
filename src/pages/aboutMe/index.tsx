import Article from "../../components/article"
import banner from '/Banner_Linkedin.jpg'
import ReactMarkdown from 'react-markdown';
import '../../App.css'
import type { JsonProps } from "../../components/shared/shared";

const AboutMe = ({data} : JsonProps) => {
  return (
    <Article title={data.personal.aboutMe.title} urlCover={banner}>
      <span className='post-markdown-container'>
        <ReactMarkdown>
          {data.personal.aboutMe.content}
        </ReactMarkdown>
      </span>
    </Article>
  )
}

export default AboutMe