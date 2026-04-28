export const PHONE_WHATSAPP_RAW = "919177177011";
export const PHONE_WHATSAPP_DISPLAY = "+91 91771 77011";
export const PHONE_LANDLINE = "+91 40 2323 0009";
export const PHONE_AGENT = "+91 868686 7818";

export const EMAIL = "info@aerowings.in";

export const ADDRESS = {
  business: "Aero Wings Travel & Cargo Agency",
  street: "Naser Arcade",
  line2: "16, Saifabad Rd, beside RBI",
  city: "Hyderabad",
  region: "Telangana",
  postalCode: "500004",
  country: "India",
};

export const HOURS = {
  weekdays: "Monday - Saturday, 10 AM - 8 PM",
  sunday: "Sunday (Online Queries Only)",
};

export const SOCIAL = {
  facebook: "https://www.facebook.com/kwaheeduddin",
  instagram: "https://www.instagram.com/aerowingstravel/",
  linkedin: "https://linkedin.com/company/aerowings-travel",
};

export function whatsappLink(message = "Hello") {
  return `https://wa.me/${PHONE_WHATSAPP_RAW}?text=${encodeURIComponent(message)}`;
}
