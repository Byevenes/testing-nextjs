import { AnimateSharedLayout } from 'framer-motion'

import Navbar from './Navbar/Navbar'
import { Container } from './Container'
import { CTA } from './CTA'

export const Layout: React.FC = ({ children }) => {
  return (
    <AnimateSharedLayout>
      <Container height="100vh">
        <Navbar />
        {children}
        <CTA />
      </Container>
    </AnimateSharedLayout>
  )
}
