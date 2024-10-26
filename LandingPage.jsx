import React from 'react';
import Link from 'next/link'
import { MessageCircle, FileUp, TrendingUp } from 'lucide-react';

const Button = ({ children, variant = 'primary', size = 'md', ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium transition-colors
      ${variant === 'primary' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}
      ${size === 'lg' ? 'text-lg px-6 py-3' : 'text-base'}
      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, className = '', ...props }) => (
  <div className={`bg-white dark:bg-blue-800 rounded-lg shadow-lg overflow-hidden ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-blue-100 dark:border-blue-700">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">{children}</h3>
);

const FinAiLogo = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-blue-700">
        <Link href="/" className="flex items-center justify-center">
          <FinAiLogo className="h-8 w-8 text-blue-300" />
          <span className="ml-2 font-bold text-2xl text-blue-100">FinAi</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium text-blue-200 hover:text-blue-100 transition-colors">Features</Link>
          <Link href="#testimonials" className="text-sm font-medium text-blue-200 hover:text-blue-100 transition-colors">Testimonials</Link>
          <Link href="#cta" className="text-sm font-medium text-blue-200 hover:text-blue-100 transition-colors">Get Started</Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto leading-tight">
                Simplify Your Finances with <span className="text-blue-300">FinAi</span>
              </h1>
              <p className="max-w-[700px] text-blue-200 text-lg sm:text-xl md:text-2xl">
                Your AI-powered financial assistant. Get answers, analyze documents, and improve your credit score.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href='/payments' passHref><Button size="lg">Get Started</Button></Link>
                <Button onclick="location.href='../www/index.html'" variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-blue-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-100">Our Features</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <MessageCircle className="w-12 h-12 mb-4 text-blue-400" />
                  <CardTitle>AI Financial Chatbot</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-blue-200">Get answers to your financial questions in simplified terms. Our AI-powered chatbot is here to help you understand complex financial concepts.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <FileUp className="w-12 h-12 mb-4 text-blue-400" />
                  <CardTitle>Document Analysis</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-blue-200">Upload your financial documents and ask questions related to them. Our AI will analyze and provide insights based on your specific financial data.</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 mb-4 text-blue-400" />
                  <CardTitle>AlternateTrustScore</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-blue-200">Get a fair assessment of your creditworthiness. Our unique scoring system considers your payment history, consistency, and recent financial behavior.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-blue-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-100">What Our Users Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent>
                  <p className="mb-4 italic text-blue-200">"FinAi has completely transformed how I manage my finances. The AI chatbot is like having a personal financial advisor 24/7!"</p>
                  <p className="font-semibold text-blue-300">- Sarah J.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <p className="mb-4 italic text-blue-200">"The document analysis feature saved me hours of work. I can now quickly understand complex financial statements."</p>
                  <p className="font-semibold text-blue-300">- Michael T.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <p className="mb-4 italic text-blue-200">"AlternateTrustScore gave me a fair chance at improving my credit. It's great to see a system that considers more than just traditional credit scores."</p>
                  <p className="font-semibold text-blue-300">- Emily R.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-blue-800 to-blue-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-2xl mx-auto leading-tight">Ready to Simplify Your Finances?</h2>
              <p className="max-w-[600px] text-blue-200 text-lg sm:text-xl">
                Join FinAi today and take control of your financial future with the power of AI.
              </p>
              <Button size="lg">Get Started Now</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t border-blue-700">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-blue-300">© {new Date().getFullYear()} FinAi. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link href="/terms" className="text-sm text-blue-300 hover:text-blue-100 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-sm text-blue-300 hover:text-blue-100 transition-colors">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;