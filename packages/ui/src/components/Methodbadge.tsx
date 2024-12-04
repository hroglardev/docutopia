import { Badge, Stack } from "@chakra-ui/react";
import { useToken } from "@chakra-ui/react";

interface Props {
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
}

const MethodBadge = ({ method }: Props) => {
  

  const [secColor50, secColor600, secColor500] = useToken("colors", [
    "secondary-color-50",
    "secondary-color-600",
    "secondary-color-500",
  ]);
  const [methodColor, methodShadow] = useToken("colors", [
    `primary-color-method-${method.toLowerCase()}`,
    `secondary-color-method-${method.toLowerCase()}`,
  ]);
  

  return (
    <Stack align="flex-start">
      <Badge
        textTransform="uppercase"
        whiteSpace="nowrap"
        minW="2.5rem"
        color="color-base-white"
        lineHeight="1rem"
        height="1rem"
        fontSize="xxs"
        roundedLeft={100}
        roundedRight={100}
        justifyContent={"center"}
        boxShadow={`inset 0 0.0625rem 0.0625rem 0 ${secColor50}, 
        inset 0 -0.0625rem 0.125rem 0 ${secColor600}, 
        0 0.0625rem 0.125rem 0 ${secColor500}`}
        fontWeight="semiBold"
        bg={methodColor}
        textShadow={`0.0625rem 0.0625rem 0 ${methodShadow}, 
                     0 0.0625rem 0 ${methodShadow}, 
                     0.0625rem 0 0 ${methodShadow}`}
      >
        {method}
      </Badge>
    </Stack>
  );
};

export default MethodBadge;
