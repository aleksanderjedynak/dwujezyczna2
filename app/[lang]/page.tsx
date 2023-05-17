import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import Counter from '@/components/counter'
import LocaleSwitcher from '@/components/locale-switcher'
import Not from '@/components/Not'
// test
import Header from "@/components/Header";
import Speakers from "@/components/Speakers";
import { Schedule } from "@/components/Schedule";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Organizers from "@/components/Organizers";
import Faqs from "@/components/Faqs";
import Pricing from "@/components/Pricing";
import Hotel from "@/components/Hotel";
// import Layout from "app/layout";
import Koszyk from "@/components/Koszyk";
export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div>

      {/*<p>Current locale: {lang}</p>*/}
      {/*<p>*/}
      {/*  This text is rendered on the server:{' '}*/}
      {/*  {dictionary['server-component'].welcome}*/}
      {/*</p>*/}
      {/*<Counter dictionary={dictionary.counter} />*/}
    {/*<Not dictionary={dictionary.not}></Not>*/}
                <div className="bg-white">
                    {/*<LocaleSwitcher />*/}
          <Header dictionary={dictionary.header}></Header>

          <main>
            <About></About>
            {/*<Speakers></Speakers>*/}
            <Schedule dictionary={dictionary.test}></Schedule>
            <Hotel></Hotel>
            {/*<Pricing></Pricing>*/}
            <Koszyk></Koszyk>
            <Faqs></Faqs>
            <Organizers></Organizers>
            <Contact></Contact>
          </main>
          <Footer></Footer>
        </div>
    </div>
  )
}
