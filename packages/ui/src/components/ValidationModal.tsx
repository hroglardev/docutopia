import { Box, Image, Text, Flex, Button, Separator } from "@chakra-ui/react"

interface ValidationModalProps {
    criteria: string[]
    defaultValue?: string
}


// TODO => Add default  / example change option to the input
const ValidationModal = ({criteria, defaultValue}: ValidationModalProps) => {
  return (
    <Box zIndex={"100"} position={"absolute"}  border={"border-input"} bg={"white"} py={"1rem 0"} px={"1rem"} rounded={"8px"}>
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
        {defaultValue && 
                        <>
                            <Separator mt={"1rem"} /> 
                            <Button variant={"plain"}>Use default value</Button>
                        </>}
    </Box>
  )
}

export default ValidationModal