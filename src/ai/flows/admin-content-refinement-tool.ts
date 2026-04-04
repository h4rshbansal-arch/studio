'use server';
/**
 * @fileOverview An AI-powered administrative tool to suggest and refine marketing content.
 *
 * - adminContentRefinementTool - A function that refines marketing copy, meta descriptions, and headlines.
 * - AdminContentRefinementToolInput - The input type for the adminContentRefinementTool function.
 * - AdminContentRefinementToolOutput - The return type for the adminContentRefinementTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdminContentRefinementToolInputSchema = z.object({
  instituteName: z.string().describe('The name of the coaching institute.'),
  instituteDescription: z
    .string()
    .describe('A brief description of the institute, its mission, or values.'),
  keyOfferings: z
    .array(z.string())
    .describe('A list of key courses, programs, or unique selling points.'),
  targetAudience: z
    .string()
    .describe('Description of the primary target audience (e.g., "9th-12th grade students for Commerce & Maths Science Coaching").'),
  targetKeywords: z
    .array(z.string())
    .describe('A list of target keywords for SEO optimization.'),
  sectionToRefine: z
    .string()
    .optional()
    .describe('Optional: The specific website section for which to refine content (e.g., "About Us", "Courses", "Why Choose Us").'),
  existingContent: z
    .string()
    .optional()
    .describe('Optional: Existing content for the specified section that needs refinement.'),
});
export type AdminContentRefinementToolInput = z.infer<
  typeof AdminContentRefinementToolInputSchema
>;

const AdminContentRefinementToolOutputSchema = z.object({
  marketingCopy: z
    .string()
    .describe('Engaging and compelling marketing copy for the section.'),
  metaDescription: z
    .string()
    .describe('SEO-optimized meta description (max 160 characters).'),
  headlines: z
    .array(z.string())
    .describe('A list of 3-5 compelling headlines or taglines for the section.'),
});
export type AdminContentRefinementToolOutput = z.infer<
  typeof AdminContentRefinementToolOutputSchema
>;

export async function adminContentRefinementTool(
  input: AdminContentRefinementToolInput
): Promise<AdminContentRefinementToolOutput> {
  return adminContentRefinementToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adminContentRefinementToolPrompt',
  input: {schema: AdminContentRefinementToolInputSchema},
  output: {schema: AdminContentRefinementToolOutputSchema},
  prompt: `You are an expert marketing and SEO specialist for a premium coaching institute. Your task is to generate or refine content snippets to attract prospective students. The content should be professional, engaging, and SEO-optimized, reflecting a luxury and professional brand.

Institute Name: {{{instituteName}}}
Institute Description: {{{instituteDescription}}}
Key Offerings: {{{#each keyOfferings}}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Target Audience: {{{targetAudience}}}
Target Keywords: {{{#each targetKeywords}}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

{{#if sectionToRefine}}
Content for Section: {{{sectionToRefine}}}
{{/if}}

{{#if existingContent}}
Existing Content to Refine: """{{{existingContent}}}"""

Carefully refine the existing content. Focus on enhancing engagement, clarity, and SEO while maintaining the institute's premium tone. Ensure the meta description is concise and impactful, and suggest new, strong headlines.
{{else}}
Generate compelling marketing copy, an SEO-optimized meta description, and 3-5 strong headlines. Use the provided institute information, target audience, and keywords to create new content from scratch.
{{/if}}

Ensure the marketing copy is persuasive and highlights the institute's strengths. The meta description should be under 160 characters and include relevant keywords. The headlines should be attention-grabbing.

Return the output in the specified JSON format.`,
});

const adminContentRefinementToolFlow = ai.defineFlow(
  {
    name: 'adminContentRefinementToolFlow',
    inputSchema: AdminContentRefinementToolInputSchema,
    outputSchema: AdminContentRefinementToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
