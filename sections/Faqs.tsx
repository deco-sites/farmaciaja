import Section from "site/components/ui/Section.tsx";

interface Props {
  title: string;
  faqs: {
    title: string;
    content: string;
  }[];
}
export default function FAQs({ title, faqs }: Props) {
  return (
    <div class="bg-accent w-full mt-16 lg:mt-24 py-16 lg:py-[182px] text-[#000A36]">
      <div className="container mx-auto">
        <h2 class="text-xl font-bold lg:text-[32px] text-center text-[#000A36]">{title}</h2>
        <div class="space-y-5 lg:space-y-9 mt-5 lg:mt-10">
          {faqs.map((faq, index) => (
            <details key={index} class="group">
              <summary class="flex justify-between items-center cursor-pointer lg:text-xl font-medium list-none bg-[#fff] text-[#000A36] p-5 lg:px-[50px] lg:py-9 rounded-[20px]">
                <span>{faq.title}</span>

                <div class="relative w-[31px] h-[31px]">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-[20px] h-[3px] bg-base-content"></div>
                  </div>

                  <div class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-open:opacity-0">
                    <div class="w-[3px] h-[20px] bg-base-content"></div>
                  </div>
                </div>
              </summary>
              <div class="lg:text-2xl text-primary-content mt-9 px-[50px]">
                {faq.content}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="635px" />;