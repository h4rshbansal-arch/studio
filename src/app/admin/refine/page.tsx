"use client";

import React, { useState } from 'react';
import { adminContentRefinementTool, type AdminContentRefinementToolOutput } from '@/ai/flows/admin-content-refinement-tool';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Navbar } from '@/components/layout/Navbar';
import { Loader2, Sparkles, Check } from 'lucide-react';

export default function AdminRefinePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AdminContentRefinementToolOutput | null>(null);

  async function handleRefine(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const output = await adminContentRefinementTool({
        instituteName: "The Academic Alliance Institute",
        instituteDescription: formData.get('description') as string,
        keyOfferings: (formData.get('offerings') as string).split(',').map(s => s.trim()),
        targetAudience: "9th-12th grade students for Commerce & Maths Science Coaching",
        targetKeywords: ["coaching", "commerce", "maths", "agra", "admission"],
        sectionToRefine: formData.get('section') as string,
        existingContent: formData.get('existing') as string,
      });
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
              <Sparkles size={14} /> AI Admin Tool
            </div>
            <h1 className="text-4xl font-bold mb-4">Content Refinement Tool</h1>
            <p className="text-muted-foreground">Optimize your website's marketing copy and SEO tags using Gemini AI.</p>
          </header>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-card/50 border-white/5">
              <CardHeader>
                <CardTitle>Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRefine} className="space-y-6">
                  <div className="space-y-2">
                    <Label>Institute Description</Label>
                    <Textarea 
                      name="description" 
                      placeholder="Brief mission or values..." 
                      defaultValue="Providing premium education for commerce and science since 2010."
                      className="h-24"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Key Offerings (comma separated)</Label>
                    <Input name="offerings" defaultValue="Accountancy, Economics, Maths, Science, Board Exams" />
                  </div>
                  <div className="space-y-2">
                    <Label>Website Section</Label>
                    <Input name="section" defaultValue="About Us" />
                  </div>
                  <div className="space-y-2">
                    <Label>Existing Content (Optional)</Label>
                    <Textarea name="existing" placeholder="Content you want to improve..." className="h-32" />
                  </div>
                  <Button type="submit" className="w-full h-12" disabled={isLoading}>
                    {isLoading ? <><Loader2 className="mr-2 animate-spin" /> Refining...</> : "Refine Content"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {result ? (
                <div className="space-y-6 animate-fade-in-up">
                  <Card className="bg-card/50 border-primary/20 overflow-hidden">
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="text-lg">Refined Marketing Copy</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-foreground leading-relaxed whitespace-pre-wrap">{result.marketingCopy}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 border-white/5">
                    <CardHeader>
                      <CardTitle className="text-lg">SEO Meta Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground italic">"{result.metaDescription}"</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 border-white/5">
                    <CardHeader>
                      <CardTitle className="text-lg">Suggested Headlines</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {result.headlines.map((h, i) => (
                          <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-white/5">
                            <Check className="text-green-500" size={16} />
                            <span className="font-medium">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-white/5 rounded-3xl">
                  <Sparkles size={48} className="text-muted/20 mb-4" />
                  <h3 className="text-xl font-medium text-muted-foreground">Results will appear here</h3>
                  <p className="text-muted/50 max-w-xs mt-2">Configure the tool and click refine to generate professional content.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
