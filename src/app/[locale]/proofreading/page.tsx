import { Contact } from '@/components/customUi/Contact'
import { ProofreadingSection } from '@/components/Sections/Proofreading/Proofreading'
import { Services } from '@/components/Sections/Services/Services'

export default function Proofreading() {
  return (
    <div>
      <ProofreadingSection />
      <Services />
      <Contact />
    </div>
  )
}
