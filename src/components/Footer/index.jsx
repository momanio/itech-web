import { motion } from "framer-motion";
import MainButton from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";

export default function Footer() {
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  return (
    <div className="bg-primary-300">
      {/* Contact */}
      <div className="border-b border-white/15 relative overflow-hidden">
        <div className="container mx-auto max-w-[1344px]">
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={footerContent}
            className="px-5 py-10 flex flex-col items-center text-center sm:px-10"
          >
            <SubHead
              color="text-white"
              style="mb-[18px] sm:w-9/12 md:w-9/12 lg:w-6/12"
            >
              We can fix your phone
            </SubHead>
            <Paragraph
              color="text-white/70"
              fontSize="text-sm"
              style="mb-[30px] sm:w-7/12 lg:w-5/12"
            >
              Don’t worry we’re here to help you and fix your phone right away.
            </Paragraph>
            <MainButton style="w-full sm:w-9/12 sm:w-fit lg:w-fit hover:bg-primary-300 hover:border-white hover:text-white transition-all duration-200 ease-in">
              CONTACT US
            </MainButton>
          </motion.section>
        </div>

        {/* Eclipse */}
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 15, repeat: "Infinity", ease: "easeInOut" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-1/4 -left-28"
          src="/eclipse-1.svg"
          alt="eclipse"
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 30, repeat: "Infinity", ease: "easeInOut" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-[20%] -right-24"
          src="/eclipse-2.svg"
          alt="eclipse"
        />
      </div>
      {/* Footer */}
      <footer className="container mx-auto max-w-[1344px]">
        <div className="px-5 py-10 flex flex-col sm:px-10 lg:grid grid-cols-3 lg:gap-y-32">
          <div className="lg:col-span-1">
            <img
              className="w-[125px] h-auto mb-10 lg:mb-0"
              src="itech-logo.svg"
              alt="shopify-footer"
            />
          </div>
          <div className="grid grid-cols-2 gap-9 font-body mb-[52px] md:grid-cols-4 lg:col-span-2 lg:mb-0">
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Mobiles</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Iphone
                </a>
                <a className="footer-link" href="#">
                  Samsung
                </a>
                <a className="footer-link" href="#">
                  Oppo
                </a>
                <a className="footer-link" href="#">
                  Honor
                </a>
                <a className="footer-link" href="#">
                  Infinix
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">
                Phone Cases
              </h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Silicon
                </a>
                <a className="footer-link" href="#">
                  Hard
                </a>
                <a className="footer-link" href="#">
                  x1
                </a>
                <a className="footer-link" href="#">
                  xc3
                </a>
                <a className="footer-link" href="#">
                  x5
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Charger</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Type-c
                </a>
                <a className="footer-link" href="#">
                  Micro
                </a>
                <a className="footer-link" href="#">
                  Iphone
                </a>
                <a className="footer-link" href="#">
                  Fast Charger
                </a>
                <a className="footer-link" href="#">
                  x1
                </a>
              </div>
            </div>
          </div>
          <div className="text-center lg:col-span-3 md:flex justify-between items-center">
            <div className="flex items-center justify-center gap-4 mb-4 order-2">
              <a href="" target="_blank">
                <img
                  className="footer-icon"
                  src="/instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="" target="_blank">
                <img className="footer-icon" src="/github.svg" alt="github" />
              </a>
              <a href="" target="_blank">
                <img
                  className="footer-icon"
                  src="/telegram.svg"
                  alt="telegram"
                />
              </a>
              <a href="" target="_blank">
                <img
                  className="footer-icon"
                  src="/linkedin.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <p className="font-body text-white font-medium order-1">
              © 2024 i-tech by{" "}
              <a
                className="italic underline"
                href="https://placeofwisdome.netlify.app/"
                target="_blank"
              >
                Omar Momani
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
