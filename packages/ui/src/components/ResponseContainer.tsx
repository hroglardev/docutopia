import {Box, Separator} from "@chakra-ui/react"
import ResponseField, { ResponseFieldProps } from "./ResponseField";

const responses: ResponseFieldProps[] = [
    
    { code: 200, description: "OK" },
    { code: 404, description: "Not Found" },
    { code: 302, description: "Redirection" },
    { code: 500, description: "Internal Server Error" },
    { code: 401, description: "Unauthorized" },
    { code: 403, description: "Forbidden" },
  ];

const ResponseContainer = () => {
  return (
    <Box bg={"bg-body-param"} border={"border-body-param"} rounded={"lg"}>
        {responses.map((response, index) => {
          return (
            <>
            <ResponseField code={response.code} description={response.description} />
            {index + 1 < responses.length && <Separator />}
            </>
          )
        })}
    </Box>
  )
}

export default ResponseContainer