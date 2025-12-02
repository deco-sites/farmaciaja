import { ImageWidget } from "apps/admin/widgets.ts";
import { useDevice } from "@deco/deco/hooks";
import Section from "site/components/ui/Section.tsx";
import { asset } from "$fresh/runtime.ts";

interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  backgroundImage?: ImageWidget;
  backgroundImageMobile?: ImageWidget;
  cta?: CTA;
}

export default function MainHero(
  { title, backgroundImage, backgroundImageMobile, cta }: Props,
) {
  const device = useDevice();
  return (
    <>
      <style />
      <div
        className="w-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${
            device === "desktop" ? backgroundImage : backgroundImageMobile
          })`,
        }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row justify-center gap-8 lg:gap-0">
          <div class="pt-20 lg:py-20 self-center">
            <div class="mb-8 hero-main-title max-w-[504px]">
              <h1 class="text-3xl lg:text-5xl text-white font-semibold">
                Seu bem-estar, nossa prioridade
              </h1>
              <p className="text-xl lg:text-[34px] leading-[34px] mt-4 text-white font-normal">
                Encontre produtos para o dia a dia que fazem toda a diferença.
              </p>
            </div>
            <a
              class={`btn-primary btn btn-lg text-xl font-semibold rounded-full text-white`}
            >
              Preço baixo é aqui!
            </a>
          </div>
          <img
            class={"max-w-[800px] lg:self-end"}
            src={asset("/rm.png")}
          />
        </div>
      </div>
    </>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="635px" />;
