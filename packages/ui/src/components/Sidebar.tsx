
  

  import {
    AccordionRoot,
    Button} from "@chakra-ui/react"
import SidebarItem from "./SidebarItem"
import { useState } from "react";
  
  const Sidebar = () => {
    

    const items: {
      value: string;
      title: string;
      options: { method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE"; text: string }[];
    }[] = [
      {
        value: "a",
        title: "First Item",
        options: [
          { method: "POST", text: "Do something 1A..." },
          { method: "GET", text: "Do something 1B..." },
          { method: "PATCH", text: "Do something 1C..." },
          { method: "DELETE", text: "Do something 1D..." },
        ],
      },
      {
        value: "b",
        title: "Second Item",
        options: [
          { method: "POST", text: "Do something 2A..." },
          { method: "GET", text: "Do something 2B..." },
          { method: "PATCH", text: "Do something 2C..." },
          { method: "DELETE", text: "Do something 2D..." },
        ],
      },
      {
        value: "c",
        title: "Third Item",
        options: [
          { method: "POST", text: "Do something 3A..." },
          { method: "GET", text: "Do something 3B..." },
          { method: "PATCH", text: "Do something 3C..." },
          { method: "DELETE", text: "Do something 3D..." },
        ],
      },
      {
        value: "d",
        title: "Fourth Item",
        options: [
          { method: "POST", text: "Do something 4A..." },
          { method: "GET", text: "Do something 4B..." },
          { method: "PATCH", text: "Do something 4C..." },
          { method: "DELETE", text: "Do something 4D..." },
          { method: "PUT", text: "Do something 4E..." },
        ],
      },
      {
        value: "e",
        title: "Fifth Item",
        options: [
          { method: "POST", text: "Do something 5A..." },
          { method: "GET", text: "Do something 5B..." },
          { method: "PATCH", text: "Do something 5C..." },
          { method: "DELETE", text: "Do something 5D..." },
          { method: "PUT", text: "Do something 5E..." },
        ],
      },
      {
        value: "f",
        title: "Sixth Item",
        options: [
          { method: "POST", text: "Do something 6A..." },
          { method: "GET", text: "Do something 6B..." },
          { method: "PATCH", text: "Do something 6C..." },
          { method: "DELETE", text: "Do something 6D..." },
          { method: "PUT", text: "Do something 6E..." },
        ],
      },
      {
        value: "g",
        title: "Seventh Item",
        options: [
          { method: "POST", text: "Do something 7A..." },
          { method: "GET", text: "Do something 7B..." },
          { method: "PATCH", text: "Do something 7C..." },
          { method: "DELETE", text: "Do something 7D..." },
          { method: "PUT", text: "Do something 7E..." },
        ],
      },
      {
        value: "h",
        title: "Eighth Item",
        options: [
          { method: "POST", text: "Do something 8A..." },
          { method: "GET", text: "Do something 8B..." },
          { method: "PATCH", text: "Do something 8C..." },
          { method: "DELETE", text: "Do something 8D..." },
          { method: "PUT", text: "Do something 8E..." },
        ],
      },
      {
        value: "i",
        title: "Ninth Item",
        options: [
          { method: "POST", text: "Do something 9A..." },
          { method: "GET", text: "Do something 9B..." },
          { method: "PATCH", text: "Do something 9C..." },
          { method: "DELETE", text: "Do something 9D..." },
          { method: "PUT", text: "Do something 9E..." },
        ],
      },
      {
        value: "j",
        title: "Tenth Item",
        options: [
          { method: "POST", text: "Do something 10A..." },
          { method: "GET", text: "Do something 10B..." },
          { method: "PATCH", text: "Do something 10C..." },
          { method: "DELETE", text: "Do something 10D..." },
          { method: "PUT", text: "Do something 10E..." },
        ],
      },
      {
        value: "k",
        title: "Eleventh Item",
        options: [
          { method: "POST", text: "Do something 11A..." },
          { method: "GET", text: "Do something 11B..." },
          { method: "PATCH", text: "Do something 11C..." },
          { method: "DELETE", text: "Do something 11D..." },
          { method: "PUT", text: "Do something 11E..." },
        ],
      },
      {
        value: "l",
        title: "Twelfth Item",
        options: [
          { method: "POST", text: "Do something 12A..." },
          { method: "GET", text: "Do something 12B..." },
          { method: "PATCH", text: "Do something 12C..." },
          { method: "DELETE", text: "Do something 12D..." },
          { method: "PUT", text: "Do something 12E..." },
        ],
      },
      {
        value: "m",
        title: "Thirteenth Item",
        options: [
          { method: "POST", text: "Do something 13A..." },
          { method: "GET", text: "Do something 13B..." },
          { method: "PATCH", text: "Do something 13C..." },
          { method: "DELETE", text: "Do something 13D..." },
          { method: "PUT", text: "Do something 13E..." },
        ],
      },
      {
        value: "n",
        title: "Fourteenth Item",
        options: [
          { method: "POST", text: "Do something 14A..." },
          { method: "GET", text: "Do something 14B..." },
          { method: "PATCH", text: "Do something 14C..." },
          { method: "DELETE", text: "Do something 14D..." },
          { method: "PUT", text: "Do something 14E..." },
        ],
      },
      {
        value: "o",
        title: "Fifteenth Item",
        options: [
          { method: "POST", text: "Do something 15A..." },
          { method: "GET", text: "Do something 15B..." },
          { method: "PATCH", text: "Do something 15C..." },
          { method: "DELETE", text: "Do something 15D..." },
          { method: "PUT", text: "Do something 15E..." },
        ],
      },
      {
        value: "p",
        title: "Sixteenth Item",
        options: [
          { method: "POST", text: "Do something 16A..." },
          { method: "GET", text: "Do something 16B..." },
          { method: "PATCH", text: "Do something 16C..." },
          { method: "DELETE", text: "Do something 16D..." },
          { method: "PUT", text: "Do something 16E..." },
        ],
      },
      {
        value: "q",
        title: "Seventeenth Item",
        options: [
          { method: "POST", text: "Do something 17A..." },
          { method: "GET", text: "Do something 17B..." },
          { method: "PATCH", text: "Do something 17C..." },
          { method: "DELETE", text: "Do something 17D..." },
          { method: "PUT", text: "Do something 17E..." },
        ],
      },
      {
        value: "r",
        title: "Eighteenth Item",
        options: [
          { method: "POST", text: "Do something 18A..." },
          { method: "GET", text: "Do something 18B..." },
          { method: "PATCH", text: "Do something 18C..." },
          { method: "DELETE", text: "Do something 18D..." },
          { method: "PUT", text: "Do something 18E..." },
        ],
      },
      {
        value: "s",
        title: "Nineteenth Item",
        options: [
          { method: "POST", text: "Do something 19A..." },
          { method: "GET", text: "Do something 19B..." },
          { method: "PATCH", text: "Do something 19C..." },
          { method: "DELETE", text: "Do something 19D..." },
          { method: "PUT", text: "Do something 19E..." },
        ],
      },
      {
        value: "t",
        title: "Twentieth Item",
        options: [
          { method: "POST", text: "Do something 20A..." },
          { method: "GET", text: "Do something 20B..." },
          { method: "PATCH", text: "Do something 20C..." },
          { method: "DELETE", text: "Do something 20D..." },
          { method: "PUT", text: "Do something 20E..." },
        ],
      },
    ];
    

    const [isOpen, setIsOpen] = useState(false)
    const [selected, setIsSelected] = useState(items[0].options[0].text) 

    console.log(selected, "PEPE")
    return (
      <>
      <Button justifyContent={"start"} w={"full"} bg={"red"} color={"black"} onClick={() => setIsOpen(!isOpen)}>{selected}</Button>
      <AccordionRoot pr={"0.25rem"} fontSize={"xm"} transition={"all 0.3s ease-in-out"} transformOrigin={"top left"} opacity={isOpen ? 1 : 0} scale={isOpen ? 1 : 0} overflowY={"auto"} as={"ul"}  w={{base: "sidebar-width-mobile", lg: "sidebar-width-desktop"}} h={"100dvh"} collapsible defaultValue={["a"]}>    
        {items.map((item, index) => (
         <SidebarItem key={`${index + item.title}`} value={item.value} options={item.options} title={item.title} selected={selected} onSelect={setIsSelected} />
        ))}
      </AccordionRoot>
      </>
    )
  }


  
  
  export default Sidebar