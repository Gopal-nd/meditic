'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
  const {data: session} = useSession();
  const [currentPage, setCurrentPage] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.username !== 'docode999@gmail.com' || formData.password !== 'admin') {
      alert('Invalid credentials');
      return;
    }
    setCurrentPage(false)
    // router.push('/admin/dashboard')
    console.log('Form submitted:', formData);
    // Here you can add your API call logic to handle login
  };

  return (
    <div>

    

    {currentPage ? (
      
      <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

      {/* Username Input */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
          >
          Email
        </label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
          required
          />
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
          >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your password"
          required
          />
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
          Login
        </button>
      </div>
    </form>
    ):(
      <div>Logined</div>
    )}
    </div>
    
  );
}
