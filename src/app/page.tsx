import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto min-h-screen">
    
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Meditic
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Streamlined healthcare at your fingertips. Connect with doctors, manage appointments, and receive
                  personalized care.
                </p>
              </div>
              <div className="space-x-4">
                <Link href={"/sign-up"}>
                <Button>Sign Up</Button>
                </Link>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardContent className="mt-4">
                  <UserIcon className="h-10 w-10 mb-4" />
                  <h3 className="text-lg font-bold">Easy Registration</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Sign up quickly and securely with mobile and email verification.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <ClipboardIcon className="h-10 w-10 mb-4" />
                  <h3 className="text-lg font-bold">Health Information Form</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Provide your health details for personalized care from doctors.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <CalendarIcon className="h-10 w-10 mb-4" />
                  <h3 className="text-lg font-bold">Appointment Booking</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Easily create appointments with your preferred doctor and time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <CheckIcon className="h-10 w-10 mb-4" />
                  <h3 className="text-lg font-bold">Doctor Review</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Doctors can accept or reject appointments with instant notifications.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <FileTextIcon className="h-10 w-10 mb-4" />
                  <h3 className="text-lg font-bold">Digital Prescriptions</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive prescriptions via email after your appointment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <BellIcon className="h-10 w-10 mb-4" />
                  <h3 className="text-lg font-bold">Medication Reminders</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get timely alerts for your medication schedule.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  border-t ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Testimonials</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "Meditic has made managing my healthcare so much easier. The appointment booking and
                    medication reminders are fantastic!"
                  </p>
                  <p className="mt-2 font-semibold">- Sarah J.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "As a doctor, I appreciate how streamlined the appointment process is. It helps me provide better
                    care to my patients."
                  </p>
                  <p className="mt-2 font-semibold">- Dr. Michael R.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "The digital prescriptions and reminders have been a game-changer for managing my chronic
                    condition."
                  </p>
                  <p className="mt-2 font-semibold">- David L.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join Meditic today and experience a new level of healthcare management.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Link href={'/sign-up'}>
                  <Button type="submit">Sign Up</Button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Meditic. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BellIcon(props :any) {
  return (
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

function CalendarIcon(props :any) {
  return (
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function CheckIcon(props :any) {
  return (
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ClipboardIcon(props :any) {
  return (
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}

function FileTextIcon(props :any) {
  return (
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}

function HealthIcon(props :any) {
  return (
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

function UserIcon(props :any) {
  return (
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}