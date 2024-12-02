import { Stack, Input, NativeSelectRoot, NativeSelectField, Text, Box, Flex } from "@chakra-ui/react"
import ValidationModal from "./ValidationModal"
import { useState } from "react"


interface props {
    label: string
    type: string
    isRequired?: boolean
    inputType: string
}


const InputField = ({label="uuid", type="string", isRequired = false, inputType}: props) => {


    const value = "Option 1"; 
    const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <Flex p={"1rem"} flexDir={{base: "column", sm: "row"}} gap={5} border={"input-border-color"} bg={"tertiary-color-100"} rounded={"8px"}>
        <Stack>
            <Flex fontSize={"xs"} alignContent={"center"} gap={2}>
                <Text fontSize={"xm"} fontWeight={"bold"}>{label}</Text>
                <Text>{type}</Text>
                {isRequired && <Text color={"danger-color-100"}>required</Text>}
            </Flex>
            <Text fontSize={"xs"}>An API Registry UUID. This can be found by navigating to your API Reference page and viewing code snippets for Node with the api library</Text>
        </Stack>
        <Box mt={"1rem"} maxWidth={{base: "100%", sm: "140px"}}>
            {
                inputType === "text" ?
                <TextInput /> :
                <SelectInput value={value} options={options} />
            }
        </Box>
    </Flex>
  )
}

interface TextInputProps {
    
    value: string | number
}


// FOR GET REQUESTS. 
const TextInput = () => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <Box position={"relative"}>
            <Input onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)} bg={"color-base-white"} border={"1px solid input-border-color"} minW={"140px"} w={"100%"}></Input>
            {isFocused && <ValidationModal criteria={["primer validator", "segundo validator"]}/>}
        </Box>
        
        
    )
}

interface SelectInputProps {
    value: string
    options: string[]
}



// FOR POSTS
const SelectInput = ({value, options}: SelectInputProps) => {
    return (
      <NativeSelectRoot bg={"color-base-white"}>
        <NativeSelectField placeholder={value}>
            {options.map((option, index) => {
                return (
                    <option key={`${option + index}`} value={option}>{option}</option>
                )
            })}
        </NativeSelectField>
      </NativeSelectRoot>
    )
}



export default InputField