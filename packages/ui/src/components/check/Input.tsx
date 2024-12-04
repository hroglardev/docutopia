import { useState } from "react"
import { Box, Input,NativeSelectRoot, NativeSelectField, AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent } from "@chakra-ui/react"
import ValidationModal from "../ValidationModal"
import BodyParamField, { BodyParamFieldProps } from "./BodyParamField"

interface SelectInputProps {
    value: string
    options: string[] | []
}

interface InputsProps {
    inputType: string
    objectValues: BodyParamFieldProps[] | []
    selectOptions?: string[] | []
}

const Inputs = ({inputType, objectValues = [], selectOptions = []}: InputsProps ) => {
  return (
    <>
        
        {inputType === "text" ? 
        <TextInput /> :
        inputType === "select" ?
        <SelectInput value={"Hello"} options={selectOptions} /> :
        <ObjectInput objectValues={objectValues} />
        }
    </>
  )
}

const TextInput = () => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <Box position={"relative"} rounded={"lg"} w={"100%"}>
            <Input color={"font-default"} onBlur={() => setIsFocused(false)}  _hover={{border: "border-input-hover"}} onFocus={() => setIsFocused(true)} bg={"color-base-white"} focusRingColor={"#018ef5"} border={"border-input"} rounded={"default"} fontSize={"m"} h={"30px"} w={"100%"} p={"1px 10px"}></Input>
            {isFocused && <ValidationModal criteria={["primer validator", "segundo validator"]} defaultValue="Hola"/>}
        </Box>
        
        
    )
}

const SelectInput = ({value, options}: SelectInputProps) => {
    return (
      <NativeSelectRoot bg={"white"} w={{base: "100%", md: "140px"}}>
        <NativeSelectField placeholder={value} h={"30px"} w={"100%"}>
            {options.map((option, index) => {
                return (
                    <option key={`${option + index}`} value={option}>{option}</option>
                )
            })}
        </NativeSelectField>
      </NativeSelectRoot>
    )
}

interface ObjectInputProps {
    objectValues: BodyParamFieldProps[] | []
}

const ObjectInput = ({objectValues = []}: ObjectInputProps) => {
    return (
        <Box>
            <AccordionRoot collapsible>
                {objectValues.map((objectValue, index) => (
                    <AccordionItem key={index} value={"hola"}>
                        <AccordionItemTrigger>{}</AccordionItemTrigger>
                        <AccordionItemContent>
                            <BodyParamField description={objectValue.description} name={objectValue.name} type={objectValue.type} isRequired={objectValue.isRequired} inputType={objectValue.inputType} objectValues={objectValue.objectValues} selectOptions={objectValue.selectOptions} />
                        </AccordionItemContent>
                    </AccordionItem>
                ))}
            </AccordionRoot>
        </Box>
    )
}

const ArrayInput = () => {
    return (
        <></>
    )
}


export default Inputs


