import React from 'react'
import ReviewCard from './ReviewCard';
import { Testimonial } from '@/types/index';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface ReviewsProps {
    testimonials: Testimonial[];
}

const Reviews = (props: ReviewsProps) => {
    const { testimonials } = props;

    return (
        <div className="flex flex-col gap-[60px] h-screen justify-center text-secondary-blue">
            <h2 className="text-center text-[2.625rem] text-dark-blue font-bold">What They Say About Us</h2>
            <Carousel className="flex flex-col gap-4 mx-[7.5rem]" >
                <CarouselContent className="flex gap-0">
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="basis-1/3">
                            <ReviewCard testimonial={testimonial} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center items-center gap-[15px]">
                    <CarouselPrevious className="text-tertiary-blue w-[48px] h-[48px] bg-transparent border-[1px] border-[#02B1DF]" />
                    <CarouselNext className="text-tertiary-blue w-[48px] h-[48px] bg-transparent border-[1px] border-[#02B1DF]" />
                </div>
            </Carousel>
        </div>
    );
}

export default Reviews