import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, ShieldBan, BarChart3, Quote } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            FokusMaster
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="w-full bg-gradient-to-b from-deep-purple to-dark-purple py-20 text-white">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Master Your Focus, <br />
            Conquer Distractions
          </h1>
          <p className="max-w-[700px] text-lg text-white/80 md:text-xl">
            FokusMaster helps ambitious young people overcome digital distractions and laziness with powerful focus
            tools and distraction blocking.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/signup">
              <Button size="lg" className="bg-vibrant-pink hover:bg-vibrant-pink/90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="container py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powerful Features</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to maximize your productivity and focus.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg border p-6 text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Pomodoro Timer</h3>
            <p className="text-muted-foreground">Stay focused with customizable focus sessions and break timers.</p>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-6 text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
              <ShieldBan className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Distraction Blocker</h3>
            <p className="text-muted-foreground">Block distracting websites and apps during focus sessions.</p>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-6 text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Analytics Dashboard</h3>
            <p className="text-muted-foreground">
              Track your progress with detailed focus and productivity statistics.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-6 text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
              <Quote className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Motivational Quotes</h3>
            <p className="text-muted-foreground">Stay inspired with curated quotes from motivational figures.</p>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section id="testimonials" className="bg-muted py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Users Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of users who have transformed their productivity with FokusMaster.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <p className="mb-4 italic text-muted-foreground">
                "FokusMaster has transformed my productivity. I've never been more focused and accomplished."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  AJ
                </div>
                <div>
                  <p className="font-medium">Alex Johnson</p>
                  <p className="text-sm text-muted-foreground">Marketing Manager</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <p className="mb-4 italic text-muted-foreground">
                "Since using FokusMaster, I've doubled my productivity and eliminated distractions."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  SW
                </div>
                <div>
                  <p className="font-medium">Sarah Williams</p>
                  <p className="text-sm text-muted-foreground">Software Developer</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <p className="mb-4 italic text-muted-foreground">
                "The distraction blocker feature alone is worth it. I can finally focus without interruptions."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  MT
                </div>
                <div>
                  <p className="font-medium">Michael Thompson</p>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="container py-20">
        <div className="rounded-lg bg-gradient-to-r from-deep-purple to-dark-purple p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Master Your Focus?</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-white/80">
            Join FokusMaster today and transform your productivity. Start your journey to distraction-free focus.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button size="lg" className="bg-vibrant-pink hover:bg-vibrant-pink/90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                Log in
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted">
        <div className="container py-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                FokusMaster
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Helping ambitious people overcome digital distractions and maximize productivity.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} FokusMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
