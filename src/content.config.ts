import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const labs = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/labs' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    area: z.enum(['physics', 'chemistry', 'biology', 'math']),
    level: z.array(z.enum(['elementary', 'middle', 'high', 'intro-college'])).min(1),
    competencies: z
      .array(
        z.enum([
          'inquiry',
          'data-analysis',
          'modeling',
          'concept-application',
          'critical-thinking',
          'quantitative-reasoning',
          'systems-thinking',
        ])
      )
      .min(1),
    difficulty: z.enum(['easy', 'medium', 'hard']),
    estimatedDurationMin: z.number().int().positive(),
    availableModes: z.array(z.enum(['free', '5E', 'guided', 'pbl', 'eval'])).min(1),
    curriculumTags: z
      .object({
        co_dba: z.array(z.string()).optional(),
        co_icfes: z
          .array(z.enum(['uso-comprensivo', 'explicacion-fenomenos', 'indagacion']))
          .optional(),
        co_componente: z.array(z.enum(['entorno-fisico', 'entorno-vivo', 'cts'])).optional(),
        co_grado: z.array(z.number().int().min(6).max(11)).optional(),
      })
      .optional(),
    published: z.boolean(),
    thumbnail: z.string(),
  }),
});

export const collections = { labs };
