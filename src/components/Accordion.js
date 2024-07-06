import { faqs } from "./App";
import AccordionsList from "./AccordionsList";
import Header from "./Header";

export default function Accordion() {
  return (
    <div className="accordion">
      <Header />
      <AccordionsList faqs={faqs} />
    </div>
  );
}
