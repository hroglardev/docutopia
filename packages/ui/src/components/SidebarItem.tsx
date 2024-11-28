import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger, Flex,
    } from "@chakra-ui/react"
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
    selected: string
    onSelect: (value:string) => void
  }

  const SidebarItem = ({value, title, options, selected, onSelect}:Props) => {
    
    return (
      <AccordionItem  as={"li"} border={"none"} value={value}>
       <AccordionItemTrigger mb={"5px"} p={"0.5rem"} _hover={{"backgroundColor": "primary-color-200"}} onClick={() => onSelect(options[0].text)} cursor={"pointer"}>{title}</AccordionItemTrigger>
       <AccordionItemContent>
        {options.map((option, index) => {
          return (
          
            <Flex mb={"5px"} color={selected === option.text ? "sidebar-text-selected-color" : undefined} _hover={{"backgroundColor": "primary-color-200"}} bg={selected === option.text ? "sidebar-item-selected-color" : undefined} onClick={() => onSelect(option.text)} rounded={"6px"} cursor={"pointer"} p={"0.2rem 1rem"} justifyContent={"space-between"} alignItems={"center"} key={`${index+ option.text}`}>
              <h3>{option.text}</h3>
              <MethodBadge method={option.method} />
            </Flex>
            
            
          )
        })}
       </AccordionItemContent>
      </AccordionItem>
    
    )
          
  }
  
  
  export default SidebarItem