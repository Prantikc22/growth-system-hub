import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useParams, Link, Navigate } from "react-router-dom";
import { CASE_STUDIES } from "@/data/case-studies";
import { ArtBlock } from "@/components/ArtBlock";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";

export default function WorkDetail() {
  const { slug } = useParams();
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return <Navigate to="/work" replace />;
  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-36 pb-24">
        <article className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal variant="up">
              <div className="text-xs font-mono text-muted-foreground mb-3">{cs.category} · {cs.region} · {cs.duration}</div>
              <h1 className="heading-display">{cs.headline}</h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-xl">{cs.summary}</p>
            </Reveal>
            <Reveal variant="up" delay={120} className="mt-10 grid grid-cols-3 gap-3">
              {cs.metrics.map((m, i) => (
                <div key={i} className="rounded-2xl bg-secondary p-5">
                  <div className="text-2xl md:text-3xl font-extrabold tracking-tight"><CountUp to={m.value} prefix={m.prefix} suffix={m.suffix} /></div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{m.label}</div>
                </div>
              ))}
            </Reveal>
            <Reveal variant="up" delay={200} className="prose prose-neutral mt-10 max-w-none">
              <h2 className="heading-section text-2xl mt-10">What we did</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">{cs.body}</p>
              <h3 className="text-xl font-bold mt-8">Services involved</h3>
              <ul>{cs.service.map((s) => <li key={s}>{s}</li>)}</ul>
            </Reveal>
          </div>
          <aside className="lg:col-span-5">
            <Reveal variant="right"><ArtBlock cs={cs} /></Reveal>
          </aside>
        </article>
        <div className="container-wide mt-16">
          <Link to="/work" className="text-sm font-semibold hover:text-primary">← All case studies</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
