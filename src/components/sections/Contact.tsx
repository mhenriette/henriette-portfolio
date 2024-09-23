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
  },
  {
    id: 2,
    children: <Instagram fill="#ffffff" />,
  },
  {
    id: 3,
    children: <LinkedIn fill="#ffffff" />,
  },
];

export default function Contact() {
  return (
    <div className="max-w-6xl my-8 md:my-12 mx-auto w-full items-start flex justify-center gap-32">
      <div className="flex-1">
        <h1 className="font-semibold text-2xl md:text-3xl leading-10 mb-5">
          Let&apos;s get in <span className="text-secondary"> touch</span>
        </h1>
        <p className="my-5 text-lg">
          Feel free to react out to me on social media or drop a message on my
          portfolio.
        </p>
        <div className="flex items-center w-full  justify-center gap-10">
          {socials.map((social) => (
            <Social key={social.id}>{social.children}</Social>
          ))}
          
        </div>
      </div>
      <div className="flex-1">
        <form className="items-center flex flex-col">
          <div className="grid md:grid-cols-2 md:gap-6 w-full">
            <Input type="text" label="First name" id="floating_first_name" />
            <Input type="text" label="Last name" id="ffloating_last_name" />
          </div>
          <Input id="floating_email" type="email" label=" Email address" />
          <Input textArea id="message" label="Leave a message" />
          <AnimatedButton>Submit</AnimatedButton>
        </form>
      </div>
    </div>
  );
}
