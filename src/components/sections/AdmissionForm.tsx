"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Send } from 'lucide-react';

export function AdmissionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;

    // Construct WhatsApp message
    const message = `Hello Academic Alliance, I would like to apply for admission.%0A%0A*Admission Inquiry Details*%0A----------------------------%0A*Name:* ${name}%0A*Class:* ${selectedClass}%0A*Phone:* ${phone}%0A----------------------------%0AThank you!`;
    
    const whatsappUrl = `https://wa.me/918218503127?text=${message}`;

    // Simulate a brief delay for UX before redirecting
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsLoading(false);
    setIsSubmitted(true);
  }

  return (
    <section id="admission" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto premium-card rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-primary p-12 text-primary-foreground flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Join the Alliance</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Take the first step towards academic excellence. Fill out the form and our counselors will get in touch with you shortly via WhatsApp.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <CheckCircle size={20} />
                </div>
                <span>Free Career Counseling</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <CheckCircle size={20} />
                </div>
                <span>Demo Class Available</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <CheckCircle size={20} />
                </div>
                <span>Scholarships for Bright Students</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-12 bg-card/80 backdrop-blur-xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Redirected to WhatsApp!</h3>
                <p className="text-muted-foreground">Thank you for your interest. Please send the message on WhatsApp to complete your inquiry.</p>
                <Button variant="outline" className="mt-8 rounded-full" onClick={() => setIsSubmitted(false)}>
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Enter student name" 
                    required 
                    className="rounded-xl h-12 bg-background/50" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="class">Applying for Class</Label>
                  <Select required onValueChange={setSelectedClass} value={selectedClass}>
                    <SelectTrigger className="rounded-xl h-12 bg-background/50">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9th Grade">9th Grade</SelectItem>
                      <SelectItem value="10th Grade">10th Grade</SelectItem>
                      <SelectItem value="11th Commerce">11th Commerce</SelectItem>
                      <SelectItem value="11th Science">11th Science</SelectItem>
                      <SelectItem value="12th Commerce">12th Commerce</SelectItem>
                      <SelectItem value="12th Science">12th Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="10-digit mobile number" 
                    required 
                    className="rounded-xl h-12 bg-background/50" 
                  />
                </div>

                <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold" disabled={isLoading || !selectedClass}>
                  {isLoading ? "Redirecting..." : (
                    <>
                      Apply via WhatsApp <Send className="ml-2" size={20} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
