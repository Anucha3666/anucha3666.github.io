import { Eye } from "lucide-react"; // หรือ icon ที่คุณใช้
import Image from "next/image";
import { FC } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

type ImageCertificationProps = {
  src: string;
};

export const ImageCertification: FC<ImageCertificationProps> = ({ src }) => {
  const alt = src?.match(/\/([^\/]+)\.png$/)?.[1] ?? "certification";

  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <div className='relative group cursor-pointer overflow-hidden hover:scale-105 hover:rounded-2xl active:scale-95 transform transition-all duration-300 ease-in-out group-hover:opacity-70'>
          <Image
            src={src}
            width={400}
            height={300}
            className='object-contain '
            alt={alt}
          />

          <div className='absolute inset-0 flex items-center justify-center opacity-0 bg-[#00000040]  hover:rounded-2xl group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
            <div className='bg-[#00000020] backdrop-blur-xs rounded-full p-3'>
              <Eye className='w-6 h-6 text-white' />
            </div>
          </div>
        </div>
      </PhotoView>
    </PhotoProvider>
  );
};
