'use client';


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Posso testar o aplicativo de graça?",
    answer: "Sim! Ao cadastrar-se, você ganha 500 créditos gratuitos para começar a explorar a plataforma. 🚀",
    value: "item-1",
  },
  {
    question: "O app funciona tanto no celular quanto no computador?",
    answer: "Sim, o Zypeer está disponível como aplicativo para celular e também pode ser acessado no navegador de seu computador.",
    value: "item-2",
  },
  {
    question: "Quais funcionalidades estão disponíveis para estudantes?",
    answer: "Estudantes podem usar ferramentas de IA, participar de simulados e acessar materiais de estudo organizados em 'Espaços'.",
    value: "item-3",
  },
  {
    question: "Como os professores podem criar atividades no app?",
    answer: "Professores podem criar atividades personalizadas para seus alunos utilizando ferramentas interativas. As atividades são facilmente criadas e podem ser imprimidas ou baixadas como PDF",
    value: "item-4",
  },
  {
    question: "O que são 'Espaços' e como posso usá-los?",
    answer: "'Espaços' são áreas dedicadas para você salvar seus materias de estudo, onde você pode organizar e evoluir.",
    value: "item-5",
  },
  {
    question: "Quais ferramentas de IA o app oferece?",
    answer: "O app oferece várias ferramentas baseadas em IA, como assistentes de estudo, correção de questões, Plano de aula/estudo, Gerar imagem, Correção de questões e muito mais.",
    value: "item-6",
  },
  {
    question: "Como posso fazer simulados no app?",
    answer: "Você pode criar e participar de simulados dentro do app. Cada simulado permite apenas uma ou mais resposta por tentativa, o que ajuda a melhorar o aprendizado.",
    value: "item-7",
  },
  {
    question: "Como posso salvar e organizar meus arquivos?",
    answer: "Você pode salvar e organizar seus arquivos diretamente no app. Todos os materiais e atividades ficam armazenados de forma segura dentro de sua conta.",
    value: "item-8",
  },
];


export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32  px-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Perguntas{" "}
        <span className="bg-gradient-to-bl from-fuchsia-400/60 to-fuchsia-400 text-transparent bg-clip-text">
          Frequentes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Ainda tem dúvidas?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:edu@edu.zypeer.com.br"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Entre em contato
        </a>
      </h3>
    </section>
  );
};
