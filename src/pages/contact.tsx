"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="flex min-h-[70vh] w-screen flex-col items-center justify-center">
      <h2 className="p-10 text-center text-5xl text-zinc-600">Contact Us</h2>

      <div className="flex w-4/5 flex-col items-start justify-center md:flex-row xl:w-3/5">
        <div className=" flex text-zinc-600 md:mt-11">
          <div className="flex flex-col gap-y-3 md:mx-24">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-4 h-8 w-8"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <a
                href="mailto:example@jgec.ac.in?subject=Mail from GDSC Website"
                // target="_blank"
              >
                <p className="text-xl">Email</p>
                <p></p>
              </a>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-4 h-8 w-8"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>

              <Link
                target="_blank"
                href="http://maps.google.com?q=26.5459447,88.70117926"
              >
                <p className="text-xl">Location</p>
                <p>Jalpaiguri, West Bengal 735102, India</p>
              </Link>
            </div>
          </div>
        </div>
        {/* form start */}
        <div className="flex w-full flex-col items-center justify-center py-10 text-zinc-600 xl:w-1/2">
          <div className="flex flex-col items-center text-red-600">
            <div>{errors.firstname && errors.firstname.message}</div>
            <div>{errors.lastname && errors.lastname.message}</div>
            <div>{errors.email && errors.email.message}</div>
            <div>{errors.message && errors.message.message}</div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-y-4 "
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div>
                <label
                  htmlFor="small-input"
                  className="mb-2 block text-lg font-medium "
                >
                  First Name
                </label>
                <input
                  {...register("firstname", {
                    required: "Firstname is required",
                    maxLength: 20,
                  })}
                  type="text"
                  id="small-input"
                  className="block w-full rounded-md bg-zinc-600 bg-opacity-10 p-3 text-zinc-600"
                />
              </div>
              <div>
                <label
                  htmlFor="small-input"
                  className="mb-2 block text-lg font-medium "
                >
                  Last Name
                </label>
                <input
                  {...register("lastname", {
                    required: "Lastname is required",
                    maxLength: 20,
                  })}
                  type="text"
                  id="small-input"
                  className="block w-full rounded-md bg-zinc-600 bg-opacity-10 p-3 text-zinc-600"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="small-input"
                className="mb-2 block text-lg font-medium "
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  maxLength: 80,
                })}
                type="email"
                id="small-input"
                className="block w-full rounded-md bg-zinc-600 bg-opacity-10 p-3 text-zinc-600"
              />
            </div>

            <label htmlFor="message" className="block text-lg font-medium">
              Your message
            </label>
            <textarea
              {...register("message", {
                required: "Message is required",
                maxLength: 200,
              })}
              id="message"
              rows="6"
              class="block w-full rounded-md bg-zinc-600 bg-opacity-10 p-2.5 text-sm"
              placeholder="Write your thoughts here..."
            ></textarea>
            <button
              disabled={isSubmitting}
              type="submit"
              className="mt-4 w-full rounded-lg bg-zinc-600 px-5 py-2.5 text-center text-xl font-medium text-white hover:bg-[#1a5171] focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
            >
              Send
            </button>
          </form>
          {isSubmitSuccessful && (
            <p className="pt-5 font-bold text-green-600">
              Your message was successfully Submitted
            </p>
          )}
        </div>
        {/* form end */}
      </div>
    </div>
  );
}

export default ContactUs;
