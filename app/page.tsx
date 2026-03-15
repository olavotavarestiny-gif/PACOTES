import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Pacotes from '@/components/Pacotes'
import Comparison from '@/components/Comparison'
import Steps from '@/components/Steps'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <Hero />
      <Intro />
      <Pacotes />
      <Comparison />
      <Steps />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
