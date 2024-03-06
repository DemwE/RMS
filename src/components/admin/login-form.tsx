// 'use client';

import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function LoginForm(csrfToken: any){
  console.log(csrfToken);
    return(
        <form className="space-y-3" method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken.token} />
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`mb-3 text-2xl`}>
            Please log in to continue
          </h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="username"
                  type="email"
                  name="username"
                  placeholder="Enter your email address"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <button className="mt-4 w-full">
            <p className='inline-block'>Log in&nbsp;</p>
            <ArrowRightIcon className="inline-block ml-auto h-5 w-5 text-black" />
          </button>
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {false && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{"error code"}</p>
              </>
            )}
          </div>
        </div>
      </form>
    )
}

// function LoginButton(loginValue: any, passValue: any) {
//   const adminLogin = process.env.ADMIN_LOGIN;
//   const adminPass = process.env.ADMIN_PASS;
//   let isAuthenticated = false;


//   return (
//     <Button className="mt-4 w-full" border={''} color={''} height={''} onClick={function (): void {
//       if (adminLogin == loginValue && adminPass == passValue) { isAuthenticated = true; };
//       console.log(isAuthenticated);
//     }} ariaDisabled={false} radius={''} width={''}>
//       Log In <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
//     </Button>
//   )
// }

// function LoginButtonEmpty(loginValue: any, passValue: any) {
//   return (
//     <Button onClick={() => console.log('Button clicked')} text="Click me!" />
//   //   <Button onClick={function (): void {
//   //     throw new Error('Function not implemented.');
//   //   } } text={''}>
//   //     Log In <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
//   //   </Button>
//   )
// }