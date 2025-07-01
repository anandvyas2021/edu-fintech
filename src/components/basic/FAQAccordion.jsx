import { Accordion } from "flowbite-react";

export default function FAQAccordion({ faqs }) {
    return (
        <Accordion collapseAll>
            {faqs?.map((faq, i) => (
                <Accordion.Panel key={i}>
                    <Accordion.Title>{faq?.question}</Accordion.Title>
                    <Accordion.Content>{faq?.answer}</Accordion.Content>
                </Accordion.Panel>
            ))}
        </Accordion>
    );
}
