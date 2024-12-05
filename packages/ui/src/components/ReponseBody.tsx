import { Flex, Separator, Text } from "@chakra-ui/react"
import ApiField from "./ApiField";


interface ResponseBodyProps {
    responseType: string
}



const responses = [
    {
        name: "error",
        type: "string",
        default: "Defaults to VERSION_EMPTY",
        description: "An error code unique to the error received."
    },
    {
        name: "message",
        type: "string",
        description: "The reason why the error occurred."
    },
    {
        name: "suggestion",
        type: "string",
        description: "A helpful suggestion for how to alleviate the error."
    },
    {
        name: "docs",
        type: "url",
        description: "A ReadMe Metrics log URL where you can see more information about the request you made. If metrics URLs are unavailable for your request, this URL will be a link to our API Reference."
    },
    {
        name: "help",
        type: "string",
        description: "Information on where you can receive additional assistance from our wonderful support team."
    },
    {
        name: "poem",
        type: "array of strings",
        description: "A short poem we wrote you about your error."
    }
];


const ReponseBody = ({responseType}: ResponseBodyProps) => {
  return (
    <Flex flexDir={"column"}  border={"border-body-param"} rounded={"lg"}>
        <Text p={"10px"} fontSize={"s"} color={"font-minimum"} borderBottom={"border-body-param"}>{responseType}</Text>
        {responses.map((response, index) => {
            return (
                <>
                    <ApiField name={response.name} type={response.type} description={response.description} isRequired={true}/>
                    {index + 1 < responses.length && <Separator />}
                </>
            )
        })}
    </Flex>
  )
}

export default ReponseBody