import { Accordion } from "@material-tailwind/react";
import { ChevronDown } from "lucide-react";

import { BlockTitle } from "../typography";

export default function FAQAccordion({ title, faqs }) {
    return (
        <div className="space-y-8">
            <BlockTitle title={title} />
            {faqs?.map((faq, i) => (
                <Accordion key={i}>
                    <Accordion.Item
                        value={i}
                        className="mb-2 rounded-lg border border-surface p-3"
                    >
                        <Accordion.Trigger className="p-0">
                            {faq?.question}
                            <ChevronDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
                        </Accordion.Trigger>
                        <Accordion.Content className="pb-0 pt-3">
                            {faq?.answer}
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            ))}
        </div>
    );
}

{
    /* <Accordion.Item
    value="react"
    className="mb-2 rounded-lg border border-surface p-3"
>
    <Accordion.Trigger className="p-0">
        Material Tailwind React
        <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
    </Accordion.Trigger>
    <Accordion.Content className="pb-0 pt-3">
        Material Tailwind is an open-source crafted in Tailwind CSS. Get
        Material Tailwind and take advantage of its free components and features
        that will help you set up your web project quickly.
    </Accordion.Content>
</Accordion.Item> */
}
