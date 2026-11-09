import Banner from "../../components/banner";
import Section from "../../components/card/section";
import data from '../../../db.json'

const Start = () => {

  return (
    <section>
      <Banner/> 
      <Section data={data} />
    </section>
  )
}

export default Start