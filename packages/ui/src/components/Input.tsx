import { Stack, Input, NativeSelectRoot, NativeSelectField } from "@chakra-ui/react"
import { Field } from "./ui/field"


const InputField = () => {
  return (
    <></>
  )
}

interface TextInputProps {
    label: string
    value: string | number
}


// FOR GET REQUESTS. 
const TextInput = ({value, label}: TextInputProps) => {
    return (
            <Field label={"email"}>
                <Input value={value}></Input>
            </Field>
    )
}

interface SelectInputProps {
    value: string
    options: string[]
}



// FOR POSTS
const SelectInput = ({value, options}: SelectInputProps) => {
    return (
      <NativeSelectRoot>
        <NativeSelectField placeholder={value}>
            {options.map((option, index) => {
                return (
                    <option key={`${option + index}`} value={option} ></option>
                )
            })}
        </NativeSelectField>
      </NativeSelectRoot>
    )
}

const NumberInput = () => {
    return (
        <></>
    )
}

const TextArea = () => {
    return (
        <></>
    )
}
export default InputField