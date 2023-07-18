import { Box, Flex, Heading, HStack, IconButton } from "@chakra-ui/react";
import { Back, Next, Refresh } from "../../assets/icons";
import NftCard from "../../components/nftCard";
import Layout from "../../layout";


export default function Dashboard (){
  
    return (
        
        <Layout>
            <>
    
            <HStack justify='space-between' mt='44px' mb='74px'><Heading color='white'>Dashboard</Heading><IconButton _hover={{}} rounded='xl' bg='#131417' icon={<Refresh/>} aria-label='btn'/></HStack>
          
     <Flex flexWrap='wrap' gap='33px'>
                
                <Box flex='1'>
            <NftCard/>

                </Box>
                <Box flex='1'>
            <NftCard/>

                </Box>

                <Box flex='1'>
            <NftCard/>

                </Box>

            </Flex>
            <Flex bg='black' rounded='full' maxW='295px' w='100%' justify='space-between' p='11px' mt='28px' mx='auto'>
                <IconButton rounded='full'  _hover={{}} bg='#18191D' icon={<Back/>} aria-label="bt"/>
                <IconButton rounded='full'  _hover={{}}  bg='#18191D'  icon={<Next/>}  aria-label="btn"/>

            </Flex>
            </>
        </Layout>
    

    )
}
