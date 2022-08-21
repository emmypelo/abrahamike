import React from "react";
import {
    Accordion as Daccordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { services } from "../data";

const Accordion = () => {
  return (
    <div className="wrapper">
      {services.map((service) => (
        <div className="accordion" key={service.id}>
            <Daccordion allowZeroExpanded preExpanded={[0]}>
         <AccordionItem uuid={service.id}>
                <AccordionItemHeading className="service-title">
                    <AccordionItemButton>
                        {service.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="service-content">
                       {service.content}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </Daccordion>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
