import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle,
  Clock,
  ArrowLeft,
  ChevronDown,
  Car,
  Building2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import useHead from "@/hooks/useHead";

// Tour services options
const tourServices = [
  "Kashmir Premium Tour",
  "Ladakh Adventure",
  "Kashmir Houseboat Stay",
  "Gulmarg Skiing",
  "Pahalgam Betaab Valley",
  "Sonamarg Golden Peak",
  "Srinagar City Tour",
  "Shikara Ride",
  "Great Lakes Trek",
  "Kargil War Memorial",
  "Custom Tour Package"
];

// Ride services options
const rideServices = [
  "Ertiga (7 Seater) - ₹3,500/day",
  "Desire (5 Seater) - ₹2,500/day",
  "Innova Crysta (7 Seater) - ₹5,000/day"
];

// Hotel services options
const hotelServices = [
  "Srinagar Hotels",
  "Gulmarg Hotels",
  "Pahalgam Hotels",
  "Sonamarg Hotels",
  "Leh Hotels",
  "Houseboat Stay",
  "Luxury Resorts",
  "Budget Hotels"
];

// Form data types
interface FullBookingForm {
  firstName: string;
  phone: string;
  email: string;
  arrivalDate: string;
  persons: string;
  tourService: string;
  message: string;
}

