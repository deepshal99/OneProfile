import {
  Box,
  Heading,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom'
import { logOut } from '../Handler/RegistrationHandler'


const Links = [];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={'/' + children}>
    {children}
  </Link>
);


export default function Header() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory()


  function LogoutFunction() {

    logOut().then(() => {

      console.log("Logged out")
      history.push("/home")
      localStorage.clear()
    })
  }

  return (
    <>
      <Box w="100vw" bg={useColorModeValue('gray.100', 'gray.900')} px={8} mt={0} pt={0}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            // icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Heading size="md"><Link to="/home">OneProfile </Link></Heading> </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink to={"/" + link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                style={{ display: 'flex' }}
                as={Button}
                rounded={'full'}
                // variant={'link'}
                cursor={'pointer'}>
                <Avatar
                  size={'sm'}
                  src={
                    localStorage.getItem("photoURL")
                  }
                />
              </MenuButton>
              <MenuList>
                <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem onClick={LogoutFunction}><p>Logout</p></MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>


    </>
  );
}
