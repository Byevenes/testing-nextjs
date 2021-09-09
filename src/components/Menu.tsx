import { useQueryClient } from 'react-query'
import {
  CloseIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
  SettingsIcon,
} from '@chakra-ui/icons'
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  FlexProps,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { signIn, signOut, useSession } from 'next-auth/client'

export const MenuComponent: React.FC<FlexProps> = props => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const [session, loading] = useSession()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const renderAuthMenu = (color: string) => {
    const menuText = session ? 'Sign Out' : 'Sign In'

    const signOutAndClearData = async () => {
      await signOut()
      queryClient.clear()
    }

    return (
      <MenuItem
        onClick={() => (session ? signOutAndClearData() : signIn())}
        icon={<RepeatIcon />}
        _hover={{ backgroundColor: color }}>
        {loading ? <Spinner /> : menuText}
      </MenuItem>
    )
  }

  return (
    <Flex display={['flex', 'flex', 'none', 'none']} {...props}>
      <Menu isOpen={isOpen}>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          onClick={isOpen ? onClose : onOpen}
          onMouseEnter={onOpen}
        />
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <MenuList onMouseLeave={onClose}>
              <MenuItem
                onClick={() => router.push('/crud')}
                icon={<SettingsIcon />}
                _hover={{
                  backgroundColor: useColorModeValue('green.100', 'green.500'),
                }}>
                Crud
              </MenuItem>
              <MenuItem
                onClick={() => router.push('/')}
                icon={<ExternalLinkIcon />}
                _hover={{
                  backgroundColor: useColorModeValue('green.100', 'green.500'),
                }}>
                Home
              </MenuItem>
              <MenuDivider />
              {renderAuthMenu(useColorModeValue('green.100', 'green.500'))}
            </MenuList>
          </DrawerContent>
        </Drawer>
      </Menu>
    </Flex>
  )
}
