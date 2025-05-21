"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { Menu, ChevronLeft, ChevronRight, User, Mail, Phone, X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"
import OverlayCard from "@/components/overlaycard"

export default function Home() {
  const homeRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>
  const aboutRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>
  const serviceRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>
  const packagesRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>
  const testimonialRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>
  const galleryRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>
  const bookingRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>

  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [bookingService, setBookingService] = useState<string>("")
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  })

  const isMobile = useMobile()

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleBookNow = (serviceName?: string) => {
    if (serviceName) {
      setBookingService(serviceName)
    }
    scrollToSection(bookingRef)
  }

  const testimonials = [
    {
      id: 1,
      name: "Sophia Reynolds",
      role: "Marketing Executive",
      image: "/images/test1.png",
      text: "My experience at Aravē was absolutely transformative. The Signature Ritual treatment melted away months of stress, and the staff's attention to detail was impeccable. I've visited many spas, but none compare to the level of care and expertise I received here.",
    },
    {
      id: 2,
      name: "James Thornton",
      role: "Finance Director",
      image: "/images/test2.png",
      text: "As someone who travels frequently for business, I've made it a point to visit Aravē whenever I'm in town. Their Hot Stone Massage is the perfect remedy for jet lag and tension. The tranquil atmosphere and professional therapists make every visit memorable.",
    },
    {
      id: 3,
      name: "Elena Miyazaki",
      role: "Wellness Coach",
      image: "/images/test3.png",
      text: "I recommend Aravē to all my clients seeking deep relaxation and rejuvenation. Their holistic approach to wellness aligns perfectly with my philosophy. The Aromatherapy Session was particularly outstanding - I left feeling balanced and renewed both mentally and physically.",
    },
  ]

  const services = [
    {
      id: 1,
      name: "Luxury Bath Ritual",
      image: "/images/ritual.png",
      description:
        "Immerse yourself in our signature bath experience with essential oils and flower petals for complete relaxation.",
      duration: "60 minutes",
      price: "$120",
      benefits: [
        "Deep relaxation and stress relief",
        "Improved circulation",
        "Detoxification",
        "Skin hydration and nourishment",
      ],
      includes: [
        "Aromatherapy consultation",
        "Custom essential oil blend",
        "Herbal tea service",
        "Post-treatment relaxation",
      ],
    },
    {
      id: 2,
      name: "Mineral Salt Scrub",
      image: "/images/scrubs.png",
      description:
        "Discover our serene and thoughtfully designed spaces that invite you to unwind and let go, whether you seek solace or rejuvenation.",
      duration: "45 minutes",
      price: "$95",
      benefits: [
        "Exfoliation of dead skin cells",
        "Improved skin texture and tone",
        "Enhanced circulation",
        "Relaxation and stress relief",
      ],
      includes: ["Full body exfoliation", "Hydrating body oil application", "Scalp massage", "Refreshing facial mist"],
    },
    {
      id: 3,
      name: "Floral Foot Therapy",
      image: "/images/foot.png",
      description:
        "Revitalize tired feet with our botanical treatment featuring flower essences and gentle massage techniques.",
      duration: "30 minutes",
      price: "$75",
      benefits: [
        "Relief for tired, aching feet",
        "Improved circulation",
        "Reduced swelling and inflammation",
        "Deep relaxation",
      ],
      includes: [
        "Warm foot soak with flower petals",
        "Exfoliation with natural scrub",
        "Pressure point massage",
        "Cooling botanical gel application",
      ],
    },
    {
      id: 4,
      name: "Revitalizing Facial",
      image: "/images/facial.png",
      description:
        "Our customized facial treatments use organic ingredients to cleanse, exfoliate, and nourish your skin.",
      duration: "60 minutes",
      price: "$135",
      benefits: [
        "Deep cleansing and pore refinement",
        "Improved skin texture and tone",
        "Hydration and nourishment",
        "Anti-aging benefits",
      ],
      includes: [
        "Skin analysis and consultation",
        "Double cleansing ritual",
        "Exfoliation and extraction",
        "Custom mask and serum application",
        "Face, neck, and shoulder massage",
      ],
    },
    {
      id: 5,
      name: "Aromatherapy Session",
      image: "/images/aroma.png",
      description:
        "Experience the healing power of essential oils in our calming aromatherapy treatments for mind and body.",
      duration: "75 minutes",
      price: "$150",
      benefits: [
        "Stress and anxiety reduction",
        "Improved sleep quality",
        "Enhanced mood and mental clarity",
        "Physical relaxation",
      ],
      includes: [
        "Personalized essential oil blend",
        "Full body massage with aromatherapy oils",
        "Inhalation therapy",
        "Take-home oil blend",
      ],
    },
    {
      id: 6,
      name: "Signature Aravē Ritual",
      image: "/images/all.png",
      description:
        "Our exclusive head-to-toe treatment combines multiple therapies for the ultimate luxury spa experience.",
      duration: "120 minutes",
      price: "$225",
      benefits: ["Complete body rejuvenation", "Deep relaxation", "Balanced energy flow", "Enhanced wellbeing"],
      includes: [
        "Foot cleansing ritual",
        "Full body exfoliation",
        "Aromatherapy massage",
        "Mini facial treatment",
        "Scalp massage with warm oil",
      ],
    },
  ]

  // Available time slots
  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

  // Simulated booked time slots
  const bookedTimeSlots = {
    "2024-05-20": ["09:00", "14:00", "17:00"],
    "2024-05-21": ["10:00", "11:00", "15:00"],
    "2024-05-22": ["12:00", "16:00"],
    "2024-05-23": ["09:00", "13:00", "18:00"],
    "2024-05-24": ["11:00", "14:00", "16:00"],
  }

  const isTimeSlotBooked = (date: string, time: string) => {
    return bookedTimeSlots[date as keyof typeof bookedTimeSlots]?.includes(time) || false
  }

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    setBookingDetails({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: bookingService,
      date: selectedDate,
      time: selectedTime,
    })

    setShowConfirmation(true)
  }

  return (
    <div className="min-h-screen bg-[#f9f5f0] font-luxury">
      {/* Elegant Header with Creative Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? "bg-[#f9f5f0]/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center justify-between h-20 px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-12 w-12">
              <Image
                src="/images/header.png"
                alt="Aravē Spa Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-3xl tracking-wide font-cursive">
              <span className="text-[#8ca889]">Ara</span>
              <span className="text-[#3c3c3c]">vē</span>
            </span>
          </Link>

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild className="z-60">
                <Button variant="ghost" size="icon" className="text-[#8ca889]">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white/95 backdrop-blur-sm w-[280px] ">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="relative h-12 w-12">
                    <Image
                      src="/images/header.png"
                      alt="Aravē Spa Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-3xl font-cursive tracking-wide">
                    <span className="text-[#8ca889]">Ara</span>
                    <span className="text-[#3c3c3c]">vē</span>
                  </span>
                </div>
                <nav className="flex flex-col gap-6 mt-8">
                  <Link
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(homeRef);
                    }}
                    className="text-lg text-[#3c3c3c] hover:text-[#8ca889] transition-colors font-elegant"
                  >
                    Home
                  </Link>
                  <Link
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(aboutRef);
                    }}
                    className="text-lg text-[#3c3c3c] hover:text-[#8ca889] transition-colors font-elegant"
                  >
                    About
                  </Link>
                  <Link
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(serviceRef);
                    }}
                    className="text-lg text-[#3c3c3c] hover:text-[#8ca889] transition-colors font-elegant"
                  >
                    Services
                  </Link>
                  <Link
                    href="#"
                    onClick={() => scrollToSection(packagesRef)}
                    className="text-lg text-[#3c3c3c] hover:text-[#8ca889] transition-colors font-elegant"
                  >
                    Packages
                  </Link>
                  <Link
                    href="#"
                    onClick={() => scrollToSection(testimonialRef)}
                    className="text-lg text-[#3c3c3c] hover:text-[#8ca889] transition-colors font-elegant"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="#"
                    onClick={() => scrollToSection(galleryRef)}
                    className="text-lg text-[#3c3c3c] hover:text-[#8ca889] transition-colors font-elegant"
                  >
                    Gallery
                  </Link>
                  <div className="flex items-center justify-center">
                    <Button
                    onClick={() => handleBookNow()}
                    className="mt-4 w-full bg-[#8ca889] hover:bg-[#7a9677] text-white font-elegant items-end"
                  >
                    Book Now
                  </Button>
                  </div>
                  
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="flex items-center">
              <div
                className={`relative flex items-center justify-center ${
                  scrolled ? "" : "rounded-full px-4 py-2 backdrop-blur-sm bg-white/10"
                }`}
              >
                <ul className="relative flex items-center gap-2 z-10">
                  {[
                    { name: "Home", ref: homeRef },
                    { name: "About", ref: aboutRef },
                    { name: "Services", ref: serviceRef },
                    { name: "Packages", ref: packagesRef },
                    { name: "Gallery", ref: galleryRef },
                  ].map((item, index) => (
                    <li key={index} className="relative group">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          scrollToSection(item.ref);
                        }}
                        className="nav-link font-elegant"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                  <li>
                    <Button
                      onClick={() => handleBookNow()}
                      className={`ml-2 px-6 py-2 transition-all duration-300 ${
                        scrolled
                          ? "bg-[#8ca889] hover:bg-[#7a9677] text-white"
                          : "bg-white/90 text-[#8ca889] hover:bg-[#8ca889] hover:text-white border border-[#8ca889]"
                      } font-elegant`}
                    >
                      Book Now
                    </Button>
                  </li>
                </ul>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section ref={homeRef} className="relative overflow-hidden bg-[#f3efe9] min-h-screen flex items-center pt-24 md:pt-0">
          <div className="absolute right-0 top-[80%] -translate-y-1/2 z-40 lg:right-24 hidden md:block">
      <OverlayCard />
    </div>
          <div className="container px-4 mx-auto md:py-24">
          
            <div className="grid items-center lg:grid-cols-2 gap-12">
              <div className="max-w-lg">
                <h1 className="mb-4 md:mb-6 font-luxury text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight text-[#3c3c3c]">
                  <span className="font-cursive text-[#8ca889]">Skin</span> and <span className="font-cursive text-[#8ca889]">Soul</span> Care
                </h1>
                <p className="mb-6 md:mb-8 text-base md:text-lg text-[#666666] leading-relaxed max-w-md font-elegant">
                  We believe in providing our valued clients with an elevated spa experience, and our Exclusive
                  Membership is designed to offer you a host of special privileges and benefits.
                </p>
                <Button
                  className="px-6 py-4 md:px-8 md:py-6 text-sm md:text-base bg-[#8ca889] hover:bg-[#7a9677] text-white font-elegant"
                  onClick={() => handleBookNow()}
                >
                  Book Now
                </Button>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <Image
                    src="/images/headers.png"
                    alt="Spa products and treatments"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            </div>
          

          {/* Decorative elements */}
          <div className="absolute top-20 right-20">
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="10" r="8" fill="#8ca889" fillOpacity="0.2" />
              <circle cx="80" cy="15" r="6" fill="#8ca889" fillOpacity="0.2" />
              <circle cx="90" cy="30" r="5" fill="#8ca889" fillOpacity="0.2" />
              <circle cx="105" cy="35" r="4" fill="#8ca889" fillOpacity="0.2" />
              <circle cx="75" cy="35" r="7" fill="#8ca889" fillOpacity="0.2" />
            </svg>
          </div>

          

          {/* Additional pattern at bottom left */}
          <div className="absolute bottom-40 left-10">
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="40" r="8" fill="#8ca889" fillOpacity="0.2" />
              <circle cx="40" cy="35" r="6" fill="#8ca889" fillOpacity="0.2" />
              <circle cx="30" cy="20" r="5" fill="#8ca889" fillOpacity="0.2" />
              <circle cx="15" cy="15" r="4" fill="#8ca889" fillOpacity="0.2" />
              <circle cx="45" cy="15" r="7" fill="#8ca889" fillOpacity="0.2" />
            </svg>
          </div>
        </section>

        {/* About Us Section */}
        <section ref={aboutRef} className="py-16 bg-[#fcfaf7]">
          <div className="container px-4 mx-auto text-center">
            <h3 className="section-subtitle">EXPLORE ARAVĒ</h3>

            <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed text-[#3c6e71] font-elegant italic">
              Step into a world where luxury meets wellness. Our spa is meticulously curated to offer you an immersive
              experience that nurtures the body and soothes the soul. From plush robes to ambient lighting, every detail
              is thoughtfully crafted to elevate your senses.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a
                href="#"
                onClick={() => handleBookNow()}
                className="px-8 py-3 text-white border border-[#8ca889] rounded-full bg-[#8ca889] hover:bg-[#7a9677] transition-colors font-elegant"
              >
                Book An Appointment
              </a>
              <a
                href="#"
                onClick={() => scrollToSection(serviceRef)}
                className="px-8 py-3 text-[#8ca889] border border-[#8ca889] rounded-full hover:bg-[#8ca889] hover:text-white transition-colors font-elegant"
              >
                Explore Services
              </a>
            </div>

            {/* About Us Statistics */}
            <div className="relative">
              <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-2 lg:grid-cols-4">
                {/* Branch In World */}
                <div className="flex flex-col items-center p-4 md:p-8 border border-[#e5e0d8] rounded-[40px] bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                  <div className="mb-2">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[30px] md:h-[30px]">
                      <path
                        d="M15 5C15 7.76142 12.7614 10 10 10C7.23858 10 5 7.76142 5 5C5 2.23858 7.23858 0 10 0C12.7614 0 15 2.23858 15 5Z"
                        fill="#8ca889"
                      />
                      <path
                        d="M10 15C10 17.7614 7.76142 20 5 20C2.23858 20 0 17.7614 0 15C0 12.2386 2.23858 10 5 10C7.76142 10 10 12.2386 10 15Z"
                        fill="#8ca889"
                      />
                    </svg>
                  </div>
                  <p className="mb-1 text-xs md:text-sm text-[#8ca889] font-elegant">Branch In World</p>
                  <p className="text-3xl md:text-5xl font-luxury text-[#8ca889]">
                    120<span className="text-xl md:text-3xl">+</span>
                  </p>
                </div>

                {/* Satisfied Customers */}
                <div className="flex flex-col items-center p-4 md:p-8 border border-[#e5e0d8] rounded-[40px] bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                  <div className="mb-2">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[30px] md:h-[30px]">
                      <path
                        d="M15 5C15 7.76142 12.7614 10 10 10C7.23858 10 5 7.76142 5 5C5 2.23858 7.23858 0 10 0C12.7614 0 15 2.23858 15 5Z"
                        fill="#8ca889"
                      />
                      <path
                        d="M25 15C25 17.7614 22.7614 20 20 20C17.2386 20 15 17.7614 15 15C15 12.2386 17.2386 10 20 10C22.7614 10 25 12.2386 25 15Z"
                        fill="#8ca889"
                      />
                    </svg>
                  </div>
                  <p className="mb-1 text-xs md:text-sm text-[#8ca889] font-elegant">Satisfied Customers</p>
                  <p className="text-3xl md:text-5xl font-luxury text-[#8ca889]">
                    70K<span className="text-xl md:text-3xl">+</span>
                  </p>
                </div>

                {/* Personal Staff */}
                <div className="flex flex-col items-center p-4 md:p-8 border border-[#e5e0d8] rounded-[40px] bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                  <div className="mb-2">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[30px] md:h-[30px]">
                      <path
                        d="M15 0C15 10 20 15 30 15C20 15 15 20 15 30C15 20 10 15 0 15C10 15 15 10 15 0Z"
                        fill="#8ca889"
                      />
                    </svg>
                  </div>
                  <p className="mb-1 text-xs md:text-sm text-[#8ca889] font-elegant">Personal Staff</p>
                  <p className="text-3xl md:text-5xl font-luxury text-[#8ca889]">
                    40<span className="text-xl md:text-3xl">+</span>
                  </p>
                </div>

                {/* Years Of Experience */}
                <div className="flex flex-col items-center p-4 md:p-8 border border-[#e5e0d8] rounded-[40px] bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                  <div className="mb-2">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[30px] md:h-[30px]">
                      <path
                        d="M15 0C15 10 20 15 30 15C20 15 15 20 15 30C15 20 10 15 0 15C10 15 15 10 15 0Z"
                        fill="#8ca889"
                      />
                    </svg>
                  </div>
                  <p className="mb-1 text-xs md:text-sm text-[#8ca889] font-elegant">Years Of Experience</p>
                  <p className="text-3xl md:text-5xl font-luxury text-[#8ca889]">
                    12<span className="text-xl md:text-3xl">+</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={serviceRef} className="relative py-20 overflow-hidden md:py-28 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left side - Image with white border */}
              <div className="relative">
                <div className="p-4 pr-4 bg-white max-w-md mx-auto">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image
                      src="/images/main.png"
                      alt="Spa therapist preparing treatment"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Green dots decoration */}
                <div className="absolute -bottom-10 -left-10">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="60" r="8" fill="#8ca889" fillOpacity="0.2" />
                    <circle cx="40" cy="55" r="6" fill="#8ca889" fillOpacity="0.2" />
                    <circle cx="30" cy="40" r="5" fill="#8ca889" fillOpacity="0.2" />
                  </svg>
                </div>
              </div>

              {/* Right side - Service content */}
              <div>
                <h3 className="mb-4 text-sm font-normal tracking-widest uppercase text-[#8ca889] font-luxury">
                  SERVICE
                </h3>
                <h2 className="mb-6 font-luxury text-3xl sm:text-4xl font-light leading-tight text-[#3c3c3c] md:text-5xl">
                  We Provide the Best <br />
                  for Your Satisfaction
                </h2>
                <p className="mb-10 text-base text-[#666666] max-w-md leading-relaxed font-luxury">
                  we believe in providing our valued clients with an elevated spa experience, and our Exclusive
                  Membership is designed to offer you...
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#8ca889]/30">
                      <span className="font-luxury text-base md:text-xl font-normal text-[#3c3c3c]">01</span>
                    </div>
                    <span className="font-luxury text-lg md:text-2xl font-normal text-[#3c3c3c]">Massage</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#8ca889]/30">
                      <span className="font-luxury text-base md:text-xl font-normal text-[#3c3c3c]">03</span>
                    </div>
                    <span className="font-luxury text-lg md:text-2xl font-normal text-[#3c3c3c]">Relaxation</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#8ca889]/30">
                      <span className="font-luxury text-base md:text-xl font-normal text-[#3c3c3c]">02</span>
                    </div>
                    <span className="font-luxury text-lg md:text-2xl font-normal text-[#3c3c3c]">Treatment</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#8ca889]/30">
                      <span className="font-luxury text-base md:text-xl font-normal text-[#3c3c3c]">04</span>
                    </div>
                    <span className="font-luxury text-lg md:text-2xl font-normal text-[#3c3c3c]">Sauna</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side curved shape */}
          <div className="absolute right-0 bottom-0 h-[60%] overflow-hidden">
            <svg width="100" height="300" viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M200 0V600C50 550 0 450 0 300C0 150 50 50 200 0Z" fill="#8ca889" fillOpacity="0.2" />
            </svg>
          </div>
        </section>

        {/* New Services Section with Oval Images */}
        <section className="py-12 md:py-20 bg-[#f4f0e8] lg:py-28">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h3 className="mb-4 text-sm font-normal tracking-widest uppercase text-[#8ca889] font-luxury">
                OUR TREATMENTS
              </h3>
              <h2 className="mb-6 font-luxury text-3xl sm:text-4xl font-light leading-tight text-[#3c3c3c] md:text-5xl">
                Discover Our Spa Experiences
              </h2>
              <p className="mx-auto mb-10 text-base text-[#666666] max-w-2xl leading-relaxed font-luxury">
                Explore our range of thoughtfully designed treatments that combine ancient wisdom with modern techniques
                to provide the ultimate relaxation and rejuvenation experience.
              </p>
            </div>

            {/* Services Grid with Oval Images - Made smaller */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="relative overflow-hidden rounded-[24px] aspect-[3/4] h-full">
                    {/* Image background - always visible */}
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient overlay - always visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3c3c3c]/70 to-transparent opacity-70 transition-opacity duration-300"></div>

                    {/* Title at bottom - always visible */}
                    <div className="absolute bottom-0 left-0 right-0 text-center p-6">
                      <h3 className="font-luxury text-2xl font-normal text-white mb-1">{service.name}</h3>
                    </div>

                    {/* Hover overlay - appears on hover with smooth transition */}
                    <div
                      className={`absolute inset-0 bg-white p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out ${
                        hoveredService === index ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        transform: hoveredService === index ? "translateY(0)" : "translateY(10px)",
                        pointerEvents: hoveredService === index ? "auto" : "none",
                      }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#8ca889]/10 flex items-center justify-center mb-4">
                        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20 10C20 15 22.5 17.5 27.5 17.5C22.5 17.5 20 20 20 25C20 20 17.5 17.5 12.5 17.5C17.5 17.5 20 15 20 10Z"
                            fill="#8ca889"
                          />
                        </svg>
                      </div>
                      <h3 className="font-luxury text-xl font-normal text-[#3c3c3c] mb-2">{service.name}</h3>
                      <p className="text-[#666666] mb-4 font-luxury text-sm">{service.description}</p>
                      <button
                        onClick={() => setSelectedService(index)}
                        className="inline-flex items-center justify-center px-5 py-1.5 text-sm border border-[#8ca889] text-[#8ca889] rounded-full hover:bg-[#8ca889] hover:text-white transition-colors font-luxury"
                      >
                        Explore Service
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section ref={packagesRef} className="py-20 bg-white md:py-28">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h3 className="mb-4 text-sm font-normal tracking-widest uppercase text-[#8ca889] font-luxury">
                SPA PACKAGES
              </h3>
              <h2 className="mb-6 font-luxury text-4xl font-normal text-[#3c3c3c] md:text-5xl">
                Curated Experiences <br />
                for Ultimate Relaxation
              </h2>
              <p className="mx-auto mb-10 text-lg text-[#666666] max-w-2xl font-luxury">
                Choose from our carefully designed packages that combine our most popular treatments for a complete spa
                journey that will leave you feeling renewed and refreshed.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Package 1 */}
              <div className="overflow-hidden bg-[#f9f5f0] rounded-lg shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/images/1.png"
                    alt="Essential Relaxation Package"
                    fill
                    className=""
                  />
                </div>
                <div className="p-8">
                  <h3 className="mb-3 font-luxury text-2xl font-normal text-[#3c3c3c]">Essential Relaxation</h3>
                  <p className="mb-4 text-[#666666] font-luxury">
                    A perfect introduction to our spa with a 60-minute massage and express facial.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-luxury text-[#8ca889]">$120</span>
                    <Button
                      className="px-6 py-2 text-sm bg-[#8ca889] hover:bg-[#7a9677] text-white font-luxury"
                      onClick={() => handleBookNow("Essential Relaxation")}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Package 2 */}
              <div className="overflow-hidden bg-[#f9f5f0] rounded-lg shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/images/2.png"
                    alt="Deluxe Wellness Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="mb-3 font-luxury text-2xl font-normal text-[#3c3c3c]">Deluxe Wellness</h3>
                  <p className="mb-4 text-[#666666] font-luxury">
                    Our signature package includes a full-body scrub, massage, and hydrating facial.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-luxury text-[#8ca889]">$220</span>
                    <Button
                      className="px-6 py-2 text-sm bg-[#8ca889] hover:bg-[#7a9677] text-white font-luxury"
                      onClick={() => handleBookNow("Deluxe Wellness")}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Package 3 */}
              <div className="overflow-hidden bg-[#f9f5f0] rounded-lg shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/images/3.png"
                    alt="Ultimate Escape Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="mb-3 font-luxury text-2xl font-normal text-[#3c3c3c]">Ultimate Escape</h3>
                  <p className="mb-4 text-[#666666] font-luxury">
                    A full day of pampering with all our premium treatments and a gourmet lunch.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-luxury text-[#8ca889]">$350</span>
                    <Button
                      className="px-6 py-2 text-sm bg-[#8ca889] hover:bg-[#7a9677] text-white font-luxury"
                      onClick={() => handleBookNow("Ultimate Escape")}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Styled with neumorphic design */}
        <section ref={testimonialRef} className="py-20 bg-[#f4f0e8] md:py-28">
          <div className="container px-4 mx-auto">
            <div className="max-w-6xl mx-auto p-10 md:p-16">
              <div className="text-center mb-16">
                <h3 className="mb-4 text-sm font-normal tracking-widest uppercase text-[#8ca889] font-luxury">
                  TESTIMONIALS
                </h3>
                <h2 className="mb-6 font-luxury text-4xl font-normal text-[#3c3c3c] md:text-5xl">
                  What Our Customers Say
                </h2>
                <p className="mx-auto text-base text-[#666666] max-w-2xl font-luxury">
                  Discover what our clients have to say about their transformative experiences at Aravē. Our commitment
                  to excellence is reflected in every testimonial.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className={`${index === activeTestimonial ? "block" : "hidden md:block"}`}>
                    <div className="flex flex-col items-center z-40">
                      <div className="w-20 h-20 mb-6 overflow-hidden rounded-full border-2 border-white shadow-lg z-50 relative">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          layout="fill"
                          className="object-cover"
                        />
                      </div>
                      <div className="bg-white p-8 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] -mt-10 pt-12 text-center">
                        <p className="mb-6 text-[#666666] font-luxury">{testimonial.text}</p>
                        <h4 className="font-luxury text-xl font-medium text-[#8ca889]">{testimonial.name}</h4>
                        <p className="text-sm text-[#999999] font-luxury">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <button
                  onClick={prevTestimonial}
                  className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-[#8ca889] rounded-full hover:bg-[#7a9677] shadow-[0_6px_15px_rgba(140,168,137,0.3)] transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="flex items-center justify-center w-12 h-12 text-white bg-[#8ca889] rounded-full hover:bg-[#7a9677] shadow-[0_6px_15px_rgba(140,168,137,0.3)] transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Perfect Square container with uneven images */}
        <section ref={galleryRef} className="py-20 md:py-28 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h3 className="mb-4 text-sm font-normal tracking-widest uppercase text-[#8ca889] font-luxury">GALLERY</h3>
              <h2 className="mb-6 font-luxury text-4xl font-normal text-[#3c3c3c] md:text-5xl">Glimpses of Serenity</h2>
              <p className="mx-auto mb-10 text-lg text-[#666666] max-w-2xl font-luxury">
                Explore our tranquil spaces and experience the ambiance that awaits you at Aravē.
              </p>
            </div>

            {/* Perfect square gallery container with uneven images */}
            <div className="max-w-4xl mx-auto aspect-square overflow-hidden">
              <div className="grid grid-cols-4 grid-rows-4 gap-2 h-full">
                {/* Large image - spans 2x2 */}
                <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/waters.png"
                    alt="Spa gallery image 1"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#3c3c3c]/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 text-center">
                      <h4 className="text-white font-luxury text-xl">Experience 1: Tranquil Waters</h4>
                    </div>
                  </div>
                </div>

                {/* Medium image - spans 2x1 */}
                <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/botanical.png"
                    alt="Spa gallery image 2"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#3c3c3c]/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 text-center">
                      <h4 className="text-white font-luxury text-xl">Experience 2: Botanical Bliss</h4>
                    </div>
                  </div>
                </div>

                {/* Small image */}
                <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/aroma2.png"
                    alt="Spa gallery image 3"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#3c3c3c]/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 text-center">
                      <h4 className="text-white font-luxury text-xl">Experience 3: Aromatic Journey</h4>
                    </div>
                  </div>
                </div>

                {/* Small image */}
                <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/stone.png"
                    alt="Spa gallery image 4"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#3c3c3c]/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 text-center">
                      <h4 className="text-white font-luxury text-xl">Experience 4: Stone Therapy</h4>
                    </div>
                  </div>
                </div>

                {/* Medium image - spans 1x2 */}
                <div className="col-span-1 row-span-2 relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/herbal.png"
                    alt="Spa gallery image 5"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#3c3c3c]/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 text-center">
                      <h4 className="text-white font-luxury text-xl">Experience 5: Herbal Infusion</h4>
                    </div>
                  </div>
                </div>

                {/* Medium image - spans 2x1 */}
                <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/mineral.png"
                    alt="Spa gallery image 6"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#3c3c3c]/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 text-center">
                      <h4 className="text-white font-luxury text-xl">Experience 6: Mineral Soak</h4>
                    </div>
                  </div>
                </div>

                {/* Small image */}
                <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/floral.png"
                    alt="Spa gallery image 7"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#3c3c3c]/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 text-center">
                      <h4 className="text-white font-luxury text-xl">Experience 7: Floral Essence</h4>
                    </div>
                  </div>
                </div>

                {/* Small image */}
                <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/crystal.png"
                    alt="Spa gallery image 8"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#3c3c3c]/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 text-center">
                      <h4 className="text-white font-luxury text-xl">Experience 8: Crystal Healing</h4>
                    </div>
                  </div>
                </div>

                {/* Experience Nine - spans 1x1 */}
                <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/jacuzzi.png"
                    alt="Spa gallery image 9"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8ca889]/90 to-[#8ca889]/60 flex items-center justify-center">
                    <div className="p-4 text-center">
                      <h4 className="text-white font-luxury text-xl">Experience 9</h4>
                      <p className="text-white/90 font-luxury text-sm mt-1"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elegant Booking Section */}
        <section ref={bookingRef} className="py-16 bg-[#f4f0e8] md:py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h3 className="section-subtitle">BOOK AN APPOINTMENT</h3>
              <h2 className="section-title mb-4">
                Reserve Your Spa Experience
              </h2>
              <p className="mx-auto mb-8 text-lg text-[#666666] max-w-2xl font-elegant">
                Take the first step toward relaxation and rejuvenation by booking your appointment with us today.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden bg-[#f9f5f0] rounded-[20px] md:rounded-[30px] shadow-[0_20px_60px_rgba(140,168,137,0.1)]">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#8ca889]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8ca889]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 p-5 md:p-8 lg:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left side - Form */}
                    <div>
                      {bookingService && (
                        <div className="mb-6 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-[#8ca889]/20">
                          <p className="text-[#3c3c3c] font-elegant text-center">
                            You're booking: <span className="font-medium text-[#8ca889]">{bookingService}</span>
                          </p>
                        </div>
                      )}

                      <form className="space-y-4" onSubmit={handleBookSubmit}>
                        <div className="space-y-3">
                          {/* Name */}
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              required
                              className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ca889] font-elegant placeholder:text-[#3c3c3c]/50"
                              placeholder="Your Name"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <User className="w-4 h-4 text-[#8ca889]" />
                            </div>
                          </div>

                          {/* Email */}
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              required
                              className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ca889] font-elegant placeholder:text-[#3c3c3c]/50"
                              placeholder="Your Email"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <Mail className="w-4 h-4 text-[#8ca889]" />
                            </div>
                          </div>

                          {/* Phone */}
                          <div className="relative">
                            <input
                              type="tel"
                              name="phone"
                              required
                              className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ca889] font-elegant placeholder:text-[#3c3c3c]/50"
                              placeholder="Your Phone"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <Phone className="w-4 h-4 text-[#8ca889]" />
                            </div>
                          </div>

                          {/* Service */}
                          <div className="relative">
                            <select
                              value={bookingService}
                              name="service"
                              onChange={(e) => setBookingService(e.target.value)}
                              required
                              className="w-full pl-4 pr-4 py-3 bg-white/80 backdrop-blur-sm border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ca889] font-elegant text-[#3c3c3c]/80 appearance-none"
                            >
                              <option value="">Select a Service</option>
                              {services.map((service) => (
                                <option key={service.id} value={service.name}>
                                  {service.name} ({service.duration} - {service.price})
                                </option>
                              ))}
                              <option value="Essential Relaxation">Essential Relaxation Package ($120)</option>
                              <option value="Deluxe Wellness">Deluxe Wellness Package ($220)</option>
                              <option value="Ultimate Escape">Ultimate Escape Package ($350)</option>
                            </select>
                          </div>

                          {/* Date and Time Selection */}
                          <div className="grid grid-cols-2 gap-3">
                            {/* Date Picker */}
                            <div className="relative">
                              <div className="mb-1 font-elegant text-[#3c3c3c] text-sm">Select Date</div>
                              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2">
                                <div className="grid grid-cols-5 gap-1">
                                  {[20, 21, 22, 23, 24].map((date, i) => {
                                    const dateStr = `2024-05-${date}`
                                    const isSelected = selectedDate === dateStr
                                    return (
                                      <button
                                        key={i}
                                        type="button"
                                        onClick={() => {
                                          setSelectedDate(dateStr)
                                          setSelectedTime("")
                                        }}
                                        className={`py-1 rounded-md font-elegant text-xs transition-colors ${
                                          isSelected
                                            ? "bg-[#8ca889] text-white"
                                            : "bg-white hover:bg-[#8ca889]/10 text-[#3c3c3c]"
                                        }`}
                                      >
                                        {date}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>
                            </div>

                            {/* Time Slots */}
                            <div className="relative">
                              <div className="mb-1 font-elegant text-[#3c3c3c] text-sm">Select Time</div>
                              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2">
                                <div className="grid grid-cols-3 gap-1">
                                  {timeSlots.slice(0, 6).map((time, i) => {
                                    const isBooked = isTimeSlotBooked(selectedDate, time)
                                    const isSelected = selectedTime === time
                                    return (
                                      <button
                                        key={i}
                                        type="button"
                                        disabled={isBooked}
                                        onClick={() => !isBooked && setSelectedTime(time)}
                                        className={`py-1 rounded-md font-elegant text-xs transition-colors ${
                                          isBooked
                                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                            : isSelected
                                              ? "bg-[#8ca889] text-white"
                                              : "bg-white hover:bg-[#8ca889]/10 text-[#3c3c3c]"
                                        }`}
                                      >
                                        {time}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          disabled={!selectedDate || !selectedTime || !bookingService}
                          className="w-full py-3 bg-[#8ca889] hover:bg-[#7a9677] text-white font-elegant text-base rounded-lg shadow-[0_6px_15px_rgba(140,168,137,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Book Your Experience
                        </Button>
                      </form>
                    </div>

                    {/* Right side - Image and text */}
                    <div className="hidden md:block">
                      <div className="relative h-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-full h-full overflow-hidden rounded-xl">
                            <Image
                              src="/images/tranquill.png"
                              alt="Spa relaxation"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#3c3c3c]/70 to-transparent opacity-50"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                              <h3 className="mb-2 font-cursive text-3xl font-normal text-white">Tranquility Awaits</h3>
                              <p className="text-white/90 font-elegant">
                                Experience the perfect blend of ancient wisdom and modern luxury
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Elegant Footer */}
      <footer className="bg-[#3c3c3c] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Top section with logo and social links */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-white/10 pb-8">
              <div className="mb-6 md:mb-0">
                <Link href="/" className="font-cursive text-3xl tracking-wide">
                  <span className="text-[#8ca889]">Ara</span><span className="text-gray-200">vē</span>
                </Link>
              </div>

              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "pinterest"].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8ca889] transition-colors"
                    aria-label={`Visit our ${social} page`}
                  >
                    {social === "facebook" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    )}
                    {social === "twitter" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    )}
                    {social === "instagram" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    )}
                    {social === "pinterest" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Middle section with columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Contact Info */}
              <div>
                <h3 className="font-luxury text-lg text-white mb-4 relative inline-block">
                  Contact
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#8ca889]"></span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 text-[#8ca889] mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-elegant text-sm text-white/70">5600 Tennyson Parkway, Plano, Texas</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 text-[#8ca889] mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="font-elegant text-sm text-white/70">+1 (469) 409 9209</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 text-[#8ca889] mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-elegant text-sm text-white/70">hello@arave.com</span>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-luxury text-lg text-white mb-4 relative inline-block">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#8ca889]"></span>
                </h3>
                <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                  <a
                    href="#"
                    className="font-elegant text-sm text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#8ca889] rounded-full mr-2"></span>
                    Home
                  </a>
                  <a
                    href="#"
                    className="font-elegant text-sm text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#8ca889] rounded-full mr-2"></span>
                    Services
                  </a>
                  <a
                    href="#"
                    className="font-elegant text-sm text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#8ca889] rounded-full mr-2"></span>
                    About Us
                  </a>
                  <a
                    href="#"
                    className="font-elegant text-sm text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#8ca889] rounded-full mr-2"></span>
                    Gallery
                  </a>
                  <a
                    href="#"
                    className="font-elegant text-sm text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#8ca889] rounded-full mr-2"></span>
                    Packages
                  </a>
                  <a
                    href="#"
                    className="font-elegant text-sm text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#8ca889] rounded-full mr-2"></span>
                    Contact
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="font-luxury text-lg text-white mb-4 relative inline-block">
                  Opening Hours
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#8ca889]"></span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between font-elegant text-sm text-white/70">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between font-elegant text-sm text-white/70">
                    <span>Saturday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between font-elegant text-sm text-white/70">
                    <span>Sunday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom copyright */}
            <div className="text-center border-t border-white/10 pt-4">
              <p className="font-elegant text-white/50 text-xs">
                © {new Date().getFullYear()} Aravē Spa & Wellness. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-sm"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-[520px]">
              {/* Left: Image */}
              <div className="relative h-full w-full">
                <Image
                  src={services[selectedService].image || "/placeholder.svg"}
                  alt={services[selectedService].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Duration + Price Card */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-[#7a9677] uppercase tracking-wide font-elegant">
                      Duration
                    </span>
                    <span className="text-sm font-semibold text-[#3c3c3c] font-elegant">
                      {services[selectedService].duration}
                    </span>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-[#7a9677] uppercase tracking-wide font-elegant">
                      Price
                    </span>
                    <span className="text-base font-bold text-[#3c3c3c] font-elegant">
                      {services[selectedService].price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col h-full px-6 py-6 overflow-y-auto">
                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#8ca889] font-luxury mb-4">
                  {services[selectedService].name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm font-elegant mb-4 leading-relaxed">
                  {services[selectedService].description}
                </p>

                {/* Benefits & Includes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  {/* Benefits */}
                  <div>
                    <h4 className="text-base font-semibold text-[#3c3c3c] mb-2 font-luxury">
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {services[selectedService].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-3 h-3 mt-1 mr-2 bg-[#8ca889] rounded-sm flex-shrink-0" />
                          <span className="text-gray-600 text-sm font-elegant">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h4 className="text-base font-semibold text-[#3c3c3c] mb-2 font-luxury">
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {services[selectedService].includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-3 h-3 mt-1 mr-2 bg-[#8ca889] rounded-sm flex-shrink-0" />
                          <span className="text-gray-600 text-sm font-elegant">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-4">
                  <Button
                    onClick={() => {
                      setBookingService(services[selectedService].name)
                      setSelectedService(null)
                      scrollToSection(bookingRef)
                    }}
                    className="w-full py-3 bg-[#8ca889] hover:bg-[#7a9677] text-white font-elegant rounded-lg text-sm"
                  >
                    Book This Service
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-8 animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowConfirmation(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#f9f5f0] hover:bg-[#8ca889]/10 transition-colors"
            >
              <X className="w-4 h-4 text-[#3c3c3c]" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#8ca889]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#8ca889]" />
              </div>
              <h3 className="font-luxury text-2xl font-normal text-[#3c3c3c] mb-2">Booking Confirmed</h3>
              <p className="text-[#666666] font-elegant">Your spa experience has been scheduled successfully.</p>
            </div>

            <div className="bg-[#f9f5f0] rounded-xl p-4 mb-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#666666] font-elegant text-sm">Service:</span>
                  <span className="text-[#3c3c3c] font-elegant font-medium">{bookingDetails.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666] font-elegant text-sm">Date:</span>
                  <span className="text-[#3c3c3c] font-elegant font-medium">
                    {bookingDetails.date
                      ? new Date(bookingDetails.date).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })
                      : ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666] font-elegant text-sm">Time:</span>
                  <span className="text-[#3c3c3c] font-elegant font-medium">{bookingDetails.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666] font-elegant text-sm">Name:</span>
                  <span className="text-[#3c3c3c] font-elegant font-medium">{bookingDetails.name}</span>
                </div>
              </div>
            </div>

            <p className="text-[#666666] font-elegant text-sm text-center mb-6">
              A confirmation email has been sent to {bookingDetails.email}. Please arrive 15 minutes before your
              appointment.
            </p>

            <Button
              onClick={() => setShowConfirmation(false)}
              className="w-full py-3 bg-[#8ca889] hover:bg-[#7a9677] text-white font-elegant rounded-xl"
            >
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
