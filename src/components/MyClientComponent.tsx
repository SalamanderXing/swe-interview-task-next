// WARNING: You can and should modify the content of this file as much as you like! Except for the content of **loadDataFromServer** as the warning says, and the buttom must be there. 
//          The styling of that button is not really important.
// NOTE: Wherever you see that there is a delay, you must display a suspense/loader/spinner.
// TODO: After the data is loaded, display it in a component that is as similar as possible to the figma shared by Daniele
"use client";

import * as actions from '@/actions/index';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ReviewsCarousel from './ReviewsCarousel';
import Spinner from './Spinner';
import { Testimonial } from "@/types/index";

export default function MyClientComponent() {
  // Again, feel free to modify whatever you want in this component. These are just suggestions.
  const [testimonials, setTestimonials] = useState<Testimonial[] | null>(null);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const click = async () => {
    setClicked(true);
    setLoading(true);
    const data = await actions.loadDataFromServer(48);
    setTestimonials(data);
    setClicked(false);
    setLoading(false);
  };

  const showSpinner = clicked && loading;
  const showReviews = testimonials && testimonials.length > 0;

  return (
    <div>
      {/* WARNING: we need the following button to load the data! Then you may make this button disappear if u like. */}
      {!testimonials && <Button onClick={click}>Load Data</Button>}
      {showSpinner && <Spinner />}
      {showReviews && <ReviewsCarousel testimonials={testimonials} />}
    </div>
  );
}
