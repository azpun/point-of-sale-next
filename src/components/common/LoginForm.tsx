"use client";
import { Card } from "../Card";

export const LoginForm = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Card className="flex flex-col gap-4 m-4 w-full md:w-1/2 md:max-w-125">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Login</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="border rounded-md border-gray-500 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="border rounded-md border-gray-500 p-2"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};
