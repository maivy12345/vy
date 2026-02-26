import { motion } from 'motion/react';
import { Bot, Cpu, Sparkles, Zap, ChevronRight, Menu, X, ArrowRight, CheckCircle2, Globe, Shield, Code2, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans overflow-x-hidden selection:bg-violet-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight">Auregon<span className="text-violet-400">.AI</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#solutions" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Solutions</a>
            <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log in</button>
            <button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-lg pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            <a href="#home" className="text-2xl font-display font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#features" className="text-2xl font-display font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#solutions" className="text-2xl font-display font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#pricing" className="text-2xl font-display font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <hr className="border-gray-800" />
            <button className="w-full py-4 rounded-full bg-white text-black text-lg font-medium">Get Started</button>
          </div>
        </div>
      )}

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="pt-40 pb-20 md:pt-52 md:pb-32 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-violet-500/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-200">Introducing Auregon AI 2.0</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-[1.1] mb-8"
            >
              The Next Generation <br className="hidden md:block" />
              of <span className="text-gradient">Artificial Intelligence</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
            >
              Empower your business with cutting-edge AI solutions. Automate workflows, generate insights, and scale faster than ever before.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all flex items-center justify-center gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Play className="w-4 h-4" /> Watch Demo
              </button>
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-20 relative mx-auto max-w-5xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
                <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <img 
                  src="https://picsum.photos/seed/dashboard/1200/600?blur=2" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto object-cover opacity-80 mix-blend-screen"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Powerful features for <br/><span className="text-gradient">modern teams</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to scale your operations and build better products faster.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Cpu />, title: "Neural Processing", desc: "Advanced neural networks that adapt to your specific business needs and data patterns." },
                { icon: <Zap />, title: "Real-time Analytics", desc: "Get instant insights with our sub-millisecond processing engine and live dashboards." },
                { icon: <Shield />, title: "Enterprise Security", desc: "Bank-grade encryption and compliance with SOC2, GDPR, and HIPAA standards." },
                { icon: <Globe />, title: "Global Edge Network", desc: "Deploy your AI models globally with our distributed edge computing infrastructure." },
                { icon: <Code2 />, title: "Developer API", desc: "Integrate seamlessly with our comprehensive REST and GraphQL APIs." },
                { icon: <Bot />, title: "Autonomous Agents", desc: "Deploy intelligent agents that can handle complex multi-step workflows automatically." }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass p-8 rounded-2xl hover:bg-white/[0.05] transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Seamless integration with your <span className="text-gradient">existing stack</span></h2>
              <p className="text-gray-400 text-lg mb-8">Connect Auregon AI with your favorite tools in minutes. No complex setup or dedicated engineering team required.</p>
              
              <div className="space-y-4">
                {["One-click integrations", "Custom webhooks", "Real-time sync", "Automated mapping"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-10 px-6 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                View all integrations <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-blue-500/20 blur-3xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`glass p-6 rounded-2xl flex items-center justify-center aspect-square ${i === 2 ? 'translate-y-8' : ''} ${i === 4 ? 'translate-y-8' : ''}`}>
                    <div className="w-16 h-16 rounded-full bg-white/10 animate-pulse" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-900/20" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Ready to build the future?</h2>
            <p className="text-xl text-gray-400 mb-10">Join thousands of forward-thinking companies building with Auregon AI.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all">
                Get Started for Free
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0a0a] pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold font-display tracking-tight">Auregon<span className="text-violet-400">.AI</span></span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Building the next generation of artificial intelligence tools for modern teams and enterprises.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-violet-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-violet-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© 2026 Auregon AI. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <span className="text-xs">𝕏</span>
              </div>
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <span className="text-xs">in</span>
              </div>
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <span className="text-xs">gh</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
