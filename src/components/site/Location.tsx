import { MapPin, Phone, Clock } from "lucide-react";

export function Location() {
  const address = "Great Mongolian Empire Street, Ulaanbaatar, Mongolia, 17012";

  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
            Where We Are
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visit us at our world-class facility in the heart of Ulaanbaatar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-card-foreground mb-1">
                    Address
                  </h3>
                  <p className="text-muted-foreground">{address}</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-gold/10 grid place-items-center text-gold shrink-0">
                  <Phone className="size-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-card-foreground mb-1">
                    Contact
                  </h3>
                  <p className="text-muted-foreground">+976 7011 2012</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-accent/10 grid place-items-center text-accent shrink-0">
                  <Clock className="size-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-card-foreground mb-1">
                    Operating Hours
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 06:00 - 22:00</p>
                    <p>Saturday - Sunday: 08:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29189.41797404427!2d106.8989545!3d47.8757486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969380b2a64845%3A0x7be1d49b3c8b9059!2sThe+White+Hill+Residence%2C+Ulaanbaatar%2C+Mongolia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Victory Aquatics Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors"
          >
            <MapPin className="size-5" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
