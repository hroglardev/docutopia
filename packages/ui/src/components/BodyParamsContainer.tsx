import { Box, Separator } from "@chakra-ui/react"
import BodyParamField, { BodyParamFieldProps } from "./BodyParamField"

const stuff: BodyParamFieldProps[] = [
  {
      name: "name",
      type: "string",
      isRequired: true,
      inputType: "select",
      description: "The name of the user, chosen from a predefined list.",
      selectOptions: [
          "test1",
          "test2",
          "test3",
          "test4"
      ]
  },
  {
      name: "email",
      type: "string",
      isRequired: true,
      inputType: "text",
      description: "The email address of the user, required for communication."
  },
  {
      name: "phone",
      type: "string",
      isRequired: false,
      inputType: "text",
      description: "The phone number of the user, optional for contact purposes."
  },
  {
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
  },
  {
    name: "phone",
    type: "array",
    isRequired: false,
    inputType: "string array",
    description: "The phone number of the user, optional for contact purposes."
  },
  {
    name: "email",
    type: "array",
    isRequired: true,
    inputType: "object array",
    description: "Test array of strings"
  }
];


const BodyParamsContainer = () => {
  return (
    <Box bg={"bg-body-param"} border={"border-body-param"} rounded={"lg"}>
        {stuff.map((bodyParam, index) => {
            return (
                <>
                    <BodyParamField description={bodyParam.description} key={`${index}${bodyParam.name}`} name={bodyParam.name} type={bodyParam.type} isRequired={bodyParam.isRequired} inputType={bodyParam.inputType} objectValues={bodyParam.objectValues} selectOptions={bodyParam.selectOptions} />
                    {index + 1 < stuff.length && <Separator />}
                </>
            )
        })}
    </Box>
  )
}

export default BodyParamsContainer