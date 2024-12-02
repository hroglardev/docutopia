import { Box, Image, Text, Flex } from "@chakra-ui/react"

interface props {
    criteria: string[]
}

const ValidationModal = ({criteria}: props) => {
  return (
    <Box position={"absolute"} mt={"0.5rem"} bg={"red"} p={"1rem"} rounded={"8px"}>
        {criteria.map((criterion, index) => {
            return (
                <Flex key={`${criterion + index}`} alignContent={"center"}>
                    <Box>
                        <Image src="" alt="Criteria Image"></Image>
                        <Text>{criterion}</Text>
                    </Box>
                </Flex>
            )
        })}
    </Box>
  )
}

export default ValidationModal