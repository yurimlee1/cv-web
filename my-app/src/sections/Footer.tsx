import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="contaienr">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 ">
            <a
              href="www.linkedin.com/in/yurim-lee1"
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">LinkedIn</span>
              <ArrowUpRightIcon calssName="size-4" />
            </a>
            
            <a
              href="https://github.com/yurimlee1"
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">GitHub</span>
              <ArrowUpRightIcon calssName="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
