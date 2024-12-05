import { Flex, Text, Box } from "@chakra-ui/react"

interface ApiFieldProps {
    name: string
    type: string
    defaultValue?: string
    isRequired?: boolean
    description?: string
}




const ApiField = ({name, type, defaultValue, isRequired, description}: ApiFieldProps) => {
  return (
    <Box flexGrow={1} p={"10px"}>
        <Flex gap={"5px"} alignItems={"center"}>
            <Text color={"font-default"} fontSize={"m"} fontWeight={"semiBold"}>{name}</Text>
            <Text fontSize={"xs"} color={"font-minimum"}>{type}</Text>
            {defaultValue && <Text fontSize={"s"} color={"font-minimum"}>Defaults to {defaultValue}</Text>}
            {isRequired && <Text fontSize={"xs"} color={"font-required"}>required</Text>}
        </Flex>
        {
          description &&  
        <Box>
          <Text fontSize={"s"}>{description}</Text>
        </Box>
        }
    </Box>
  )
}

export default ApiField