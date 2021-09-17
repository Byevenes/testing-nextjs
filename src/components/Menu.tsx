/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import { HamburgerIcon, SettingsIcon } from '@chakra-ui/icons'
import {
  Box,
  BoxProps,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'

const Links = [
  {
    name: 'Home',
    path: '/',
    icon: HamburgerIcon,
  },
  {
    name: 'Crud',
    path: '/crud',
    icon: SettingsIcon,
  },
]

export const MenuComponent: React.FC<FlexProps> = props => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const NavItem = ({
    icon,
    children,
    path,
    ...rest
  }: {
    children: ReactNode
    icon: typeof Icon
    path: string
  }) => {
    return (
      <Flex
        align="center"
        px="4"
        mx="2"
        rounded="md"
        py="3"
        cursor="pointer"
        color="whiteAlpha.700"
        _hover={{
          bg: 'blackAlpha.300',
          color: 'whiteAlpha.900',
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
        onClick={onClose}>
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: 'gray.300',
            }}
            as={icon}
          />
        )}
        <Link href={path}>{children}</Link>
      </Flex>
    )
  }

  const SidebarContent = (props: BoxProps) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="brand.600"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      onMouseLeave={onClose}
      {...props}>
      <Flex px="4" py="5" align="center">
        <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
          Choc UI
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
        display={['flex', 'flex', 'flex', 'flex']}>
        {Links.map(({ name, path, icon }) => (
          <NavItem key={path} path={path} icon={icon}>
            {name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  )

  return (
    <Flex>
      <Flex display={['none', 'none', 'flex', 'flex']}>
        <Box
          as="section"
          bg={useColorModeValue('red.50', 'red.700')}
          minH="100vh"
          {...props}>
          <SidebarContent display={{ base: 'none', md: 'unset' }} />
          <Drawer isOpen={isOpen} onClose={onClose} placement="left">
            <DrawerOverlay />
            <DrawerContent>
              <SidebarContent w="full" borderRight="none" />
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
      <Flex display={['flex', 'flex', 'none', 'none']}>
        <IconButton
          aria-label="Menu"
          onClick={onOpen}
          icon={<HamburgerIcon />}
          size="sm"
          onMouseEnter={onOpen}
        />
      </Flex>
    </Flex>
  )
}
