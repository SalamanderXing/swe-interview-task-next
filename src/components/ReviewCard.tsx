import React from 'react'
import { Testimonial } from '@/types/index';
import { IoStar } from "react-icons/io5";

interface ReviewCardProps {
    testimonial: Testimonial;
}

const ReviewCard = (props: ReviewCardProps) => {
  const { testimonial } = props;
  const { profile, rating, review, name, role } = testimonial;

  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-[rgba(255,255,255,0.24)] p-6 h-full border-[1px] border-white">
        <div className="flex gap-[4px] rounded-[8px] border-[1px] border-[rgba(0,115,197,0.32)] bg-[linear-gradient(116deg,#E8F8FF_0%,_rgba(232,248,255,0.32)_100%)] px-[12px] py-[9.5px] w-fit">
            {Array(rating).fill(<IoStar className="w-[18px] h-[18px] text-dark-blue" />).map((star, index) => (
                <React.Fragment key={index}>{star}</React.Fragment>
            ))}
        </div>
        <p className="text-[1.125rem]">{`"${review}"`}</p>
        <div className="flex items-center gap-5">
            <div dangerouslySetInnerHTML={{ __html: profile }} className="w-[60px] h-[60px]" />
            <div className="flex flex-col">
                <span className="font-bold text-dark-blue text-[1rem]">{name}</span>
                <span className="text-[1.142rem]">{role}</span>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard