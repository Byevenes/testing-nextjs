import { useQueryClient } from 'react-query'
import {
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
  SettingsIcon,
} from '@chakra-ui/icons'
import {
  Flex,
  FlexProps,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { signIn, signOut, useSession } from 'next-auth/client'

export const MenuComponent: React.FC<FlexProps> = props => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const [session, loading] = useSession()

  const renderAuthMenu = () => {
    const menuText = session ? 'Sign Out' : 'Sign In'

    const signOutAndClearData = async () => {
      await signOut()
      queryClient.clear()
    }

    return (
      <MenuItem
        onClick={() => (session ? signOutAndClearData() : signIn())}
        icon={<RepeatIcon />}>
        {loading ? <Spinner /> : menuText}
      </MenuItem>
    )
  }

  return (
    <Flex position="fixed" top="1rem" left="1rem" {...props}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem
            onClick={() => router.push('/crud')}
            icon={<SettingsIcon />}>
            Crud
          </MenuItem>
          <MenuItem
            onClick={() => router.push('/')}
            icon={<ExternalLinkIcon />}>
            Home
          </MenuItem>
          {renderAuthMenu()}
        </MenuList>
      </Menu>
    </Flex>
  )
}
