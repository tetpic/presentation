import { NextRequest, NextResponse } from 'next/server'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'

export async function GET (req: NextRequest, ctx: any, ...args: any) {
  const searchParams = new URL(req.url).searchParams
  console.log(searchParams)
  console.log(ctx, args);
  
  // Cookies.set('access_token', searchParams.get('access_token'))
  // const response = await fetch('https://oauth.yandex.ru/token', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: new URLSearchParams({
  //     grant_type: 'authorization_code',
  //     code,
  //     client_id: process.env.YANDEX_CLIENT_ID,
  //     client_secret: process.env.YANDEX_CLIENT_SECRET,
  //   }),
  // })
  // const { access_token } = await response.json()
  // setCookie({ res: NextResponse, key: 'yandexToken', value: access_token })
  // return new Response('/cards', {
  //   status: 200,
  //   headers: {
  //     'Set-Cookie': `yandexToken=${searchParams.get('access_token')}`,
  //   },
  // })
  return NextResponse.json({
    access_token: searchParams.get('access_token')
  })
//  const response = NextResponse.redirect('http://localhost:3000/cards', { status: 302 });

//   response.cookies.set("access_token", searchParams.get('access_token'), {
//     path: "/",
//     httpOnly: true,
//     maxAge: 60 * 60 * 24 * 7, // 1 week
//   });
  

//   return response;
}
