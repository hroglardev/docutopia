import { Box, Text, Flex } from "@chakra-ui/react"
import Inputs from "./Input"
import ApiField from "./ApiField"

export interface BodyParamFieldProps {
  name: string
  type: string
  defaultValue?: string
  description: string
  isRequired?: boolean
  inputType: "text" | "select" | "object" | "object array" | "string array"
  objectValues?: BodyParamFieldProps[]
  selectOptions?: string[]
}

const BodyParamField = ({name, type, defaultValue, description, isRequired, inputType, objectValues = [], selectOptions = []}: BodyParamFieldProps) => {
  
  return (
    <Flex md={{justifyContent:"space-between"}} mt={{base:"5px", md: "0"}} flexDir={type !== "object" && type !== "array" ? {base: "column", md: "row"} : "column"} >
        <ApiField name={name} type={type} defaultValue={defaultValue} description={description} isRequired={isRequired} />
        <Box w={type !== "object" && type !== "array" ? {md: "140px"} : "undefined"}>
            <Inputs inputType={inputType} objectValues={objectValues} selectOptions={selectOptions}/>
        </Box>  
    </Flex>
  )
}

export default BodyParamField