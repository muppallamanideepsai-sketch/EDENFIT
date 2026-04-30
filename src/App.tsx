/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, MessageCircle, ChevronRight, CheckCircle2, 
  MapPin, Phone, Mail, Instagram, Facebook, Twitter, 
  Star, Clock, ChevronDown, Play, ArrowRight, UserCheck, Flame, Activity
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState<{ value: string, category: string, color: string } | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      const bmi = w / (h * h);
      let category = '';
      let color = '';
      
      if (bmi < 18.5) {
        category = 'UNDERWEIGHT';
        color = 'text-yellow-500';
      } else if (bmi >= 18.5 && bmi < 25) {
        category = 'NORMAL WEIGHT';
        color = 'text-green-500';
      } else if (bmi >= 25 && bmi < 30) {
        category = 'OVERWEIGHT';
        color = 'text-orange-500';
      } else {
        category = 'OBESE';
        color = 'text-eden-red';
      }
      
      setBmiResult({ value: bmi.toFixed(1), category, color });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-eden-dark min-h-screen font-sans selection:bg-eden-red selection:text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] bg-eden-red/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed top-1/3 right-[-100px] w-[400px] h-[400px] bg-eden-red/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-100px] left-1/4 w-[600px] h-[600px] bg-eden-red/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-eden-darker/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-eden-red rounded-sm flex items-center justify-center font-black text-black italic">E</div>
            <span className="font-sans text-xl tracking-tighter uppercase font-black">Eden<span className="text-eden-red">Fit</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            <a href="#transform" className="hover:text-eden-red transition-colors">Results</a>
            <a href="#programs" className="hover:text-eden-red transition-colors">Programs</a>
            <a href="#memberships" className="hover:text-eden-red transition-colors">Pricing</a>
            <a href="#trainers" className="hover:text-eden-red transition-colors">Trainers</a>
          </div>
          <button className="bg-white hover:bg-eden-red text-black hover:text-white px-5 py-2.5 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all">
            Join Membership
          </button>
        </div>
      </nav>

      {/* Floating Action */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </a>
        <div className="hidden md:flex bg-white text-black p-4 rounded-full shadow-2xl cursor-pointer group hover:bg-black border border-transparent hover:border-white/20 transition-colors animate-pulse">
          <div className="text-[10px] font-black leading-none uppercase tracking-widest group-hover:text-eden-red">CLAIM 50% OFF</div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
            alt="Gym Hero" 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-eden-dark via-eden-darker/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-eden-red text-black px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-widest skew-x-[-12deg]">
              <span className="skew-x-[12deg]">500+ TRANSFORMATIONS</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 text-white leading-[0.85] font-black tracking-tighter uppercase">
              DOMINATE YOUR <br />
              <span className="text-eden-red">POTENTIAL</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-medium">
              Premium strength training and fat loss transformation for elite performers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-eden-red hover:scale-105 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-transform shadow-[0_10px_30px_rgba(220,38,38,0.2)]">
                Start Free Trial
              </button>
              <a href="#plans" className="w-full sm:w-auto flex items-center justify-center gap-2 group px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] text-white transition-all bg-white/5 border border-white/10 hover:bg-white/10">
                View Plans
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF / TRANSFORMATIONS */}
      <section id="transform" className="py-24 bg-eden-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-4 uppercase font-black tracking-tighter">Real <span className="text-eden-red">Results</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto font-medium">Don't just take our word for it. See the transformations generated by our programs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-eden-card rounded-2xl overflow-hidden border border-white/10 group p-2">
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 flex">
                    <img 
                      src={`https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop&random=${item}`} 
                      alt="Before" className="w-1/2 object-cover object-left filter grayscale opacity-70" 
                      referrerPolicy="no-referrer" 
                    />
                    <img 
                      src={`https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop&random=${item}`} 
                      alt="After" className="w-1/2 object-cover object-center" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-black px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase">BEFORE</div>
                  <div className="absolute top-4 right-4 bg-eden-red px-3 py-1 rounded text-[10px] font-black tracking-widest text-black uppercase">AFTER</div>
                </div>
                <div className="p-6">
                  <div className="flex text-eden-red mb-3">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-white/80 text-sm mb-4 italic font-serif font-light leading-relaxed">"I never thought I could lose 20lbs in 3 months. The trainers here are relentless and supportive."</p>
                  <p className="font-bold text-eden-red uppercase text-[10px] tracking-widest">— Member {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE EDEN FITNESS */}
      <section className="py-24 bg-eden-darker relative border-y border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-white mb-6 uppercase tracking-tighter font-black">WHY OVER 1000+ MEMBERS <br/><span className="text-eden-red">CHOOSE US</span></h2>
              <p className="text-white/60 mb-10 font-medium">We don't do gimmicks. We provide world-class equipment, elite coaching, and an unbreakable community. Everything you need to succeed.</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: UserCheck, title: "Elite Coaches", desc: "Professionals guiding you." },
                  { icon: Dumbbell, title: "Premium Gear", desc: "Top-tier strength machines." },
                  { icon: CheckCircle2, title: "Custom Plans", desc: "Tailored to your metabolism." },
                  { icon: Clock, title: "24/7 Access", desc: "Train on your schedule." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-[#111] border border-white/10 items-center">
                    <div className="shrink-0 w-10 h-10 bg-black rounded-lg border border-eden-red/30 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-eden-red" />
                    </div>
                    <div>
                      <h4 className="font-black tracking-tighter uppercase text-white text-sm mb-0.5">{feature.title}</h4>
                      <p className="text-white/50 text-[10px] font-medium leading-tight">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-eden-red blur-[100px] opacity-20 rounded-full pointer-events-none"></div>
              <div className="bg-[#111] p-2 rounded-2xl border border-white/10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop" 
                  alt="Gym Interior" 
                  className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS / SERVICES */}
      <section id="programs" className="py-24 bg-eden-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl text-white mb-4 uppercase tracking-tighter font-black">TRAIN YOUR <span className="text-eden-red">WAY</span></h2>
              <p className="text-white/50 max-w-xl font-medium">Whether you want to build mass, shred fat, or increase stamina, we have a scientifically proven program for you.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "STRENGTH ALPHA", bg: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop", desc: "Build real muscle and functional strength with heavy lifting." },
              { title: "METABOLIC BURN", bg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop", desc: "High-intensity cardio and resistance training to burn fat fast." },
              { title: "ELITE COACHING", bg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop", desc: "1-on-1 guidance to maximize your output and avoid injury." },
              { title: "GROUP CLASSES", bg: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800&auto=format&fit=crop", desc: "Energy-packed group sessions that keep you accountable." }
            ].map((program, idx) => (
              <div key={idx} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer bg-[#111] border border-white/10 p-1.5">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img src={program.bg} alt={program.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-black tracking-tighter text-2xl text-white mb-2 uppercase leading-none">{program.title}</h3>
                    <p className="text-white/60 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 font-medium">{program.desc}</p>
                    <button className="flex items-center gap-2 text-eden-red font-bold text-[10px] uppercase tracking-widest group/btn">
                      Explore <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEMBERSHIP PLANS */}
      <section id="memberships" className="py-24 bg-eden-darker border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-4 uppercase font-black tracking-tighter">CHOOSE YOUR <span className="text-eden-red">PLAN</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto font-medium">No hidden fees, no contract lock-ins. Just pure value.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-eden-red/50 transition-colors flex flex-col items-center">
              <h3 className="font-black tracking-tighter text-2xl text-white mb-2 uppercase">BASIC</h3>
              <div className="text-center mb-8">
                <span className="text-5xl font-black text-white">$29</span>
                <span className="text-white/50 text-sm uppercase font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 text-white/80 text-xs font-bold w-full">
                <li className="flex gap-3 items-center"><CheckCircle2 className="w-4 h-4 text-eden-red shrink-0" /> Full Gym Access</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="w-4 h-4 text-eden-red shrink-0" /> Free Weights Area</li>
                <li className="flex gap-3 items-center opacity-40"><CheckCircle2 className="w-4 h-4 shrink-0" /> No Group Classes</li>
                <li className="flex gap-3 items-center opacity-40"><CheckCircle2 className="w-4 h-4 shrink-0" /> No Personal Trainer</li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-white/20 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/5 transition-colors">Choose Basic</button>
            </div>

            {/* Pro Plan - Highlighted */}
            <div className="bg-eden-red relative rounded-2xl p-8 shadow-2xl flex flex-col transform md:-translate-y-4 text-black items-center">
              <div className="absolute top-0 right-0 p-4">
                 <div className="bg-black text-white px-3 py-1 font-black text-[10px] skew-x-[-12deg] tracking-widest uppercase">MOST POPULAR</div>
              </div>
              <h3 className="font-black tracking-tighter text-2xl text-black mb-2 uppercase">ELITE PRO</h3>
              <div className="text-center mb-8">
                <span className="text-6xl font-black text-black">$89</span>
                <span className="text-black/70 text-sm uppercase font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 text-black text-xs font-bold w-full">
                <li className="flex gap-3 items-center"><CheckCircle2 className="w-4 h-4 text-black shrink-0" /> Full Gym Access 24/7</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="w-4 h-4 text-black shrink-0" /> Access to all Group Classes</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="w-4 h-4 text-black shrink-0" /> Sauna & Spa Access</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="w-4 h-4 text-black shrink-0" /> 1 PT Session / month</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-black text-white font-bold uppercase tracking-widest text-[10px] hover:bg-black/80 transition-colors shadow-lg">Claim Elite Pro</button>
            </div>

            {/* Ultimate Plan */}
            <div className="bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-eden-red/50 transition-colors flex flex-col items-center">
              <h3 className="font-black tracking-tighter text-2xl text-white mb-2 uppercase">TRANSFORM</h3>
              <div className="text-center mb-8">
                <span className="text-5xl font-black text-white">$149</span>
                <span className="text-white/50 text-sm uppercase font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 text-white/80 text-xs font-bold w-full">
                <li className="flex gap-3 items-center"><CheckCircle2 className="w-4 h-4 text-eden-red shrink-0" /> All Elite Pro Features</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="w-4 h-4 text-eden-red shrink-0" /> 8 PT Sessions / month</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="w-4 h-4 text-eden-red shrink-0" /> Customized Diet Plan</li>
                <li className="flex gap-3 items-center"><CheckCircle2 className="w-4 h-4 text-eden-red shrink-0" /> Weekly Assessments</li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-white/20 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/5 transition-colors">Lock In Transform</button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRAINER SECTION */}
      <section id="trainers" className="py-24 bg-eden-dark">
         <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div>
               <h2 className="text-4xl md:text-5xl text-white mb-4 font-black tracking-tighter uppercase">MEET YOUR <span className="text-eden-red">COACHES</span></h2>
               <p className="text-white/50 max-w-xl font-medium">Industry veterans dedicated to pushing you past your perceived limits.</p>
             </div>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             {[
               { name: "MARCUS BEAN", spec: "Head Coach & Powerlifting", role: "10+ Years Experience", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop" },
               { name: "SARAH JENKINS", spec: "HIIT & Transformation", role: "Certified Nutritionist", img: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=800&auto=format&fit=crop" },
               { name: "ALEX THORNE", spec: "CrossFit & Mobility", role: "Athletic Performance", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" }
             ].map((trainer, idx) => (
               <div key={idx} className="group relative bg-[#111] p-1.5 rounded-2xl border border-white/10">
                 <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                   <img src={trainer.img} alt={trainer.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                   <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                     <p className="text-eden-red font-bold text-[10px] tracking-widest uppercase mb-1">{trainer.spec}</p>
                     <h3 className="font-black tracking-tighter text-2xl text-white mb-1 uppercase leading-none">{trainer.name}</h3>
                     <p className="text-white/60 text-xs italic font-serif font-light max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 transition-all duration-300 overflow-hidden leading-relaxed">"{trainer.role}"</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* 7. CTA STRIP (MID PAGE) */}
      <section className="py-20 relative overflow-hidden bg-eden-red text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050505]/40 mix-blend-multiply"></div>
          <div className="w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">DON'T WAIT UNTIL NEXT YEAR.<br/>START TODAY.</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto font-bold text-sm tracking-widest uppercase">Claim your 7-day free trial right now. Limited spots available.</p>
          <button className="bg-white text-black hover:bg-black hover:text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs transition-colors shadow-2xl">
            CLAIM YOUR FREE TRIAL
          </button>
        </div>
      </section>

      {/* 8. FACILITIES SECTION */}
      <section className="py-24 bg-eden-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden border border-white/10 group bg-[#111] p-2">
               <div className="relative w-full h-full rounded-xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" alt="Facilities Preview" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale hover:grayscale-0" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <button className="w-20 h-20 bg-eden-red text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(220,38,38,0.5)] pl-1">
                     <Play className="w-8 h-8" />
                   </button>
                 </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
               <h2 className="text-4xl md:text-5xl text-white mb-6 font-black tracking-tighter uppercase">PREMIUM <span className="text-eden-red">FACILITIES</span></h2>
               <p className="text-white/60 mb-8 max-w-lg font-medium leading-relaxed">Over 10,000 sqft of pure iron, assault machines, and functional turf spaces. Immaculately clean. Expertly maintained.</p>
               
               <ul className="space-y-4">
                 {[
                   "Eleiko Competition Racks & Bumpers",
                   "Expansive Functional Turf Zone",
                   "State-of-the-Art Cardio Deck",
                   "Recovery Sauna & Cold Plunge",
                   "Immaculate Locker Rooms"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-white/80 font-bold text-sm tracking-widest uppercase">
                     <Dumbbell className="w-5 h-5 text-eden-red" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8.5 BMI CALCULATOR */}
      <section className="py-24 bg-eden-dark border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-white mb-6 font-black tracking-tighter uppercase">CALCULATE YOUR <br/><span className="text-eden-red">BMI</span></h2>
              <p className="text-white/60 mb-10 font-medium leading-relaxed max-w-md">Body Mass Index (BMI) is a simple calculation using a person's height and weight. Use this tool to get a baseline understanding of your current state before selecting a program.</p>
              
              <ul className="space-y-4 mb-10 max-w-sm">
                <li className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase border-b border-white/10 pb-2">
                  <span className="text-yellow-500">Underweight</span>
                  <span className="text-white">Below 18.5</span>
                </li>
                <li className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase border-b border-white/10 pb-2">
                  <span className="text-green-500">Normal</span>
                  <span className="text-white">18.5 - 24.9</span>
                </li>
                <li className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase border-b border-white/10 pb-2">
                  <span className="text-orange-500">Overweight</span>
                  <span className="text-white">25.0 - 29.9</span>
                </li>
                <li className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase pb-2">
                  <span className="text-eden-red">Obese</span>
                  <span className="text-white">30.0 and Above</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#111] p-8 md:p-12 rounded-2xl border border-white/10 relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-eden-red p-4 rounded-xl shadow-[0_10px_30px_rgba(220,38,38,0.3)]">
                <Activity className="w-8 h-8 text-black" />
              </div>
              
              <form onSubmit={calculateBMI} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase text-white/50 mb-2">Weight (KG)</label>
                    <input 
                      type="number" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="e.g. 75" 
                      className="w-full bg-black border border-white/10 px-4 py-4 rounded-xl text-white focus:outline-none focus:border-eden-red transition-colors text-sm font-bold placeholder:text-white/20"
                      required
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-widest uppercase text-white/50 mb-2">Height (CM)</label>
                    <input 
                      type="number" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="e.g. 180" 
                      className="w-full bg-black border border-white/10 px-4 py-4 rounded-xl text-white focus:outline-none focus:border-eden-red transition-colors text-sm font-bold placeholder:text-white/20"
                      required
                      min="1"
                    />
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-white hover:bg-eden-red text-black hover:text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors">
                  Calculate BMI
                </button>
              </form>
              
              {bmiResult && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 pt-8 border-t border-white/10 text-center"
                >
                  <p className="text-[10px] font-black tracking-widest uppercase text-white/50 mb-2">Your Result</p>
                  <div className="flex items-end justify-center gap-2 mb-2">
                    <span className="text-6xl font-black tracking-tighter text-white leading-none">{bmiResult.value}</span>
                    <span className="text-sm font-bold uppercase text-white/30 mb-1">BMI</span>
                  </div>
                  <div className={`inline-block px-4 py-1.5 rounded bg-white/5 ${bmiResult.color} text-[10px] font-black tracking-widest uppercase mt-2`}>
                    {bmiResult.category}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-24 bg-eden-darker border-y border-white/5 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-4 uppercase tracking-tighter font-black">FREQUENTLY ASKED <span className="text-eden-red">QUESTIONS</span></h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Is this gym beginner friendly?", a: "Absolutely. 40% of our new members have never lifted weights before. Our introductory sessions ensure you learn proper form and feel confident from day one." },
              { q: "What's included in the free trial?", a: "You get full facility access for 7 days, allowing you to try our equipment, take a group class, and consult with a trainer to map out your goals." },
              { q: "Are there any hidden joining fees?", a: "No. What you see is what you pay. We despise hidden fees and annual maintenance charges. Cancel anytime." },
              { q: "What are the staffed hours?", a: "We are staffed 6 AM to 10 PM. Members on the Elite Pro plan get 24/7 keycard access to train whenever they want." },
              { q: "Do you offer nutrition guidance?", a: "Yes. Our trainers provide basic macro guidelines, and our Transform plan includes completely customized meal prep protocols." }
            ].map((faq, idx) => (
               <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-eden-red/30 transition-colors">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-start gap-4 tracking-widest uppercase">
                    <span className="text-eden-red mt-0.5"><MessageCircle className="w-5 h-5"/></span>
                    {faq.q}
                  </h4>
                  <p className="text-white/50 text-xs pl-9 leading-relaxed font-medium">{faq.a}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA (HIGH CONVERSION) */}
      <section className="py-32 bg-eden-dark relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2000&auto=format&fit=crop" alt="Gym Background" className="w-full h-full object-cover filter grayscale opacity-10" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-eden-darker via-eden-darker/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase">IT'S TIME TO BUILD<br/> YOUR <span className="text-eden-red">LEGACY</span></h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Stop making excuses. Join the strongest community in the city and unlock your true potential.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <input type="text" placeholder="YOUR NAME" className="w-full bg-[#111] border border-white/10 px-6 py-5 rounded-xl text-white focus:outline-none focus:border-eden-red transition-colors text-[10px] font-bold tracking-widest uppercase" />
            <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-[#111] border border-white/10 px-6 py-5 rounded-xl text-white focus:outline-none focus:border-eden-red transition-colors text-[10px] font-bold tracking-widest uppercase" />
          </div>
          <button className="w-full max-w-xl mt-4 bg-eden-red hover:bg-eden-red-hover text-white px-8 py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(220,38,38,0.2)]">
            LOCK IN FREE TRIAL
          </button>
          <p className="mt-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">We respond via WhatsApp within 5 minutes.</p>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-eden-darker pt-20 pb-10 border-t border-white/5 relative z-10">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-eden-red rounded-sm flex items-center justify-center font-black text-black italic">E</div>
                <span className="font-sans text-xl tracking-tighter uppercase text-white font-black">Eden<span className="text-eden-red">Fit</span></span>
              </div>
              <p className="text-white/40 text-xs mb-6 font-medium leading-relaxed">Premium strength and conditioning facility designed for people who actually want results.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-eden-red transition-all"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-eden-red transition-all"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-eden-red transition-all"><Twitter className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-[10px] tracking-widest text-white mb-6 uppercase">Quick Links</h4>
              <ul className="space-y-3 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                <li><a href="#transform" className="hover:text-eden-red transition-colors">Success Stories</a></li>
                <li><a href="#programs" className="hover:text-eden-red transition-colors">Our Programs</a></li>
                <li><a href="#memberships" className="hover:text-eden-red transition-colors">Pricing Plans</a></li>
                <li><a href="#trainers" className="hover:text-eden-red transition-colors">Trainers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-[10px] tracking-widest text-white mb-6 uppercase">Contact</h4>
              <ul className="space-y-4 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-eden-red shrink-0" />
                  <span>100 Iron Forge Way<br/>Austin, TX 78701</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-eden-red shrink-0" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-eden-red shrink-0" />
                  <span>join@edenfit.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[10px] tracking-widest text-white mb-6 uppercase">Hours</h4>
              <ul className="space-y-3 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                <li className="flex justify-between"><span>Mon - Fri</span><span className="text-white">5:00 AM - 11:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="text-white">6:00 AM - 9:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="text-white">8:00 AM - 6:00 PM</span></li>
              </ul>
            </div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest uppercase">
            <p className="text-white/20">&copy; {new Date().getFullYear()} Eden Fitness Gym. All rights reserved.</p>
            <div className="flex gap-6 text-white/20">
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
