import Article from "../../components/article"
import banner from '/Banner_Linkedin.jpg'
import ReactMarkdown from 'react-markdown';
import '../../App.css'

const AboutMe = ({data} : any) => {

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