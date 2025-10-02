'use client';


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

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
    title: "Básico",
    popular: 0,
    price: "R$ 0,89",
    plan: "100 créditos",
    description:
      "O plano básico opera com créditos que você pode adquirir e usar livremente na plataforma.",
    buttonText: "Começe grátis",
    benefitList: [
      "Chat",
      "Tarefas",
      "Quiz",
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
      "Zypeer chat",
      "Tarefas",
      "Crie atividades",
      "Espaços",
      "Ferramentas de IA",
      "Simulados (3 resposta por simulado)",
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
      "Zypeer chat",
      "Tarefas",
      "Crie atividades",
      "Espaços",
      "Ferramentas de IA",
      "Simulados (3 resposta por simulado)",
      "Salve e organize seus arquivos",
      "Gerar slides",
      "Suporte dedicado"
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32  px-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Navegue de forma
        <span className="bg-gradient-to-bl from-fuchsia-400/60 to-fuchsia-400 text-transparent bg-clip-text">
          {" "}
          ilimitada{" "}
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Confira nossos planos que cabem no seu bolso.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price}</span>
                <span className="text-muted-foreground"> / {pricing.plan}</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full" onClick={() => {
                window.open(`https://edu.zypeer.com.br/auth/register?plan-type=${pricing.title}`, "_blank")
              }}>{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
