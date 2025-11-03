import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureHighlights from './components/FeatureHighlights';
import MarketplacePreview from './components/MarketplacePreview';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureHighlights />
        <section id="earn" className="py-16 bg-gradient-to-b from-white to-sky-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="rounded-2xl border bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold tracking-tight">Teach & Earn</h2>
                <p className="mt-2 text-gray-600">
                  Post quick sessions for the skills you love. Set your price, get bookings, and receive secure payments
                  with a small platform fee. Build your reputation with ratings and badges.
                </p>
                <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Post offers like “Learn Algebra Basics – ₹100/session”</li>
                  <li>UPI escrow payments (Paytm / Google Pay / Razorpay)</li>
                  <li>5–10% service fee per transaction</li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <button className="rounded-lg bg-gradient-to-r from-sky-500 to-emerald-400 px-5 py-3 text-white font-semibold shadow-sm hover:opacity-95">Start Teaching</button>
                  <button className="rounded-lg border px-5 py-3 font-medium hover:bg-gray-50">Learn More</button>
                </div>
              </div>
              <div className="rounded-2xl border bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold">Teachify Wallet</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Track your earnings, withdrawals, and pending payouts. Withdraw to UPI any time with low fees.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl border p-4">
                    <div className="text-gray-500">Total Earned</div>
                    <div className="mt-1 text-2xl font-bold">₹3,540</div>
                  </div>
                  <div className="rounded-xl border p-4">
                    <div className="text-gray-500">Pending Payout</div>
                    <div className="mt-1 text-2xl font-bold">₹420</div>
                  </div>
                  <div className="rounded-xl border p-4">
                    <div className="text-gray-500">Completed Sessions</div>
                    <div className="mt-1 text-2xl font-bold">36</div>
                  </div>
                  <div className="rounded-xl border p-4">
                    <div className="text-gray-500">Avg. Rating</div>
                    <div className="mt-1 text-2xl font-bold">4.8</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MarketplacePreview />
        <section id="learn" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight">Learn Mode (Free Resources)</h2>
              <p className="mt-2 text-gray-600">Explore mini video lessons and PDFs shared by the community and earn the “Give Free Knowledge” badge.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border p-4">
                  Algebra Cheatsheet (PDF)
                </div>
                <div className="rounded-xl border p-4">
                  Python Basics in 15 min (Video)
                </div>
                <div className="rounded-xl border p-4">
                  Color Theory for Designers (PDF)
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Teachify — Learn what you love, teach what you know.</p>
          <div className="text-sm text-gray-600">Privacy • Terms • Support</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
