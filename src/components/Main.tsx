import { Stack, StackProps } from '@chakra-ui/react'

export const Main: React.FC<StackProps> = props => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="40rem"
    mt="-15vh"
    pt="5rem"
    px="1rem"
    {...props}
  />
)
