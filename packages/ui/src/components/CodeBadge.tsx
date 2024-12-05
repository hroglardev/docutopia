import { Box } from "@chakra-ui/react"

interface CodeBadgeProps {
    variant: string
}

const CodeBadge = ({variant}: CodeBadgeProps) => {
  return (
    <Box bg={`code-status-${variant}`} border={"1px solid rgba(0, 0, 0, .15)"} w={"10px"} h={"10px"} rounded={"full"} boxShadow={"shadow-code-status"} p={"5px"}></Box>
  )
}

export default CodeBadge