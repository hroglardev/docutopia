import {Box, Flex, Text, AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent} from "@chakra-ui/react"
import CodeBadge from "./CodeBadge"
import ReponseBody from "./ReponseBody"

export interface ResponseFieldProps {
    code: number
    description: string
    variant?: string
}

// TWO variants for responses. One basic and one collapsible

export const ResponseField = ({code, description}: ResponseFieldProps) => {
  return (
    <Box p={"10px"} _hover={{bg: "white"}} w={"100%"}>
        <Flex alignItems={"center"} gap={2}>
            <CodeBadge variant={code >= 400 ? "red" : code >= 300 ? "orange" : code >= 200 ? "green" : "" } />
            {code}
        </Flex>
        <Box textAlign={"left"}>
            <Text fontSize={"s"} color={"font-minimum"}>{description}</Text>
        </Box>
    </Box>
  )
}


export const ResponseFieldAccordion = ({code, description}: ResponseFieldProps) => {
  return (
    <AccordionRoot collapsible>
            <AccordionItem value="hola">
                 <AccordionItemTrigger p={0}>
                    <ResponseField code={code} description={description}/>
                 </AccordionItemTrigger>
                 <AccordionItemContent p={"10px"}>
                    <ReponseBody responseType="object" />
                </AccordionItemContent>
            </AccordionItem>
        </AccordionRoot>
  )
}




export default ResponseField