import { useMemo, useState } from 'react';
import { Star, MapPin, Search } from 'lucide-react';

const SAMPLE_TUTORS = [
  {
    id: 1,
    name: 'Aarav Sharma',
    subject: 'Algebra Basics',
    price: 100,
    mode: 'Online',
    rating: 4.8,
    reviews: 54,
    location: 'Delhi',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Mira Patel',
    subject: 'Video Editing (CapCut/Premiere)',
    price: 150,
    mode: 'Online / In-person',
    rating: 4.9,
    reviews: 31,
    location: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Kabir Rao',
    subject: 'Python for Beginners',
    price: 120,
    mode: 'Online',
    rating: 4.7,
    reviews: 40,
    location: 'Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Sara Khan',
    subject: 'Spoken English',
    price: 90,
    mode: 'In-person',
    rating: 4.6,
    reviews: 22,
    location: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop',
  },
];

export default function MarketplacePreview() {
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('All');

  const filtered = useMemo(() => {
    return SAMPLE_TUTORS.filter((t) => {
      const matchQuery = [t.name, t.subject, t.location]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchMode = mode === 'All' || t.mode.includes(mode);
      return matchQuery && matchMode;
    });
  }, [query, mode]);

  return (
    <section id="explore" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Discover tutors</h2>
            <p className="text-gray-600">Search by subject, price, or mode. Book a session in minutes.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="sm:col-span-2 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try ‘Algebra’, ‘Python’, ‘Editing’..."
              className="w-full rounded-lg border pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="rounded-lg border px-3 py-2"
          >
            <option>All</option>
            <option>Online</option>
            <option>In-person</option>
          </select>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((tutor) => (
            <article key={tutor.id} className="group rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <img
                  src={tutor.avatar}
                  alt={tutor.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold leading-tight">{tutor.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500 text-sm">
                    <Star size={14} fill="currentColor" />
                    <span>{tutor.rating}</span>
                    <span className="text-gray-400">({tutor.reviews})</span>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700 line-clamp-2">{tutor.subject}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm font-medium">₹{tutor.price}/session</div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <MapPin size={14} />
                  <span>{tutor.location} • {tutor.mode}</span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="rounded-lg border px-3 py-2 text-sm font-medium hover:bg-gray-50">Message</button>
                <button className="rounded-lg bg-gray-900 text-white px-3 py-2 text-sm font-semibold hover:bg-gray-800">Book</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
