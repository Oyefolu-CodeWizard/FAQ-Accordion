import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function AccordionsList({ faqs }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion-list">
      {faqs.map((faq, i) => (
        <AccordionItem
          curOpen={curOpen}
          setCurOpen={setCurOpen}
          question={faq.question}
          answer={faq.answer}
          num={i}
          key={faq.question}
        />
      ))}
    </div>
  );
}
