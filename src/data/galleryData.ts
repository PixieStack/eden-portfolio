// Import all gallery images and videos
import gradImg1 from "../assets/gallery/Grad.jpg";
import gradImg2 from "../assets/gallery/Gradu.jpg";
import gradImg3 from "../assets/gallery/Gradua.jpg";
import gradVideo from "../assets/gallery/My graduation.mp4";

import cSharpVideo from "../assets/gallery/A little CSharp code.mp4";
import dockerVideo from "../assets/gallery/Docker code.mp4";
import codeBlockVideo from "../assets/gallery/When Code block hits.mp4";
import portfolioVideo from "../assets/gallery/My portfolio.mp4";
import kotaShopVideo from "../assets/gallery/Kota Shop Website.mp4";
import thwalaAttorneysVideo from "../assets/gallery/Thwala Attorneys website.mp4";

import firstAwsVideo from "../assets/gallery/First AWS Summit.mp4";
import awsSummitVideo from "../assets/gallery/Aws Summit look.mp4";

import currentReadImg from "../assets/gallery/CurrentRead.jpg";
import wannaReadImg from "../assets/gallery/Wanna read.jpg";
import gameNightVideo from "../assets/gallery/Game night.mp4";

import workPicsVideo from "../assets/gallery/Work pics.mp4";
import workPics2Video from "../assets/gallery/Work Picss.mp4";
import mirrorCheckVideo from "../assets/gallery/Mirror Check at work.mp4";
import mamaDateVideo from "../assets/gallery/Roco mama's work date.mp4";

import lunchImg from "../assets/gallery/Me bored at lunch.jpg";
import snaps1Img from "../assets/gallery/Snaps before work.jpg";
import snaps2Img from "../assets/gallery/Snaps before work2.jpg";
import journeyImg from "../assets/gallery/On the way to work.jpeg";
import profileImg from "../assets/gallery/Profile.jpeg";
import profileAltImg from "../assets/gallery/e98756c58dabbe24d97b5b3bf4e81966_0.jpeg";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  src: string;
  type: "image" | "video";
}

export const galleryItems: GalleryItem[] = [
  // Academic Moments
  {
    id: "grad-1",
    title: "Graduation Day",
    description:
      "Celebrating my Cum Laude graduation at Nelson Mandela University. A moment of pride and accomplishment.",
    category: "Academic",
    src: gradImg1,
    type: "image",
  },
  {
    id: "grad-2",
    title: "Achievement Unlocked",
    description:
      "One of three graduation celebrations capturing different moments of this milestone.",
    category: "Academic",
    src: gradImg2,
    type: "image",
  },
  {
    id: "grad-3",
    title: "The Graduate",
    description:
      "Final shot from graduation day - ready to take on the world with my degree.",
    category: "Academic",
    src: gradImg3,
    type: "image",
  },
  {
    id: "grad-video",
    title: "My Graduation",
    description: "Video moment from my graduation ceremony.",
    category: "Academic",
    src: gradVideo,
    type: "video",
  },

  // Work & Code
  {
    id: "code-1",
    title: "A Little C# Code",
    description: "Deep in the zone - working on some C# logic.",
    category: "Work",
    src: cSharpVideo,
    type: "video",
  },
  {
    id: "docker",
    title: "Docker Development",
    description:
      "Container orchestration in action - containerizing applications.",
    category: "Work",
    src: dockerVideo,
    type: "video",
  },
  {
    id: "code-block",
    title: "When Code Block Hits",
    description:
      "That feeling when the solution finally clicks after hours of debugging.",
    category: "Work",
    src: codeBlockVideo,
    type: "video",
  },
  {
    id: "portfolio",
    title: "My Portfolio",
    description:
      "Building and showcasing my portfolio projects to the world.",
    category: "Work",
    src: portfolioVideo,
    type: "video",
  },
  {
    id: "kota-shop",
    title: "Kota Shop Website",
    description:
      "E-commerce site built for a local kota restaurant - bringing small businesses online.",
    category: "Work",
    src: kotaShopVideo,
    type: "video",
  },
  {
    id: "thwala-attorneys",
    title: "Thwala Attorneys Website",
    description:
      "Professional legal services website showcasing Thwala Attorneys online presence.",
    category: "Work",
    src: thwalaAttorneysVideo,
    type: "video",
  },

  // Professional Development
  {
    id: "aws-1",
    title: "First AWS Summit",
    description:
      "My first AWS Summit experience - learning about cloud infrastructure and AWS services.",
    category: "Growth",
    src: firstAwsVideo,
    type: "video",
  },
  {
    id: "aws-2",
    title: "AWS Summit Look",
    description:
      "Getting insights at the AWS Summit - connecting and learning from industry experts.",
    category: "Growth",
    src: awsSummitVideo,
    type: "video",
  },

  // Personal Life
  {
    id: "reading-1",
    title: "Current Read",
    description:
      "The Alchemist by Paulo Coelho - currently lost in its pages.",
    category: "Lifestyle",
    src: currentReadImg,
    type: "image",
  },
  {
    id: "reading-2",
    title: "Wanna Read",
    description:
      "Books waiting on my reading list - always have something queued up.",
    category: "Lifestyle",
    src: wannaReadImg,
    type: "image",
  },
    {
    id: "game-night",
    title: "Game Night Monopoly",
    description:
      "Competitive spirits and intense Monopoly sessions - strategy, laughs and quality time with friends and family.",
    category: "Lifestyle",
    src: gameNightVideo,
    type: "video",
  },

  // Work Moments
  {
    id: "work-1",
    title: "Work Pics",
    description: "Behind the scenes at the workplace - professional moments.",
    category: "Work",
    src: workPicsVideo,
    type: "video",
  },
  {
    id: "work-2",
    title: "Work Pics 2",
    description: "More moments from the workspace - capturing the workday.",
    category: "Work",
    src: workPics2Video,
    type: "video",
  },
  {
    id: "mirror-check",
    title: "Mirror Check at Work",
    description: "Quick self-check moment during the workday.",
    category: "Work",
    src: mirrorCheckVideo,
    type: "video",
  },
  {
    id: "mama-date",
    title: "Roco Mama's Work Date",
    description: "Special moment with mama - work/life balance matters.",
    category: "Lifestyle",
    src: mamaDateVideo,
    type: "video",
  },

  // Personal Moments
  {
    id: "lunch",
    title: "Me Bored at Lunch",
    description: "Lunch break moment - work life captured candidly.",
    category: "Lifestyle",
    src: lunchImg,
    type: "image",
  },
  {
    id: "snaps-1",
    title: "Snaps Before Work",
    description:
      "Getting ready shots - mornings before heading to the office.",
    category: "Lifestyle",
    src: snaps1Img,
    type: "image",
  },
  {
    id: "snaps-2",
    title: "Snaps Before Work 2",
    description: "Another morning moment - preparation ritual.",
    category: "Lifestyle",
    src: snaps2Img,
    type: "image",
  },
  {
    id: "journey",
    title: "On The Way To Work",
    description: "The journey - commute moments that frame my day.",
    category: "Lifestyle",
    src: journeyImg,
    type: "image",
  },
  {
    id: "profile",
    title: "Profile",
    description: "A professional profile moment.",
    category: "Personal",
    src: profileImg,
    type: "image",
  },
  {
    id: "profile-alt",
    title: "Profile Alt",
    description: "Another angle of a personal moment.",
    category: "Personal",
    src: profileAltImg,
    type: "image",
  },
];