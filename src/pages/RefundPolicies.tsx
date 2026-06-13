import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import useHead from "@/hooks/useHead";

const RefundPolicies = () => {
  useHead({
    title: "Refund Policies | Tour De Wonder",
    description: "Tour De Wonder refund and cancellation policies for Kashmir tour packages, hotel bookings, and ride services. Fair and transparent refund process.",
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold">Refund Policies</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Cancellation Policy */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Cancellation Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We understand that travel plans may change. Our cancellation policy is designed to be fair while ensuring we can serve all our customers efficiently.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cancellations made 30 days or more before the travel date: Full refund minus 10% processing fee</li>
                <li>Cancellations made 15-29 days before the travel date: 75% refund</li>
                <li>Cancellations made 7-14 days before the travel date: 50% refund</li>
                <li>Cancellations made less than 7 days before the travel date: No refund</li>
              </ul>
            </div>
          </section>

          {/* Refund Process */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Refund Process</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Once your cancellation is confirmed, the refund will be processed within 7-14 business days. The refund will be credited to the original payment method used during booking.
              </p>
              <p>
                Please note that refund processing times may vary depending on your bank or payment provider.
              </p>
            </div>
          </section>

          {/* Modification Policy */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Modification Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                If you need to modify your booking (change dates, accommodation, or itinerary), please contact us at least 14 days before your scheduled travel date.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Date modifications: Allowed once without additional charge (subject to availability)</li>
                <li>Accommodation upgrades: Additional charges may apply based on the new selection</li>
                <li>Itinerary changes: Processed based on availability and may involve extra costs</li>
              </ul>
            </div>
          </section>

          {/* Force Majeure */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Force Majeure</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                In case of unforeseen circumstances such as natural disasters, political unrest, pandemics, or government-imposed travel restrictions, we will work with you to reschedule your trip or provide a full refund without any processing fees.
              </p>
            </div>
          </section>

          {/* No-Show Policy */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">No-Show Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                If you fail to show up on the scheduled date without prior notification, no refund will be provided. We recommend contacting us as soon as possible if you anticipate any issues with your travel plans.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                For any refund-related inquiries or to initiate a cancellation, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg space-y-2">
                <p><strong>Email:</strong> tourdewonder89@gmail.com</p>
                <p><strong>Phone:</strong> +91 6006 288256</p>
                <p><strong>Address:</strong> Srinagar, Jammu & Kashmir</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default RefundPolicies;
