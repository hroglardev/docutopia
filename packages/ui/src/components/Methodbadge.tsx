import { Badge, Stack } from "@chakra-ui/react"


interface props {
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE"
}

const MethodBadge = ({method}:props) => {
  return (
    <Stack align="flex-start">
      <Badge
  roundedLeft={100}
  roundedRight={100}
  px={"1rem"}
  variant="solid"
  color={"white"}
  colorPalette={
    method === "GET"
      ? "green"
      : method === "POST"
      ? "blue"
      : method === "DELETE"
      ? "red"
      : method === "PUT"
      ? "purple"
      : "orange"
  }
>

        {method}
      </Badge>
    </Stack>
  )
}
export default MethodBadge