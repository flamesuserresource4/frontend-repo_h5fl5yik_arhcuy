import { motion } from 'framer-motion';
import { Star, Shield, Wallet, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-70 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-sky-200 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-emerald-200 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
            >
              Learn it. Teach it. Earn it — with Teachify.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-gray-600"
            >
              A student-to-student skill marketplace to book quick sessions, share knowledge, and build your portfolio. Safe payments, ratings, and a community that helps you grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#explore" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-emerald-400 px-5 py-3 text-white font-semibold shadow-sm hover:opacity-95">
                Explore Tutors
              </a>
              <a href="#earn" className="inline-flex items-center justify-center rounded-lg border px-5 py-3 font-medium hover:bg-gray-50">
                Become a Tutor
              </a>
            </motion.div>

            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Star, label: 'Ratings', value: '1–5 Stars' },
                { icon: Shield, label: 'Safe Pay', value: 'UPI Escrow' },
                { icon: Wallet, label: 'Low Fees', value: '10% Platform' },
                { icon: MessageSquare, label: 'Smart Chat', value: 'Auto-translate' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border bg-white/70 backdrop-blur p-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <item.icon size={16} />
                    <span className="text-xs uppercase tracking-wide">{item.label}</span>
                  </div>
                  <div className="mt-1 text-sm font-semibold">{item.value}</div>
                </div>
              ))}
            </dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl border bg-white/80 backdrop-blur p-4 shadow-lg">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-sky-50 to-emerald-50 grid place-items-center">
                <img
                  src="https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop"
                  alt="Students learning together"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-gray-600">
                <div className="rounded-lg border p-3">
                  Algebra Basics • ₹100/session
                </div>
                <div className="rounded-lg border p-3">
                  Video Editing • ₹150/session
                </div>
                <div className="rounded-lg border p-3">
                  Python for Beginners • ₹120/session
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
