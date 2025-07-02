import {
    Accordion,
    AccordionPanel,
    AccordionTitle,
    AccordionContent,
} from "flowbite-react";
import { BlockTitle } from "../typography";

export default function FAQAccordion({ title, faqs }) {
    return (
        <div className="space-y-8">
            <BlockTitle title={title} />
            <Accordion collapseAll>
                {faqs?.map((faq, i) => (
                    <AccordionPanel key={i}>
                        <AccordionTitle>{faq?.question}</AccordionTitle>
                        <AccordionContent>{faq?.answer}</AccordionContent>
                    </AccordionPanel>
                ))}
            </Accordion>
        </div>
    );
}
