import { asset } from "$fresh/runtime.ts";
import { useDevice } from "@deco/deco/hooks";

export default function About() {
  const device = useDevice();
  return (
    <section
      id="about"
      class="bg-cover bg-center bg-no-repeat py-20 min-h-[658px] bg-accent text-[#000A36] flex items-center"
      style={device === "desktop"
        ? {
          backgroundImage: `url('${asset(`/bannermeiod.png`)}')`,
        }
        : undefined}
    >
      <div class="container mx-auto px-4 flex items-center flex-col gap-5">
        <img
          class={"w-full max-w-[320px] lg:hidden"}
          src={asset("/girl.png")}
        />
        <div className="lg:max-w-[600px] lg:ml-auto block">
          <h1 class="text-[#000A36] text-5xl font-semibold">
            Sobre a Farmácia Já
          </h1>

          <p class="mt-5">
            A Farmácia Já, do grupo Farmácias Neco Ltda (CNPJ
            53.737.006/0001-02), nasceu com o propósito de oferecer saúde,
            bem-estar e cuidado em cada atendimento. Trabalhamos com
            medicamentos, vitaminas, suplementos, perfumaria, higiene,
            cosméticos e produtos infantis, sempre seguindo as normas da ANVISA.
            Estamos localizados na Av. Comendador Dante Carraro, 512,
            Carapicuíba–SP, com responsabilidade técnica de Rones de Lima Santos
            (CRF 123580). Nosso compromisso é entregar praticidade, confiança e
            preços justos, garantindo uma experiência simples e segura desde o
            site até a entrega.
          </p>

          <p class="mt-2">
            Nosso objetivo é estar presentes no dia a dia dos clientes,
            oferecendo um atendimento atencioso, produtos de qualidade e um
            processo de compra fácil e transparente. Trabalhamos continuamente
            para manter um ambiente seguro, prático e alinhado com as
            necessidades de cada pessoa que confia em nossos serviços.
          </p>
        </div>
      </div>
    </section>
  );
}