interface QuickBookingForm {
  name: string;
  phone: string;
  message: string;
}

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lakeData = location.state as { name: string; location: string; altitude: string; waterSource: string; description: string; bestTimeToVisit: string; trekkingRoute: string; category: string; image: string } | undefined;

  useHead({
    title: lakeData ? `Book ${lakeData.name} Tour | Tour De Wonder` : "Book Your Kashmir Tour | Tour De Wonder",
    description: "Book your dream Kashmir tour with Tour De Wonder. Choose from houseboats, trekking packages, hotel bookings, and ride services in Srinagar, Gulmarg, Pahalgam & Sonamarg.",
  });

  const [serviceType, setServiceType] = useState<"tour" | "ride" | "hotel">("tour");
  const handleServiceTypeChange = (type: "tour" | "ride" | "hotel") => {
    setServiceType(type);
    // Reset the service selection when changing service type
    setFullForm((prev) => ({ ...prev, tourService: "" }));
  };
  const [bookingType, setBookingType] = useState<"full" | "quick">("full");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Full booking form state
  const [fullForm, setFullForm] = useState<FullBookingForm>({
    firstName: "",
    phone: "",
    email: "",
    arrivalDate: "",
    persons: "1",
    tourService: "",
    message: ""
  });

  // Quick booking form state
  const [quickForm, setQuickForm] = useState<QuickBookingForm>({
    name: "",
    phone: "",
    message: ""
  });

  // Validate full form
  const validateFullForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!fullForm.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!fullForm.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(fullForm.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate quick form
  const validateQuickForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!quickForm.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!quickForm.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(quickForm.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // WhatsApp number
  const WHATSAPP_NUMBER = "918491853084";

  // Generate WhatsApp message for full form
  const generateFullFormMessage = () => {
    const serviceLabel = serviceType === "tour" ? "Tour" : serviceType === "ride" ? "Ride" : "Hotel";
    const message = `*New Booking Request - Tour De WONDER*

*Booking Type:* ${serviceLabel}

*Personal Details:*
• Name: ${fullForm.firstName}
• Phone: ${fullForm.phone}
• Email: ${fullForm.email}

*Trip Details:*
• Arrival Date: ${fullForm.arrivalDate || "Not specified"}
• Number of Persons: ${fullForm.persons}
• Service: ${fullForm.tourService || "Not specified"}

*Additional Message:*
${fullForm.message || "No additional message"}

_This is an automated booking request from the Tour De WONDER website._`;
    return encodeURIComponent(message);
  };

  // Generate WhatsApp message for quick form
  const generateQuickFormMessage = () => {
    const serviceLabel = serviceType === "tour" ? "Tour" : serviceType === "ride" ? "Ride" : "Hotel";
    const message = `*Quick Call Back Request - Tour De WONDER*

*Booking Type:* ${serviceLabel}

*Name:* ${quickForm.name}
*Phone:* ${quickForm.phone}
*Message:* ${quickForm.message || "No message"}

_This is an automated request from the Tour De WONDER website._`;
    return encodeURIComponent(message);
  };

  // Submit full form
  const handleFullSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFullForm()) return;

    setIsSubmitting(true);
    
    // Store in localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    bookings.push({
      type: "full",
      ...fullForm,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Redirect to WhatsApp with form details
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateFullFormMessage()}`;
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // Submit quick form
  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateQuickForm()) return;

    setIsSubmitting(true);
    
    // Store in localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    bookings.push({
      type: "quick",
      ...quickForm,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Redirect to WhatsApp with form details
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateQuickFormMessage()}`;
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // Success screen
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-12 container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>
            
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              Thank You!
            </h2>
            
            <p className="text-muted-foreground mb-2">
              {bookingType === "full" 
                ? "Your booking request has been submitted successfully."
                : "Our team will call you shortly to confirm your booking."}
            </p>
            
            <p className="text-sm text-muted-foreground mb-8">
              Reference: BOOK-{Date.now().toString().slice(-6)}
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFullForm({
                    firstName: "",
                    phone: "",
                    email: "",
                    arrivalDate: "",
                    persons: "1",
                    tourService: "",
                    message: ""
                  });
                  setQuickForm({
                    name: "",
                    phone: "",
                    message: ""
                  });
                }}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Make Another Booking
              </button>
              
              <button
                onClick={() => navigate("/")}
                className="w-full border border-border text-foreground px-6 py-3 rounded-xl font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} /> Back to Home
              </button>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative pt-20 bg-gradient-to-r from-primary/20 via-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 sm:mb-6 transition-colors"
          >
            <ArrowLeft size={18} /> Back to Home
          </motion.button>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4"
          >
            {serviceType === "tour" ? "Book Your Dream Tour" : serviceType === "ride" ? "Book Your Ride" : "Book Your Hotel"}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl"
          >
            {serviceType === "tour" 
              ? "Choose your preferred booking method and let us help you create unforgettable memories in Kashmir."
              : serviceType === "ride"
              ? "Book your comfortable ride for airport transfers, city tours, and more across Kashmir."
              : "Find the perfect accommodation for your stay in Kashmir - from luxury hotels to cozy houseboats."}
          </motion.p>
        </div>
      </div>

      {/* Lake Details Section */}
      {lakeData && (
        <div className="bg-muted/30 py-6 sm:py-8">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-background rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-48 sm:h-64 md:h-auto">
                  <img
                    src={lakeData.image}
                    alt={lakeData.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-lg">
                    {lakeData.category}
                  </span>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">{lakeData.name}</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                        <p className="font-semibold text-xs sm:text-sm">{lakeData.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Altitude</p>
                        <p className="font-semibold text-xs sm:text-sm">{lakeData.altitude}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Water Source</p>
                        <p className="font-semibold text-xs sm:text-sm">{lakeData.waterSource}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Best Time</p>
                        <p className="font-semibold text-xs sm:text-sm">{lakeData.bestTimeToVisit}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Description</p>
                    <p className="text-foreground">{lakeData.description}</p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Trekking Route</p>
                    <p className="font-semibold">{lakeData.trekkingRoute}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Service Type Selection: Tour, Ride, or Hotel */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <button
            onClick={() => handleServiceTypeChange("tour")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-sans text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              serviceType === "tour"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-card text-foreground hover:bg-primary/10 border border-border"
            }`}
          >
            <Calendar className="w-4 h-4" />
            Book a Tour
          </button>
          <button
            onClick={() => handleServiceTypeChange("ride")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-sans text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              serviceType === "ride"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-card text-foreground hover:bg-primary/10 border border-border"
            }`}
          >
            <Car className="w-4 h-4" />
            Book a Ride
          </button>
          <button
            onClick={() => handleServiceTypeChange("hotel")}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-sans text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              serviceType === "hotel"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-card text-foreground hover:bg-primary/10 border border-border"
            }`}
          >
            <Building2 className="w-4 h-4" />
            Book a Hotel
          </button>
        </div>
      </div>

      {/* Booking Options */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8 max-w-3xl mx-auto">
          <button
            onClick={() => setBookingType("full")}
            className={`p-4 sm:p-6 rounded-2xl border-2 transition-all text-left ${
              bookingType === "full"
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                bookingType === "full" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}>
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-base sm:text-lg text-foreground mb-1">
                  Full Booking Form
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Complete form with all details for a detailed tour plan
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setBookingType("quick")}
            className={`p-4 sm:p-6 rounded-2xl border-2 transition-all text-left ${
              bookingType === "quick"
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                bookingType === "quick" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}>
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-base sm:text-lg text-foreground mb-1">
                  Quick Call Booking
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Just leave your number, we'll call you shortly
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Forms */}
        <AnimatePresence mode="wait">
          {bookingType === "full" ? (
            <motion.div
              key="full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <form onSubmit={handleFullSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label htmlFor="booking-firstName" className="text-sm font-medium text-foreground">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="booking-firstName"
                      type="text"
                      value={fullForm.firstName}
                      onChange={(e) => setFullForm({ ...fullForm, firstName: e.target.value })}
                      placeholder="Enter your first name"
                      aria-required="true"
                      aria-invalid={errors.firstName ? "true" : undefined}
                      aria-describedby={errors.firstName ? "booking-firstName-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.firstName ? "border-red-500" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                    />
                    {errors.firstName && (
                      <p id="booking-firstName-error" className="text-sm text-red-500">{errors.firstName}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="booking-phone" className="text-sm font-medium text-foreground">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="booking-phone"
                        type="tel"
                        value={fullForm.phone}
                        onChange={(e) => setFullForm({ ...fullForm, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        aria-required="true"
                        aria-invalid={errors.phone ? "true" : undefined}
                        aria-describedby={errors.phone ? "booking-phone-error" : undefined}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                          errors.phone ? "border-red-500" : "border-border"
                        } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                      />
                    </div>
                    {errors.phone && (
                      <p id="booking-phone-error" className="text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="booking-email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="booking-email"
                        type="email"
                        value={fullForm.email}
                        onChange={(e) => setFullForm({ ...fullForm, email: e.target.value })}
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Date of Arrival */}
                  <div className="space-y-2">
                    <label htmlFor="booking-arrival" className="text-sm font-medium text-foreground">
                      Date of Arrival
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        id="booking-arrival"
                        type="date"
                        value={fullForm.arrivalDate}
                        onChange={(e) => setFullForm({ ...fullForm, arrivalDate: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Number of Persons */}
                  <div className="space-y-2">
                    <label htmlFor="booking-persons" className="text-sm font-medium text-foreground">
                      Number of Persons
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        id="booking-persons"
                        value={fullForm.persons}
                        onChange={(e) => setFullForm({ ...fullForm, persons: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'Persons'}</option>
                        ))}
                        <option value="11+">11+ Persons</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Tour Service */}
                  <div className="space-y-2">
                    <label htmlFor="booking-service" className="text-sm font-medium text-foreground">
                      {serviceType === "tour" ? "Tour Service" : serviceType === "ride" ? "Ride Service" : "Hotel Service"}
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        id="booking-service"
                        value={fullForm.tourService}
                        onChange={(e) => setFullForm({ ...fullForm, tourService: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                      >
                        <option value="">
                          {serviceType === "tour" ? "Select a tour service" : serviceType === "ride" ? "Select a ride service" : "Select a hotel service"}
                        </option>
                        {(serviceType === "tour" ? tourServices : serviceType === "ride" ? rideServices : hotelServices).map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="booking-message" className="text-sm font-medium text-foreground">
                    Message / Special Requests
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                    <textarea
                      id="booking-message"
                      value={fullForm.message}
                      onChange={(e) => setFullForm({ ...fullForm, message: e.target.value })}
                      placeholder="Tell us about your travel plans, preferences, or any special requirements..."
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Query
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="quick"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-lg mx-auto"
            >
              {/* Quick Call Info */}
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Quick Call Booking</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Leave your details and our team will call you within 10 minutes 
                  to confirm your booking. It's that simple!
                </p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="quick-name" className="text-sm font-medium text-foreground">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quick-name"
                    type="text"
                    value={quickForm.name}
                    onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                    placeholder="Enter your name"
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : undefined}
                    aria-describedby={errors.name ? "quick-name-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? "border-red-500" : "border-border"
                    } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  />
                  {errors.name && (
                    <p id="quick-name-error" className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="quick-phone" className="text-sm font-medium text-foreground">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      id="quick-phone"
                      type="tel"
                      value={quickForm.phone}
                      onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      aria-required="true"
                      aria-invalid={errors.phone ? "true" : undefined}
                      aria-describedby={errors.phone ? "quick-phone-error" : undefined}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                        errors.phone ? "border-red-500" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                    />
                  </div>
                  {errors.phone && (
                    <p id="quick-phone-error" className="text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="quick-message" className="text-sm font-medium text-foreground">
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                    <textarea
                      id="quick-message"
                      value={quickForm.message}
                      onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                      placeholder="Any specific tour or dates you're interested in..."
                      rows={3}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Phone className="w-5 h-5" />
                      Request Call Back
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Booking;
