import { Box, Text, Flex } from "@chakra-ui/react"
import Inputs from "./Input"

export interface BodyParamFieldProps {
  name: string
  type: string
  defaultValue?: string
  description: string
  isRequired?: boolean
  inputType: "text" | "select" | "object" | "array"
  objectValues?: BodyParamFieldProps[]
  selectOptions?: string[]
}

const BodyParamField = ({name, type, defaultValue, description, isRequired, inputType, objectValues = [], selectOptions = []}: BodyParamFieldProps) => {
  
  return (
    <Flex md={{justifyContent:"space-between"}} mt={{base:"5px", md: "0"}} flexDir={{base: "column", md: "row"}} p={"10px"} borderBottom={"border-body-param"}>
          {/* Esto es el div de la description */}
        <Box>
          <Flex gap={"5px"} alignItems={"center"}>
            <Text color={"font-default"} fontSize={"m"} fontWeight={"semiBold"}>{name}</Text>
            <Text fontSize={"xs"} color={"font-minimum"}>{type}</Text>
            {defaultValue && <Text fontSize={"s"} color={"font-minimum"}>Defaults to {defaultValue}</Text>}
            {isRequired && <Text fontSize={"xs"} color={"font-required"}>required</Text>}
          </Flex>
          <Box>
            <Text fontSize={"s"}>{description}</Text>
          </Box>
        </Box>
        {/* Este es el div del input */}
        <Box md={{maxW: "140px"}}>
            <Inputs inputType={inputType} objectValues={objectValues} selectOptions={selectOptions}/>
        </Box>  
    </Flex>
  )
}

export default BodyParamField