import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import s from "./s.module.scss";
import { OurStory } from "@/widgets/OurStory";
import { Benefits } from "@/widgets/Benefits";
import { OurWorkers } from "@/widgets/OurWorkers";
export const AboutPage = () => {
  return (
    <div className={`container ${s.wrapper}`}>
      <Breadcrumbs steps={[{ name: "Home", href: "/" }, { name: "About" }]} />

      <OurStory />
      <OurWorkers />
      <Benefits />
    </div>
  );
};
