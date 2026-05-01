// Placeholder testimonials. REPLACE WITH REAL CUSTOMER REVIEWS BEFORE LAUNCH.
// Pull verified text from Google Business Profile, Yelp, BBB, etc.
// AggregateRating in schema reflects business.ratings — verify counts match.

export interface Testimonial {
  text: string;
  author: string;
  city: string;
  rating: 1 | 2 | 3 | 4 | 5;
  service?: string;
  date?: string;
}

// Generic, marked clearly as placeholders. Swap with real reviews before launch.
export const testimonials: Testimonial[] = [
  {
    text: 'Placeholder testimonial — replace with a real Google or Yelp review before launch. Keep the rating, author first name + last initial, and city accurate.',
    author: 'Customer Name',
    city: 'San Bernardino',
    rating: 5,
    service: 'Hardwood Installation',
    date: '2026-03-01',
  },
];
