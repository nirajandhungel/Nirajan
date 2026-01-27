const MOBILE_REGEX =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return MOBILE_REGEX.test(navigator.userAgent);
}

export function getWhatsAppLink(phoneNumber: string): string {
  return `https://wa.me/${phoneNumber}`;
}

export function getEmailLink(
  email: string,
  subject: string = 'Inquiry from Website'
) {
  const isMobile = isMobileDevice();
  const encodedSubject = encodeURIComponent(subject);

  return {
    mailto: `mailto:${email}?subject=${encodedSubject}`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&subject=${encodedSubject}`,
    isMobile,
  };
}

export function getPhoneLink(phoneNumber: string): string {
  return `tel:${phoneNumber}`;
}
