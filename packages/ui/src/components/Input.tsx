import { useState } from "react"
import { Flex, Text, Box, Input,NativeSelectRoot, NativeSelectField, AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent, Button } from "@chakra-ui/react"
import ValidationModal from "./ValidationModal"
import BodyParamField, { BodyParamFieldProps } from "./BodyParamField"
import BodyParamsContainer from "./BodyParamsContainer"



interface SelectInputProps {
    value: string
    options: string[] | []
    width?: string | {base: "100%", md: "140px"}
}

interface InputsProps {
    inputType: "text" | "select" | "object" | "object array" | "string array"
    objectValues: BodyParamFieldProps[] | []
    selectOptions?: string[] | []
}

type ItemType = string | BodyParamFieldProps

interface ArrayInputProps {
    arrayType: "string array" | "object array"
}

interface AddItemProps {
    addItem: (item:string | BodyParamFieldProps) => void
    item: string | any
}

interface ObjectInputProps {
    objectValues: BodyParamFieldProps[] | []
}

interface BodyParamArrayItemProps {
    type: "object" | "string"
    header: string
    deleteItem: (item: number) => void

}

const Inputs = ({inputType, objectValues = [], selectOptions = []}: InputsProps ) => {
  return (
    <>
        {inputType === "text" ? 
        <TextInput /> :
        inputType === "select" ?
        <SelectInput value={"Hello"} options={selectOptions} /> :
        inputType === "object" ? <ObjectInput objectValues={objectValues} /> :
        <ArrayInput arrayType={inputType} />
        }
    </>
  )
}

const TextInput = () => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <Box position={"relative"} rounded={"lg"} w={"100%"}>
            <Input color={"font-default"} onBlur={() => setIsFocused(false)}  _hover={{border: "border-input-hover"}} onFocus={() => setIsFocused(true)} bg={"color-base-white"} boxShadow={isFocused ? "shadow-input-focus-pass" : undefined} focusRingColor={"#018ef5"} border={"border-input"} rounded={"default"} fontSize={"m"} h={"30px"} w={"100%"} p={"1px 10px"}></Input>
            {isFocused && <ValidationModal criteria={["primer validator", "segundo validator"]} defaultValue="Hola"/>}
        </Box>
        
        
    )
}

const SelectInput = ({value, options, width={base: "100%", md: "140px"}}: SelectInputProps) => {
    const [isFocused, setIsFocused] = useState(false)
    return (
      <NativeSelectRoot bg={"white"} w={width}>
        <NativeSelectField placeholder={value} h={"30px"} onBlur={() => setIsFocused(false)}  _hover={{border: "border-input-hover"}} onFocus={() => setIsFocused(true)} w={"100%"} boxShadow={isFocused ? "shadow-input-focus-pass" : undefined} focusRingColor={"#018ef5"}>
            {options.map((option, index) => {
                return (
                    <option key={`${option + index}`} value={option}>{option}</option>
                )
            })}
        </NativeSelectField>
      </NativeSelectRoot>
    )
}



const ObjectInput = ({objectValues = []}: ObjectInputProps) => {
    return (
        <Box bg={"white"} mt={"1rem"} px={"10px"} rounded={"lg"} border={"border-input"}>
            <AccordionRoot collapsible>
                    <AccordionItem border={"none"} value={objectValues[0].name}>
                        <AccordionItemTrigger fontSize={"s"} h={"30px"}>ADDRESS OBJECT</AccordionItemTrigger>
                        <AccordionItemContent>
                            {objectValues.map((objectValue, index) => {
                                return (
                                    <BodyParamField key={`${index}${objectValue}`} description={objectValue.description} name={objectValue.name} type={objectValue.type} isRequired={objectValue.isRequired} inputType={objectValue.inputType} objectValues={objectValue.objectValues} selectOptions={objectValue.selectOptions} />
                                )
                            })}
                        </AccordionItemContent>
                    </AccordionItem>
            </AccordionRoot>
        </Box>
    )
}



const ArrayInput = ({arrayType}: ArrayInputProps) => {
    const [array, setArray] = useState<ItemType[]>([])
    
    const addItem = (item:ItemType) => {
        setArray([...array, item])
    }

    const deleteItem = (id:number) => {
        setArray(array.filter((_item:any, index:number) => index !== id))
    }

    const sampleString = "sample"
    const sampleObject = {
        name: "address",
        type: "object",
        isRequired: true,
        inputType: "object",
        description: "The user's address information, structured as a nested object.",
        objectValues: [
            {
                name: "street address",
                type: "string",
                isRequired: false,
                inputType: "text",
                description: "The street address where the user resides."
            },
            {
                name: "city",
                type: "string",
                isRequired: true,
                inputType: "text",
                description: "The city of the user's residence."
            },
            {
                name: "region",
                type: "string",
                isRequired: true,
                inputType: "text",
                description: "The state or region of the user's residence."
            },
            {
                name: "postal code",
                type: "string",
                isRequired: true,
                inputType: "text",
                description: "The postal code for the user's address."
            },
            {
                name: "country",
                type: "string",
                isRequired: true,
                inputType: "text",
                description: "The country where the user resides."
            }
        ]
    }

    return (
        <Flex flexDir={"column"} gap={2} mt={"1rem"}>
            {array?.length > 0 && array.map((item:ItemType, index:number) => {
                return (
                    <>
                        <BodyParamArrayItem type={arrayType === "string array" ? "string" : "object"} header={arrayType === "string array"  ? "STRING" : "OBJECT"} deleteItem={deleteItem}/>
                    </>
                )
            })}
            <AddItem addItem={addItem} item={arrayType === "string array" ? sampleString : sampleObject} />
        </Flex>
    )
}


const AddItem = ({addItem, item}: AddItemProps) => {
    return (
        <Button fontSize={"s"} justifyContent={"start"} h={"30px"} px={"10px"} bg={"white"} border={"border-input"} rounded={"lg"} color={"font-default"} w={"100%"} onClick={() => addItem(item)}>{`ADD ${typeof item === "string" ? "STRING" : "OBJECT"}`}</Button> 
    )
}



const BodyParamArrayItem = ({type, header, deleteItem}: BodyParamArrayItemProps) => {
    return (
        <Box bg={"white"} border={"border-input"} rounded={"lg"} px={"10px"}>
        <AccordionRoot collapsible>
            <AccordionItem  value="hola">
                 <AccordionItemTrigger display={"flex"} justifyContent={"space-between"} h={"30px"}>
                    <Text fontSize={"s"}>{header}</Text>
                    <Flex gap={2}>
                        {/* TODO => REPLACE BUTTON TEXT WITH ICONS, FIGURE OUT HOW TO DELETE */}
                        <Button onClick={()=> deleteItem(0)} size={"xs"}>Delete</Button>
                        <Button size={"xs"}>Close</Button>
                    </Flex>
                 </AccordionItemTrigger>
                 <AccordionItemContent>
                    <Box w={"100%"} mb={"1rem"}>
                        {type === "object" ? <BodyParamsContainer /> : <SelectInput width={"100%"} value="test" options={["test1", "test2"]} />}
                    </Box>
                </AccordionItemContent>
            </AccordionItem>
        </AccordionRoot>
   </Box> 
    )
}



export default Inputs


