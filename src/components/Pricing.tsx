'use client';


import Check from "@/assets/verify.svg";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader
} from "@/components/ui/card";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  plan: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Super Básico",
    popular: 0,
    price: "R$ 0,89",
    plan: "100 créditos",
    description:
      "O plano básico opera com créditos que você pode adquirir e usar livremente na plataforma.",
    buttonText: "Começe grátis",
    benefitList: [
      "Chat com 4 IAs básicas",
      "Tarefas",
      "Quiz",
      "1GB de Armazenamento",
      "Crie atividades",
      "Espaços",
      "Ferramentas de IA",
      "Simulados (1 resposta por simulado)",
      "Salve e organize seus arquivos",
      "Gerar slides"
    ]
  },
  {
    title: "Ilimitado",
    popular: 1,
    price: "R$ 16,90",
    plan: "mês",
    description:
      "Com o plano ilimitado da Zypeer, você terá acesso completo a todos os recursos da plataforma.",
    buttonText: "Começe agora",
    benefitList: [
      "Chats com 4 IAs básicas",
      "Chat com 4 IAs Premium",
      "Tarefas",
      "10GB de Armazenamento",
      "Crie atividades",
      "Espaços",
      "Ferramentas de IA",
      "Salve e organize seus arquivos",
      "Gerar slides",
      "Suporte dedicado",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: "Há consultar",
    plan: "mês",
    description:
      "Leve a zypeer para sua instituições de ensino, e tenha uma solução completa e personalizada.",
    buttonText: "Entrar em contato",
    benefitList: [
      "Chats com 4 IAs básicas",
      "Chat com 4 IAs Premium",
      "20GB de Armazenamento",
      "Tarefas",
      "Crie atividades",
      "Espaços",
      "Ferramentas de IA",
      "Salve e organize seus arquivos",
      "Gerar slides",
      "Suporte dedicado",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="section-price w-full flex items-center justify-center"
    >
      <div className="container py-24 sm:py-32 px-8">
        <h2 className="text-center w-full bg-gradient-to-r from-[#EC75FF]  to-[#C8A6FF] text-transparent bg-clip-text text-4xl font-bold">
          Navegue de forma ilimitada
        </h2>
        <h3 className="text-2xl text-center text-muted-foreground pt-4 pb-8">
          Confira nossos planos que cabem no seu bolso.
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingList.map((pricing: PricingProps) => (
            <div
              key={pricing.title}
              className={
                (pricing.popular === PopularPlanType.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 bg-[#1A1A1A]"
                  : "bg-[#1A1A1A]") +
                " rounded-2xl"
              }
            >
              <CardHeader>
                <h3 className="flex item-center justify-between inline bg-gradient-to-r from-[#EC75FF]  to-[#C8A6FF] text-transparent bg-clip-text text-4xl font-bold">
                  {pricing.title}
                  {/* {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Popular
                  </Badge>
                ) : null} */}
                </h3>
                <div>
                  <span className="text-3xl font-bold">{pricing.price}</span>
                  <span className="text-muted-foreground"> / {pricing.plan}</span>
                </div>

                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button className="w-full rounded-lg bg-fuchsia-400" onClick={() => {
                  window.open(`https://edu.zypeer.com.br/auth/register?plan-type=${pricing.title}`, "_blank")
                }}>{pricing.buttonText}</Button>
              </CardContent>
              <CardFooter className="flex">
                <div className="space-y-4">
                  {pricing.benefitList.map((benefit: string) => (
                    <span
                      key={benefit}
                      className="flex"
                    >
                      <img src={Check} alt="Check" />{" "}
                      <h3 className="ml-2">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
