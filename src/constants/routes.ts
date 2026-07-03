export const ROUTES = {
  home: "/",
  howItWorks: "/how-it-works",
  about: "/about",

  login: "/login",
  register: "/register",
  registerStudent: "/register/student",
  registerProvider: "/register/provider",
  forgotPassword: "/forgot-password",

  student: {
    dashboard: "/student/dashboard",
    profile: "/student/profile",
    profileEdit: "/student/profile/edit",
    transcript: "/student/profile/transcript", //sidebara elave edilmeyib
    ai: "/student/ai",
    aiResults: "/student/ai/results",
    roadmap: "/student/roadmap", //sidebara elave edilmeyib
    universitySearch: "/student/universities",
    savedUniversities: "/student/universities/saved",
    teachers: "/student/providers/teachers",
    teacher: (teacherId: string) => `/student/providers/teachers/${teacherId}`,
    consultants: "/student/providers/consultants",
    consultant: (consultantId: string) => `/student/providers/consultants/${consultantId}`,
    bookings: "/student/bookings",
    booking: (bookingId: string) => `/student/bookings/${bookingId}`,
    // messages: (bookingId: string) => `/student/messages/${bookingId}`,
    // review: (bookingId: string) => `/student/reviews/${bookingId}`,
  },

  provider: {
    dashboard: "/provider/dashboard",
    profile: "/provider/profile",
    verification: "/provider/verification", //sidebara elave edilmeyib
    packages: "/provider/packages",
    newPackage: "/provider/packages/new",
    editPackage: (packageId: string) => `/provider/packages/${packageId}/edit`,
    bookings: "/provider/bookings",
    booking: (bookingId: string) => `/provider/bookings/${bookingId}`,
    // messages: (bookingId: string) => `/provider/messages/${bookingId}`,
    // reviews: "/provider/reviews",
  },

  admin: {
    dashboard: "/admin/dashboard",
    users: "/admin/users",
    providers: "/admin/providers",
    providerVerification: "/admin/providers/verification",
    provider: (providerId: string) => `/admin/providers/${providerId}`,
    successRecords: "/admin/success-records", //sidebara elave edilmeyib
    bookings: "/admin/bookings",
    disputes: "/admin/disputes", //sidebara elave edilmeyib
    knowledgeBase: "/admin/knowledge-base",
    universities: "/admin/knowledge-base/universities",
    programs: "/admin/knowledge-base/programs",
    scholarships: "/admin/knowledge-base/scholarships",
    moderation: "/admin/moderation",
  },
} as const;
