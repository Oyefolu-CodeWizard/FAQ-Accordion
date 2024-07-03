import iconMinus from "../assets/icon-minus.svg";
import iconPlus from "../assets/icon-plus.svg";
import iconStar from "../assets/icon-star.svg";

const faqs = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      <Header />
      <AccordionsList faqs={faqs} />
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src={iconStar} alt="IconStar" />
      <h1>FAQs</h1>
    </header>
  );
}

function AccordionsList({ faqs }) {
  return (
    <div className="accordion-list">
      {faqs.map((faq, i) => (
        <AccordionItem
          question={faq.question}
          answer={faq.answer}
          num={i}
          key={faq.question}
        />
      ))}
    </div>
  );
}

function AccordionItem({ question, answer, num }) {
  return (
    <div className="accordion-item">
      <div className="title">
        <p>{question}</p>
        <img src={iconPlus} alt="IconPlus" />
      </div>
      <div className="content">{answer}</div>
    </div>
  );
}

export default App;
