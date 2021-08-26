import { AnimateSharedLayout } from 'framer-motion'

import { Container } from './Container'
import { CTA } from './CTA'
import { DarkModeSwitch } from './DarkModeSwitch'
import { MenuComponent } from './Menu'

export const Layout: React.FC = ({ children }) => {
  return (
    <AnimateSharedLayout>
      <Container height="100vh">
        {children}
        <DarkModeSwitch />
        <MenuComponent />
        <CTA />
      </Container>
    </AnimateSharedLayout>
  )
}
