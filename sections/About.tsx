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
            Sobre a farmácia já
          </h1>
          <p class="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}
