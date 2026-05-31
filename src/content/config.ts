import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    category:    z.enum(['blocks','specialty','pressed','letters','addons','custom']),
    price:       z.number(),
    badge:       z.string().optional(),
    description: z.string(),
    image:       z.string().optional(),
    inStock:     z.boolean().default(true),
    order:       z.number().default(99),
  }),
});

const gallery = defineCollection({
  type: 'content',
  schema: z.object({
    title:    z.string(),
    image:    z.string().optional(),
    featured: z.boolean().default(false),
    order:    z.number().default(99),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    quote:  z.string(),
    order:  z.number().default(99),
  }),
});

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer:   z.string(),
    category: z.enum(['flowers','shipping','process','care']),
    order:    z.number().default(99),
  }),
});

export const collections = { products, gallery, testimonials, faq };
