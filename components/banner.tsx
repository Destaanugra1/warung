import { Banner as BannerType } from "@/types";

interface BannerProps {
  data: BannerType;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-5 rounded-xl overflow-hidden ">
      <div
        className="rounded-xl relative aspect-square md:aspect-[4/1] overflow-hidden bg-cover bg-center bg-no-repeat"
      >
      <div className="flex flex-col justify-center items-start px-8 gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white text-left hidden">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;