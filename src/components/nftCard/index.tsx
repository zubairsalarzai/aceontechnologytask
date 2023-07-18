import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Dots } from "../../assets/icons";
import nft from '../../assets/images/nft.png'
export default function NftCard (){
    return(
        <Box bg='black' maxW='388px' w='100%' p='16px 12px' borderRadius='20px'>
<HStack justify='space-between' px='8px' mb='4px'><Text>Cyberlinx #2551</Text><Dots/></HStack>
<Image src={nft} alt='nft' boxSize='364px'/>
<Box bg='#18191D' borderRadius='12px' p='8px' mt='14px'>
    <Flex justify='space-between' bg='#131417' borderRadius='8px' p='8px 12px' mt='12px'>
        <Text>Owner</Text>
        <Text>72UGr...YdD</Text>

    </Flex>
    <Flex justify='space-between' bg='#131417' borderRadius='8px' p='8px 12px' mt='12px'>
        <Text>Mint Address</Text>
        <Text>72UGr...YdD</Text>

    </Flex>
    <Flex justify='space-between' bg='#131417' borderRadius='8px' p='8px 12px' mt='12px'>
        <Text>Token Address</Text>
        <Text>72UGr...YdD</Text>

    </Flex>
</Box>
        </Box>
    )
}