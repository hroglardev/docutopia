import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger, Flex, Text
    } from "@chakra-ui/react"
import MethodBadge from "./Methodbadge"

  

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
      <AccordionItem color={"font-default"} fontSize={"m"} as={"li"} border={"none"} value={value}>
       <AccordionItemTrigger p={"3px 5px 3px"} fontSize={"m"} mb={"5px"}  _hover={{"backgroundColor": "bg-body-param"}} onClick={() => onSelect(options[0].text)} cursor={"pointer"}>{title}</AccordionItemTrigger>
       <AccordionItemContent>
        {options.map((option, index) => {
          return (    
            <Flex mb={"5px"} color={selected  === option.text ? "font-sidebar-selected" : "font-default"} _hover={{"backgroundColor": "bg-body-param"}} bg={selected === option.text ? "sidebar-item-selected-color" : undefined} onClick={() => onSelect(option.text)} rounded={"default"} cursor={"pointer"} p={"3px 5px 3px 15px"} justifyContent={"space-between"} alignItems={"center"} key={`${index+ option.text}`}>
              <Text>{option.text}</Text>
              <MethodBadge method={option.method} />
            </Flex>
          )
        })}
       </AccordionItemContent>
      </AccordionItem>
    
    )
          
  }
  
  
  export default SidebarItem