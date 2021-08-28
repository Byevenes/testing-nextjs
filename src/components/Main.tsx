import { Flex, FlexProps } from '@chakra-ui/react'

export const Main: React.FC<FlexProps> = props => (
  <Flex
    spacing="5rem"
    width="90%"
    maxWidth="40rem"
    flexDirection="column"
    mt="2rem"
    {...props}
  />
)
