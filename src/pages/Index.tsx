import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Navigation,
  Pen,
  Users,
  Clock,
  GraduationCap,
  Briefcase,
  Settings,
  Database,
  Code2,
  Palette,
  BookOpen,
  Zap,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Pen className="h-6 w-6 text-red-600" />
              <span className="text-xl font-semibold text-gray-900">
                HandwrittenNote
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-red-600 font-medium"
              >
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Online Test
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Info
              </a>
              <Button variant="default" className="bg-red-600 hover:bg-red-700">
                Contact Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to HandwrittenNote
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transforming text into handwritten style with a modern twist
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            View Jobs
          </Button>
        </div>
      </section>

      {/* Creative Environment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="w-16 h-2 bg-gray-600 rounded"></div>
                      <div className="w-12 h-2 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="w-full h-2 bg-gray-700 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Creative Environment
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Inclusivity and diversity
                  </h3>
                  <p className="text-sm text-gray-600">
                    Creating an environment where everyone feels welcome and
                    valued
                  </p>
                </div>
                <div className="text-center">
                  <Settings className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Flexible work Setup
                  </h3>
                  <p className="text-sm text-gray-600">
                    Work from anywhere with our flexible remote-first approach
                  </p>
                </div>
                <div className="text-center">
                  <GraduationCap className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Continuous learning
                  </h3>
                  <p className="text-sm text-gray-600">
                    Always growing with learning opportunities and skill
                    development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe in the power of handwritten communication to create
            meaningful connections. Our mission is to bridge the gap between
            digital convenience and the personal touch of handwritten notes,
            making it accessible to everyone in the modern world.
          </p>
        </div>
      </section>

      {/* Available Positions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Available Positions
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="destructive">New</Badge>
              <Badge className="bg-red-600 hover:bg-red-700">Development</Badge>
              <Badge variant="destructive">Design</Badge>
              <Badge className="bg-red-600 hover:bg-red-700">Marketing</Badge>
              <Badge className="bg-red-600 hover:bg-red-700">Operations</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Briefcase className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Product Manager</CardTitle>
                <CardDescription>Full-time · Remote</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Code2 className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Frontend Developer</CardTitle>
                <CardDescription>Full-time · Hybrid</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Database className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Backend Engineer</CardTitle>
                <CardDescription>Full-time · Remote</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Palette className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">UI/UX Designer</CardTitle>
                <CardDescription>Contract · Remote</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Features</h2>
            <p className="text-lg text-gray-600">
              Advanced technology meets traditional handwriting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-blue-600" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Free Speech Recognition
                </h3>
                <p className="text-sm text-gray-600">
                  Convert speech to handwritten text seamlessly
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <Zap className="h-16 w-16 text-red-600" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Quick Export
                </h3>
                <p className="text-sm text-gray-600">
                  Export your handwritten notes in multiple formats
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <Pen className="h-16 w-16 text-green-600" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Handwriting Styles
                </h3>
                <p className="text-sm text-gray-600">
                  Choose from multiple handwriting styles and fonts
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <Clock className="h-16 w-16 text-purple-600" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Real-time Preview
                </h3>
                <p className="text-sm text-gray-600">
                  See your handwritten text in real-time as you type
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Start creating handwritten notes now
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already discovered the joy of
            digital handwriting
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Quick Demo to Experience
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Pen className="h-6 w-6 text-red-500" />
                <span className="text-xl font-semibold">HandwrittenNote</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Transforming the way you create and share handwritten content in
                the digital age.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HandwrittenNote. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
