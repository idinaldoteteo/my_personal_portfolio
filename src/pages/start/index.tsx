import Banner from "../../components/banner";
import Section from "../../components/card/section";

const Start = ({data} : any) => {

  return (
    <section>
      <Banner data={data} /> 
      <Section data={data} />
    </section>
  )
}

export default Start