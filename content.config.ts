import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    medias: defineCollection({
      type: 'page',
      source: 'medias/*.json',
      schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
        mediaUrl: z.string().url(),
        mediaThumbnail: z.string(),
        mediaType: z.string(),
        quality: z.enum(['4K', '2K', '1080p', '720p', '480p']),
        duration: z.string(),
        ageRating: z.string(),
        additionalInfo: z.string(),
        genres: z.array(z.string()),
        actors: z.array(z.string()),
        slug: z.string(),
        year: z.number(),
      }),
    }),
  },
});
