import {Grid, GridItem } from "@chakra-ui/react"


interface props {
    code: number
    message: string
}

const Response = ({code, message}: props) => {
  return (
   <Grid templateColumns={"auto 1fr"} templateRows={"1fr 1fr"}>
    <GridItem colSpan={1} rowStart={1} rowEnd={2}>{code}</GridItem>
    <GridItem colSpan={1} rowStart={2} rowEnd={3}>{message}</GridItem>
    <GridItem alignContent={"center"} colSpan={1} rowStart={1} rowEnd={3}>arrow</GridItem>
   </Grid>
  )
}

export default Response