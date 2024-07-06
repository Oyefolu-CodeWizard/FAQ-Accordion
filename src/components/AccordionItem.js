import iconMinus from "../assets/icon-minus.svg";
import iconPlus from "../assets/icon-plus.svg";

export default function AccordionItem({
  num,
  question,
  answer,
  curOpen,
  setCurOpen,
}) {
  const isOpen = num === curOpen;

  function handleToggle() {
    setCurOpen(isOpen ? null : num);
  }

  return (
    <div className="accordion-item" onClick={handleToggle}>
      <div className="title">
        <p>{question}</p>
        <img src={isOpen ? iconMinus : iconPlus} alt="IconPlus" />
      </div>
      {isOpen && <div className="content">{answer}</div>}
    </div>
  );
}
