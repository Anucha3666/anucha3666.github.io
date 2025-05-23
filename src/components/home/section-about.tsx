"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export const SectionAbout = () => {
  return (
    <section
      id='about'
      className='flex flex-col w-full gap-10 justify-center items-center px-4 md:px-6 pt-[5rem]'
      style={{ height: "calc(100dvh)" }}>
      <div className=' flex flex-col gap-2 justify-center items-center'>
        <p className=' text-4xl font-bold'>My Background</p>
        <p className=' w-[50%] text-center'>
          {
            "I'm a passionate developer with a background in computer science and a love for creating beautiful, functional web applications. With expertise in both front-end and back-end technologies, I bring a holistic approach to software development."
          }
        </p>
      </div>
      <div className=' flex gap-10 h-min justify-center items-center'>
        <div className='flex flex-col gap-8'>
          {[
            {
              label: "Problem Solver",
              content:
                "I enjoy tackling complex problems and finding elegant solutions through code.",
            },
            {
              label: "Continuous Learner",
              content:
                "Always exploring new technologies and methodologies to improve my craft.",
            },
            {
              label: "Team Player",
              content:
                "I thrive in collaborative environments and enjoy working with diverse teams.",
            },
          ]?.map(({ label, content }, i) => (
            <div key={i} className=' max-w-[20rem]'>
              <p className=' text-xl font-bold'>{label}</p>
              <p className=' indent-6'>{content}</p>
            </div>
          ))}
        </div>
        <div className=' grid grid-cols-2 gap-4 w-[40rem] '>
          {[
            {
              label: "Frontend",
              icon: (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-6 w-6'>
                  <path d='M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z' />
                </svg>
              ),
              items: [
                "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
                "https://mwop.net/images/tailwindcss.svg",
                "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
                // "https://icon.icepanel.io/Technology/svg/Redux.svg",
                // "https://cdn.candycode.com/jotai/jotai-mascot.png",
                "https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg",
                "https://cdn.iconscout.com/icon/free/png-512/free-django-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-7-pack-icons-282754.png?f=webp&w=512",
                "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
                "https://img.icons8.com/?size=256&id=r9QJ0VFFrn7T&format=png",
                "https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/20161105/shadcn-ui-logo-EF735EC0E5-seeklogo.com.png",
                "https://cdn.worldvectorlogo.com/logos/radix-ui.svg",
              ],
            },
            {
              label: "Backend",
              icon: (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-6 w-6'>
                  <path d='M2 9.5V5c0-1.1.9-2 2-2h3.5' />
                  <path d='M2 14.5V19c0 1.1.9 2 2 2h3.5' />
                  <path d='M22 9.5V5c0-1.1-.9-2-2-2h-3.5' />
                  <path d='M22 14.5V19c0 1.1-.9 2-2 2h-3.5' />
                  <path d='M7 2h10' />
                  <path d='M7 22h10' />
                  <path d='M12 2v20' />
                </svg>
              ),
              items: [
                "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
                "https://i.namu.wiki/i/JVA4oU1jDLzpr1ZvLr-efrz4u6UilD8Fl9SwjZ9HDLmkrXRJqp21grdW7Xf4hswGIc4XhMc2cGmgeQXhasHxUrFtFEW4xvIp50pwsYabnO3gVMluTHK6U6FoYShHTM8uqBskkXWmMDy_VyayxBf3wA.svg",
                "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
                "https://webtechseosolutions.com/assets/front/images/Codeigniter.png",
                "https://cdn.hashnode.com/res/hashnode/image/upload/v1703155483443/e42a7be2-890a-4bd2-accf-306e53ccebbd.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
                "https://hire.codeclouds.com/_next/image/?url=https%3A%2F%2Fmedia.codeclouds.com%2Fxsmall%2Ficon-expressjs.svg&w=1080&q=75",
                "https://icon.icepanel.io/Technology/png-shadow-512/Flask.png",
                "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg",
                "https://static-00.iconduck.com/assets.00/pgadmin-icon-512x512-ghd4xf2u.png",
                "https://img.icons8.com/?size=256&id=laYYF3dV0Iew&format=png",
              ],
            },
            {
              label: "Design",
              icon: (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-6 w-6'>
                  <rect width='18' height='18' x='3' y='3' rx='2' />
                  <path d='M7 7h10' />
                  <path d='M7 12h10' />
                  <path d='M7 17h10' />
                </svg>
              ),
              items: [
                "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
                "https://static.vecteezy.com/system/resources/previews/048/759/334/non_2x/canva-transparent-icon-free-png.png",
                "https://1000logos.net/wp-content/uploads/2023/04/Photoshop-logo.png",
                "https://images.sftcdn.net/images/t_app-icon-s/p/d7eafcb1-2a34-4d22-ba9e-035597bd31bb/1559553972/solidworks-solidworks-training-500x500.png",
                "https://static-00.iconduck.com/assets.00/blender-icon-512x419-whopcj5o.png",
              ],
            },
            {
              label: "Tools",
              icon: (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-6 w-6'>
                  <path d='M12 20h9' />
                  <path d='M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z' />
                </svg>
              ),
              items: [
                "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
                "https://www.svgrepo.com/show/349342/docker.svg",
                "https://store-images.s-microsoft.com/image/apps.16970.13851527096222888.2b60149a-04a5-4578-a6b2-d7b7377332d5.807ee9a5-23e5-4fec-846e-4073ccd4d00b?h=307",
                "https://upload.wikimedia.org/wikipedia/commons/5/51/Android_Studio_Logo_2024.svg",
                "https://img.icons8.com/?size=48&id=bpip0gGiBLT1&format=png",
              ],
            },
          ]?.map(({ label, icon, items }, i) => (
            <CardContainer
              className='inter-var cursor-grab w-full h-full shadow-xl rounded-xl'
              key={i}>
              <CardBody className='relative group/card  gap-2 flex flex-col border-black/[0.1] w-full h-full rounded-xl p-2 border  '>
                <CardItem
                  translateZ='50'
                  className='text-xl font-bold flex justify-center items-center gap-2 text-neutral-600'>
                  <div className='rounded-full bg-muted p-2'>{icon}</div>
                  {label}
                </CardItem>
                <CardItem
                  translateZ='50'
                  className='text-xl font-bold flex flex-wrap justify-center items-center gap-2 p-2 bg-gray-50 rounded-md'>
                  {items?.map((info, j) => (
                    <div
                      key={j}
                      className={cn(
                        " w-[3rem] h-[3rem] flex justify-center items-center rounded-full bg-white overflow-hidden",
                        i === 2 && (j === 1 || j === 2) ? "p-0" : " p-1"
                      )}>
                      <Image
                        width={100}
                        height={100}
                        src={info || ""}
                        alt='icon'
                        className={cn(
                          "object-contain",
                          (i === 0 && j === 7) ||
                            (i === 2 && (j === 1 || j === 2))
                            ? "!min-w-[140%] !min-h-[140%] !w-[120%] !h-[120%]"
                            : (i === 3 && j === 2) ||
                              (i === 0 && (j === 8 || j === 9))
                            ? "p-1"
                            : "w-full h-full"
                        )}
                        priority={true}
                      />
                    </div>
                  ))}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};
