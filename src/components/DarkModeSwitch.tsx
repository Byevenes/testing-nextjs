import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Flex,
  IconButton,
  IconButtonProps,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const DarkModeSwitch: React.FC<ColorModeSwitcherProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <Flex
      px="1rem"
      py="1rem"
      justifyContent="space-between"
      alignItems="center">
      <IconButton
        size="sm"
        fontSize="sm"
        variant="ghost"
        color="current"
        marginLeft="5"
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
      />
      <Switch
        colorScheme="green"
        isChecked={isDark}
        onChange={toggleColorMode}
      />
    </Flex>
  )
}
