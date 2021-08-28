import { ReactNode } from 'react'
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

import { MenuComponent } from 'components/Menu'

import { DarkModeSwitch } from '../DarkModeSwitch'

// const Links = ["Dashboard", "Projects", "Team"];
import navStyles from './navbar.module.css'

const Links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Crud',
    path: '/crud',
  },
]

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      backgroundColor: useColorModeValue('green.100', 'green.500'),
    }}>
    <Link href={path}>{children}</Link>
  </Box>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [session] = useSession()

  return (
    <div className={navStyles.mobileNav}>
      <Box py="2rem" px="2rem" minW="90vw">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <MenuComponent />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={['none', 'none', 'flex', 'flex']}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex align="center" justifyContent="center">
            <DarkModeSwitch />
            <Menu isOpen={isOpen}>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                onMouseEnter={onOpen}
                _hover={{
                  backgroundColor: useColorModeValue('green.100', 'green.500'),
                }}>
                <Avatar
                  size={'sm'}
                  src={
                    session
                      ? `${session.user?.image}`
                      : 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList onMouseLeave={onClose}>
                <MenuItem
                  _hover={{
                    backgroundColor: useColorModeValue(
                      'green.100',
                      'green.500',
                    ),
                  }}>
                  Profile
                </MenuItem>
                <MenuItem
                  _hover={{
                    backgroundColor: useColorModeValue(
                      'green.100',
                      'green.500',
                    ),
                  }}>
                  Settings
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  _hover={{
                    backgroundColor: useColorModeValue(
                      'green.100',
                      'green.500',
                    ),
                  }}>
                  Cerrar Sesion
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </div>
  )
}
