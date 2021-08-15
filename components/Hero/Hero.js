import { PaperAirplaneIcon } from "@heroicons/react/solid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";
const Hero = () => {
  return (
    <div
      className="flex flex-col justify-center items-center lg:flex-row lg:min-h-[80vh]"
      id="home"
    >
      <div className="flex-col flex justify-around items-center lg:flex-row">
        <div className="flex justify-around h-auto w-2/5 mb-6 mt-2 lg:flex-col lg:h-60 lg:w-auto lg:mb-0 lg:mt-0">
          {/* social meda */}
          <Link href="https://github.com/Nik0di3m">
            <a target="_blank" rel="noreferrer noopener">
              <GitHubIcon
                fontSize="large"
                style={{ color: "#FE6D04" }}
                className="hover:scale-110 cursor-pointer "
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/norbert-waleszczyk-7717a120a/">
            <a target="_blank" rel="noreferrer noopener">
              <LinkedInIcon
                fontSize="large"
                style={{ color: "#FE6D04" }}
                className="hover:scale-110 cursor-pointer"
              />
            </a>
          </Link>
        </div>
        {/* main container */}
        <div className="flex flex-col justify-center break-words w-5/6 h-auto lg:w-5/12">
          <div>
            <h1 className="text-4xl font-medium">Hi, I m Norbert</h1>
            <h2 className="text-2xl mt-2">Web developer</h2>
          </div>
          <div className="mt-6">
            <p className="w-5/6 font-light lg:w-2/3 dark:text-secondary">
              Junior level experience in web developer. In love with React and
              Firebase, producing quality work with passion.
            </p>
          </div>
          <Button
            text="Contact Me"
            icon={<PaperAirplaneIcon className="h-6 rotate-90" />}
            style="mt-6 shadow-md w-40"
            color="bg-orange text-light"
            link="#contact"
          />
        </div>
        <div className="p-2">
          {/* image */}
          <Image
            src="/images/hero.svg"
            width="500"
            height="500"
            alt="Web developer image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
