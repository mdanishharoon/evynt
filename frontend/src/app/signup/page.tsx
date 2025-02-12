 // Signup.tsx
 "use client"

// interface FormData {
//     email: string;
//     password: string;
//     name?: string;
//   }
  
//   interface FormProps {
//     type: 'login' | 'signup';
//     onSubmit: (data: FormData) => void;
//   }
  
 
  
  import { useRouter } from "next/navigation"
  import Form from "../components/Form"
  import Link from "next/link"
  import { motion } from "framer-motion"
  import { Logo } from "../components/Logo"
  
  interface SignupData {
    email: string;
    password: string;
    name: string;
  }
  
  export default function Signup() {
    const router = useRouter()
  
    const handleSubmit = (data: SignupData) => {
      // Type guard to ensure name is present for signup
      if (!data.name) {
        console.error("Name is required for signup");
        return;
      }
  
      // Here you would typically handle the signup logic
      console.log("Signup data:", data)
      // For now, we'll just redirect to the dashboard
      router.push("/dashboard")
    }
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/" className="flex justify-center items-center mb-4">
            <Logo />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="ml-2 text-2xl font-bold text-primary"
            >
              evynt
            </motion.span>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>
  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Form 
              type="signup" 
              onSubmit={(formData) => {
                // Type assertion since we know signup form will always have name
                handleSubmit(formData as SignupData)
              }} 
            />
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/login" className="font-medium text-primary hover:text-primary/90">
                  Already have an account? Log in
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }