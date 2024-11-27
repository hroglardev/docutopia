import { Badge, Stack } from "@chakra-ui/react";

interface props {
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
}

const MethodBadge = ({ method }: props) => {
  const methodStyles = {
    GET: {
      bg: "primary-color-method-get",
      textShadow: `
        0.0625rem 0.0625rem 0 var(--secondary-color-method-get),
        0 0.0625rem 0 var(--secondary-color-method-get),
        0.0625rem 0 0 var(--secondary-color-method-get)`,
    },
    POST: {
      bg: "primary-color-method-post",
      textShadow: `
        0.0625rem 0.0625rem 0 var(--secondary-color-method-post),
        0 0.0625rem 0 var(--secondary-color-method-post),
        0.0625rem 0 0 var(--secondary-color-method-post)`,
    },
    DELETE: {
      bg: "primary-color-method-delete",
      textShadow: `
        0.0625rem 0.0625rem 0 var(--secondary-color-method-delete),
        0 0.0625rem 0 var(--secondary-color-method-delete),
        0.0625rem 0 0 var(--secondary-color-method-delete)`,
    },
    PUT: {
      bg: "primary-color-method-put",
      textShadow: `
        0.0625rem 0.0625rem 0 var(--secondary-color-method-put),
        0 0.0625rem 0 var(--secondary-color-method-put),
        0.0625rem 0 0 var(--secondary-color-method-put)`,
    },
    PATCH: {
      bg: "primary-color-method-patch",
      textShadow: `
        0.0625rem 0.0625rem 0 var(--secondary-color-method-patch),
        0 0.0625rem 0 var(--secondary-color-method-patch),
        0.0625rem 0 0 var(--secondary-color-method-patch)`,
    },
  };

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
        boxShadow={`
          inset 0 0.0625rem 0.0625rem 0 secondary-color-50,
          inset 0 -0.0625rem 0.125rem 0 secondary-color-600,
          0 0.0625rem 0.125rem 0 secondary-color-500`}
        fontWeight="semiBold"
        {...methodStyles[method]}
      >
        {method}
      </Badge>
    </Stack>
  );
};

export default MethodBadge;
