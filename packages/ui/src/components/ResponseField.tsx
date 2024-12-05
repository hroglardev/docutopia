import {Box, Flex, Text} from "@chakra-ui/react"
import CodeBadge from "./CodeBadge"

export interface ResponseFieldProps {
    code: number
    description: string
}

const ResponseField = ({code, description}: ResponseFieldProps) => {
  return (
    <Box p={"10px"} _hover={{bg: "white"}}>
        <Flex alignItems={"center"} gap={2}>
            <CodeBadge variant={code >= 400 ? "red" : code >= 300 ? "orange" : code >= 200 ? "green" : "" } />
            {code}
        </Flex>
        <Box>
            <Text fontSize={"s"} color={"font-minimum"}>{description}</Text>
        </Box>
    </Box>
  )
}

export default ResponseField