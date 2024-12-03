import { Box, Image, Text, Flex, Button, Separator } from "@chakra-ui/react"

interface props {
    criteria: string[]
    defaultValue?: string
}


// TODO => Add default  / example change option to the input
const ValidationModal = ({criteria, defaultValue}: props) => {
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
        {defaultValue && <>
                            <Separator mt={"1rem"} /> 
                            <Button variant={"plain"}>Use default value</Button>
                         </>}
    </Box>
  )
}

export default ValidationModal