import AiForm from '@/components/ai-form'
import Hero from '@/components/hero'
import { SiteHeader } from '@/components/site-header'

export default function IndexPage() {
  return (
    <section className=" bg-gray-900 min-h-screen -z-20">
      <SiteHeader />
      <div className='mt-[3rem]'>
        <Hero />
        <AiForm />
      </div>
    </section>
  )
}
