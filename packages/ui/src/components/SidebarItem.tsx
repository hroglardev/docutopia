import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger, Flex} from "@chakra-ui/react"
import MethodBadge from "./Methodbadge"
import { useState } from "react"
  

  interface MenuOption {
     text: string
     method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE"
   }

  interface Props  {
    key?: string
    value: string
    title: string
    options: MenuOption[]
  }

  const SidebarItem = ({value, title, options}:Props) => {
    
    return (
    <>
      <AccordionItem value={value}>
       <AccordionItemTrigger >{title}</AccordionItemTrigger>
       <AccordionItemContent>
        {options.map((option, index) => {
          return (
            <Flex gap={"5px"} alignItems={"center"} key={`${index+ option.text}`}>
              <h3>{option.text}</h3>
              <MethodBadge method={option.method} />
            </Flex>
          )
        })}
       </AccordionItemContent>
      </AccordionItem>
    </>
    )
          
  }
  
  
  export default SidebarItem