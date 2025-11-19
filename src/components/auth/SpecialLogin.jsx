export default function SocialLogin() {
  return (
    <div className="space-y-3 mt-6">
      <button className="w-full p-3 border rounded-full flex items-center justify-center space-x-2 hover:bg-gray-50">
        <img src="/google-icon.png" alt="Google" className="h-5 w-5" />
        <span>Google</span>
      </button>
      <button className="w-full p-3 border rounded-full flex items-center justify-center space-x-2 hover:bg-gray-50">
        <img src="/facebook-icon.png" alt="Facebook" className="h-5 w-5" />
        <span>Facebook</span>
      </button>
    </div>
  )
}