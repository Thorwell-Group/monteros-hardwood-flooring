// Verbatim Google Business Profile reviews for Monteros Hardwood Flooring.
// Text is copied exactly as it appears on the company's Google profile - no
// edits, no expansion, no invented dates. Only complete, verifiable 5-star
// reviews are kept. To add more, copy the FULL text from the GBP and append.

export interface Testimonial {
  text: string;
  author: string;
  city: string;
  rating: 1 | 2 | 3 | 4 | 5;
  service?: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    text: `Easy to work with, on time and at the very fair quoted price. Javier honored an older quote and delivered amazing results. Highly recommended.`,
    author: 'David Thurston',
    city: 'Inland Empire',
    rating: 5,
    date: '2025-05-10',
  },
  {
    text: `Awesome crew!!, they work together like a machine, kind, courteous, pay attention to detail and very productive. They were on time and did a master job!, I would only use these guys in future projects.`,
    author: 'Bob Entrikin',
    city: 'Inland Empire',
    rating: 5,
    date: '2024-08-15',
  },
  {
    text: `Monteros Hardwood company just completed refurbishing 3 rooms in my home and did a fantastic job. They were on time and very professional. I would use them again and refer them to my family and friends!! Good job!`,
    author: 'Sybille Norsian',
    city: 'Inland Empire',
    rating: 5,
    date: '2024-01-04',
  },
  {
    text: `Absolutely THE BEST company. Very very good installers, communicators and all around professionals. Highly recommend!`,
    author: 'Debi Sintov',
    city: 'Inland Empire',
    rating: 5,
    date: '2023-04-01',
  },
  {
    text: `The best price in town! Bottom line. Great group of guys. Javier and his crew did a great job on my floors. Young and motivated to get the job done. I highly recommend them, give them a call.`,
    author: 'Javi Nicanor',
    city: 'Inland Empire',
    rating: 5,
    date: '2019-11-01',
  },
  {
    text: `Ricardo did an excellent job while replacing our kitchen floor.`,
    author: 'Norma Hinderliter',
    city: 'Inland Empire',
    rating: 5,
    service: 'Kitchen Flooring',
    date: '2021-10-10',
  },
];
