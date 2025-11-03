import { BookOpen, Users, Shield, Trophy } from 'lucide-react';

const features = [
  {
    title: 'Skill Marketplace',
    desc: 'Find tutors for math, coding, design, languages, and more — filtered by price, ratings, and meeting type.',
    icon: BookOpen,
  },
  {
    title: 'Smart Chat & Booking',
    desc: 'Chat with auto-translation, pick a time, and share a Meet/Zoom link right inside the conversation.',
    icon: Users,
  },
  {
    title: 'Safety & Verification',
    desc: 'Verify via school email or ID. Built-in escrow and AI moderation keep the community safe.',
    icon: Shield,
  },
  {
    title: 'Points & Badges',
    desc: 'Earn points, climb from Bronze to Gold, and unlock badges like Math Master and Creative Tutor.',
    icon: Trophy,
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Everything you need to teach and learn</h2>
          <p className="mt-2 text-gray-600">Built for students, with safety and simplicity at the core.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow transition">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-tr from-sky-500 to-emerald-400 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
