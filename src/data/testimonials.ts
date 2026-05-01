export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  type: "card" | "whatsapp";
  initial: string;
  accent: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { id: "t1", name: "Aarav Mehta", role: "Founder", company: "Kairo Coffee", quote: "We tried two agencies before. This is the first time it actually feels like a team. ROAS doubled in 60 days.", type: "card", initial: "AM", accent: "#7B3F00" },
  { id: "t2", name: "Anaya R.", role: "Founder", company: "Linen by Anaya", quote: "The reels they produce don't look like ads. They look like the brand finally found its voice.", type: "whatsapp", initial: "AR", accent: "#C9A27A" },
  { id: "t3", name: "Karan Shah", role: "MD", company: "Northstar Realty", quote: "Lead cost dropped 70%. We stopped doing print the same quarter.", type: "card", initial: "KS", accent: "#1E40AF" },
  { id: "t4", name: "Saanvi G.", role: "Founder", company: "Saanvi Fine Jewels", quote: "I was the bottleneck. They built a system around me, not just content for me.", type: "whatsapp", initial: "SG", accent: "#A8336E" },
  { id: "t5", name: "Rohan B.", role: "CEO", company: "Vyom Strength Co.", quote: "5 gyms behaved like one brand for the first time. The booking system alone paid for itself in a month.", type: "card", initial: "RB", accent: "#0F766E" },
  { id: "t6", name: "Chef Ishaan", role: "Founder", company: "Okura Ramen", quote: "Outlet 3 launched to a 14K waitlist. We have not run a single ad.", type: "whatsapp", initial: "CI", accent: "#DC2626" },
  { id: "t7", name: "Meera D.", role: "Co-founder", company: "Lumen Skin", quote: "Their creative testing cadence is genuinely insane. We see what's working before competitors notice.", type: "card", initial: "MD", accent: "#E879A7" },
  { id: "t8", name: "Aditya P.", role: "Head of Growth", company: "Inkpath EduTech", quote: "₹47 CPL in JEE prep. I had to recheck the dashboard twice.", type: "whatsapp", initial: "AP", accent: "#7C3AED" },
  { id: "t9", name: "Nira K.", role: "Founder", company: "Nira Boutique Stays", quote: "We sleep better. OTAs are no longer the boss of our calendar.", type: "card", initial: "NK", accent: "#0EA5E9" },
  { id: "t10", name: "Vikram T.", role: "Founder", company: "Tilt Finance", quote: "They made me a media company. The app is fast. The content compounds. SIPs grew 12x.", type: "whatsapp", initial: "VT", accent: "#16A34A" },
  { id: "t11", name: "Devang K.", role: "CEO", company: "Halo Conversational", quote: "Site, ads, copy — one team. Cut our agency tab by 60% and grew 3x faster.", type: "card", initial: "DK", accent: "#2563EB" },
  { id: "t12", name: "Sneha M.", role: "Creative Director", company: "Atelier Noir", quote: "They treat the brand like a brand. Not a campaign. Every drop sells out now.", type: "whatsapp", initial: "SM", accent: "#0F0F0F" },
];
