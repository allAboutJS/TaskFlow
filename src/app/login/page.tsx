export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md border rounded-xl p-8">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <form className="mt-6 space-y-4">
          <input
            className="w-full border rounded-md px-3 py-2"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full bg-black text-white rounded-md py-2"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
