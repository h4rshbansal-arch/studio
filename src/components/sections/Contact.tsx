import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-primary font-semibold uppercase tracking-widest mb-4">Connect</h2>
              <h3 className="text-4xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground text-lg max-w-md">
                Have questions? Our team is here to help you navigate your academic journey. Visit us or give us a call today.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-card border border-white/5 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 8218503127</p>
                  <p className="text-muted-foreground">+91 6398721648</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-card border border-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    Shop No-15, Rajnandini Plaza,<br />
                    Near Kali Mata Mandir, Agra, UP
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-card border border-white/5 flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Office Hours</h4>
                  <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 h-[500px] shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113576.4447432651!2d77.90997184288863!3d27.175255427972052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ffc1%3A0x12bc548002335628!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
