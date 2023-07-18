import { Avatar, AvatarBadge, Box, Center, Divider, Flex, Highlight, HStack, Text } from "@chakra-ui/react";
import { DashboardIcon, ElementIcon, ETH, Logo, SettingIcon } from "../assets/icons";
import bell from '../assets/images/notifications.svg'
export default function Layout({children}:{children:JSX.Element}) {
  return (
    <Flex
     >
      <Flex
      p='24px 20px'
      flexDir='column'
      justify='space-between'
      align='center'
      minH="100vh"
      maxH="100vh"
      position="sticky"
      top="0"
       >
        <Logo />
        <Flex flexDir='column' gap='2rem'>
            <DashboardIcon/>
            <ElementIcon/>
            <SettingIcon/>
        </Flex>
        <Avatar src={bell} boxSize='24px'>
        <AvatarBadge  bg='white' boxSize='0.25rem' top='0' right='2px'/>

        </Avatar>
      </Flex>
      <Box flex="1" bg="#666666" borderRadius="32px 0px 0px 32px" p='20px 65px'>
     <HStack justify='space-between'>
        <Flex bg='#18191D' p='8px 12px' rounded='xl'>
            <Center rounded='full' bg='white'><ETH/> </Center>
            <Text  ms='8px'>
            <Highlight query='1137.62  +2.62%↑'  styles={{color:'#0AC18E' }}>ETH/USDT 1137.62  +2.62%↑</Highlight>
            </Text>
        </Flex>
        <Flex bg='#18191D' p='8px 12px' rounded='xl'  gap='8px' alignItems='center'>
            <Avatar src='https://bit.ly/ryan-florence' size='xs'/>
            <Text>Zash</Text>
            <Divider h='11px' orientation="vertical"/>
            <Text>User ID: 11026666</Text>
</Flex>
     </HStack>
     <Box>
     {children}
     </Box>
      </Box>
    </Flex>
  );
}
