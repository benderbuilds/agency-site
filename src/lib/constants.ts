export const SITE = {
  name: "Vanguard AI",
  tagline: "Enterprise AI Consulting",
  description:
    "We help enterprises cut through the AI hype, find real opportunities, and build systems that deliver measurable results.",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  headline: "Turn AI Ambition Into\nEnterprise Reality",
  subtitle:
    "Most companies know AI matters. Few know where to start. We bridge the gap between executive vision and production-grade AI systems that drive measurable ROI.",
  cta_primary: "Book a Strategy Call",
  cta_secondary: "See How We Work",
  stats: [
    { value: 50, suffix: "+", label: "Engagements Delivered" },
    { value: 3.2, suffix: "x", label: "Avg. ROI for Clients" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ],
};

export const PROBLEM = {
  headline: "The Enterprise AI Gap",
  subtitle:
    "Organizations are investing in AI, but most initiatives stall before delivering value. The gap between AI potential and business results is widening.",
  pain_points: [
    {
      title: "Pilot Purgatory",
      description:
        "Proof-of-concepts that never make it to production. Teams build demos that impress in meetings but fail under real-world conditions.",
      color: "cyan",
    },
    {
      title: "Talent Bottleneck",
      description:
        "The AI talent market is brutally competitive. Hiring takes months, retention is expensive, and knowledge walks out the door.",
      color: "purple",
    },
    {
      title: "Vendor Overload",
      description:
        "Hundreds of AI tools, each promising transformation. Without a clear strategy, enterprises end up with fragmented tooling and no integration.",
      color: "amber",
    },
    {
      title: "Unclear ROI",
      description:
        "Leadership demands measurable returns. But without the right frameworks, AI projects lack the KPIs and accountability structures to prove value.",
      color: "cyan",
    },
  ],
};

export interface Service {
  icon: string;
  title: string;
  description: string;
  color: "cyan" | "purple" | "amber";
}

export const SERVICES: Service[] = [
  {
    icon: "📊",
    title: "AI Readiness Audit",
    description:
      "Comprehensive assessment of your AI maturity across technology, data infrastructure, talent, and organizational processes. Walk away with a prioritized roadmap.",
    color: "cyan",
  },
  {
    icon: "🔍",
    title: "Use Case Discovery",
    description:
      "Systematic identification and prioritization of your highest-impact AI opportunities. We score by feasibility, business value, and strategic alignment.",
    color: "purple",
  },
  {
    icon: "⚡",
    title: "Point Solutions",
    description:
      "Rapid deployment of targeted AI tools for specific business problems. From intelligent document processing to predictive analytics — delivered in weeks, not quarters.",
    color: "amber",
  },
  {
    icon: "🛠️",
    title: "AI Engineering",
    description:
      "End-to-end custom AI system development. We architect, build, and deploy production-grade AI infrastructure designed for scale, reliability, and maintainability.",
    color: "cyan",
  },
  {
    icon: "🔬",
    title: "AI Diligence",
    description:
      "Rigorous evaluation of AI capabilities and risks for M&A transactions, investment decisions, and vendor selection. Technical depth meets business context.",
    color: "purple",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep dive into your business, data landscape, and strategic goals. We map the terrain before plotting the course.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture and strategy tailored to your constraints. Technology choices grounded in your reality, not industry hype.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Agile development with continuous stakeholder alignment. Production-grade systems built with your team, not for your team.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Monitoring, optimization, and knowledge transfer. We ensure your AI systems deliver compounding value long after we leave.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "They didn't just recommend AI tools — they restructured how our entire operations team thinks about automation. The impact has been transformational.",
    author: "Sarah Chen",
    title: "VP of Operations",
    company: "A Fortune 500 Manufacturer",
  },
  {
    quote:
      "The AI diligence work saved us from a $40M acquisition that looked great on paper but had fundamental technical debt in its ML pipeline.",
    author: "Michael Torres",
    title: "Managing Director",
    company: "A Leading PE Firm",
  },
  {
    quote:
      "From readiness audit to production deployment in 14 weeks. Their process is the most efficient I've seen in 20 years of technology consulting.",
    author: "Priya Sharma",
    title: "CTO",
    company: "A Series C Fintech",
  },
];

export const CTA = {
  headline: "Ready to Close the AI Gap?",
  subtitle:
    "Book a 30-minute strategy call. No pitch decks — just an honest conversation about where AI can move the needle for your business.",
  button: "Schedule a Conversation",
  contact_email: "hello@vanguardai.com",
};

export const FOOTER = {
  tagline: "Enterprise AI consulting that delivers results, not slide decks.",
  links: [
    { label: "Services", href: "#services" },
    { label: "Our Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  email: "hello@vanguardai.com",
};
