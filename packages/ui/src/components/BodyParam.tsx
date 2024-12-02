import { Box,Text } from "@chakra-ui/react"

interface props {
    name: string
    type: string
    isRequired: boolean
    default?: string
    description: string
    inputType?: string
}

const BodyParam = ({name, type, isRequired = false, description}: props) => {
  return (
    <Box>
        <Text>{name}</Text>
        <Text>{type}</Text>
        {isRequired && <Text></Text>}
        <Text>{description}</Text>
    </Box>
  )
}

export default BodyParam