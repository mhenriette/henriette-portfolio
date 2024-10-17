import AnimatedButton from "../cards/AnimatedButton";
import Input from "../cards/Input";
import Social from "../cards/Social";
import Instagram from "../icons/Instagram";
import Upwork from "../icons/Upwork";
import LinkedIn from "../icons/LinkedIn";

const socials = [
  {
    id: 1,
    children: <Upwork fill="#ffffff" />,
    href: "https://www.upwork.com/freelancers/~017f56b580cc53e555?viewMode=1",
  },
  {
    id: 2,
    children: <Instagram fill="#ffffff" />,
    href: "https://www.instagram.com/__munezero/",
  },
  {
    id: 3,
    children: <LinkedIn fill="#ffffff" />,
    href: "https://www.linkedin.com/in/henriette-munezero-02043920b/",
  },
];

export default function Contact() {
  return (
    <div id="contact" className="max-w-6xl py-8 md:py-12 mx-auto w-full items-start flex flex-col md:flex-row justify-center gap-32 px-3">
      <div className="md:flex-1">
        <h1 className="font-semibold text-2xl md:text-3xl leading-10 mb-5">
          Let&apos;s get in <span className="text-secondary"> touch</span>
        </h1>
        <p className="my-5 text-lg">
          Feel free to reach out to me on social media or drop a message on my
          portfolio.
        </p>
        <div className="flex items-center w-full  justify-center gap-10">
          {socials.map((social) => (
            <Social key={social.id} href={social.href}>{social.children}</Social>
          ))}
        </div>
      </div>
      <div className="md:flex-1 w-full">
        <form className="items-center flex flex-col">
          <div className="grid md:grid-cols-2 md:gap-6 w-full">
            <Input type="text" label="First name" id="floating_first_name" />
            <Input type="text" label="Last name" id="ffloating_last_name" />
          </div>
          <Input id="floating_email" type="email" label=" Email address" />
          <Input textArea id="message" />
          <AnimatedButton onClick={()=>{}}>Submit</AnimatedButton>
        </form>
      </div>
    </div>
  );
}
