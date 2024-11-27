
  

  import {
    AccordionRoot} from "@chakra-ui/react"
import SidebarItem from "./SidebarItem"
  
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
    ];
    
      
    return (
      <AccordionRoot bg={"black"} maxW={"10rem"} collapsible defaultValue={["b"]}>
        {items.map((item, index) => (
         <SidebarItem key={`${index + item.title}`} value={item.value} options={item.options} title={item.title} />
        ))}
      </AccordionRoot>
    )
  }


  
  
  export default Sidebar