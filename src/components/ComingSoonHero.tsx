import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Users, CreditCard, Smartphone, Shield, ArrowRight, Repeat, Bell } from "lucide-react";
import heroImage from "@/assets/hero-genz-bills.jpg";
import roommatesImage from "@/assets/roommates-split.jpg";
import tripImage from "@/assets/trip-expenses.jpg";
import coupleImage from "@/assets/couple-subscriptions.jpg";

const ComingSoonHero = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds > 0 ? prev.seconds - 1 : 59;
        const newMinutes = prev.seconds === 0 && prev.minutes > 0 ? prev.minutes - 1 : prev.minutes;
        const newHours = prev.minutes === 0 && prev.seconds === 0 && prev.hours > 0 ? prev.hours - 1 : prev.hours;
        const newDays = prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0 && prev.days > 0 ? prev.days - 1 : prev.days;
        
        return {
          days: newDays,
          hours: newMinutes === 0 && newSeconds === 0 ? newHours : prev.hours,
          minutes: newSeconds === 0 ? newMinutes : prev.minutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const features = [
    {
      icon: Users,
      title: "Squad Groups 👥",
      description: "Add your crew by phone/UPI - roomies, besties, work fam"
    },
    {
      icon: CreditCard,
      title: "Instant UPI Magic ⚡",
      description: "Split bills and collect payments faster than you can say 'Paytm'"
    },
    {
      icon: Repeat,
      title: "Auto-Recurring 🔄",
      description: "Netflix, rent, maid - set it once, chill forever"
    },
    {
      icon: Bell,
      title: "Smart Nudges 🔔",
      description: "Gentle reminders that won't kill the vibe"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow-gradient opacity-50" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Hero Section */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-20">
          {/* Main Hero Content */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="bg-hero-gradient bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase animate-glow">
                ✨ Coming Soon ✨
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent leading-tight">
              <span className="animate-glow">Enzovo</span>
              <br />
              Split Bills Like a Pro 🔥
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop the awkward "who owes what?" texts. Auto-split bills, collect via UPI, 
              and keep your squad's finances drama-free 💸
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-6xl mx-auto">
              <img 
                src={heroImage} 
                alt="Enzovo bill splitting app" 
                className="w-full h-auto rounded-2xl shadow-elegant animate-glow"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-20 rounded-2xl" />
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Launch Countdown</h2>
              <p className="text-muted-foreground">Be among the first to experience the revolution</p>
            </div>
            
            <div className="flex justify-center gap-6 mb-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <Card key={item.label} className="bg-surface-gradient border-border/50 shadow-elegant">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-2">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works ⚡</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                No more manual tracking. No more awkward payment reminders. Just pure automation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={feature.title} className="bg-surface-gradient border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500 group">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-hero-gradient rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Use Cases with Images */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perfect For Your Squad 👥</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether it's roommate drama or trip planning chaos, we've got you covered
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img 
                    src={roommatesImage} 
                    alt="Roommates splitting bills" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-hero-gradient opacity-20" />
                </div>
                <h3 className="text-xl font-bold mb-2">Roommate Life 🏠</h3>
                <p className="text-muted-foreground">Rent, groceries, utilities - split everything seamlessly</p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img 
                    src={tripImage} 
                    alt="Friends on trip splitting expenses" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-hero-gradient opacity-20" />
                </div>
                <h3 className="text-xl font-bold mb-2">Squad Trips ✈️</h3>
                <p className="text-muted-foreground">Hotels, food, Ubers - track every rupee effortlessly</p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img 
                    src={coupleImage} 
                    alt="Couple managing subscriptions" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-hero-gradient opacity-20" />
                </div>
                <h3 className="text-xl font-bold mb-2">Date Night Bills 💕</h3>
                <p className="text-muted-foreground">Netflix, Spotify, dinner dates - share the love and costs</p>
              </div>
            </div>
          </div>

          {/* Email Signup */}
          <div className="max-w-md mx-auto text-center pb-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {!isSubscribed ? (
              <>
                <h3 className="text-2xl font-bold mb-4">Join the Waitlist 🚀</h3>
                <p className="text-muted-foreground mb-6">
                  Be the first to ditch the spreadsheets and awkward money talks
                </p>
                <form onSubmit={handleEmailSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button type="submit" className="bg-hero-gradient hover:opacity-90 transition-opacity">
                    Join Squad <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </form>
              </>
            ) : (
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-hero-gradient rounded-full mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">You're In!</h3>
                <p className="text-muted-foreground">
                  Thanks for joining! We'll notify you as soon as we launch.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonHero;